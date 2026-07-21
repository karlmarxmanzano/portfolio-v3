import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Portrait } from "@/components/site/portrait";
import { GithubIcon, LinkedinIcon } from "@/components/site/icons";
import { socials } from "@/lib/site-data";

export function Hero() {
  return (
    <header id="top" className="pt-16 pb-20 sm:pt-19">
      <div className="mx-auto grid max-w-280 items-center gap-11 px-5 sm:px-7 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <div>
          <span className="mb-6.5 inline-flex items-center gap-2.5 rounded-full border border-line-2 px-3.5 py-1.5 text-[12.5px] text-text">
            <span className="size-1.75 rounded-full bg-blue" />
            Available for new opportunities
          </span>

          <h1 className="mb-3 font-display text-[clamp(2.5rem,5.6vw,4.125rem)] leading-[1.02] font-extrabold tracking-tight">
            Karl Marx Manzano
          </h1>

          <p className="mb-8 max-w-[44ch] text-[16.5px] text-muted-foreground">
            8+ years shipping{" "}
            <strong className="font-semibold text-text">end-to-end</strong> — development, deployment,
            maintenance. Currently, wiring LLMs into AI-powered applications and diving deeper into AI.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#work" />}
              nativeButton={false}
              className="h-auto rounded-[11px] bg-blue px-5 py-2.75 text-sm font-semibold text-[#06070d] hover:bg-blue/90"
            >
              View my work
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              render={<a href="#contact" />}
              nativeButton={false}
              className="h-auto rounded-[11px] border-line-2 px-5 py-2.75 text-sm font-semibold text-text hover:border-blue"
            >
              Get in touch
            </Button>
          </div>

          <div className="mt-7.5 flex gap-2.75">
            <a
              aria-label="GitHub"
              href={socials.github}
              target="_blank"
              rel="noopener"
              className="grid size-10.5 place-items-center rounded-[11px] border border-line text-muted-foreground transition-colors hover:border-blue hover:text-head"
            >
              <GithubIcon className="size-4.5" />
            </a>
            <a
              aria-label="LinkedIn"
              href={socials.linkedin}
              target="_blank"
              rel="noopener"
              className="grid size-10.5 place-items-center rounded-[11px] border border-line text-muted-foreground transition-colors hover:border-blue hover:text-head"
            >
              <LinkedinIcon className="size-4.5" />
            </a>
            <a
              aria-label="Email"
              href={socials.email}
              className="grid size-10.5 place-items-center rounded-[11px] border border-line text-muted-foreground transition-colors hover:border-blue hover:text-head"
            >
              <Mail className="size-4.5" />
            </a>
          </div>
        </div>

        <Portrait />
      </div>
    </header>
  );
}
