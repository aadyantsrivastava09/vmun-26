"use client";

import { CONTACT, DELEGATION_DISCOUNTS, FOUNDING, INCLUDES, PRICING, STEPS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Countdown } from "@/components/ui/Countdown";

export default function Register() {
  return (
    <section id="register" className="relative scroll-mt-24 py-28">
      <div className="container-x">
        <Reveal>
          <p className="label-amber mb-4 text-center">
            Applications open — {FOUNDING.seats} founding seats
          </p>
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-extrabold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
            Claim a Founding Seat.
          </h2>
        </Reveal>

        {/* early bird countdown */}
        <Reveal delay={0.08}>
          <Countdown className="mt-10" />
        </Reveal>

        {/* pricing */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="card-surface relative h-full rounded-2xl border-amber/50 p-8">
              <span className="rounded-full bg-amber px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink">
                Early Bird
              </span>
              <p className="mt-6 font-display text-5xl font-extrabold text-amber">
                {PRICING.earlyBird}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-parch">
                For delegates who register before 15 August — then{" "}
                {PRICING.regular}.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card-surface h-full rounded-2xl p-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-parch">
                Regular
              </span>
              <p className="mt-6 font-display text-5xl font-extrabold text-cream">
                {PRICING.regular}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-parch">
                Standard registration for all delegates after 15 August.
              </p>
            </div>
          </Reveal>
        </div>

        {/* delegation discounts */}
        <Reveal delay={0.16} className="mx-auto mt-5 max-w-3xl">
          <div className="rounded-2xl border border-line bg-black0/40 px-7 py-6">
            <p className="label-amber">School delegation discounts</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {DELEGATION_DISCOUNTS.map((d) => (
                <span
                  key={d.min}
                  className="flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-amber"
                >
                  {d.min} {d.label} — {d.off}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* includes */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-forest2/25 p-8">
              <p className="label-amber">The conference includes</p>
              <ul className="mt-5 space-y-3">
                {INCLUDES.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-3 text-sm leading-relaxed text-cream/90"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber/15 font-mono text-[10px] text-amber">
                      ✓
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* steps */}
          <Reveal delay={0.18}>
            <div className="h-full rounded-2xl border border-line bg-black0/40 p-8">
              <p className="label-amber">How to claim your seat</p>
              <ol className="mt-6 space-y-6">
                {STEPS.map((s, i) => (
                  <li key={s.n} className="relative flex gap-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber font-display text-sm font-extrabold text-ink">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold text-cream">
                        {s.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-parch">
                        {s.desc}
                      </p>
                    </div>
                    {i < STEPS.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-5 top-12 h-6 w-px bg-amber/30"
                      />
                    )}
                  </li>
                ))}
              </ol>
              <a
                href={CONTACT.register}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 font-display text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(248,172,27,0.35)]"
              >
                Claim a Founding Seat on Gavelling
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
              <p className="mt-4 text-center text-xs leading-relaxed text-parch/80">
                Selection-based — you apply, we accept, then you pay. No
                payment is required to apply.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
