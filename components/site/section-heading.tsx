import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  center,
  className,
}: {
  kicker: string;
  title: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <span
        className={cn(
          "mb-3 block font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase",
          center && "text-center",
        )}
      >
        {kicker}
      </span>
      <h2
        className={cn(
          "max-w-[20ch] font-display text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.06] font-bold tracking-tight",
          center && "mx-auto text-center",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
