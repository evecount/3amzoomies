
'use client';

import { useRouter } from 'next/navigation';
import { albumData } from '@/lib/data';
import { SongPlayer } from './song-player';
import { Card, CardContent } from './ui/card';
import { AlbumArtDisplay } from './album-art-display';
import Link from 'next/link';
import { Button } from './ui/button';

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        <div className="group w-full max-w-md mx-auto md:sticky md:top-24">
            <AlbumArtDisplay />
        </div>

        <div className="flex flex-col items-start text-left">
          <p className="text-primary font-semibold text-lg tracking-widest uppercase">Debut Album</p>
          <h1 className="text-5xl md:text-7xl font-bold mt-2 mb-6 leading-tight uppercase">
            {albumData.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose mb-8">
            The new album by <span className="text-foreground font-semibold">{albumData.artist}</span>. A journey through nocturnal cityscapes and quiet introspections.
          </p>

          <Card className="w-full max-w-md bg-background/50 mb-8">
            <CardContent className="p-2 flex flex-col gap-1">
                {albumData.songs.slice(0, 3).map((song) => (
                    <SongPlayer 
                        song={song} 
                        playlist={albumData.songs}
                        key={song.id} 
                        isLocked={false}
                    />
                ))}
                {albumData.songs.length > 3 && (
                    <div className="p-2">
                       <Button asChild className="w-full">
                            <Link href="/album">
                                Listen to the Full Album
                            </Link>
                        </Button>
                    </div>
                )}
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
