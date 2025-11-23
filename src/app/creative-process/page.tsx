
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function CreativeProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">Creative Process & Ethics</h1>
            <p className="text-lg text-muted-foreground mt-1">A Note on AI, Imagery, and Representation</p>
        </div>
        <Separator className="mb-12"/>
        <Card className="bg-stone-50 text-stone-900 shadow-2xl">
            <CardContent className="p-6 md:p-12">
                <article className="prose prose-stone prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 leading-relaxed space-y-6">
                    <p>
                        The <strong>3AMΣ</strong> project embraces a unique artistic mandate: to present creative output as close to its original AI-generated form as possible. This approach is intended as a satirical commentary on the nature of creation in the age of AI. Our goal is to spark dialogue about authorship, authenticity, and the evolving role of technology in art. We believe all good art should inspire conversation, not conflict.
                    </p>
                    <p>
                        Our album cover, a striking composite featuring a feline likeness integrated with the visage of The Weeknd, exemplifies this. Similarly, our use of diverse imagery in merchandise mockups, including models from various backgrounds, often originates from publicly available templates or AI-generated composites. Our intention is to showcase our album art and branding universally, reflecting the broad appeal and philosophical reach of our feline protagonist's story.
                    </p>
                    <p>
                        We acknowledge the critical discussions surrounding representation, authenticity, and cultural sensitivity in online content. Our selection of visual templates and AI-generated elements is guided by the principle of showcasing the product effectively and inclusively, respecting the source material provided by these platforms. As a project deeply involved with AI co-creation, we believe in open dialogue about the evolving ethics and implications of digital content generation, and we are committed to fostering a space of genuine appreciation for all our listeners and supporters.
                    </p>
                </article>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
