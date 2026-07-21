"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Portrait() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="group relative order-first w-[min(320px,86%)] justify-self-center overflow-hidden rounded-[18px] border border-line bg-bg-2 [aspect-ratio:4/5] transition-colors duration-300 hover:border-blue md:order-none">
      <img
        ref={imgRef}
        src="/portrait.jpg"
        alt="Karl Marx Manzano"
        onLoad={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 block h-full w-full scale-105 object-cover transition-transform duration-500 ease-out group-hover:scale-100",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-2/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] tracking-wide text-faint">// loading</span>
        </div>
      )}
    </div>
  );
}
