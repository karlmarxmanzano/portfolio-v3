import { socials } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-line py-8.5">
      <div className="mx-auto flex max-w-280 flex-wrap items-center justify-between gap-4.5 px-5 sm:px-7">
        <span className="font-mono text-[12.5px] text-faint normal-case">
          Designed &amp; built by Karl Marx Manzano · © {year}
        </span>
        <div className="flex gap-5.5">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-blue"
          >
            GitHub
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-blue"
          >
            LinkedIn
          </a>
          <a href={socials.email} className="font-mono text-xs text-muted-foreground transition-colors hover:text-blue">
            Email
          </a>
          <a href="/#top" className="font-mono text-xs text-muted-foreground transition-colors hover:text-blue">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
