"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(to);
          return;
        }

        const step = Math.max(1, Math.round(to / 40));
        let current = 0;
        const tick = () => {
          current += step;
          if (current >= to) {
            setValue(to);
          } else {
            setValue(current);
            requestAnimationFrame(tick);
          }
        };
        tick();
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{value}</span>;
}
