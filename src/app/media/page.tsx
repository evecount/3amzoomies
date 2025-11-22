
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';
import Image from 'next/image';

const pressContactHref = `mailto:gwen@evecount.com?subject=${encodeURIComponent(
  `Press Inquiry: 3AMΣ`
)}`;

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">Media & Press</h1>
            <p className="text-lg text-muted-foreground mt-1">Press kit for 3AMΣ: "Midnight Murmurs"</p>
        </div>
        <Separator className="mb-12"/>
        <Card className="bg-stone-50 text-stone-900 shadow-2xl">
            <CardContent className="p-6 md:p-12">
                <article className="prose prose-stone prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 font-serif leading-relaxed space-y-6">
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-0">Featured In</h2>
                    <div className="not-prose rounded-lg overflow-hidden border border-stone-200 shadow-md mb-8">
                        <Image 
                            src="/images/gravyspoon magazine.png"
                            alt="Gravyspoon Magazine Feature on 3AMΣ"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <p>
                        Welcome to the official media kit for <strong>3AMΣ</strong> and their debut album, <strong>"Midnight Murmurs."</strong> This page is designed to provide journalists, bloggers, podcasters, and other media professionals with quick access to essential information and assets.
                    </p>
                    <p>
                        For all press inquiries, interviews, or additional requests, please <a href={pressContactHref}>contact us</a>.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">1. About 3AMΣ & "Midnight Murmurs"</h2>
                     <p className="font-bold">Official Press Release Snippet</p>
                    <p>
                        <strong>"Midnight Murmurs"</strong> is the groundbreaking debut album from <strong>3AMΣ</strong>, a conceptual musical project blending alternative R&B, pop, funk, hip-hop, and electronic influences in the vein of The Weeknd. Released in 2024, the album offers a unique, introspective, and often darkly humorous exploration of the mundane yet profound existence of a domestic cat, narrated across a full 24-hour cycle from both feline and human perspectives.
                    </p>
                    <p>
                        A testament to innovative collaboration, "Midnight Murmurs" was co-created using advanced AI (Gemini) for lyrical development and narrative structuring, with AI music platforms (Suno AI) generating the instrumental beds and vocal performances.
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic">
                        Crucially, the artistic mandate of 3AMΣ is to preserve the AI's creative voice: the final lyrics and structural concepts are kept <strong>as close to the AI's original generation as possible</strong>, filtered only for editorial merit and personal safety. This positioning makes the album a significant, intentional commentary on the future of AI-human artistic partnership, challenging traditional notions of authorship.
                    </blockquote>
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">2. Official Album Art</h2>
                    <p>
                        The official album cover for "Midnight Murmurs" features a striking and surreal composite image – the face of a Siamese cat with piercing blue eyes subtly integrated into an aged, weary visage, echoing The Weeknd's iconic aesthetic. The artwork encapsulates the album's themes of dual perspective, introspection, and the slightly unsettling beauty of its narrative.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild>
                            <a href="/images/Image 4_FINAL.png" download>Download Album Art <Download className="ml-2" /></a>
                        </Button>
                        <Button asChild variant="outline">
                             <a href="/images/stupid fucking hooman.png" download>Download "CATNIP CONTENT" Single Art <Download className="ml-2" /></a>
                        </Button>
                    </div>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">3. Biography / Project Synopsis</h2>
                    <p>
                        3AMΣ is an avant-garde musical entity dedicated to exploring the unspoken narratives and hidden philosophical dimensions of the mundane. Their debut, "Midnight Murmurs," is a unique collaborative endeavor between human vision and advanced artificial intelligence, pushing the boundaries of songwriting and conceptual album creation. Drawing deep inspiration from The Weeknd's evocative soundscapes and introspective lyrical style, 3AMΣ crafts a singular sonic universe that is both familiar and profoundly unsettling. The project seeks to provoke thought on themes of connection, dependency, and the endless cycles of modern existence, all through the deceptively simple lens of a domestic cat's day.
                    </p>
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">4. Key Tracks / Suggested Listening</h2>
                    <ul>
                        <li><strong>"Eternal Dawn (Loop)" (Track 9):</strong> The album's title track and emotional climax, perfect for demonstrating the energetic synth-pop and core themes.</li>
                        <li><strong>"The Unspoken Contract" (Track 7):</strong> Highlights the human perspective and the album's exploration of co-dependence and complex relationships.</li>
                        <li><strong>"Ambrosia & Oblivion" (Track 8):</strong> Showcases the darker, more addictive sound and the cat's primal desires.</li>
                        <li><strong>"Apex Predator, Empty Bowl" (Track 2):</strong> A strong introduction to the cat's character and the album's unique lyrical perspective.</li>
                    </ul>

                     <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">5. Links</h2>
                     <ul>
                        <li><strong>Official Website:</strong> <a href="/">3amzoomies.com</a></li>
                        <li><strong>The Origin Story:</strong> <Link href="/origin">Read the full story</Link></li>
                        <li><strong>Film Project:</strong> <Link href="/film">View the Casting Call</Link></li>
                     </ul>

                </article>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
