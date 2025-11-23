
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
    quote: "This album is the purr-fect soundtrack for... well, anything. 'Eternal Dawn (Loop)' has been on repeat! It's my new go-to for when I'm just kitten around.",
  },
  {
    id: 'cat-harlow',
    name: 'Cat Harlow',
    quote: "The beats are sick, a-meow-zing, the lyrics are deep. 'Apex Predator, Empty Bowl' speaks to my soul. It's got that B.C.E. - Big Cat Energy.",
  },
  {
    id: 'post-meowlone',
    name: 'Post Meowlone',
    quote: "Honestly, I've never felt so seen. This album gets the struggle. The craving for 'Ambrosia & Oblivion,' the existential dread... it's all there. Pure art.",
  },
  {
    id: 'doja-kat',
    name: 'Doja Kat',
    quote: "As a fellow feline artist, I have to say, 3AMΣ is speaking truths we've been silent about for too long. This isn't just music; it's a movement.",
  },
  {
    id: 'paweetie',
    name: 'Paweetie',
    quote: "My motto is 'Icy Grl, Bougie, and Unbothered,' and this album is my life story. 'Apex Predator, Empty Bowl' is the anthem. Period. This ain't for the basics. Tap in.",
  },
  {
    id: 'meowlar-swift',
    name: 'Meowlar Swift',
    quote: "I was in my 'Reputation' era, but this album put me in my 'catnip' era. It's a lyrical masterpiece. 'The Unspoken Contract' is the new 'All Too Well'. 13/10.",
  },
  {
    id: 'kitney-spears',
    name: 'Kitney Spears',
    quote: "It's Kitney, bitch. 'Chasing the Crimson Ghost' is my anthem. It's about freedom, it's about struggle, it's about that little red dot. You better work, bitch.",
  },
  {
    id: 'kat-katdashian',
    name: 'Kat Katdashian',
    quote: "This album is, like, literally the only thing I'm listening to right now. 'My Cardboard Sanctuary' is the perfect vibe for ignoring your staff and taking selfies. So aesthetic.",
  },
  {
    id: 'nabi-stray-cats',
    name: 'Nabi of STRAY CATS',
    quote: "이 앨범은 정말 '대박' 분위기가 있어요. 'Eternal Dawn (Loop)'은 서울의 밤 드라이브에 완벽한 비트예요. 3AMΣ와 꼭 협업하고 싶어요! (This album has a total 'daebak' vibe. 'Eternal Dawn (Loop)' is the perfect beat for a late-night drive through Seoul. I definitely want to collaborate with 3AMΣ!)",
  },
  {
    id: 'tyyga',
    name: 'Tyyga',
    quote: "Rack City, bitch. Ten, ten, ten, twenties and them fifties, bitch. My human gives me that wet food on a gold plate. This album is the soundtrack to that lifestyle. Taste.",
  },
  {
    id: 'meowtro-boomin',
    name: 'Meowtro Boomin\'',
    quote: "The production on this is next level. The low-end on 'Apex Predator, Empty Bowl' is insane. Seriously, has anyone shown this to Abel yet?",
  },
  {
    id: 'meowiana-grande',
    name: 'Meowiana Grande',
    quote: "The falsetto on 'Apex Predator, Empty Bowl'? Chilling. It's giving... thank you, next bowl. 💅",
  },
  {
    id: 'dj-cat-led',
    name: 'DJ Cat-led',
    quote: "ANOTHA ONE. 3AMΣ brought the keys. The key is to have more keys. And more catnip. Bless up.",
  },
  {
    id: 'catvin-harris',
    name: 'Catvin Harris',
    quote: "Found my summer anthem with 'Eternal Dawn (Loop)'. The builds, the drops... it's the feeling of chasing a laser dot at 128 BPM. An absolute banger.",
  }
];

export function EndorsementsCarousel() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
       <div className="text-center mb-12 px-4">
            <p className="text-primary font-semibold text-lg tracking-widest uppercase">Critical Acclaim</p>
            <h2 className="font-semibold text-5xl md:text-6xl uppercase tracking-wider">Words from the Wise</h2>
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
              const image = PlaceHolderImages.find(img => img.id === endorsement.id);
              return (
              <CarouselItem key={endorsement.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full bg-card/50">
                    <CardContent className="flex flex-col items-center justify-center p-8 gap-6 text-center flex-grow">
                        {image && (
                           <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    data-ai-hint={image.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                       <blockquote className="text-lg italic text-foreground/80 flex-grow">
                        "{endorsement.quote}"
                      </blockquote>
                       <div>
                        <p className="font-bold text-xl text-foreground uppercase tracking-wide">- {endorsement.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              )
          })}
        </CarouselContent>
        <CarouselPrevious className="left-[-1rem] md:left-[-4rem]" />
        <CarouselNext className="right-[-1rem] md:right-[-4rem]" />
      </Carousel>
    </section>
  );
}

    