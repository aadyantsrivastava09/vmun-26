"use client";

import { CONTACT, FOUNDING, FOUNDING_BENEFITS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export default function FoundingClass() {
  return (
    <section
      id="founding"
      className="relative scroll-mt-24 overflow-hidden py-28"
    >
      {/* ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-12%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-amber/10 blur-[130px]"
      />

      <div className="container-x relative">
        <Reveal>
          <p className="label-amber mb-4 text-center">The Founding Class</p>
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-extrabold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
            Only{" "}
            <span className="text-amber">{FOUNDING.seats} delegates</span> will
            ever be able to say they were there.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-parch sm:text-lg">
            Exactly {FOUNDING.seats} founding seats, numbered {FOUNDING.seatRange}.
            When they are taken, Edition One closes forever — the founding class
            can never be repeated.
          </p>
        </Reveal>

        {/* one-liner */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber/30 bg-amber/[0.06] px-8 py-7 text-center">
            <p className="text-base font-medium leading-relaxed text-cream sm:text-lg">
              {FOUNDING.line}
            </p>
          </div>
        </Reveal>

        {/* benefits */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {FOUNDING_BENEFITS.map((group, gi) => (
            <Reveal key={group.phase} delay={0.06 * gi}>
              <div className="card-surface flex h-full flex-col rounded-2xl p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-4xl font-extrabold leading-none text-amber/25">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-amber">
                    {group.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-cream">
                  {group.phase}
                </h3>
                <ul className="mt-5 space-y-5 border-t border-line pt-5">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <p className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-cream">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                        {item.title}
                      </p>
                      <p className="mt-1.5 pl-4 text-[13px] leading-relaxed text-parch">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* quote */}
        <Reveal delay={0.12}>
          <blockquote className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-display text-2xl font-bold leading-snug text-cream sm:text-3xl">
              "{FOUNDING.quote}"
            </p>
            <cite className="mt-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-parch not-italic">
              — Vantalyne MUN · Edition One
            </cite>
          </blockquote>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href={CONTACT.register}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-amber px-9 py-4 font-display text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(248,172,27,0.35)]"
            >
              Claim a Founding Seat
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-parch/80">
              Selection-based · no payment to apply · early bird ₹2,000 till 15
              August, then ₹2,200
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
