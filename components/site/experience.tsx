import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { experience, type ExperienceEntry } from "@/lib/site-data";

const PREVIEW_COUNT = 4;

export function slugFor(item: ExperienceEntry) {
  return item.company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function companyLabel(item: ExperienceEntry) {
  return item.location === "Remote" ? item.company : `${item.company} · ${item.location}`;
}

export function Experience() {
  const preview = experience.slice(0, PREVIEW_COUNT);

  return (
    <section id="experience" className="scroll-mt-17.5 py-20">
      <div className="mx-auto max-w-280 px-5 sm:px-7">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading kicker="Experience" title="The roles that shaped how I build." className="mb-0" />
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-blue"
            >
              Full history
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-line rounded-2xl border border-line">
            {preview.map((item) => (
              <Link
                key={item.company}
                href={`/experience#${slugFor(item)}`}
                className="group flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="shrink-0 font-mono text-[11.5px] tracking-wide text-faint uppercase sm:w-32">
                  {item.years}
                </span>
                <span className="flex-1 font-display text-[15px] font-bold tracking-tight text-head transition-colors group-hover:text-blue">
                  {item.role}
                </span>
                <span className="shrink-0 text-sm text-muted-foreground sm:text-right">
                  {companyLabel(item)}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
