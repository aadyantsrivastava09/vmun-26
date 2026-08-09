"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  pad = 0,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  pad?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 18, mass: 0.9 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(
    () =>
      spring.on("change", (v) => {
        if (!ref.current) return;
        const s = v.toFixed(decimals);
        ref.current.textContent =
          prefix + (pad ? s.padStart(pad, "0") : s) + suffix;
      }),
    [spring, prefix, suffix, decimals, pad]
  );

  return (
    <span ref={ref}>
      {prefix}
      {pad ? String(to).padStart(pad, "0") : to.toFixed(decimals)}
      {suffix}
    </span>
  );
}
