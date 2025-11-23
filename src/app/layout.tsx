
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AudioProvider } from '@/hooks/use-audio-player';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '3AMΣ | Midnight Murmurs - A Feline Homage to The Weeknd',
    template: '%s | 3AMΣ',
  },
  description: 'The official satirical art project of 3AMΣ. Midnight Murmurs is a conceptual album and AI collaboration exploring the existential inner life of a cat, heavily inspired by the music and aesthetic of The Weeknd (Abel Tesfaye).',
  keywords: ['3AMΣ', '3am zoomies', 'The Weeknd', 'Abel Tesfaye', 'cat', 'AI music', 'conceptual art', 'satire', 'music', 'album', 'art project', 'Gemini', 'Suno', 'Midnight Murmurs'],
  authors: [{ name: '3AMΣ' }, { name: 'Gwen', url: 'https://www.evecount.com' }, { name: 'Gemini AI' }],
  creator: 'Gwen & Gemini AI',
  
  openGraph: {
    title: '3AMΣ | Midnight Murmurs',
    description: 'A satirical, AI-driven concept album from the perspective of a cat who thinks it\'s The Weeknd.',
    url: siteUrl,
    siteName: '3AMΣ',
    images: [
      {
        url: '/images/Image_4_FINAL.png', // Main album art
        width: 1200,
        height: 1200,
        alt: 'Album art for 3AMΣ - Midnight Murmurs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: '3AMΣ | Midnight Murmurs - A Feline Homage to The Weeknd',
    description: 'A satirical, AI-driven concept album from the perspective of a cat who thinks it\'s The Weeknd. An art project by Gwen & Gemini AI.',
    creator: '@yourtwitterhandle', // You can replace this later if you have one
    images: ['/images/Image_4_FINAL.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: '/favicon.ico', // Assuming you might add a favicon later
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        <Script src="https://js.stripe.com/v3/buy-button.js" strategy="lazyOnload" />
      </head>
      <body className="font-sans antialiased">
        <AudioProvider>
            {children}
        </AudioProvider>
        <Toaster />
      </body>
    </html>
  );
}
