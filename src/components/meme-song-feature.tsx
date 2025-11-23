
'use client';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { SongPlayer } from './song-player';
import { memeSong } from '@/lib/data';
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
             <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="relative aspect-square w-full max-w-md mx-auto">
                    <Image
                        src={coverArt.src}
                        alt={coverArt.description}
                        fill
                        className="object-cover pointer-events-none select-none rounded-lg shadow-2xl"
                        onContextMenu={handleContextMenu}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-accent font-semibold text-lg tracking-widest uppercase">Viral Breakout Single</p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight uppercase text-accent-foreground">
                        {memeSong.title}
                    </h2>
                    <p className="text-md text-muted-foreground max-w-prose mb-6">
                        The official rebuttal to the internet classic "I'm a Stupid Cat" by Mike Polk Jr. The gloves are off. The bowl is still empty.
                    </p>
                    <Card className="w-full max-w-md bg-background/50">
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
    )
}
