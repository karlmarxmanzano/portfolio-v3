import { Reveal } from "@/components/site/reveal";
import { skills, skillCategoryLabels, type SkillCategory } from "@/lib/site-data";

const categoryOrder: SkillCategory[] = ["frontend", "backend", "database", "devops"];

export function Skills() {
  return (
    <Reveal>
      <section id="stack" className="mt-25 scroll-mt-16">
        <div className="border-b border-foreground/[0.10] pb-3.5 font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
          Stack
        </div>

        {categoryOrder.map((category) => (
          <div
            key={category}
            className="grid grid-cols-[minmax(0,150px)_minmax(0,1fr)] gap-4 border-b border-foreground/[0.07] py-5"
          >
            <span className="pt-0.75 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
              {skillCategoryLabels[category]}
            </span>
            <span className="text-sm leading-[1.7] text-foreground/80 text-pretty">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => skill.name)
                .join(" · ")}
            </span>
          </div>
        ))}

        <div className="pt-4">
          <a
            href="/stack"
            className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase transition-colors hover:text-foreground"
          >
            Standalone page →
          </a>
        </div>
      </section>
    </Reveal>
  );
}
