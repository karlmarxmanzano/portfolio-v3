"use client";

import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/site-data";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-[rgba(10,12,20,0.7)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[66px] max-w-280 items-center justify-between px-5 sm:px-7">
        <a
          href="/"
          className="flex items-center gap-2.5 font-display text-base font-extrabold tracking-tight text-head"
        >
          <span className="grid size-8.5 place-items-center rounded-[10px] border border-line-2 font-mono text-[13px] font-semibold text-blue">
            KM
          </span>
          Karl Marx Manzano
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12.5px] tracking-wide text-muted-foreground transition-colors hover:text-head"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <Button
            variant="outline"
            className="hidden border-line-2 bg-surface px-4 py-2.5 text-text hover:border-blue sm:inline-flex"
            render={<a href="#" />}
            nativeButton={false}
          >
            <ArrowUpRight className="rotate-45" />
            Résumé
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Menu"
                  className="border-line-2 text-text md:hidden"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="border-line bg-bg-2">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-1 p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-3 font-mono text-sm tracking-wide text-muted-foreground transition-colors hover:text-head"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
