
'use client';

import React from 'react';

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
  return (
    <stripe-buy-button
      buy-button-id={buyButtonId}
      publishable-key={publishableKey}
    >
    </stripe-buy-button>
  );
};
