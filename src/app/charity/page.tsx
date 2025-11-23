
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const charities = [
    {
        name: 'Annex Cat Rescue',
        description: "For the local apex predators in The 6ix. Because even the most judgmental creatures deserve a warm place to nap and a full bowl. A Toronto-based volunteer organization.",
        href: 'https://www.annexcatrescue.ca/donate/',
        category: "Animal Welfare"
    },
    {
        name: 'Best Friends Animal Society',
        description: 'A leading national animal welfare organization dedicated to ending the killing of dogs and cats in America\'s shelters. For when your ambition is nationwide domination of kindness.',
        href: 'https://bestfriends.org/donate',
        category: 'Animal Welfare'
    },
    {
        name: 'Canada Council for the Arts',
        description: "The national arts funder. Because art, even satirical AI-driven art, doesn't just appear out of the ether. Usually. Support the humans who haven't been replaced yet.",
        href: 'https://canadacouncil.ca/initiatives/support-the-arts',
        category: "The Arts"
    },
    {
        name: 'Doctors Without Borders',
        description: "Providing impartial, life-saving medical care to people caught in conflict, epidemics, disasters, or exclusion from health care. Because as it turns out, humans are animals too.",
        href: 'https://donate.doctorswithoutborders.ca/',
        category: 'Human Welfare'
    },
    {
        name: 'The Trevor Project',
        description: "The world's largest suicide prevention and crisis intervention organization for LGBTQ young people. A reminder that everyone deserves to feel safe in their own sanctuary.",
        href: 'https://give.thetrevorproject.org/',
        category: 'Human Welfare'
    },
    {
        name: 'MusiCounts',
        description: "Canada's music education charity, helping to keep music alive in schools and communities. So the next generation can learn to make their own chaotic 3 AM symphonies.",
        href: 'https://musicounts.ca/en/take-action/donate/',
        category: "The Arts"
    }
]

export default function CharityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <div className="text-left mb-8">
            <h1 className="font-headline text-5xl md:text-6xl tracking-wider">Support The Cause</h1>
            <p className="text-lg text-muted-foreground mt-1">Animals, Arts, or Humans. It's all the same, really.</p>
        </div>
        <Separator className="mb-12"/>

        <article className="prose prose-invert prose-lg max-w-4xl mx-auto font-serif leading-relaxed space-y-6 mb-16 text-center">
            <p>
                The universe of <strong>3AMΣ</strong> is a commentary on the cycles of existence—need, comfort, chaos, and creation. While this project is a work of satire, the needs it reflects are very real. The provider must provide, whether it's a bowl of food, a piece of art, or a moment of care. Below are some organizations worthy of your consideration.
            </p>
        </article>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {charities.map((charity) => (
                <Card key={charity.name} className="bg-card/50 flex flex-col">
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">{charity.category}</p>
                        <CardTitle className="font-headline text-3xl uppercase">{charity.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{charity.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase">
                            <Link href={charity.href} target="_blank" rel="noopener noreferrer">
                                Donate
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
