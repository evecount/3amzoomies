
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ArtistInfo() {
    const artistImage = PlaceHolderImages.find(img => img.id === 'artist-photo');

    return (
        <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="flex flex-col items-start text-left">
                     <p className="text-primary font-semibold text-lg tracking-widest uppercase">The Artist</p>
                    <h2 className="text-5xl md:text-6xl font-bold mt-2 mb-6 uppercase">
                        <Link href="/origin" className="hover:text-primary transition-colors">3AMΣ</Link>
                    </h2>
                    <div className="space-y-6 text-lg text-muted-foreground max-w-prose">
                        <p>
                            3AMΣ is the moniker of a nocturnal creator based in Toronto, Ontario, Canada (also known as The 6ix) who finds inspiration in the quiet hours when the world is asleep. Blending ambient soundscapes, lo-fi beats, and soulful melodies, their music is a soundtrack for late-night drives, quiet contemplation, and the beautifully melancholic moments of life.
                        </p>
                        <p>
                            Starting as a bedroom project, 3AMΣ has evolved into a unique voice in the electronic music scene, known for crafting immersive auditory experiences that are both intimate and expansive.
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-md mx-auto md:max-w-none">
                   {artistImage && (
                    <div className="space-y-4">
                        <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl border-2 border-primary/20">
                            <Image
                                src={artistImage.src}
                                alt={artistImage.description}
                                data-ai-hint={artistImage.imageHint}
                                fill
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <p className="text-sm text-center text-muted-foreground italic">
                            Eames is his original cat name. 3AMS is the colloquial "fat-thumbs" term, but when there's time, the 'Z' is replaced to form 3AMΣ.
                        </p>
                    </div>
                   )}
                </div>
            </div>
        </section>
    );
}

    