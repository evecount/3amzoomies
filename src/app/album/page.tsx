
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { albumData } from '@/lib/data';
import { SongPlayer } from '@/components/song-player';
import { AlbumArtDisplay } from '@/components/album-art-display';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

export default function AlbumPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <p className="text-primary font-semibold text-lg tracking-widest uppercase">The Album</p>
            <h1 className="text-5xl md:text-7xl tracking-wider uppercase font-bold">{albumData.title}</h1>
            <p className="text-lg text-muted-foreground mt-2">By {albumData.artist} &middot; Released {albumData.releaseDate}</p>
        </div>
        <Separator className="mb-12"/>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="group sticky top-24 w-full max-w-md mx-auto">
              <AlbumArtDisplay />
            </div>
            
            <Card className="bg-card/50">
                <CardContent className="flex flex-col gap-2 p-2">
                    <Accordion type="multiple" className="w-full">
                        {albumData.songs.map((song) => (
                            <AccordionItem value={`item-${song.id}`} key={song.id} className="border-b border-border/50">
                                <AccordionTrigger className="hover:no-underline p-2 rounded-md hover:bg-muted/50">
                                    <SongPlayer song={song} playlist={albumData.songs} isLocked={false} showLyricsButton={false} />
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="whitespace-pre-wrap text-foreground/80 leading-relaxed px-4 pb-4">
                                        {song.lyrics}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
