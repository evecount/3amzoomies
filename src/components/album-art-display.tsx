
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { albumData } from '@/lib/data';
import { Card, CardContent } from './ui/card';

export function AlbumArtDisplay() {
  const coverArt = PlaceHolderImages.find(img => img.id === albumData.coverArtId);

  if (!coverArt) {
    return null;
  }
  
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  }

  return (
    <Card 
      className="aspect-square w-full overflow-hidden rounded-lg shadow-2xl border-2 border-primary/50"
      onContextMenu={handleContextMenu}
    >
      <CardContent className="p-0 relative w-full h-full">
        <Image
          src={coverArt.imageUrl}
          alt={coverArt.description}
          fill
          className="object-cover pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </CardContent>
    </Card>
  );
}
