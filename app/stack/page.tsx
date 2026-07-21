import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { skills, skillCategoryLabels, type SkillCategory } from "@/lib/site-data";

const title = "Tech stack — Karl Marx Manzano";
const description = "The tools, frameworks, and platforms Karl Marx Manzano reaches for across the stack.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/stack" },
  openGraph: { url: "/stack", title, description },
  twitter: { title, description },
};

const categoryOrder: SkillCategory[] = ["frontend", "backend", "database", "devops"];

export default function StackPage() {
  return (
    <>
      <SiteNav />
      <main className="py-16">
        <div className="mx-auto max-w-280 px-5 sm:px-7">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-blue"
          >
            <ArrowLeft className="size-3.5" />
            Back
          </a>

          <h1 className="mb-4 font-display text-[clamp(1.875rem,4.4vw,3rem)] leading-[1.05] font-extrabold tracking-tight">
            Tech stack
          </h1>
          <p className="mb-14 text-[16.5px] text-muted-foreground">
            The tools, frameworks, and platforms I reach for day to day, grouped by where they sit in a
            typical build.
          </p>

          <div className="flex flex-col gap-11">
            {categoryOrder.map((category) => (
              <div key={category}>
                <h2 className="mb-4 font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  {skillCategoryLabels[category]}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-lg border border-line px-3.5 py-2 font-mono text-[13px] text-text"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
