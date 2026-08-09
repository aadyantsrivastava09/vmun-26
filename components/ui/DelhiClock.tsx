"use client";

import { useEffect, useState } from "react";

export default function DelhiClock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-[0.16em] text-ember/80 tabular-nums ${className}`}
    >
      · {time} IST
    </span>
  );
}
