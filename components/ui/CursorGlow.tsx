"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorGlow() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 90, damping: 24, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 90, damping: 24, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] hidden pointer-fine:block"
    >
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute -left-[22rem] -top-[22rem] h-[44rem] w-[44rem]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(248,172,27,0.09) 0%, rgba(63,92,67,0.12) 35%, transparent 68%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
