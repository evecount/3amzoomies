
import Link from "next/link";
import { AlbumArtDisplay } from "./album-art-display";

export function ArtistInfo() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="flex flex-col items-start text-left">
                     <p className="text-primary font-headline text-lg tracking-widest uppercase">The Artist</p>
                    <h2 className="font-headline text-5xl md:text-6xl font-bold mt-2 mb-6 uppercase">
                        <Link href="/origin" className="hover:text-primary transition-colors">3AMΣ</Link>
                    </h2>
                    <div className="space-y-6 text-lg text-muted-foreground max-w-prose">
                        <p>
                            3AMΣ is the moniker of a nocturnal creator who finds inspiration in the quiet hours when the world is asleep. Blending ambient soundscapes, lo-fi beats, and soulful melodies, their music is a soundtrack for late-night drives, quiet contemplation, and the beautifully melancholic moments of life.
                        </p>
                        <p>
                            Starting as a bedroom project, 3AMΣ has evolved into a unique voice in the electronic music scene, known for crafting immersive auditory experiences that are both intimate and expansive.
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-md mx-auto md:max-w-none">
                   <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl border-2 border-primary/20">
                        <video
                            src="public/video/Cat_Licks_Paw_Looks_Up.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
