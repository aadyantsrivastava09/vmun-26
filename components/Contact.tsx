"use client";

import { CONTACT } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const ICON = "h-5 w-5";

export default function Contact() {
  const tiles = [
    {
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: (
        <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: CONTACT.instagramHandle,
      href: CONTACT.instagram,
      icon: (
        <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: CONTACT.phone,
      href: CONTACT.phoneHref,
      icon: (
        <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "Website",
      value: CONTACT.websiteLabel,
      href: CONTACT.website,
      icon: (
        <svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-cream py-28 text-forest"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-amber/25 blur-3xl"
      />
      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-terra">
                Questions? Reach out
              </p>
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
                Don&apos;t miss the first one.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-forest/80">
                The inaugural edition happens once. Ask us anything about
                committees, delegation discounts, or how to register.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {tiles.map((t) => (
                  <a
                    key={t.label}
                    href={t.href}
                    target={t.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-forest/15 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/60 hover:shadow-[0_14px_36px_rgba(184,105,59,0.12)]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/15 text-terra transition-colors duration-300 group-hover:bg-amber group-hover:text-ink">
                      {t.icon}
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-terra/70">
                        {t.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-forest">
                        {t.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-forest p-8 text-cream sm:p-10">
              <p className="label-amber">Flagship initiative</p>
              <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight">
                VMUN 2026 is a flagship initiative of Vantalyne Labs.
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-parch">
                A conference built not on legacy, but on intent — born from an
                idea and a desire to change the MUN circuit as we know it.
              </p>
              <a
                href="https://vantalynelabs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-amber/50 bg-amber/10 px-6 py-3 font-display text-sm font-bold text-amber transition-all duration-300 hover:bg-amber hover:text-ink"
              >
                Visit Vantalyne Labs ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
