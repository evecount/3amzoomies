
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AudioProvider } from '@/hooks/use-audio-player';

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
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
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
