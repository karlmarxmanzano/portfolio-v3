export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-27.5 flex max-w-[700px] flex-wrap justify-between gap-3.5 border-t border-foreground/[0.07] px-6.5 pt-6.5 pb-12 font-mono text-[10px] tracking-[0.12em] text-faint">
      <span>© {year} Karl Marx Manzano</span>
      <a href="#top" className="flex items-center gap-1.75 transition-colors hover:text-foreground">
        Top ↑
      </a>
    </footer>
  );
}
