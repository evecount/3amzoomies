
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


function InfoBox() {
    return (
        <Card className="bg-card/50 border-border/70">
            <CardHeader>
                <CardTitle className="font-headline text-3xl">3AMΣ</CardTitle>
                <CardDescription>Conceptual Musical Project</CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-4">
                <div>
                    <h4 className="font-semibold text-foreground">Also known as</h4>
                    <p className="text-muted-foreground">3 AM Zoomies</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground">Genre</h4>
                    <p className="text-muted-foreground">Alternative R&B, Pop, Funk, Hip-Hop, Electronic</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground">Debut Album</h4>
                    <p className="text-muted-foreground">3 AM Zoomies (2024)</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground">Primary Influences</h4>
                    <p className="text-muted-foreground">The Weeknd (After Hours, Dawn FM)</p>
                </div>
            </CardContent>
        </Card>
    );
}


export default function OriginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">The Story of "3 AM Zoomies"</h1>
            <p className="text-lg text-muted-foreground mt-1">An encyclopedic entry on the conceptual album.</p>
        </div>
        <Separator className="mb-12"/>
        <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
                <article className="prose prose-invert prose-lg max-w-none text-foreground/80 font-serif leading-relaxed space-y-6">
                    <p>
                        <strong><em>3 AM Zoomies</em></strong> is the debut studio album by <strong>3AMΣ</strong>, a conceptual musical project known for its unique blend of alternative R&B, pop, funk, hip-hop, and electronic music, heavily influenced by the sound and thematic depth of The Weeknd. The album is a deeply introspective and often darkly humorous exploration of the mundane yet profound existence of a domestic cat, told from both feline and human perspectives over a full 24-hour cycle.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Background and Development</h2>
                    <p>
                        The <strong>3AMΣ</strong> project originated from a desire to explore the unseen emotional and philosophical layers of everyday life, specifically through the eyes of a household cat. The core concept revolves around the eponymous "3 AM zoomies"—the sudden burst of nocturnal energy commonly exhibited by cats—metaphorically expanding this into a broader narrative about the cycles of craving, chaos, affection, and fleeting peace that define both feline and human existence.
                    </p>
                    <p>
                        The creative process was highly collaborative, utilizing advanced AI tools (specifically, Gemini) to co-write lyrics and shape the album's narrative and sonic direction. This allowed for rapid iteration, thematic consistency, and the precise alignment of lyrical content with the intended musical style. The project aimed to create a coherent "concept album" that could stand alongside works by artists known for their intricate storytelling and thematic development.
                    </p>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Artistic Influences and Style</h2>
                    <p>
                        The primary artistic influence for _3 AM Zoomies_ is <strong>The Weeknd (Abel Tesfaye)</strong>, particularly his *After Hours* and *Dawn FM* eras. This influence is evident in:
                    </p>
                    <ul>
                        <li><strong>Vocal Style:</strong> Male vocals in a light lyric tenor range, with prominent use of falsetto.</li>
                        <li><strong>Genre Fusion:</strong> A seamless blend of alternative R&B, Pop, Funk, Hip-Hop, and Electronic music.</li>
                        <li><strong>Thematic Depth:</strong> Exploration of introspection, melancholia, nihilism, addiction, and complex emotional states, recontextualized through the cat's perspective.</li>
                        <li><strong>Conceptual Narratives:</strong> The album adopts a "linear time format," guiding the listener through a sequential progression of a single day/night cycle, akin to the narrative structure of *Dawn FM*.</li>
                        <li><strong>Atmospheric Production:</strong> Heavy use of dark, pulsing synth basslines, shimmering pads, crisp drum machine beats, and atmospheric soundscapes.</li>
                    </ul>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Themes</h2>
                    <p>
                        _3 AM Zoomies_ delves into several core themes:
                    </p>
                    <ul>
                        <li><strong>Existentialism from a Feline Perspective:</strong> The cat's detached, often nihilistic view of its own existence and the human world.</li>
                        <li><strong>The "Unspoken Contract":</strong> The complex, often one-sided, relationship between pets and their owners, exploring dependence, love, and frustration.</li>
                        <li><strong>Cycles of Life:</strong> The album's 24-hour narrative arc emphasizes repetition, routine, and the inescapable loop of daily life, drawing parallels between feline and human experiences.</li>
                        <li><strong>Critique of Modern Life:</strong> Subtle commentary on human "overworking," digital distraction, and the search for meaning in mundane routines.</li>
                        <li><strong>Finding Meaning in the Mundane:</strong> The cat's ability to find profound satisfaction and meaning in simple pleasures like food, a cardboard box, or the chase of a laser dot.</li>
                    </ul>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Track Listing</h2>
                    
                    <h3 className="font-headline text-2xl uppercase text-primary/80 !mb-4 !mt-8">Act I: Delusion & Chaos (The Party Never Ends)</h3>
                    <div className="overflow-x-auto">
                        <Table className="not-prose">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No.</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Main Perspective</TableHead>
                                    <TableHead>Time of Day</TableHead>
                                    <TableHead>Lyrical/Thematic Focus</TableHead>
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

                    <h3 className="font-headline text-2xl uppercase text-primary/80 !mb-4 !mt-8">Act II: Reflection & Co-Dependence</h3>
                     <div className="overflow-x-auto">
                        <Table className="not-prose">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No.</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Main Perspective</TableHead>
                                    <TableHead>Time of Day</TableHead>
                                    <TableHead>Lyrical/Thematic Focus</TableHead>
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

                    <h3 className="font-headline text-2xl uppercase text-primary/80 !mb-4 !mt-8">Act III: Confrontation & Acceptance (The Loop)</h3>
                     <div className="overflow-x-auto">
                        <Table className="not-prose">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No.</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Main Perspective</TableHead>
                                    <TableHead>Time of Day</TableHead>
                                    <TableHead>Lyrical/Thematic Focus</TableHead>
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

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Personnel</h2>
                    <ul>
                        <li><strong>3AMΣ:</strong> Lead Vocals, Songwriting, Concept Development</li>
                        <li><strong>Gemini AI:</strong> Co-Songwriting, Lyrical Development, Narrative Structuring</li>
                        <li><strong>Suno AI:</strong> Instrumental Generation, Vocal Performance/Arrangement</li>
                    </ul>

                    <h2 className="font-headline text-3xl uppercase text-primary/90 !mb-4 !mt-12">Reception</h2>
                    <p>
                        Initial reception to _3 AM Zoomies_ has highlighted its innovative approach to concept album creation and its surprisingly profound lyrical depth. Critics have praised its seamless integration of Weeknd-esque aesthetics with a unique feline narrative, calling it "a surprisingly moving and darkly humorous meditation on life's endless loop." The album's use of AI as a collaborative partner has also been a point of critical discussion, marking it as a significant experiment in modern music production.
                    </p>

                </article>
            </div>
            <aside className="lg:col-span-1 lg:sticky top-24 h-fit">
                <InfoBox />
            </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
