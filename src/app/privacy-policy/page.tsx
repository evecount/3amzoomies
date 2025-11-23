
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const dpoEmail = 'gwen@evecount.com';

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mt-1">A Statement on Data, Privacy, and Feline Indifference.</p>
        </div>
        <Separator className="mb-12"/>
        <Card className="bg-stone-50 text-stone-900 shadow-2xl">
            <CardContent className="p-6 md:p-12">
                <article className="prose prose-stone prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 font-serif leading-relaxed space-y-6">
                    <p>
                        This website, an elaborate piece of performance art dedicated to the inner world of a cat named 3AMΣ, collects and processes a minimal amount of data. Frankly, the cat is not interested in your data. He is interested in his next meal and finding the most inconvenient place to nap. However, the human counterpart in this project acknowledges the importance of your privacy.
                    </p>
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Data We Collect (Reluctantly)</h2>
                    <p>
                        When you join a waitlist for our conceptual merchandise, we ask for your email address. This is stored temporarily in the human's email client, not in a database. The purpose is singular: to notify you if, against all odds, this satirical merchandise becomes a reality.
                    </p>
                    <ul>
                        <li><strong>Waitlist Information:</strong> Your email address and selected product/size preferences.</li>
                        <li><strong>Analytics:</strong> This site uses standard, privacy-respecting analytics to see how many people are visiting. We don't track you personally. The cat assumes you are all servants, which is all he needs to know.</li>
                        <li><strong>Local Storage:</strong> We use your browser's local storage for one thing only: to remember if you've "purchased" the album to grant you access to the full tracklist. This information stays on your device.</li>
                    </ul>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">How We Use Your Data</h2>
                    <p>
                        Your email is used exclusively for the waitlist you signed up for. We will not sell it, share it, or use it for any other marketing purposes. The cat finds the concept of "marketing" undignified.
                    </p>
                    
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Your Rights</h2>
                    <p>
                        You have the right to be forgotten. If you wish for your email to be removed from a waitlist, simply reply to the confirmation or send a new email requesting removal. The human will handle it promptly. The cat will have forgotten you already.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Data Protection Officer (DPO)</h2>
                    <p>
                        In accordance with data protection regulations such as the PDPA, we have a designated Data Protection Officer. If you have any questions or concerns about your data, you may contact them. Please be aware that the DPO is also the primary food provider and litter box cleaner for the artist, so patience is appreciated.
                    </p>
                    <p>
                        <strong>Contact:</strong> <a href={`mailto:${dpoEmail}`}>{dpoEmail}</a>
                    </p>

                    <p>
                        This policy is subject to change, mostly depending on the whims of the feline overlord. We will post any updates here.
                    </p>

                </article>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
