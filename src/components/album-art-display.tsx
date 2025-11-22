import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { albumData } from '@/lib/data';
import { VinylRecord } from './vinyl-record';
import { Card, CardContent } from './ui/card';

export function AlbumArtDisplay() {
  const coverArt = PlaceHolderImages.find(img => img.id === albumData.coverArtId);

  if (!coverArt) {
    return null;
  }
  
  return (
    <div className="relative grid grid-cols-2 items-center gap-4 md:gap-8">
      <Card className="aspect-square w-full overflow-hidden rounded-lg shadow-2xl border-2 border-primary/50">
        <CardContent className="p-0">
          <Image
            src={coverArt.imageUrl}
            alt={coverArt.description}
            width={1000}
            height={1000}
            priority
            data-ai-hint={coverArt.imageHint}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </CardContent>
      </Card>
      <div className="aspect-square w-full transform -translate-x-1/2 md:-translate-x-2/3">
        <VinylRecord />
      </div>
    </div>
  );
}
