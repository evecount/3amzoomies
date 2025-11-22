
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} 3AMΣ. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
      <div className="container pb-8 text-center">
          <p className="text-sm text-foreground/80">
            This website is a satirical work of art. However, if enough people join the waitlist, we'll actually make the merch. No, really. ACTUALLY we'll assign a 'print to order' service close to their location and might even just send them the high res image if they are nice and they can make thier own damn shirt.
          </p>
      </div>
    </footer>
  );
}
