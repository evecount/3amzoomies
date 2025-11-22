import { PlaceHolderImages } from '@/lib/placeholder-images';
import { albumData } from '@/lib/data';
import { Card, CardContent } from './ui/card';

export function AlbumArtDisplay() {
  const coverArt = PlaceHolderImages.find(img => img.id === albumData.coverArtId);

  if (!coverArt) {
    return null;
  }
  
  return (
    <Card className="aspect-square w-full overflow-hidden rounded-lg shadow-2xl border-2 border-primary/50">
      <CardContent className="p-0">
        <video
          src="/videos/album-cover.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        />
      </CardContent>
    </Card>
  );
}
