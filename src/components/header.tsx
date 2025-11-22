
'use client';

import Link from 'next/link';
import { Mail, Search, User, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/album', label: 'SONG LIST' },
  { href: '#', label: 'MERCH' },
  { href: '#', label: 'FILM' },
  { href: '/origin', label: 'THE ORIGIN' },
  { href: '#', label: 'SHOP INTERNATIONAL' },
];

const iconLinks = [
  { href: '#', icon: Mail, label: 'Email' },
  { href: '#', icon: Search, label: 'Search' },
  { href: '#', icon: User, label: 'Account' },
  { href: '#', icon: ShoppingCart, label: 'Cart' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline text-lg uppercase">3 AM ZOOMIES</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60 font-medium uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mb-8 flex items-center">
                 <span className="font-bold font-headline text-lg uppercase">3 AM ZOOMIES</span>
              </Link>
              <nav className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60 uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {iconLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <Button variant="ghost" size="icon" aria-label={link.label}>
                  <link.icon className="h-5 w-5" />
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
