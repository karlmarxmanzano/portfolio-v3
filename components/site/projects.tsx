import { Reveal } from "@/components/site/reveal";
import { projects } from "@/lib/site-data";

export function Projects() {
  return (
    <Reveal>
      <section id="work" className="mt-25 scroll-mt-16">
        <div className="border-b border-foreground/[0.10] pb-3.5 font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
          Selected projects
        </div>

        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener"
            className="-ml-1.5 -mr-2.5 grid grid-cols-[26px_minmax(0,1fr)_auto] items-baseline gap-4 rounded-[6px] border-b border-foreground/[0.07] py-5.5 pr-2.5 pl-1.5 transition-[background,padding-left] duration-300 ease-out hover:bg-foreground/[0.045] hover:pl-3.5"
          >
            <span className="font-mono text-[11px] text-faint">{String(index + 1).padStart(2, "0")}</span>
            <span className="block">
              <span className="mb-1.75 block text-[17px] tracking-[-0.01em]">{project.title}</span>
              <span className="mb-2.25 block text-sm leading-[1.6] text-muted-foreground text-pretty">
                {project.description}
              </span>
              {project.chips.length > 0 && (
                <span className="block font-mono text-[10px] tracking-[0.1em] text-faint uppercase">
                  {project.chips.join(" · ")}
                </span>
              )}
            </span>
            <span className="font-mono text-[11px] whitespace-nowrap text-faint">
              {project.year ? `${project.year} → ` : "→"}
            </span>
          </a>
        ))}
      </section>
    </Reveal>
  );
}
