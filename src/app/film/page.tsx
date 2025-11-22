
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function FilmPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">The Visual Universe of "Midnight Murmurs"</h1>
            <p className="text-lg text-muted-foreground mt-1">A call for collaborators to bring the album to life.</p>
        </div>
        <Separator className="mb-12"/>
        <Card className="bg-stone-50 text-stone-900 shadow-2xl">
            <CardContent className="p-6 md:p-12">
                <article className="prose prose-stone prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 font-serif leading-relaxed space-y-6">
                    <p>
                        Welcome to the visual extension of <strong>3AMΣ</strong>. The sonic journey of "Midnight Murmurs" is just the beginning. We're now seeking to bring the nocturnal narratives, the existential cat, and the human's weary acceptance to life through a series of captivating music videos.
                    </p>
                    <p>
                        We're putting out a call to talented filmmakers, creatives, and performers based in <strong>Singapore</strong> to collaborate on bringing the unique vision of "Midnight Murmurs" to the screen. Our aesthetic draws heavily from the moody, atmospheric, and often surreal visual style of <strong>The Weeknd's</strong> music videos (e.g., <em>Blinding Lights</em>, <em>Save Your Tears</em>, <em>Too Late</em>), reinterpreted through our distinct feline-human lens.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Current Project: Music Video for "Eternal Dawn (Loop)"</h2>
                    <p>
                        We are currently casting and crew-calling for the lead music video from the album, focusing on the track, "Eternal Dawn (Loop)." This video will be the ultimate visual representation of the album's core themes: the chaotic energy of the 3 AM zoomies, the shared human-feline experience, and the cyclical nature of existence.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Crew Call (Singapore-Based)</h2>
                    <p>
                        We are seeking passionate and skilled individuals to join our lean, creative team. Experience with low-light cinematography, surreal storytelling, and a strong understanding of the "moody R&B/Pop" aesthetic is highly valued.
                    </p>
                    <ul>
                        <li><strong>Director of Photography/Cinematographer:</strong> Experienced in creating atmospheric, stylized visuals, particularly in low-light conditions.</li>
                        <li><strong>Assistant Director:</strong> For on-set organization, scheduling, and ensuring a smooth production flow.</li>
                        <li><strong>Gaffer/Lighting Technician:</strong> Crucial for achieving the album's signature "neon-drenched apartment" and twilight/dawn looks.</li>
                        <li><strong>Editor:</strong> Skilled in rhythmic cutting, visual effects (if applicable), and crafting a cohesive narrative from raw footage.</li>
                        <li><strong>Production Designer/Art Director:</strong> To help create the specific look and feel of the apartment sets and incorporate feline-centric elements (cardboard boxes, cat trees, laser pointers).</li>
                        <li><strong>Sound Designer (for post-production effects):</strong> To enhance the album's existing sonic elements and add specific sound effects to the visual narrative.</li>
                        <li><strong>Production Assistants:</strong> Enthusiastic individuals eager to learn and contribute to various aspects of the production.</li>
                    </ul>
                    <p>
                        <strong>To Apply for Crew:</strong> Please send your resume, portfolio/reel, and a brief statement of interest detailing your relevant experience and what draws you to the "3 AM Zoomies" project to <strong>gwen@evecount.com</strong>.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Cast Call (Singapore-Based)</h2>
                    <p>
                        We are seeking two principal actors to embody the core dynamic of "Midnight Murmurs." We are particularly interested in individuals who can convey a range of subtle emotions through facial expressions and body language in a minimalist setting.
                    </p>
                    <h3>"The Human" (Principal Actor - Male/Female, Age 25-40):</h3>
                    <ul>
                        <li><strong>Description:</strong> Someone who can portray quiet weariness, subtle frustration, deep affection, and reluctant acceptance. They are the sleep-deprived observer, the provider, and the anchor in the cat's chaotic world. Think an aesthetic inspired by The Weeknd's persona in his *After Hours* videos – contemplative, slightly melancholic, but with an underlying current of resilience.</li>
                        <li><strong>Requirements:</strong> Strong non-verbal acting skills. Experience with performance in atmospheric, stylized settings a plus.</li>
                        <li><strong>Audition Material:</strong> Applicants will be asked to perform a short, non-dialogue scene conveying exhaustion, followed by a moment of tender interaction with an unseen (imagined) cat.</li>
                    </ul>
                    <h3>"The Cat" (Principal Performer - A Real Cat!):</h3>
                    <ul>
                        <li><strong>Description:</strong> We are looking for a cat with a distinct personality, capable of displaying both serene indifference and sudden bursts of chaotic energy. Siamese, Ragdoll, or similar breeds with striking eyes are a plus (to match the album art), but all well-behaved and trainable cats with character will be considered. The cat must be comfortable on set, with handlers, and able to perform simple actions (e.g., zoomies, staring intently, curling up to sleep).</li>
                        <li><strong>Requirements:</strong> Must be well-socialized, comfortable with strangers, and ideally have prior experience on set. Owner/handler must be present at all times.</li>
                        <li><strong>Audition Material:</strong> Owners to submit videos showcasing their cat's "zoomies," periods of intense focus (e.g., chasing a laser pointer), and moments of quiet contemplation/sleep.</li>
                    </ul>
                    <p>
                        <strong>To Apply for Cast:</strong> Please send your headshot/photo (and acting reel for human, or video compilation for cat), along with a brief statement of interest, to <strong>gwen@evecount.com</strong>. Please specify whether you are applying for "The Human" or "The Cat" role.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Vision for "Eternal Dawn (Loop)" Music Video</h2>
                     <p>
                        The video will be set primarily within a stylized, minimalist apartment in Singapore, transitioning from deep night to the first hints of dawn. We envision:
                    </p>
                    <ul>
                        <li><strong>Low-Light Cinematography:</strong> Emphasizing neon glows, shadow play, and dramatic contrasts.</li>
                        <li><strong>Surreal Moments:</strong> Blurring the line between the human's sleep-deprived reality and the cat's internal world.</li>
                        <li><strong>Rhythmic Editing:</strong> Visuals synchronized with the driving beat and soaring synths of the track.</li>
                        <li><strong>Symbolic Imagery:</strong> Incorporating elements from the album's themes – empty bowls, cardboard boxes, glowing laser dots, and the relentless ticking of a clock.</li>
                        <li><strong>Emotional Arc:</strong> Capturing the initial frustration, the frantic chaos, and the eventual, tender acceptance of the human-feline bond as dawn breaks.</li>
                    </ul>
                    <p>
                        Join us in bringing the world of <strong>3AMΣ</strong> to life!
                    </p>
                </article>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
