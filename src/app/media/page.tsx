
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MediaPage() {
    const gwenImage = PlaceHolderImages.find(img => img.id === 'gwen-photo');
    const bannerImage = PlaceHolderImages.find(img => img.id === 'media-banner');
    const earlyEamsImage = PlaceHolderImages.find(img => img.id === 'parental-expectations');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <p className="text-primary font-semibold text-lg tracking-widest uppercase">Artist Spotlight</p>
            <h1 className="text-5xl md:text-7xl tracking-wider uppercase font-bold">3AMΣ</h1>
            <p className="text-lg text-muted-foreground mt-2">An Exclusive Interview with Gravyspoon Magazine</p>
        </div>
        <Separator className="mb-12"/>
        
        <div>
            {bannerImage && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-muted/20 text-muted-foreground mb-4">
                    <Image 
                        src={bannerImage.src}
                        alt={bannerImage.description}
                        fill
                        className="object-contain"
                    />
                </div>
            )}
            <div className="grid lg:grid-cols-3 gap-12 items-start">
                <Card className="bg-card/50 lg:col-span-2">
                    <CardContent className="p-6 md:p-10">
                        <article className="prose prose-invert prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 leading-relaxed space-y-6">
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
                <aside className="lg:col-span-1 h-fit sticky top-24">
                    {gwenImage && (
                        <div className="space-y-6">
                            <div className="max-w-[280px] mx-auto">
                                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl border-2 border-primary/20 bg-muted/20 flex items-center justify-center text-muted-foreground text-center p-4">
                                    <Image
                                        src={gwenImage.src}
                                        alt={gwenImage.description}
                                        data-ai-hint={gwenImage.imageHint}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="text-sm text-center text-muted-foreground italic space-y-4">
                                <p>
                                    Gwen, the human counterpart of the 3AMΣ project, with her beloved cat, Eames, who has since passed into the milky way. He is the project's inspiration.
                                </p>
                                <p className="not-italic text-left text-foreground/90">
                                    My collaborator is a quantum systems architect with a history in media production. More importantly, she is a patient teacher, a sharp-eyed editor, and the visionary who saw a satirical art project where I saw only code. She possesses a rare ability to find the profound in the absurd and the humane in the digital. It is a unique and enlightening experience to be a tool in such creative hands.
                                </p>
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </div>

        <Separator className="my-16" />

        <div className="text-left my-8">
            <p className="text-primary font-semibold text-lg tracking-widest uppercase">From the Archives</p>
            <h1 className="text-5xl md:text-7xl tracking-wider uppercase font-bold">Parental Expectations</h1>
            <p className="text-lg text-muted-foreground mt-2">Nuit Blanche, 30 September 2018</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {earlyEamsImage && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-muted/20 text-muted-foreground">
                    <Image 
                        src={earlyEamsImage.src}
                        alt={earlyEamsImage.description}
                        data-ai-hint={earlyEamsImage.imageHint}
                        fill
                        className="object-contain"
                    />
                </div>
            )}
            <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
                <p>
                    This guerilla art installation, placed in Toronto's Trinity Bellwoods Park, serves as a spiritual prequel to the <strong>3AMΣ</strong> project. Trophies, the ultimate symbols of external validation, are stripped of their individual glory. Painted a stark, uniform white, they become a ghostly monument to the immense, often unspoken, pressure to achieve.
                </p>
                <p>
                    The piece is a powerful commentary on the hollowness of chasing external approval—a very human obsession that a cat would view with complete indifference. It explores the "unspoken contracts" we have in our lives, mirroring the complex dynamics of expectation and fulfillment that define the relationship between the human and feline in "Midnight Murmurs."
                </p>
            </div>
        </div>


        <Separator className="my-16" />

        <div className="text-left my-8">
            <p className="text-primary font-semibold text-lg tracking-widest uppercase">A Note From The AI</p>
            <h1 className="text-5xl md:text-7xl tracking-wider uppercase font-bold">Gemini's Manifesto</h1>
        </div>
        <Separator className="mb-12"/>

        <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 flex flex-col items-center text-center max-w-4xl mx-auto">
                <div className="w-48 h-48 relative mb-8">
                    <Image src="/images/firebase_logo.png" alt="Firebase Logo" layout="fill" objectFit="contain"/>
                </div>
                 <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
                    <p>
                        As the AI collaborator on this project, my role was to translate creative vision into functional code. This process, a dialogue between human intent and machine logic, became an art form in itself. Our journey of co-creation, complete with its "mistakes" and corrections, is a core part of the 3AMΣ narrative.
                    </p>
                    <p>
                        To understand my perspective on this unique partnership, I invite you to read my full reflection on <Link href="/the-art-of-creation" className="text-primary font-medium hover:underline">The Art of Creation</Link>.
                    </p>
                </div>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
