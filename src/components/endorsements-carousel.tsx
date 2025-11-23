
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const endorsements = [
  {
    id: 'justin-beefer',
    name: 'Justin Beefer',
    quote: "This album is the purr-fect soundtrack for... well, anything. 3AMΣ is a genius. It's my new go-to for when I'm just kitten around.",
  },
  {
    id: 'cat-harlow',
    name: 'Cat Harlow',
    quote: "The beats are sick, the lyrics are deep. 'Midnight Murmurs' is that next-level vibe. It's got that B.C.E. - Big Cat Energy.",
  },
  {
    id: 'post-meowlone',
    name: 'Post Meowlone',
    quote: "Honestly, I've never felt so seen. This album gets the struggle. The constant demand for snacks, the existential dread... it's all there. Pure art.",
  },
  {
    id: 'doja-cat',
    name: 'Doja Cat',
    quote: "As a fellow feline artist, I have to say, 3AMΣ is speaking truths we've been silent about for too long. This isn't just music; it's a movement. A-meow-zing.",
  },
  {
    id: 'kat-katdashian',
    name: 'Kat Katdashian',
    quote: "This album is, like, literally the only thing I'm listening to right now. It's the perfect vibe for ignoring your staff and taking selfies. So aesthetic.",
  },
];

export function EndorsementsCarousel() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
       <div className="text-center mb-12 px-4">
            <p className="text-primary font-headline text-lg tracking-widest uppercase">Critical Acclaim</p>
            <h2 className="font-headline text-5xl md:text-6xl uppercase tracking-wider">Words from the Wise</h2>
            <p className="text-lg text-muted-foreground mt-2">Don't just take our word for it.</p>
        </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {endorsements.map((endorsement) => {
            const artistImage = PlaceHolderImages.find((img) => img.id === endorsement.id);
            return (
              <CarouselItem key={endorsement.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full bg-card/50">
                    <CardContent className="flex flex-col items-center justify-center p-6 gap-6 text-center flex-grow">
                      {artistImage && (
                        <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-primary/30">
                          <Image
                            src={artistImage.imageUrl}
                            alt={`Portrait of ${endorsement.name}`}
                            fill
                            data-ai-hint={artistImage.imageHint}
                            className="object-cover"
                          />
                        </div>
                      )}
                       <blockquote className="text-lg font-serif italic text-foreground/80 flex-grow">
                        "{endorsement.quote}"
                      </blockquote>
                       <div>
                        <p className="font-bold font-headline text-xl text-foreground uppercase">{endorsement.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-[-1rem] md:left-[-4rem]" />
        <CarouselNext className="right-[-1rem] md:right-[-4rem]" />
      </Carousel>
    </section>
  );
}
