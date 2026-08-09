"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV, CONTACT } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = NAV.map((n) => n.href.slice(1)).filter((id) =>
        document.getElementById(id)
      );
      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-line py-3 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-black0 ring-1 ring-amber/40 transition-transform duration-300 group-hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/vmun-logo.png"
                alt="VMUN 2026"
                className="h-9 w-9 object-contain mix-blend-screen"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-[0.14em] text-cream">
                Vantalyne&nbsp;MUN
              </span>
              <span className="block font-mono text-[8px] uppercase tracking-[0.22em] text-amber">
                Edition One · The Founding Class
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active === n.href
                    ? "text-cream"
                    : "text-parch/80 hover:text-cream"
                }`}
              >
                {n.label}
                {active === n.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber"
                  />
                )}
              </a>
            ))}
            <a
              href={CONTACT.register}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber px-5 py-2.5 font-display text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(248,172,27,0.3)]"
            >
              Apply now ↗
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid h-11 w-11 place-items-center rounded-xl border border-line text-cream lg:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink/97 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-x flex flex-col gap-2">
              {[...NAV, { href: CONTACT.register, label: "Claim a Founding Seat ↗" }].map(
                (n, i) => (
                  <motion.a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4 }}
                    className="border-b border-line py-4 font-display text-3xl font-bold text-cream transition-colors hover:text-amber"
                  >
                    {n.label}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
