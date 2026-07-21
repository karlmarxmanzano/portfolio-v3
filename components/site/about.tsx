import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/count-up";
import { SectionHeading } from "@/components/site/section-heading";
import { stats } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="scroll-mt-17.5 py-20">
      <div className="mx-auto max-w-280 px-5 sm:px-7">
        <Reveal>
          <SectionHeading kicker="About" title="Architecture-minded, product-focused." />
        </Reveal>

        <Reveal>
          <div className="max-w-[70ch]">
            <p className="mb-3.5 text-[15.5px] text-muted-foreground">
              I&apos;m a full-stack developer based in{" "}
              <strong className="font-semibold text-text">La Union, Philippines</strong>, with around eight
              years building production software people rely on every day — from enterprise EdTech to
              logistics and healthcare products.
            </p>
            <p className="mb-3.5 text-[15.5px] text-muted-foreground">
              My instinct is architectural. I reach for{" "}
              <strong className="font-semibold text-text">domain-driven design, Clean Architecture, and CQRS</strong>{" "}
              because they keep systems honest as they grow. Whether it&apos;s C# on ASP.NET or PHP on
              Laravel, the shape of the thing matters as much as the feature.
            </p>
            <p className="text-[15.5px] text-muted-foreground">
              Off the clock I&apos;m usually building something of my own — a parcel-relay platform, a
              clinical SaaS, an AI translation app — and occasionally tending to my tortoises.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
            <div>
              <b className="font-display text-[28px] leading-none font-extrabold tracking-tight text-head">
                <CountUp to={stats.years} />+
              </b>
              <span className="mt-1 block text-[13px] text-muted-foreground">Years shipping production code</span>
            </div>
            <div>
              <b className="font-display text-[28px] leading-none font-extrabold tracking-tight text-head">
                <CountUp to={stats.projects} />+
              </b>
              <span className="mt-1 block text-[13px] text-muted-foreground">Projects</span>
            </div>
            <div>
              <b className="font-display text-[28px] leading-none font-extrabold tracking-tight text-head">
                <CountUp to={stats.clients} />+
              </b>
              <span className="mt-1 block text-[13px] text-muted-foreground">Clients</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
