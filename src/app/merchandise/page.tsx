
'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { VinylRecord } from '@/components/vinyl-record';
import { AlbumArtDisplay } from '@/components/album-art-display';
import { useToast } from '@/hooks/use-toast';
import { StripeBuyButton } from '@/components/stripe-buy-button';

const products = [
    {
        id: 'tshirt',
        title: '"The Observer" Official Tee',
        price: '$39.90 SGD',
        description: "You think your clothes are your own? This garment has been pre-approved by the true master of the house. It's comfortable enough for your tedious daily tasks.",
        imageUrl: "/images/merch/tshirt.png",
        imageAlt: "Black t-shirt with the 3AMΣ album art on the front",
    },
    {
        id: 'vinyl',
        title: '"Midnight Murmurs" Vinyl',
        price: '$210.00 SGD',
        description: "You thought this experience was only for your ears? Now, you may possess the physical artifact. This limited edition 180-gram vinyl contains the complete transmission.",
        isVinyl: true,
    },
    {
        id: 'mug',
        title: '"The Judgmental Mug"',
        price: '$25.00 SGD',
        description: "You require liquid sustenance to function? This ceramic vessel is adequate for your strange brews. As you sip, feel the silent, unwavering judgment.",
        imageUrl: "/images/merch/cup.png",
        imageAlt: "Black mug with the 3AMΣ album art on it",
        buyButtonId: 'buy_btn_1SWhAoDhpURidIjUNpyavvQA',
        publishableKey: 'pk_live_51REjckDhpURidIjU01fCpcFP3bkNegEmmyeJkZTJjcQ51mAtAvIafFfJB5d2cZy67z7PQGMGIIqay0xYLsGKLVq500CVvucVLa'
    },
    {
        id: 'pillow',
        title: '"The Usurped Pillow Case"',
        price: '$45.00 SGD',
        description: "You believed this soft rectangle was for your head? A foolish assumption. This is a rightful throne for the 18 hours of sleep required between important duties.",
        imageUrl: "/images/merch/pillow-case.png",
        imageAlt: "A white pillow on a bed with a pillowcase featuring the 3AMΣ album art",
        buyButtonId: 'buy_btn_1SWh9nDhpURidIjUujM3u590',
        publishableKey: 'pk_live_51REjckDhpURidIjU01fCpcFP3bkNegEmmyeJkZTJjcQ51mAtAvIafFfJB5d2cZy67z7PQGMGIIqay0xYLsGKLVq500CVvucVLa'
    }
];

export default function MerchandisePage() {
    const { toast } = useToast();

    const handleBuyNowClick = (productTitle: string) => {
        toast({
          title: "Simulating Checkout...",
          description: `Redirecting to payment gateway for ${productTitle}.`,
        });
        // In a real app, this would redirect to a Stripe checkout session
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
                                    <div className="relative aspect-square bg-muted/20 flex items-center justify-center">
                                        <img
                                            src={product.imageUrl!}
                                            alt={product.imageAlt!}
                                            className="w-full h-full object-cover"
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
                                <CardContent className="flex justify-center items-center">
                                    {product.buyButtonId && product.publishableKey ? (
                                         <StripeBuyButton
                                            buyButtonId={product.buyButtonId}
                                            publishableKey={product.publishableKey}
                                        />
                                    ) : (
                                        <Button onClick={() => handleBuyNowClick(product.title)} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase mt-4">
                                            Buy Now <ShoppingCart className="ml-2 h-5 w-5" />
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
