import { ThemeToggle } from "@/components/site/theme-toggle";
import { navLinks } from "@/lib/site-data";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-foreground/[0.06] bg-background/[0.76] backdrop-blur-md">
      <div className="mx-auto flex max-w-[700px] flex-wrap items-center justify-between gap-4.5 px-6.5 py-5">
        <a href="#top" className="font-mono text-[13px] font-medium tracking-[0.16em]">
          KM
        </a>

        <div className="flex flex-wrap items-center gap-4.5">
          <nav className="flex flex-wrap gap-4.5 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
