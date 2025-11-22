'use client';

import { useRouter } from 'next/navigation';
import { AlbumArtDisplay } from './album-art-display';
import { Button } from './ui/button';
import { albumData } from '@/lib/data';
import { SongPlayer } from './song-player';
import { usePurchase } from '@/hooks/use-purchase';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';
import { VinylRecord } from './vinyl-record';

export function HeroSection() {
  const previewSong = albumData.songs[0];
  const router = useRouter();
  const { purchase } = usePurchase();
  const { toast } = useToast();

  const handlePurchase = () => {
    purchase();
    toast({
      title: "Purchase Successful!",
      description: "You now have access to the full album.",
    });
    router.push('/album');
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex flex-col items-center gap-8">
          <div className="group w-full max-w-md mx-auto">
            <AlbumArtDisplay />
          </div>
          <div className="relative w-full max-w-md h-64 flex items-center justify-start -mt-[12px] pt-[10px]">
            <div className="group w-52 absolute left-0">
              <AlbumArtDisplay />
            </div>
            <div className="w-52 h-52 absolute left-1/4">
              <VinylRecord />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start text-left">
          <p className="text-primary font-headline text-lg tracking-widest uppercase">New Album</p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold mt-2 mb-6 leading-tight uppercase">
            {albumData.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose mb-8">
            The new album by <span className="text-foreground font-semibold">{albumData.artist}</span>. A journey through nocturnal cityscapes and quiet introspections.
          </p>
          <div className="w-full max-w-md bg-background/50 rounded-lg border p-2 mb-8">
            <SongPlayer song={previewSong} />
          </div>

          <Button onClick={handlePurchase} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground uppercase">
            Buy Full Album <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
