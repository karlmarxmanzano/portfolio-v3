import { socials } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="[animation:km-rise_0.7s_cubic-bezier(0.2,0.8,0.2,1)_both]">
      <div className="mb-9 flex items-center gap-4">
        <div className="size-26 shrink-0 overflow-hidden rounded-full border border-foreground/[0.14]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/portrait.jpg" alt="Karl Marx Manzano" className="h-full w-full object-cover" />
        </div>
      </div>

      <h1 className="mb-7 text-[25px] leading-[1.5] font-normal tracking-[-0.012em] text-pretty">
        Karl Marx Manzano is a Senior full-stack developer with 8+ years building web applications end to end. Now crafting AI-powered apps with Laravel, Vue, and large language models.
        <span
          aria-hidden
          className="ml-1 inline-block h-[19px] w-2 translate-y-[-3px] bg-foreground align-middle"
          style={{ animation: "caret-blink 1.2s steps(1) infinite" }}
        />
      </h1>

      <div className="mb-4.5 flex flex-wrap gap-5 text-sm">
        <a href="#work" className="border-b border-foreground/[0.32] pb-0.5">
          See the work
        </a>
        <a href={socials.resume} target="_blank" rel="noopener" className="border-b border-foreground/[0.32] pb-0.5">
          Download resume
        </a>
        <a href="#contact" className="border-b border-foreground/[0.32] pb-0.5">
          Get in touch
        </a>
      </div>

      <div className="flex flex-wrap gap-4.5 font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
        <a href={socials.github} target="_blank" rel="noopener" className="transition-colors hover:text-foreground">
          GitHub
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener" className="transition-colors hover:text-foreground">
          LinkedIn
        </a>
        <a href={socials.email} className="transition-colors hover:text-foreground">
          Email
        </a>
      </div>
    </section>
  );
}
