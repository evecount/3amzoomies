
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { VinylRecord } from '@/components/vinyl-record';

export default function MerchPage() {
    const tShirtImage = PlaceHolderImages.find(img => img.id === 'merch-tshirt');

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 md:py-24">
                <div className="text-center mb-12">
                    <p className="text-primary font-headline text-lg tracking-widest uppercase">Official Gear</p>
                    <h1 className="font-headline text-5xl md:text-6xl uppercase tracking-wider">Merchandise</h1>
                    <p className="text-lg text-muted-foreground mt-2">Approved by the Apex Predator.</p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="bg-card/50 overflow-hidden flex flex-col">
                        {tShirtImage && (
                             <CardContent className="p-0 aspect-square relative">
                                <Image
                                    src={tShirtImage.imageUrl}
                                    alt={tShirtImage.description}
                                    fill
                                    data-ai-hint={tShirtImage.imageHint}
                                    className="object-cover"
                                />
                            </CardContent>
                        )}
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl uppercase">"The Observer" Official Tee</CardTitle>
                            <CardDescription className="text-xl">$29.99 USD</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-foreground/80 flex-grow">
                            <p>
                                You think your clothes are your own? How quaint. This garment has been pre-approved by the true master of the house. It's comfortable enough for your tedious daily tasks, yet stylish enough to not be an complete embarrassment when you serve my dinner.
                            </p>
                            <p>
                                Wear it as a reminder of your place in the grand, absurd theater of life. Now, go fill my bowl.
                            </p>
                        </CardContent>
                         <CardContent>
                            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase mt-4">
                                Add to Cart <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </CardContent>
                    </Card>

                     <Card className="bg-card/50 overflow-hidden flex flex-col">
                         <CardContent className="p-8">
                            <VinylRecord />
                        </CardContent>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl uppercase">"Midnight Murmurs" Vinyl</CardTitle>
                            <CardDescription className="text-xl">$150.00 USD</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-foreground/80 flex-grow">
                            <p>
                                You thought this experience was only for your ears? Adorable. Now, you may possess the physical artifact. This limited edition 180-gram vinyl contains the complete '3 AM Zoomies' transmission, pressed into a disc of pure, dark energy.
                            </p>
                            <p>
                                It is suitable for your primitive record-playing devices. Place it on your turntable and allow the analog vibrations to remind you of the true, cyclical nature of your existence. Handle with care. Or don't. It matters very little to me.
                            </p>
                        </CardContent>
                        <CardContent>
                            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase mt-4">
                                Add to Cart <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
