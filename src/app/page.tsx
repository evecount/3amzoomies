
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { ArtistInfo } from '@/components/artist-info';
import { Separator } from '@/components/ui/separator';
import { EndorsementsCarousel } from '@/components/endorsements-carousel';
import { MerchandiseSection } from '@/components/merchandise-section';
import { MemeSongFeature } from '@/components/meme-song-feature';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MemeSongFeature />
        <Separator className="my-12 md:my-16" />
        <ArtistInfo />
        <Separator className="my-12 md:my-16" />
        <MerchandiseSection />
        <Separator className="my-12 md:my-16" />
        <EndorsementsCarousel />
      </main>
      <Footer />
    </div>
  );
}
