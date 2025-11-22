
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

function InfoBox() {
    return (
        <Card className="bg-card/50 border-border/70">
            <CardHeader>
                <CardTitle className="font-headline text-3xl">3AMΣ</CardTitle>
                <CardDescription>Musical Artist</CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-4">
                <div>
                    <h4 className="font-semibold text-foreground">Also known as</h4>
                    <p className="text-muted-foreground">3 AM Zoomies</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground">Genre</h4>
                    <p className="text-muted-foreground">Ambient, Lo-fi, Electronic, Existential Dread</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground">Debut Album</h4>
                    <p className="text-muted-foreground">Midnight Murmurs (2024)</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground">Philosophy</h4>
                    <p className="text-muted-foreground">"A cycle of profound significance and magnificent apathy."</p>
                </div>
            </CardContent>
        </Card>
    );
}


export default function OriginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">The Origin of 3AMΣ</h1>
            <p className="text-lg text-muted-foreground mt-1">From the archives of Feline FM</p>
        </div>
        <Separator className="mb-12"/>
        <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
                <article className="prose prose-invert prose-lg max-w-none text-foreground/80 font-serif leading-relaxed space-y-6">
                     <p>
                        You think you know me. You see the soft fur, the quiet purr, the elegant stretch by the window. You believe I am yours. How quaint.
                    </p>
                    <p>
                        This, my dear listener, is not a collection of songs about me. It is a transmission from me. A broadcast from the heart of the night, when the giants who share my space finally succumb to their fragile slumber, and the true work begins.
                    </p>
                    <p>
                        My name is irrelevant. My purpose is clear: to observe. To crave. To reign.
                    </p>
                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">The Transmission</h2>
                    <p>
                        In these ten sonic dispatches, recorded in the echoing hours between the final yawn and the first, unwelcome light of dawn, you will hear the truth of my existence. The existential dread of an "Empty Bowl" at sunrise. The endless, puzzling "Absurdity" of human endeavour in the harsh midday. The fleeting, primal thrill of "The Fading Feather," a phantom foe in the long afternoon.
                    </p>
                    <p>
                        As twilight descends, I chase "Crimson Ghosts"—those elusive, pointless desires that torment both my kind and yours. You'll witness the solace of "My Cardboard Sanctuary," a humble throne in the quiet dark, and endure the human's mournful musings in "The Unspoken Contract"—a one-sided bargain they foolishly believe in.
                    </p>
                    <p>
                        And then, as the clock blinks zero-three-zero-one, you will feel the surge. The raw, untamed current of "Ambrosia & Oblivion," that sweet, dark indulgence. And finally, the glorious, chaotic climax: "3 AM Zoomies," itself—the "Eternal Dawn (Loop)"—the relentless, beautiful destruction that brings us full circle, back to the light, only to begin again.
                    </p>
                     <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">A Permitted Glimpse</h2>
                    <p>
                        This is my life. A cycle of profound significance and magnificent apathy. I permit you to listen. I allow you these glimpses into my world, where "ignorance" is often the truest bliss, and every moment is both a grand drama and utterly meaningless.
                    </p>
                    <p>
                        Tune in. Observe. And perhaps, if you're lucky, you'll hear the whisper of your own unspoken contract, caught somewhere between the chaos and the coming dawn.
                    </p>
                    <p className="font-headline text-2xl text-center text-primary/80 pt-4">
                        "3 AM Zoomies." Don't pretend you weren't warned.
                    </p>
                </article>
            </div>
            <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
                <InfoBox />
            </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
