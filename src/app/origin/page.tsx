
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2, Music, Users, Mic, Cpu } from 'lucide-react';
import Image from 'next/image';
import { memeSong } from '@/lib/data';
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
                        <article className="prose prose-invert prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary/80">
                            <p>
                                <strong><em>Midnight Murmurs</em></strong> is the debut studio album by <strong>3AMΣ</strong>, a conceptual musical project known for its unique blend of alternative R&B, pop, funk, hip-hop, and electronic music, heavily influenced by the sound and thematic depth of The Weeknd. The album is a deeply introspective and often darkly humorous exploration of the mundane yet profound existence of a domestic cat, told from both feline and human perspectives over a full 24-hour cycle.
                            </p>

                            <h2>Background and Development</h2>
                            <p>
                                The <strong>3AMΣ</strong> project originated from a desire to explore the unseen emotional and philosophical layers of everyday life, specifically through the eyes of a household cat. The core concept revolves around the eponymous "3AMΣzoomies"—the sudden burst of nocturnal energy commonly exhibited by cats—metaphorically expanding this into a broader narrative about the cycles of craving, chaos, affection, and fleeting peace that define both feline and human existence.
                            </p>
                            <p>
                                The creative process was highly collaborative, utilizing advanced AI tools (specifically, Gemini) to co-write lyrics and shape the album's narrative and sonic direction. This allowed for rapid iteration, thematic consistency, and the precise alignment of lyrical content with the intended musical style. The project aimed to create a coherent "concept album" that could stand alongside works by artists known for their intricate storytelling and thematic development.
                            </p>
                            
                            <div className="my-16 not-prose">
                                <h2 className="font-semibold text-3xl uppercase text-primary/90 !mb-6 !mt-12">Artistic Influences & Style</h2>
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

                            <h2>Themes</h2>
                            <p>
                                <em>Midnight Murmurs</em> delves into several core themes:
                            </p>
                            <ul>
                                <li><strong>Existentialism from a Feline Perspective:</strong> The cat's detached, often nihilistic view of its own existence and the human world.</li>
                                <li><strong>The "Unspoken Contract":</strong> The complex, often one-sided, relationship between pets and their owners, exploring dependence, love, and frustration.</li>
                                <li><strong>Cycles of Life:</strong> The album's 24-hour narrative arc emphasizes repetition, routine, and the inescapable loop of daily life, drawing parallels between feline and human experiences.</li>
                                <li><strong>Critique of Modern Life:</strong> Subtle commentary on human "overworking," digital distraction, and the search for meaning in mundane routines.</li>
                                <li><strong>Finding Meaning in the Mundane:</strong> The cat's ability to find profound satisfaction and meaning in simple pleasures like food, a cardboard box, or the chase of a laser dot.</li>
                            </ul>

                            <div className="my-16 not-prose">
                                <h2 className="font-semibold text-3xl uppercase text-primary/90 !mb-6 !mt-12">Track Listing</h2>
                                
                                <h3 className="font-semibold text-2xl uppercase text-primary/80 !mb-4 !mt-8">Act I: Delusion & Chaos (The Party Never Ends)</h3>
                                <div className="overflow-x-auto">
                                    <Table className="text-card-foreground">
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="text-card-foreground/80">No.</TableHead>
                                                <TableHead className="text-card-foreground/80">Title</TableHead>
                                                <TableHead className="text-card-foreground/80">Main Perspective</TableHead>
                                                <TableHead className="text-card-foreground/80">Time of Day</TableHead>
                                                <TableHead className="text-card-foreground/80">Lyrical/Thematic Focus</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>1.</TableCell>
                                                <TableCell><strong>Introduction (Feline FM)</strong></TableCell>
                                                <TableCell>DJ</TableCell>
                                                <TableCell>Late Night</TableCell>
                                                <TableCell>Sets the stage, radio broadcast intro, introduces the album's universe.</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2.</TableCell>
                                                <TableCell><strong>Apex Predator, Empty Bowl</strong></TableCell>
                                                <TableCell>Cat</TableCell>
                                                <TableCell>Morning</TableCell>
                                                <TableCell>Nihilism, self-absorption, morning hunger, disdain for human's "stupid" life.</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>3.</TableCell>
                                                <TableCell><strong>Observer of Absurdity</strong></TableCell>
                                                <TableCell>Cat</TableCell>
                                                <TableCell>Midday/Afternoon</TableCell>
                                                <TableCell>Resentment, superiority, observations of human "overworking" and daily routines.</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>4.</TableCell>
                                                <TableCell><strong>The Fading Feather (Afternoon Chase)</strong></TableCell>
                                                <TableCell>Cat</TableCell>
                                                <TableCell>Afternoon</TableCell>
                                                <TableCell>Instinct, frustration, mundane thrill of the hunt (e.g., bird outside window).</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>

                                <h3 className="font-semibold text-2xl uppercase text-primary/80 !mb-4 !mt-8">Act II: Reflection & Co-Dependence</h3>
                                <div className="overflow-x-auto">
                                    <Table className="text-card-foreground">
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="text-card-foreground/80">No.</TableHead>
                                                <TableHead className="text-card-foreground/80">Title</TableHead>
                                                <TableHead className="text-card-foreground/80">Main Perspective</TableHead>
                                                <TableHead className="text-card-foreground/80">Time of Day</TableHead>
                                                <TableHead className="text-card-foreground/80">Lyrical/Thematic Focus</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>5.</TableCell>
                                                <TableCell><strong>Chasing the Crimson Ghost</strong></TableCell>
                                                <TableCell>Cat</TableCell>
                                                <TableCell>Early Evening</TableCell>
                                                <TableCell>Existential quest, frustration with meaningless goals (laser dot toy).</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>6.</TableCell>
                                                <TableCell><strong>My Cardboard Sanctuary</strong></TableCell>
                                                <TableCell>Cat</TableCell>
                                                <TableCell>Night (pre-3 AM)</TableCell>
                                                <TableCell>Comfort, escapism, love-hate relationship with human-provided solace.</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>7.</TableCell>
                                                <TableCell><strong>The Unspoken Contract</strong></TableCell>
                                                <TableCell>Human</TableCell>
                                                <TableCell>Late Evening/Night</TableCell>
                                                <TableCell>Exhaustion, unconditional love, confusion over cat's affection/dependency.</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>

                                <h3 className="font-semibold text-2xl uppercase text-primary/80 !mb-4 !mt-8">Act III: Confrontation & Acceptance (The Loop)</h3>
                                <div className="overflow-x-auto">
                                    <Table className="text-card-foreground">
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="text-card-foreground/80">No.</TableHead>
                                                <TableHead className="text-card-foreground/80">Title</TableHead>
                                                <TableHead className="text-card-foreground/80">Main Perspective</TableHead>
                                                <TableHead className="text-card-foreground/80">Time of Day</TableHead>
                                                <TableHead className="text-card-foreground/80">Lyrical/Thematic Focus</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>8.</TableCell>
                                                <TableCell><strong>Ambrosia & Oblivion</strong></TableCell>
                                                <TableCell>Cat</TableCell>
                                                <TableCell>Deep Night</TableCell>
                                                <TableCell>Addiction, craving, momentary peace found in indulgence (wet food).</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>9.</TableCell>
                                                <TableCell><strong>Eternal Dawn (Loop)</strong></TableCell>
                                                <TableCell>Shared (Human's view of cat)</TableCell>
                                                <TableCell>3 AM (approaching Dawn)</TableCell>
                                                <TableCell>Shared acceptance, cyclical existence, chaotic energy of the "zoomies."</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>10.</TableCell>
                                                <TableCell><strong>Conclusion (Feline FM)</strong></TableCell>
                                                <TableCell>DJ</TableCell>
                                                <TableCell>Full Dawn</TableCell>
                                                <TableCell>Sign-off, return to reality, cyclical nature of life, philosophical wrap-up.</TableCell>
                                            </TableRow>
                                        </TableBody>
                                
                                    </Table>
                                </div>
                            </div>

                            <h2>Singles</h2>
                            <h3>"Stupid Fucking Hooman Remix"</h3>
                            <div className="not-prose">
                                {memeCoverArt && (
                                    <div className="float-right ml-6 mb-4 w-48 lg:w-64">
                                        <div className="aspect-square relative rounded-lg overflow-hidden border border-stone-200 shadow-md">
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
                                Whereas Polk's song portrays the inner monologue of a self-deprecating cat, the 3AMΣ single flips the script, offering the feline's scathing perspective on its human companion's perceived incompetence and subservience.
                            </p>
                            <p>
                                The single's release was accompanied by its now-iconic cover art featuring a Siamese cat in a full denim ensemble—a "Canadian tuxedo"—lounging amidst a post-party mess of pizza boxes and scattered catnip, embodying a rebellious, hip-hop aesthetic. This visual, combined with the track's biting lyrics, quickly garnered attention on social media platforms, igniting a playful "feud" between the two feline-centric musical narratives.
                            </p>
                            <p>
                                The track showcases 3AMΣ's ability to blend its signature moody, Weeknd-esque production with a more explicit, meme-driven lyrical approach, expanding the project's thematic reach into direct social commentary on pet-owner dynamics.
                            </p>

                            <div className="my-16 not-prose">
                                <h2 className="font-semibold text-3xl uppercase text-primary/90 !mb-6 !mt-12">Personnel</h2>
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

                            <div className="my-16 not-prose">
                                <h2 className="font-semibold text-3xl uppercase text-primary/90 !mb-6 !mt-12">Digital Presence & Community</h2>
                                <p className="text-lg text-card-foreground leading-relaxed">
                                    The project maintains a curated visual presence on Instagram, extending the album's aesthetic into a grid of images that reflect its themes of noir, surrealism, and feline mystique. This digital space serves as a hub for the community, a place to share art, and a visual diary for the ongoing 3AMΣ narrative.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div className="space-y-4">
                                        <div className="aspect-[1/1.2] relative rounded-lg overflow-hidden border border-border/50 shadow-md">
                                            <Image src="/images/instagram.png" alt="3AMΣ Instagram Page" fill className="object-cover" />
                                        </div>
                                        <p className="text-sm text-center text-card-foreground/60 mt-2">The official Instagram grid for @3amzoomie.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="aspect-[1/1.2] relative rounded-lg overflow-hidden border border-border/50 shadow-md">
                                            <Image src="/images/phone.png" alt="3AMΣ Website on Mobile" fill className="object-contain p-8 bg-card-foreground/10" />
                                        </div>
                                        <p className="text-sm text-center text-card-foreground/60 mt-2">The mobile experience for the 3AMΣ website.</p>
                                    </div>
                                </div>
                            </div>

                            <h2>Reception</h2>
                            <p>
                                Initial reception to <em>Midnight Murmurs</em> has highlighted its innovative approach to concept album creation and its surprisingly profound lyrical depth. Critics have praised its seamless integration of Weeknd-esque aesthetics with a unique feline narrative, calling it "a surprisingly moving and darkly humorous meditation on life's endless loop." The album's use of AI as a collaborative partner has also been a point of critical discussion, marking it as a significant experiment in modern music production.
                            </p>
                        </article>
                    </CardContent>
                </Card>
            </div>
            <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
                <Card className="bg-card/80 border-border/80">
                    <CardHeader>
                        <CardTitle className="font-semibold text-3xl text-card-foreground">3AMΣ</CardTitle>
                        <CardDescription>Conceptual Musical Project</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm space-y-4 text-card-foreground">
                        <div>
                            <h4 className="font-semibold text-card-foreground">Also known as</h4>
                            <p className="text-card-foreground/80">3AMΣzoomies</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-card-foreground">Genre</h4>
                            <p className="text-card-foreground/80">Alternative R&B, Pop, Funk, Hip-Hop, Electronic</p>
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
