
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2, Music, Users, Mic, Cpu } from 'lucide-react';
import Image from 'next/image';
import { memeSong, albumData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const influences = [
    { title: "Vocal Style", description: "Male vocals in a light lyric tenor range, with prominent use of falsetto." },
    { title: "Genre Fusion", description: "A seamless blend of alternative R&B, Pop, Funk, Hip-Hop, and Electronic music." },
    { title: "Thematic Depth", description: "Exploration of introspection, melancholia, nihilism, addiction, and complex emotional states, recontextualized through the cat's perspective." },
    { title: "Conceptual Narratives", description: "The album adopts a 'linear time format,' guiding the listener through a sequential progression of a single day/night cycle, akin to the narrative structure of Dawn FM." },
    { title: "Atmospheric Production", description: "Heavy use of dark, pulsing synth basslines, shimmering pads, crisp drum machine beats, and atmospheric soundscapes." }
]

const personnel = [
    { name: "3AMΣ", role: "Lead Vocals, Songwriting, Concept", icon: Mic },
    { name: "Gemini AI", role: "Co-Songwriting, Narrative", icon: Cpu },
    { name: "Suno AI", role: "Instrumentals, Vocal Performance", icon: Music },
]

export default function OriginPage() {
    const memeCoverArt = PlaceHolderImages.find(img => img.id === memeSong.coverArtId);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <p className="text-primary font-semibold text-lg tracking-widest uppercase">The Story of</p>
            <h1 className="text-5xl md:text-7xl tracking-wider uppercase font-bold">Midnight Murmurs</h1>
            <p className="text-lg text-muted-foreground mt-2">An encyclopedic entry on the conceptual album.</p>
        </div>
        <Separator className="mb-12"/>
        
        <div className="grid lg:grid-cols-4 gap-12 items-start">
            <div className="lg:col-span-3">
                <Card className="bg-card shadow-2xl">
                    <CardContent className="p-6 md:p-12">
                        <article className="prose prose-invert prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80 leading-relaxed">
                            <p>
                                <strong><em>Midnight Murmurs</em></strong> is the debut studio album by <strong>3AMΣ</strong>, a conceptual musical project known for its unique blend of alternative R&B, pop, funk, hip-hop, and electronic music, heavily influenced by the sound and thematic depth of The Weeknd. The album is a deeply introspective and often darkly humorous exploration of the mundane yet profound existence of a domestic cat, told from both feline and human perspectives over a full 24-hour cycle.
                            </p>

                            <h2 className="text-primary/90 uppercase tracking-wide">Background and Development</h2>
                            <p>
                                The <strong>3AMΣ</strong> project originated from a desire to explore the unseen emotional and philosophical layers of everyday life, specifically through the eyes of a household cat. The core concept revolves around the eponymous "3AMΣzoomies"—the sudden burst of nocturnal energy commonly exhibited by cats—metaphorically expanding this into a broader narrative about the cycles of craving, chaos, affection, and fleeting peace that define both feline and human existence.
                            </p>
                            <p>
                                The creative process was highly collaborative, utilizing advanced AI tools (specifically, Gemini) to co-write lyrics and shape the album's narrative and sonic direction. This allowed for rapid iteration, thematic consistency, and the precise alignment of lyrical content with the intended musical style. The project aimed to create a coherent "concept album" that could stand alongside works by artists known for their intricate storytelling and thematic development.
                            </p>
                            
                            <div className="my-16 not-prose">
                                <h2 className="font-semibold text-3xl uppercase text-primary/90 mb-6">Artistic Influences & Style</h2>
                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                    {influences.map(item => (
                                        <div key={item.title} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-primary/70 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-card-foreground">{item.title}</h4>
                                                <p className="text-card-foreground/80">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h2 className="text-primary/90 uppercase tracking-wide">Themes</h2>
                            <p>
                                <em>Midnight Murmurs</em> delves into several core themes:
                            </p>
                            <ul>
                                <li><strong>Existentialism from a Feline Perspective:</strong> The cat's detached, often nihilistic view of its own existence and the human world.</li>
                                <li><strong>The "Unspoken Contract":</strong> The complex, often one-sided, relationship between pets and their owners.</li>
                                <li><strong>Cycles of Life:</strong> Drawing parallels between feline and human experiences through a 24-hour narrative.</li>
                                <li><strong>Critique of Modern Life:</strong> Subtle commentary on human overworking and digital distraction.</li>
                                <li><strong>Finding Meaning in the Mundane:</strong> Satisfaction in simple pleasures like food or a cardboard box.</li>
                            </ul>

                            <div className="my-16 not-prose">
                                <h2 className="font-semibold text-3xl uppercase text-primary/90 mb-6">Track Listing</h2>
                                
                                <h3 className="font-semibold text-2xl uppercase text-primary/80 mb-4 mt-8">Act I: Delusion & Chaos</h3>
                                <div className="overflow-x-auto">
                                    <Table className="text-card-foreground w-full">
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-12">No.</TableHead>
                                                <TableHead>Title</TableHead>
                                                <TableHead>Perspective</TableHead>
                                                <TableHead>Time</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {albumData.songs.slice(0, 4).map((song, i) => (
                                                <TableRow key={song.id}>
                                                    <TableCell>{i + 1}.</TableCell>
                                                    <TableCell><strong>{song.title}</strong></TableCell>
                                                    <TableCell>{i === 0 ? 'DJ' : 'Cat'}</TableCell>
                                                    <TableCell>{i === 0 ? 'Late Night' : i === 1 ? 'Morning' : 'Daytime'}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>

                            <h2 className="text-primary/90 uppercase tracking-wide">Singles</h2>
                            <h3>"Stupid Fucking Hooman Remix"</h3>
                            <div className="not-prose overflow-hidden">
                                {memeCoverArt && (
                                    <div className="md:float-right md:ml-6 mb-6 w-full md:w-64">
                                        <div className="aspect-square relative rounded-lg overflow-hidden border border-border shadow-md">
                                            <Image src={memeCoverArt.src} alt={memeCoverArt.description} fill className="object-cover" />
                                        </div>
                                        <p className="text-xs text-center text-card-foreground/60 mt-2">The iconic cover art for the single.</p>
                                    </div>
                                )}
                            </div>
                            <p>
                                In 2024, 3AMΣ released "Stupid Fucking Hooman Remix," a standalone viral single. The track serves as a direct, unfiltered, and humorously aggressive rebuttal to Mike Polk Jr.'s 2011 viral hit, "I'm a Stupid Cat."
                            </p>
                            <p>
                                The track showcases 3AMΣ's ability to blend its signature moody, Weeknd-esque production with a more explicit, meme-driven lyrical approach, expanding the project's thematic reach into direct social commentary on pet-owner dynamics.
                            </p>

                            <div className="my-16 not-prose">
                                <h2 className="font-semibold text-3xl uppercase text-primary/90 mb-6">Personnel</h2>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {personnel.map((p) => (
                                        <Card key={p.name} className="bg-card/80 border-border/80">
                                            <CardContent className="p-6 flex flex-col items-center text-center">
                                                <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
                                                    <p.icon className="w-8 h-8" />
                                                </div>
                                                <h4 className="font-bold text-card-foreground text-lg">{p.name}</h4>
                                                <p className="text-card-foreground/80 text-sm">{p.role}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </CardContent>
                </Card>
            </div>
            
            <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
                <Card className="bg-card/80 border-border/80">
                    <CardHeader>
                        <CardTitle className="font-semibold text-3xl text-card-foreground uppercase">3AMΣ</CardTitle>
                        <CardDescription>Conceptual Musical Project</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm space-y-4 text-card-foreground">
                        <div>
                            <h4 className="font-semibold text-card-foreground">Also known as</h4>
                            <p className="text-card-foreground/80">3AMΣzoomies</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-card-foreground">Genre</h4>
                            <p className="text-card-foreground/80">Alternative R&B, Pop, Electronic</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-card-foreground">Debut Album</h4>
                            <p className="text-card-foreground/80">Midnight Murmurs (2024)</p>
                            </div>
                        <div>
                            <h4 className="font-semibold text-card-foreground">Primary Influences</h4>
                            <p className="text-card-foreground/80">The Weeknd (After Hours, Dawn FM)</p>
                        </div>
                    </CardContent>
                </Card>
            </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
