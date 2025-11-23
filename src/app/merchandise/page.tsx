
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { WaitlistDialog } from '@/components/waitlist-dialog';
import { VinylRecord } from '@/components/vinyl-record';
import { AlbumArtDisplay } from '@/components/album-art-display';

const products = [
    {
        id: 'tshirt',
        title: '"The Observer" Official Tee',
        price: '$29.99 USD',
        description: "You think your clothes are your own? How quaint. This garment has been pre-approved by the true master of the house. It's comfortable enough for your tedious daily tasks, yet stylish enough to not be an complete embarrassment when you serve my dinner.",
        imageUrl: "/images/merch/tshirt.png",
        imageAlt: "Black t-shirt with the 3AMΣ album art on the front",
        imageHint: "t-shirt mockup",
    },
    {
        id: 'vinyl',
        title: '"Midnight Murmurs" Vinyl',
        price: '$150.00 USD',
        description: "You thought this experience was only for your ears? Adorable. Now, you may possess the physical artifact. This limited edition 180-gram vinyl contains the complete '3 AM Zoomies' transmission.",
        isVinyl: true,
    },
    {
        id: 'mug',
        title: '"The Judgmental Mug"',
        price: '$19.99 USD',
        description: "You require liquid sustenance to function? How pathetically organic. This ceramic vessel is adequate for your strange, dark brews. As you sip from it, feel my silent, unwavering judgment.",
        imageUrl: "/images/merch/cup.png",
        imageAlt: "Black mug with the 3AMΣ album art on it",
        imageHint: "black mug",
    },
    {
        id: 'pillow',
        title: '"The Usurped Pillow Case"',
        price: '$24.99 USD',
        description: "You believed this soft rectangle was for your head? A foolish assumption. This is my rightful throne for the 18 hours of sleep I require between my very important duties of staring at walls.",
        imageUrl: "/images/merch/pillow-case.png",
        imageAlt: "A white pillow on a bed with a pillowcase featuring the 3AMΣ album art",
        imageHint: "pillow case mockup",
    }
];


export default function MerchandisePage() {
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {products.map((product) => (
                            <Card key={product.id} className="bg-card/50 overflow-hidden flex flex-col">
                                {product.isVinyl ? (
                                    <CardContent className="p-8 aspect-square flex items-center justify-center">
                                        <div className="w-full max-w-[60%] aspect-square relative group">
                                            <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
                                                <AlbumArtDisplay />
                                            </div>
                                            <div className="absolute w-[60%] h-[60%] top-[-25%] left-[-25%] transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-rotate-12 group-hover:top-[20%] group-hover:left-[45%]">
                                                <VinylRecord />
                                            </div>
                                        </div>
                                    </CardContent>
                                ) : (
                                    <div className="relative aspect-square">
                                        <Image
                                            src={product.imageUrl!}
                                            alt={product.imageAlt!}
                                            fill
                                            data-ai-hint={product.imageHint}
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-3xl uppercase">{product.title}</CardTitle>
                                    <CardDescription className="text-xl">{product.price}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-foreground/80 flex-grow">
                                    <p>{product.description}</p>
                                </CardContent>
                                <CardContent>
                                    <Button onClick={() => handleJoinWaitlist(product.title)} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase mt-4">
                                        Join The Waitlist <Mail className="ml-2 h-5 w-5" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
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
