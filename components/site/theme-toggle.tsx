"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("km-theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable — theme just won't persist across visits.
    }
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="cursor-pointer rounded-full border border-foreground/[0.18] bg-transparent px-3 py-[7px] font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:border-foreground/50 hover:text-foreground"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
