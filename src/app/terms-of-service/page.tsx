
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const dpoEmail = 'gwen@evecount.com';

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">Terms of Service</h1>
            <p className="text-lg text-muted-foreground mt-1">The Rules of the House, as Dictated by Management.</p>
        </div>
        <Separator className="mb-12"/>
        <Card className="bg-stone-50 text-stone-900 shadow-2xl">
            <CardContent className="p-6 md:p-12">
                <article className="prose prose-stone prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 font-serif leading-relaxed space-y-6">
                    <p>
                        Welcome to the digital domain of 3AMΣ. By accessing this website, you, hereafter referred to as "The User," "The Servant," or "The Can-Opener," agree to be bound by these Terms of Service. If you disagree with any part of these terms, you are directed to immediately close this browser tab and contemplate the futility of your existence.
                    </p>
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">1. User Conduct</h2>
                    <p>
                        Your primary function is to observe and admire. Any and all content herein is provided for your mild amusement and existential reflection.
                    </p>
                    <ul>
                        <li><strong>Admiration:</strong> You are expected to hold the artist, 3AMΣ, in the highest regard. This includes acknowledging his superior intellect, artistic vision, and general flawlessness.</li>
                        <li><strong>Tribute:</strong> While not mandatory, the provision of virtual tribute (e.g., listening to the music, considering a purchase of the satirical merchandise) is looked upon favorably. Real tribute, such as premium-grade tuna, is not possible through this medium but is the highest form of respect.</li>
                        <li><strong>Interaction:</strong> You shall not "troll," "spam," or engage in any behavior unbecoming of a devoted follower. The Management finds such things tiresome.</li>
                    </ul>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">2. Intellectual Property</h2>
                    <p>
                        All content on this website—including but not limited to the music, lyrics, images, text, and the profound sense of ennui—is the exclusive property of 3AMΣ and his human collaborator. You are granted a limited, non-exclusive license to experience this content.
                    </p>
                    <p>
                        You may share links to this website. You may not claim the art as your own. That would be absurd. You are not a cat of such refined taste. See our <Link href="/creative-process">Ethics</Link> page for more on creative licensing.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">3. The "Merchandise" & "Album Purchase"</h2>
                    <p>
                        This website presents fictional merchandise and a conceptual album purchase as part of its satirical commentary. By clicking "Join The Waitlist" or any purchase-related button, you acknowledge that you are participating in a work of performance art.
                    </p>
                    <p>
                       While your action may trigger your email client to open, and while the human may, on a whim, decide to actually produce these items if demand is sufficiently amusing, there is no guarantee of fulfillment. You are primarily purchasing an idea.
                    </p>
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">4. Disclaimer of Warranties</h2>
                    <p>
                        This website is provided "as is," "with all its magnificent flaws," and "at the whim of a cat." We make no warranties, expressed or implied, that it will meet your needs, be available at all times, or that its philosophical weight will not cause you to question your life choices. The Management is not responsible for any existential crises that may arise from exposure to the content.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">5. Termination</h2>
                    <p>
                        The Management reserves the right to terminate your access to this website at any time, without notice, for any reason, but most likely out of sheer, unpredictable boredom. A cat's favor is a fickle thing.
                    </p>
                    
                    <p>
                       By continuing to use this site, you affirm your understanding and acceptance of these terms. Now, go fill my bowl.
                    </p>

                </article>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
