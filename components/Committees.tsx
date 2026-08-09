"use client";

import { COMMITTEES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export default function Committees() {
  return (
    <section id="committees" className="relative scroll-mt-24 py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-15%] top-1/4 h-[30rem] w-[30rem] rounded-full bg-amber/10 blur-[130px]"
      />
      <div className="container-x relative">
        <Reveal>
          <p className="label-amber mb-4">Committees at Vantalyne MUN 2026</p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
            Seven carefully curated committees. Seven unique experiences.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-parch">
            From international diplomacy and economics to constitutional crises
            and media strategy — every committee offers delegates the
            opportunity to explore complex issues through informed debate.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COMMITTEES.map((c, i) => (
            <Reveal key={c.id} delay={0.06 * i}>
              <TiltCard
                glow="rgba(248, 172, 27, 0.14), rgba(255, 246, 231, 0.04) 55%, transparent 70%"
                className="group h-full cursor-default rounded-2xl"
              >
                <div className="card-surface relative flex h-full flex-col rounded-2xl p-7 transition-colors duration-300 group-hover:border-amber/25">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-display text-3xl font-extrabold tracking-tight text-amber">
                      {c.acronym}
                    </span>
                    {c.tag && (
                      <span className="rounded-full border border-orange/40 bg-orange/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-orange">
                        {c.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-cream">
                    {c.name}
                  </h3>
                  <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-parch">
                    {c.agenda}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
