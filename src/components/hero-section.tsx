
'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { albumData, memeSong } from '@/lib/data';
import { SongPlayer } from './song-player';
import { usePurchase } from '@/hooks/use-purchase';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { AlbumArtDisplay } from './album-art-display';

export function HeroSection() {
  const router = useRouter();
  const { purchase } = usePurchase();
  const { toast } = useToast();
  const fullPlaylist = [...albumData.songs, memeSong];

  const handlePurchase = () => {
    purchase();
    toast({
      title: "Purchase Successful!",
      description: "You now have access to the full album.",
    });
    router.push('/album');
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        <div className="group w-full max-w-md mx-auto md:sticky md:top-24">
            <AlbumArtDisplay />
        </div>

        <div className="flex flex-col items-start text-left">
          <p className="text-primary font-headline text-lg tracking-widest uppercase">Debut Album</p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold mt-2 mb-6 leading-tight uppercase">
            {albumData.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose mb-8">
            The new album by <span className="text-foreground font-semibold">{albumData.artist}</span>. A journey through nocturnal cityscapes and quiet introspections.
          </p>

          <Card className="w-full max-w-md bg-background/50 mb-8">
            <CardContent className="p-2 flex flex-col gap-1">
                {albumData.songs.map((song) => (
                    <SongPlayer 
                        song={song} 
                        playlist={albumData.songs}
                        key={song.id} 
                        isLocked={false}
                    />
                ))}
            </CardContent>
          </Card>

          <Card className="w-full max-w-md bg-card/50 border-accent/50 mb-8">
            <CardHeader>
                <CardTitle className="font-headline text-xl uppercase text-accent">Viral Breakout Single</CardTitle>
                <CardDescription>
                    The official rebuttal to the internet classic "I'm a Stupid Cat" by Mike Polk Jr.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-2 flex flex-col gap-1">
                <SongPlayer 
                    song={memeSong} 
                    playlist={[memeSong]}
                    isLocked={false}
                    showLyricsButton={true}
                />
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
