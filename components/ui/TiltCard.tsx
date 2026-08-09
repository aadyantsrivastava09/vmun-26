"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export function TiltCard({
  children,
  className,
  max = 7,
  glow = "rgba(224, 135, 107, 0.16), rgba(255, 246, 231, 0.05) 55%, transparent 70%",
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), {
    stiffness: 160,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), {
    stiffness: 160,
    damping: 18,
  });

  const sx = useTransform(mx, [0, 1], [18, 82]);
  const sy = useTransform(my, [0, 1], [18, 82]);
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${sx}% ${sy}%, ${glow})`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(24px)" }} className="relative h-full">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        {children}
      </div>
    </motion.div>
  );
}
