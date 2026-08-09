"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CONFERENCE } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28">
      <div className="container-x">
        <Reveal>
          <p className="label-amber mb-4">Welcome to Vantalyne MUN 2026</p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-cream text-balance sm:text-5xl">
            Diplomacy is more than speeches and resolutions.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <p className="text-base leading-relaxed text-parch">
              We are delighted to invite you to the inaugural edition of
              Vantalyne Model United Nations (VMUN) 2026, a flagship initiative
              of Vantalyne Labs, created to redefine what delegates expect from
              a Model United Nations conference.{" "}
              <span className="text-cream">
                {CONFERENCE.tagline}.
              </span>
            </p>
            <p className="mt-5 text-base leading-relaxed text-parch">
              For two days, delegates from across institutions will come
              together to engage in rigorous debate, collaborative negotiation,
              and meaningful dialogue in committees designed to challenge,
              inspire, and prepare the next generation of leaders.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-line bg-black0/40 p-8 sm:p-10">
              <p className="font-display text-2xl font-bold leading-snug text-cream sm:text-3xl">
                "This is not simply another conference.
                <span className="text-amber">
                  {" "}
                  This is the beginning of a new standard.
                </span>
                "
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-parch">
                {CONFERENCE.edition}
              </p>
              <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-parch">
                At VMUN, we believe diplomacy is about understanding
                complexity, challenging perspectives, and building solutions.
                Our objective is simple — a conference that prioritizes
                committee quality, academic rigor, innovation, and delegate
                experience.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
