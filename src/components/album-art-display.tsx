
'use client';

import { Card, CardContent } from './ui/card';

export function AlbumArtDisplay() {
  
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  }

  return (
    <Card 
      className="aspect-square w-full overflow-hidden rounded-lg shadow-2xl border-2 border-primary/50"
      onContextMenu={handleContextMenu}
    >
      <CardContent className="p-0 relative w-full h-full">
        <video
            src="/video/3am_cat.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-transparent"></div>
      </CardContent>
    </Card>
  );
}
