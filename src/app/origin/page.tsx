
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function OriginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-24">
        <Card className="max-w-4xl mx-auto bg-card/50">
          <CardHeader className="text-center">
            <p className="text-primary font-headline text-lg tracking-widest uppercase">From the Cat's Perspective</p>
            <CardTitle className="font-headline text-5xl md:text-6xl uppercase tracking-wider">The Origin</CardTitle>
            <CardDescription className="text-lg">A Note from the Apex Predator (via Feline FM)</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/80 leading-relaxed space-y-6 px-4 md:px-8 pb-8">
            <p>
              You think you know me. You see the soft fur, the quiet purr, the elegant stretch by the window. You believe I am yours. How quaint.
            </p>
            <p>
              This, my dear listener, is not a collection of songs about me. It is a transmission from me. A broadcast from the heart of the night, when the giants who share my space finally succumb to their fragile slumber, and the true work begins.
            </p>
            <p>
              My name is irrelevant. My purpose is clear: to observe. To crave. To reign.
            </p>
            <Separator className="my-8" />
            <p>
              In these ten sonic dispatches, recorded in the echoing hours between the final yawn and the first, unwelcome light of dawn, you will hear the truth of my existence. The existential dread of an "Empty Bowl" at sunrise. The endless, puzzling "Absurdity" of human endeavour in the harsh midday. The fleeting, primal thrill of "The Fading Feather," a phantom foe in the long afternoon.
            </p>
            <p>
              As twilight descends, I chase "Crimson Ghosts"—those elusive, pointless desires that torment both my kind and yours. You'll witness the solace of "My Cardboard Sanctuary," a humble throne in the quiet dark, and endure the human's mournful musings in "The Unspoken Contract"—a one-sided bargain they foolishly believe in.
            </p>
            <p>
              And then, as the clock blinks zero-three-zero-one, you will feel the surge. The raw, untamed current of "Ambrosia & Oblivion," that sweet, dark indulgence. And finally, the glorious, chaotic climax: "3 AM Zoomies," itself—the "Eternal Dawn (Loop)"—the relentless, beautiful destruction that brings us full circle, back to the light, only to begin again.
            </p>
            <Separator className="my-8" />
            <p>
              This is my life. A cycle of profound significance and magnificent apathy. I permit you to listen. I allow you these glimpses into my world, where "ignorance" is often the truest bliss, and every moment is both a grand drama and utterly meaningless.
            </p>
            <p>
              Tune in. Observe. And perhaps, if you're lucky, you'll hear the whisper of your own unspoken contract, caught somewhere between the chaos and the coming dawn.
            </p>
            <p className="font-headline text-2xl text-center text-primary/80 pt-4">
              "3 AM Zoomies." Don't pretend you weren't warned.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
