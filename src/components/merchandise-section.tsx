
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { VinylRecord } from '@/components/vinyl-record';
import { AlbumArtDisplay } from '@/components/album-art-display';
import { StripeBuyButton } from '@/components/stripe-buy-button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const products = [
    {
        id: 'tshirt',
        title: '"The Observer" Official Tee',
        price: '$39.90 SGD',
        description: "You think your clothes are your own? This garment has been pre-approved by the true master of the house. It's comfortable enough for your tedious daily tasks.",
        buyButtonId: 'buy_btn_1SWhCYDhpURidIjUMqygnXDU',
        publishableKey: 'pk_live_51REjckDhpURidIjU01fCpcFP3bkNegEmmyeJkZTJjcQ51mAtAvIafFfJB5d2cZy67z7PQGMGIIqay0xYLsGKLVq500CVvucVLa'
    },
    {
        id: 'vinyl',
        title: '"Midnight Murmurs" Vinyl',
        price: '$210.00 SGD',
        description: "You thought this experience was only for your ears? Now, you may possess the physical artifact. This limited edition 180-gram vinyl contains the complete transmission.",
        isVinyl: true,
        buyButtonId: 'buy_btn_1SWhBtDhpURidIjUyW0n1ZAm',
        publishableKey: 'pk_live_51REjckDhpURidIjU01fCpcFP3bkNegEmmyeJkZTJjcQ51mAtAvIafFfJB5d2cZy67z7PQGMGIIqay0xYLsGKLVq500CVvucVLa'
    },
    {
        id: 'mug',
        title: '"The Judgmental Mug"',
        price: '$25.00 SGD',
        description: "You require liquid sustenance to function? This ceramic vessel is adequate for your strange brews. As you sip, feel the silent, unwavering judgment.",
        buyButtonId: 'buy_btn_1SWhAoDhpURidIjUNpyavvQA',
        publishableKey: 'pk_live_51REjckDhpURidIjU01fCpcFP3bkNegEmmyeJkZTJjcQ51mAtAvIafFfJB5d2cZy67z7PQGMGIIqay0xYLsGKLVq500CVvucVLa'
    },
    {
        id: 'pillow',
        title: '"The Usurped Pillow Case"',
        price: '$45.00 SGD',
        description: "You believed this soft rectangle was for your head? A foolish assumption. This is a rightful throne for the 18 hours of sleep required between important duties.",
        buyButtonId: 'buy_btn_1SWh9nDhpURidIjUujM3u590',
        publishableKey: 'pk_live_51REjckDhpURidIjU01fCpcFP3bkNegEmmyeJkZTJjcQ51mAtAvIafFfJB5d2cZy67z7PQGMGIIqay0xYLsGKLVq500CVvucVLa'
    }
];

export function MerchandiseSection() {
    
    return (
        <section id="merchandise" className="container mx-auto px-4 py-12 md:py-16">
            <div className="text-center mb-12 px-4">
                <p className="text-primary tracking-widest uppercase font-semibold">Official Gear</p>
                <h2 className="text-5xl md:text-6xl uppercase tracking-wider font-bold">Merchandise</h2>
                <p className="text-lg text-muted-foreground mt-2">Approved by the Apex Predator.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {products.map((product) => {
                    const image = PlaceHolderImages.find(img => img.id === product.id);
                    return (
                    <Card key={product.id} className="bg-card/50 overflow-hidden flex flex-col">
                        {product.isVinyl ? (
                                <CardContent className="p-4 md:p-6 aspect-square flex items-center justify-center">
                                <div className="w-full max-w-[70%] aspect-square relative group">
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
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                        )}
                        <CardHeader className="p-4">
                            <CardTitle className="text-xl uppercase">{product.title}</CardTitle>
                            <CardDescription className="text-lg">{product.price}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-4 text-sm text-foreground/80 flex-grow">
                            <p>{product.description}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            {product.buyButtonId && product.publishableKey && (
                                    <StripeBuyButton
                                    buyButtonId={product.buyButtonId}
                                    publishableKey={product.publishableKey}
                                />
                            )}
                        </CardFooter>
                    </Card>
                )})}
            </div>
        </section>
    );
}
