"use client";

import type { ReactNode } from "react";

export function Marquee({
  children,
  slow = false,
  className = "",
}: {
  children: ReactNode;
  slow?: boolean;
  className?: string;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div
        className={`flex w-max ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        } ${className}`}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
