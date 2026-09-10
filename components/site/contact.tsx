import { Reveal } from "@/components/site/reveal";
import { socials } from "@/lib/site-data";

export function Contact() {
  return (
    <Reveal>
      <section id="contact" className="mt-25 scroll-mt-16">
        <div className="border-b border-foreground/[0.10] pb-3.5 font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
          Contact
        </div>

        <p className="mt-7 mb-6.5 max-w-[32ch] text-[21px] leading-[1.5] font-normal tracking-[-0.012em] text-pretty">
          Open to new opportunities, collaborations, or a system that needs to scale without collapsing
          under its own weight. Always happy to talk shop.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={socials.email}
            className="rounded-full bg-foreground px-5 py-3.25 font-mono text-[11px] tracking-[0.14em] text-background uppercase transition-transform hover:-translate-y-0.5"
          >
            karlmarxmanzano@gmail.com
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener"
            className="rounded-full border border-foreground/[0.18] px-5 py-3.25 font-mono text-[11px] tracking-[0.14em] text-foreground/80 uppercase transition-colors hover:border-foreground/50 hover:text-foreground"
          >
            Download resume
          </a>
        </div>
      </section>
    </Reveal>
  );
}
