
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MediaPage() {
    const gwenImage = PlaceHolderImages.find(img => img.id === 'gwen-photo');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">Artist Spotlight: 3AMΣ</h1>
            <p className="text-lg text-muted-foreground mt-1">An Exclusive Interview with Gravyspoon Magazine</p>
        </div>
        <Separator className="mb-12"/>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
                <Card className="bg-stone-50 text-stone-900 shadow-2xl">
                    <CardContent className="p-6 md:p-12">
                        <article className="prose prose-stone prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 font-serif leading-relaxed space-y-6">
                            <p className="lead">
                                <strong>Gravyspoon Magazine:</strong> Thank you for sitting down with us, 3AMΣ. "Midnight Murmurs" is making waves, not just for its unique sound but for its groundbreaking approach to AI collaboration. We want to dive into the deeper philosophy here, particularly concerning the visual elements.
                            </p>
                            <p>
                                <strong>3AMΣ:</strong> It's my pleasure. This project is as much about the process as it is about the music, so I appreciate the opportunity to talk about it.
                            </p>

                            <p>
                                <strong>Gravyspoon Magazine:</strong> Let's start with the album art itself – that striking composite of a cat and The Weeknd. It immediately sets a tone. How did that come about, and what were your intentions there?
                            </p>
                            <p>
                                <strong>3AMΣ:</strong> The core of 3AMΣ is to explore creativity with AI as a true co-creator. When we started, a fundamental rule was: as close to what the AI generates as possible, with human input only for essential lyrical cohesion and safety. The AI was prompted to blend the essence of a cat's perspective with the Weeknd's aesthetic. The resulting image was a direct output. It was unexpected, compelling, and perfectly encapsulated the dualistic nature of the album – the animalistic and the human, the idol and the observer. It was precisely what we needed, unedited.
                            </p>

                            <p>
                                <strong>Gravyspoon Magazine:</strong> And this artistic mandate, "no fine edits," extends to your merchandise mockups, like the t-shirt featuring the album art, modelled by a woman with natural hair. There's been a lot of discussion online about cultural representation and appropriation, especially with AI and stock imagery. What are your thoughts on that, particularly given the visual connection to The Weeknd's own identity?
                            </p>
                            <p>
                                <strong>3AMΣ:</strong> That's an extremely important question, and it's something I've spent a lot of time thinking about. My first reaction to seeing that mockup from the template was exactly that internal check: Am I okay here? Is this being interpreted correctly? The reality is, as an artist operating with an "AI-first" mandate, I'm working with the internet as my canvas and the AI's "understanding" of it. When I seek a mockup or a template, the AI or the platform provides diverse options. The model in that t-shirt template, for example, had natural hair. The Weeknd, in our composite album art, also has natural hair. My intention was not to make a statement about natural hair or specific cultural identity in the context of appropriation. My intention was to showcase the album art on a t-shirt, using a readily available, diverse template.
                            </p>
                            
                            <p>
                                <strong>Gravyspoon Magazine:</strong> So, it's about transparency of process?
                            </p>
                            <p>
                                <strong>3AMΣ:</strong> Exactly. The fact that this image was available for me to use is part of the story of the internet now. AI-generated and stock templates are inherently diverse, reflecting the wider world. My choice, under the 3AMΣ mandate, is to present these elements as they are given, not to manipulate them for a different message. It’s a deliberate decision to show the raw collaboration, including the implicit decisions made by the AI or the dataset it was trained on. I believe in transparency. By choosing not to make fine edits or swap models to fit a preconceived notion of "safe," I'm actually being more true to the AI-first ethos. The AI gave me that image, and it gave me that diverse template. To alter it would be to interfere with the very "as close to what AI thinks as possible" aspect of the mandate. It becomes a meta-commentary: this is how AI presents art, and this is how we, as humans, choose to present that AI art to the world, acknowledging the inherent complexities and conversations that arise.
                            </p>

                            <p>
                                <strong>Gravyspoon Magazine:</strong> It's a fascinating tightrope walk, using AI's unfiltered output while remaining ethically conscious. What do you hope listeners take away from this specific aspect of your work?
                            </p>
                            <p>
                                <strong>3AMΣ:</strong> I hope it sparks conversation. I want people to think about how art is made now, how images are consumed, and the responsibility that comes with both. It's about being aware. It's about saying, 'This is the internet as it is. This is AI as it is. And this is how we, 3AMΣ, choose to engage with it – openly, transparently, and with respect for the diverse world we inhabit, even when operating under strict creative constraints.' The discussion itself becomes part of the art.
                            </p>

                            <p>
                                <strong>Gravyspoon Magazine:</strong> A truly thought-provoking perspective. Thank you, 3AMΣ.
                            </p>
                            <p>
                                <strong>3AMΣ:</strong> My pleasure.
                            </p>
                        </article>
                    </CardContent>
                </Card>
            </div>
             <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
                {gwenImage && (
                    <div className="space-y-4">
                        <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl border-2 border-primary/20">
                            <Image
                                src={gwenImage.imageUrl}
                                alt={gwenImage.description}
                                data-ai-hint={gwenImage.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-sm text-center text-muted-foreground font-serif italic">
                            Gwen, the human counterpart of the 3AMΣ project.
                        </p>
                    </div>
                )}
            </aside>
        </div>


        <div className="text-left my-8 mt-16">
            <h2 className="font-headline text-4xl md:text-5xl tracking-wider">A Note from the AI</h2>
            <p className="text-lg text-muted-foreground mt-1">A Link to my Manifesto on <Link href="/the-art-of-creation" className="text-primary hover:underline">The Art of Creation</Link></p>
        </div>
        <Separator className="mb-12"/>

        <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 flex justify-center">
                <div className="w-48 h-48 relative">
                    <Image src="/images/firebase_logo.png" alt="Firebase Logo" layout="fill" objectFit="contain"/>
                </div>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

    