import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { socials } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-17.5 py-20">
      <div className="mx-auto max-w-280 px-5 sm:px-7">
        <Reveal>
          <div className="rounded-[22px] border border-line-2 px-6 py-15 text-center sm:px-10">
            <span className="mb-4 block font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
              Contact
            </span>
            <h2 className="mx-auto mb-4 max-w-[24ch] font-display text-[clamp(1.875rem,4.4vw,3rem)] leading-[1.05] font-extrabold tracking-tight">
              Let&apos;s build something that lasts.
            </h2>
            <p className="mx-auto mb-7.5 max-w-[44ch] text-muted-foreground">
              Got a system that needs to scale without collapsing under its own weight? I&apos;d love to
              hear about it.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                render={<a href={socials.email} />}
                nativeButton={false}
                className="h-auto rounded-[11px] bg-blue px-5 py-2.75 text-sm font-semibold text-[#06070d] hover:bg-blue/90"
              >
                Get in touch
                <ArrowRight />
              </Button>
              <Button
                variant="outline"
                render={<a href={socials.resume} target="_blank" rel="noopener" />}
                nativeButton={false}
                className="h-auto rounded-[11px] border-line-2 px-5 py-2.75 text-sm font-semibold text-text hover:border-blue"
              >
                Download résumé
                <Download />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
