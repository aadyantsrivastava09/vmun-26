"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";
import { CONFERENCE, CONTACT, FOUNDING, MARQUEE_ITEMS, STATS, TRUST_LINE } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 lg:pt-36">
      {/* ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-amber/15 blur-[120px] animate-orb" />
        <div className="absolute top-40 left-[-12%] h-[28rem] w-[28rem] rounded-full bg-orange/15 blur-[130px] animate-orb2" />
        <div className="absolute bottom-[-20%] left-1/3 h-[26rem] w-[26rem] rounded-full bg-forest3/40 blur-[120px]" />
        {/* fine grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,246,231,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,246,231,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto flex max-w-md justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vmun-logo.png"
            alt="Vantalyne Model United Nations 2026"
            className="w-64 mix-blend-screen sm:w-80"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="label-amber mb-6 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse-dot" />
          A flagship initiative of Vantalyne Labs
        </motion.p>

        <h1 className="mx-auto max-w-5xl text-center font-display text-[2.7rem] font-extrabold uppercase leading-[1.02] tracking-tight text-cream text-balance sm:text-6xl lg:text-7xl">
          {"Innovation Through".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
              className="mr-[0.28em] inline-block"
            >
              {w}
            </motion.span>
          ))}{" "}
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-block text-amber"
          >
            Diplomacy
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-parch sm:text-lg"
        >
          The inaugural edition of Vantalyne Model United Nations 2026 — two
          days of rigorous debate, meaningful diplomacy, and intellectually
          stimulating discussion on the most pressing issues facing the world
          today. Built not on legacy, but on intent — with just{" "}
          <span className="text-amber">
            {FOUNDING.seats} numbered founding seats
          </span>
          , never to be reissued.
        </motion.p>

        {/* date / venue chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="flex items-center gap-2 rounded-full border border-line bg-ink/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cream/90">
            📅 {CONFERENCE.dates}
          </span>
          <span className="flex items-center gap-2 rounded-full border border-line bg-ink/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cream/90">
            📍 {CONFERENCE.venue}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={CONTACT.register}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-amber px-8 py-4 font-display text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(248,172,27,0.35)]"
          >
            Claim a Founding Seat
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#committees"
            className="rounded-full border border-cream/25 px-8 py-4 font-display text-sm font-bold text-cream transition-all duration-300 hover:border-amber/60 hover:bg-amber/10"
          >
            Explore the committees
          </a>
        </motion.div>

        {/* trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {TRUST_LINE.map((t, i) => (
            <span
              key={t}
              className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[0.16em] text-parch/70"
            >
              {i > 0 && <span className="h-1 w-1 rounded-full bg-amber/50" />}
              {t}
            </span>
          ))}
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-ink/70 px-6 py-7 transition-colors duration-300 hover:bg-forest2/60"
            >
              <div className="font-display text-4xl font-extrabold text-amber">
                <Counter to={s.to} prefix={s.prefix ?? ""} />
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-parch">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* committees marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="mt-16 border-y border-line bg-black0/40 py-5"
      >
        <Marquee slow>
          {MARQUEE_ITEMS.map((c) => (
            <span
              key={c}
              className="mx-7 flex items-center gap-7 whitespace-nowrap font-display text-xl font-semibold text-parch/70"
            >
              {c}
              <span className="h-1.5 w-1.5 rounded-full bg-amber/60" />
            </span>
          ))}
        </Marquee>
      </motion.div>

      {/* scroll hint */}
      <div className="container-x mt-12 hidden justify-center lg:flex">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/25 p-1.5">
          <span className="h-2 w-1 rounded-full bg-amber/70 animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
