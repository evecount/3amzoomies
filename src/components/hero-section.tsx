'use client';

import { useRouter } from 'next/navigation';
import { AlbumArtDisplay } from './album-art-display';
import { Button } from './ui/button';
import { albumData } from '@/lib/data';
import { SongPlayer } from './song-player';
import { usePurchase } from '@/hooks/use-purchase';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function HeroSection() {
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

          <div className="w-full max-w-md bg-background/50 rounded-lg border p-2 mb-8">
            <Accordion type="multiple" className="w-full">
                {albumData.songs.map((song) => (
                    <AccordionItem value={`item-${song.id}`} key={song.id}>
                        <AccordionTrigger className="hover:no-underline">
                            <SongPlayer song={song} playlist={albumData.songs} showLyricsButton={false} />
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="whitespace-pre-wrap text-foreground/80 leading-relaxed px-4 pb-4">
                                {song.lyrics}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>

          <Button onClick={handlePurchase} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground uppercase">
            Buy Full Album <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
