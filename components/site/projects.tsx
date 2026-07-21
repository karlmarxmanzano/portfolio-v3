import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/lib/site-data";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-17.5 py-20">
      <div className="mx-auto max-w-280 px-5 sm:px-7">
        <Reveal>
          <SectionHeading kicker="Selected work" title="A few things worth showing." />
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col overflow-hidden rounded-xl border-b border-line transition-colors hover:border-blue"
              >
                <div className="relative aspect-video overflow-hidden border-b border-line">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full border border-line-2 bg-bg-2 px-2 py-0.5 font-mono text-[9px] tracking-wide text-text uppercase">
                    {project.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="mb-1 flex items-center justify-between gap-2 font-display text-sm font-bold tracking-tight">
                    {project.title}
                    <ArrowUpRight className="size-3.5 shrink-0 text-faint transition-all group-hover:translate-x-0.75 group-hover:-translate-y-0.75 group-hover:text-blue" />
                  </h3>
                  <p className="mb-3 flex-1 line-clamp-2 text-xs text-muted-foreground">{project.description}</p>
                  {project.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.25">
                      {project.chips.map((chip) => (
                        <Badge
                          key={chip}
                          variant="outline"
                          className="rounded-full border-line-2 font-mono text-[10px] text-muted-foreground"
                        >
                          {chip}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
