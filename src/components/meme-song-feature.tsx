
'use client';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { SongPlayer } from './song-player';
import { memeSong, type Song } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MemeSongFeature() {
    const coverArt = PlaceHolderImages.find(img => img.id === memeSong.coverArtId);

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    if (!coverArt) {
        return null;
    }

    return (
        <section className="container mx-auto px-4 py-12">
            <Card className="bg-card/50 border-2 border-accent/80 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative aspect-square w-full">
                        <Image
                            src={coverArt.imageUrl}
                            alt={coverArt.description}
                            fill
                            className="object-cover pointer-events-none select-none"
                            onContextMenu={handleContextMenu}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 via-card/0 to-transparent"></div>
                    </div>
                    <div className="md:col-span-3 flex flex-col justify-center p-8 md:p-12">
                        <p className="text-accent font-headline text-lg tracking-widest uppercase">Meme Breakout Single</p>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight uppercase text-accent-foreground">
                            {memeSong.title}
                        </h2>
                        <p className="text-md text-muted-foreground max-w-prose mb-6">
                            The official rebuttal to the internet classic "I'm a Stupid Cat" by Mike Polk Jr. The gloves are off. The bowl is still empty.
                        </p>
                        <Card className="w-full max-w-md bg-background/50">
                            <CardContent className="p-2 flex flex-col gap-1">
                                <SongPlayer 
                                    song={memeSong} 
                                    isLocked={false}
                                    showLyricsButton={true}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Card>
        </section>
    )
}
