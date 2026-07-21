import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/site-data";
import { slugFor } from "@/components/site/experience";

const title = "Full experience — Karl Marx Manzano";
const description =
  "Complete work history of Karl Marx Manzano, a full-stack developer specializing in Laravel, Vue.js/Nuxt, and AI-powered application pipelines.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  openGraph: { url: "/experience", title, description },
  twitter: { title, description },
};

export default function ExperiencePage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="py-20">
          <div className="mx-auto max-w-280 px-5 sm:px-7">
            <Reveal>
              <Link
                href="/#experience"
                className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-blue"
              >
                <ArrowLeft className="size-3.5" />
                Back to overview
              </Link>
              <span className="mb-3 block font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
                Experience
              </span>
              <h1 className="max-w-[24ch] font-display text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.06] font-bold tracking-tight">
                Full work history.
              </h1>
            </Reveal>

            <Reveal className="mt-12">
              <div className="relative pl-7.5 before:absolute before:top-1.5 before:bottom-1.5 before:left-1.25 before:w-px before:bg-line">
                {experience.map((item) => (
                  <div key={item.company} id={slugFor(item)} className="relative scroll-mt-24 pb-9 last:pb-0">
                    <div className="absolute top-1.25 -left-7.5 size-3 rounded-full border-2 border-blue bg-background" />
                    <div className="mb-1.5 font-mono text-[11.5px] tracking-wide text-faint uppercase">
                      {item.when}
                    </div>
                    <h2 className="font-display text-lg font-bold tracking-tight text-head">
                      {item.role} <span className="text-blue">· {item.company}</span>
                    </h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.location}</p>
                    <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-faint" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3.5 flex flex-wrap gap-1.75">
                      {item.chips.map((chip) => (
                        <Badge
                          key={chip}
                          variant="outline"
                          className="rounded-full border-line-2 font-mono text-[11px] text-muted-foreground"
                        >
                          {chip}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
