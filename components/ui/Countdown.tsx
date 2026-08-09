"use client";

import { useEffect, useState } from "react";
import { EARLY_BIRD } from "@/lib/data";

interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
  done: boolean;
}

function diff(): TimeLeft {
  const end = new Date(EARLY_BIRD.endsIso).getTime();
  const ms = Math.max(0, end - Date.now());
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms % 86400000) / 3600000),
    m: Math.floor((ms % 3600000) / 60000),
    s: Math.floor((ms % 60000) / 1000),
    done: ms === 0,
  };
}

export function Countdown({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setMounted(true);
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = mounted && t
    ? [
        { v: t.d, l: "days" },
        { v: t.h, l: "hours" },
        { v: t.m, l: "mins" },
        { v: t.s, l: "secs" },
      ]
    : [
        { v: "--", l: "days" },
        { v: "--", l: "hours" },
        { v: "--", l: "mins" },
        { v: "--", l: "secs" },
      ];

  return (
    <div className={className}>
      <p className="label-amber text-center">
        {mounted && t?.done
          ? "Early bird rate has ended"
          : `${EARLY_BIRD.label} — apply before the price rises`}
      </p>
      <div className="mt-4 flex flex-wrap items-start justify-center gap-3">
        {cells.map((c) => (
          <div
            key={c.l}
            className="w-[4.2rem] rounded-xl border border-line bg-black0/60 py-3 text-center"
          >
            <span className="font-display text-3xl font-extrabold leading-none text-amber tabular-nums">
              {c.v}
            </span>
            <span className="mt-1.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-parch">
              {c.l}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
