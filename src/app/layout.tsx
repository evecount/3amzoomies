
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AudioProvider } from '@/hooks/use-audio-player';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '3AMΣ',
  description: 'Official website for the artist 3AMΣ (3AMΣzoomies)',
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
