
'use client';

import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}

interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
}

export const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({ buyButtonId, publishableKey }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Find all script tags with the same src and remove them
      const scripts = document.querySelectorAll(`script[src="https://js.stripe.com/v3/buy-button.js"]`);
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <stripe-buy-button
      buy-button-id={buyButtonId}
      publishable-key={publishableKey}
    >
    </stripe-buy-button>
  );
};
