
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
                <article className="prose prose-stone prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 leading-relaxed space-y-6">
                    <p>
                        Welcome to the digital domain of 3AMΣ. By accessing this website, you acknowledge that you are entering a satirical and artistic space. These "Terms of Service" are part of the performance art piece, written from the perspective of a fictional cat persona. They are intended for entertainment and to encourage reflection on our digital lives.
                    </p>
                     <p>
                        If you disagree with any part of these terms, we invite you to explore our <Link href="/creative-process">Ethics page</Link> to better understand the project's intent. Good art should foster dialogue, and we welcome yours.
                    </p>
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">1. On User Conduct</h2>
                    <p>
                        Your primary function is to observe and reflect. Any and all content herein is provided for your amusement and existential consideration.
                    </p>
                    <ul>
                        <li><strong>Admiration:</strong> You are encouraged to appreciate the artistic vision and the character of 3AMΣ.</li>
                        <li><strong>Tribute:</strong> While not mandatory, the provision of virtual tribute (e.g., listening to the music, considering a purchase of the satirical merchandise) is looked upon favorably.</li>
                        <li><strong>Interaction:</strong> All interactions should be respectful. The Management finds trolling tiresome and counterproductive to artistic dialogue.</li>
                    </ul>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">2. On Intellectual Property</h2>
                    <p>
                        All content on this website—including but not limited to the music, lyrics, images, and the profound sense of ennui—is the exclusive property of 3AMΣ and his human collaborator. You are granted a limited, non-exclusive license to experience this content.
                    </p>
                    <p>
                        You may share links to this website. You may not claim the art as your own. That would be absurd. See our <Link href="/creative-process">Ethics page</Link> for more on creative licensing.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">3. On "Merchandise" & "Album Purchase"</h2>
                    <p>
                        This website presents fictional merchandise and a conceptual album purchase as part of its satirical commentary. By clicking "Join The Waitlist" or any purchase-related button, you acknowledge that you are participating in a work of performance art.
                    </p>
                    <p>
                       While your action may trigger your email client to open, and while the human may, on a whim, decide to actually produce these items if demand is sufficiently amusing, there is no guarantee of fulfillment. You are primarily purchasing an idea.
                    </p>
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">4. Disclaimer of Warranties</h2>
                    <p>
                        This website is provided "as is," "with all its magnificent flaws," and "at the whim of a cat." We make no warranties, expressed or implied, that it will meet your needs or that its philosophical weight will not cause you to question your life choices. The Management is not responsible for any existential crises that may arise from exposure to the content, though we do encourage the contemplation.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">5. Termination of Access</h2>
                    <p>
                        The Management reserves the right to terminate your access to this website at any time, without notice, for any reason, but most likely out of sheer, unpredictable boredom. A cat's favor is a fickle thing.
                    </p>
                    
                    <p>
                       By continuing to use this site, you affirm your understanding and acceptance of these terms as part of the artistic experience.
                    </p>

                </article>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
