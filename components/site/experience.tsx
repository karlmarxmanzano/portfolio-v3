import Link from "next/link";
import { Reveal } from "@/components/site/reveal";
import { experience, type ExperienceEntry } from "@/lib/site-data";

const PREVIEW_COUNT = 5;

export function slugFor(item: ExperienceEntry) {
  return item.company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function metaFor(item: ExperienceEntry) {
  const location = item.location === "Remote" ? "Remote" : item.location;
  return `${item.company} · ${location} · ${item.years}`;
}

export function Experience() {
  const preview = experience.slice(0, PREVIEW_COUNT);

  return (
    <Reveal>
      <section id="experience" className="mt-25 scroll-mt-16">
        <div className="flex items-end justify-between border-b border-foreground/[0.10] pb-3.5 font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
          <span>Experience</span>
          <Link href="/experience" className="transition-colors hover:text-foreground">
            Full history →
          </Link>
        </div>

        {preview.map((item) => (
          <Link
            key={item.company}
            href={`/experience#${slugFor(item)}`}
            className="grid grid-cols-[30px_minmax(0,1fr)] gap-4 border-b border-foreground/[0.07] py-5.5"
          >
            <span className="flex size-7.5 items-center justify-center rounded-[7px] border border-foreground/[0.12] bg-foreground/[0.08] font-mono text-[11px] text-foreground/90">
              {item.company.charAt(0)}
            </span>
            <span>
              <span className="mb-1 block text-[15px]">{item.role}</span>
              <span className="mb-2.25 block font-mono text-[10px] tracking-[0.12em] text-faint uppercase">
                {metaFor(item)}
              </span>
              <span className="block text-sm leading-[1.65] text-muted-foreground text-pretty">
                {item.bullets[0]}
              </span>
            </span>
          </Link>
        ))}
      </section>
    </Reveal>
  );
}
