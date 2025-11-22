'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePurchase } from '@/hooks/use-purchase';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { albumData } from '@/lib/data';
import { SongPlayer } from '@/components/song-player';
import { AlbumArtDisplay } from '@/components/album-art-display';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function LoadingSkeleton() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
            <div className="space-y-4">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-6 w-80" />
                <Skeleton className="h-24 w-full" />
            </div>
        </div>
    )
}

export default function AlbumPage() {
  const { isPurchased, unpurchase } = usePurchase();
  const router = useRouter();

  useEffect(() => {
    if (isPurchased === false) {
      router.push('/');
    }
  }, [isPurchased, router]);

  if (isPurchased === undefined) {
    return <LoadingSkeleton />;
  }
  
  if (isPurchased === false) {
      return null;
  }

  const handleResetPurchase = () => {
      unpurchase();
      router.push('/');
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="group sticky top-24">
              <AlbumArtDisplay />
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-5xl">{albumData.title}</CardTitle>
                    <CardDescription className="text-lg">By {albumData.artist} &middot; {albumData.releaseDate}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {albumData.songs.map((song) => (
                        <SongPlayer key={song.id} song={song} isLocked={false} />
                    ))}
                     <Button onClick={handleResetPurchase} variant="link" className="mt-8 self-center text-muted-foreground">
                        (Test Action: Reset Purchase)
                     </Button>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
