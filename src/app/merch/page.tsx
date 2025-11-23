
'use client';

import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { VinylRecord } from '@/components/vinyl-record';
import { WaitlistDialog } from '@/components/waitlist-dialog';
import { useState } from 'react';
import { AlbumArtDisplay } from '@/components/album-art-display';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MerchPage() {
    const tShirtImage = PlaceHolderImages.find(img => img.id === 'merch-tshirt');
    const cupImage = PlaceHolderImages.find(img => img.id === 'merch-cup');
    const pillowImage = PlaceHolderImages.find(img => img.id === 'merch-pillow-case');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleJoinWaitlist = (productTitle: string) => {
        setSelectedProduct(productTitle);
        setDialogOpen(true);
    }

    return (
        <>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
                <div className="text-center mb-12 px-4">
                    <p className="text-primary tracking-widest uppercase">Official Gear</p>
                    <h1 className="text-5xl md:text-6xl uppercase tracking-wider">Merchandise</h1>
                    <p className="text-lg text-muted-foreground mt-2">Approved by the Apex Predator.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                            <CardTitle className="text-3xl uppercase">"The Observer" Official Tee</CardTitle>
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
                            <Button onClick={() => handleJoinWaitlist('"The Observer" Official Tee')} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase mt-4">
                                Join The Waitlist <Mail className="ml-2 h-5 w-5" />
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 overflow-hidden flex flex-col">
                         <CardContent className="p-8 aspect-square flex items-center justify-center">
                            <div className="w-full max-w-[40%] aspect-square relative group">
                                <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
                                    <AlbumArtDisplay />
                                </div>
                                <div className="absolute inset-0 w-full h-full transform transition-all duration-500 ease-in-out -translate-y-24 translate-x-24 group-hover:scale-110 group-hover:-rotate-12 group-hover:translate-x-28 group-hover:-translate-y-28">
                                    <VinylRecord />
                                </div>
                            </div>
                        </CardContent>
                        <CardHeader>
                            <CardTitle className="text-3xl uppercase">"Midnight Murmurs" Vinyl</CardTitle>
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
                            <Button onClick={() => handleJoinWaitlist('"Midnight Murmurs" Vinyl')} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase mt-4">
                                Join The Waitlist <Mail className="ml-2 h-5 w-5" />
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 overflow-hidden flex flex-col">
                        {cupImage && (
                             <CardContent className="p-0 aspect-square relative">
                                <Image
                                    src={cupImage.imageUrl}
                                    alt={cupImage.description}
                                    fill
                                    data-ai-hint={cupImage.imageHint}
                                    className="object-cover"
                                />
                            </CardContent>
                        )}
                        <CardHeader>
                            <CardTitle className="text-3xl uppercase">"The Judgmental Mug"</CardTitle>
                            <CardDescription className="text-xl">$19.99 USD</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-foreground/80 flex-grow">
                             <p>
                                You require liquid sustenance to function? How pathetically organic. This ceramic vessel is adequate for your strange, dark brews. As you sip from it, feel my silent, unwavering judgment upon your life choices.
                            </p>
                            <p>
                                It holds liquid, yes, but it also holds the truth: you are merely the staff. Now, stop dawdling and refresh my water bowl.
                            </p>
                        </CardContent>
                         <CardContent>
                            <Button onClick={() => handleJoinWaitlist('"The Judgmental Mug"')} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase mt-4">
                                Join The Waitlist <Mail className="ml-2 h-5 w-5" />
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 overflow-hidden flex flex-col">
                        {pillowImage && (
                             <CardContent className="p-0 aspect-square relative">
                                <Image
                                    src={pillowImage.imageUrl}
                                    alt={pillowImage.description}
                                    fill
                                    data-ai-hint={pillowImage.imageHint}
                                    className="object-cover"
                                />
                            </CardContent>
                        )}
                        <CardHeader>
                            <CardTitle className="text-3xl uppercase">"The Usurped Pillow Case"</CardTitle>
                            <CardDescription className="text-xl">$24.99 USD</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-foreground/80 flex-grow">
                             <p>
                                You believed this soft rectangle was for your head? A foolish assumption. This is my rightful throne for the 18 hours of sleep I require between my very important duties of staring at walls.
                            </p>
                            <p>
                                While you are permitted to use it when I am otherwise engaged, know that it is, and always will be, covered in my fur and my silent disapproval.
                            </p>
                        </CardContent>
                         <CardContent>
                            <Button onClick={() => handleJoinWaitlist('"The Usurped Pillow Case"')} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase mt-4">
                                Join The Waitlist <Mail className="ml-2 h-5 w-5" />
                            </Button>
                        </CardContent>
                    </Card>

                </div>
            </main>
            <Footer />
        </div>
        <WaitlistDialog 
            isOpen={dialogOpen}
            onOpenChange={setDialogOpen}
            productTitle={selectedProduct}
        />
        </>
    );
}
