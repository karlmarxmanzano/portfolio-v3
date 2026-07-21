import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { skills } from "@/lib/site-data";

const PREVIEW_COUNT = 12;

export function Skills() {
  const preview = skills.slice(0, PREVIEW_COUNT);
  const remaining = skills.length - preview.length;

  return (
    <section id="skills" className="scroll-mt-17.5 py-20">
      <div className="mx-auto max-w-280 px-5 sm:px-7">
        <Reveal>
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">Stack</span>
            <a
              href="/stack"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-blue"
            >
              View all
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {preview.map((skill) => (
              <span
                key={skill.name}
                className="rounded-lg border border-line px-3.5 py-2 font-mono text-[13px] text-text"
              >
                {skill.name}
              </span>
            ))}
            {remaining > 0 && (
              <a
                href="/stack"
                className="rounded-lg border border-dashed border-line-2 px-3.5 py-2 font-mono text-[13px] text-muted-foreground transition-colors hover:border-blue hover:text-blue"
              >
                + {remaining} more
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
