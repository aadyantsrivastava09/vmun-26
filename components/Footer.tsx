"use client";

import { CONFERENCE, CONTACT, FOUNDING, NAV } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-black0 pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-forest3/30 blur-[140px]"
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-black0 ring-1 ring-amber/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vmun-logo.png"
                  alt="VMUN 2026"
                  className="h-11 w-11 object-contain mix-blend-screen"
                />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl font-bold tracking-[0.14em] text-cream">
                  Vantalyne&nbsp;MUN
                </span>
                <span className="block font-mono text-[8px] uppercase tracking-[0.22em] text-amber">
                  Edition One · {CONFERENCE.tagline}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-parch">
              The founding edition of Vantalyne Model United Nations — Edition
              One, exactly {FOUNDING.seats} delegates strong. Two days of
              rigorous debate, meaningful diplomacy, and intellectually
              stimulating discussion in Delhi.
            </p>
          </div>

          {/* explore */}
          <div>
            <p className="label-amber mb-5">Explore</p>
            <ul className="space-y-3">
              {[...NAV, { href: "#contact", label: "Contact" }]
                .filter(
                  (n, i, arr) => arr.findIndex((x) => x.href === n.href) === i
                )
                .map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="text-sm text-parch transition-colors duration-300 hover:text-amber"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* register */}
          <div>
            <p className="label-amber mb-5">Register</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parch transition-colors duration-300 hover:text-amber"
                >
                  Gavelling portal ↗
                </a>
              </li>
              <li className="text-parch/80">
                {CONFERENCE.dates}
              </li>
              <li className="text-parch/80">{CONFERENCE.venue}</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="label-amber mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-parch transition-colors duration-300 hover:text-amber"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parch transition-colors duration-300 hover:text-amber"
                >
                  Instagram — {CONTACT.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="text-parch transition-colors duration-300 hover:text-amber"
                >
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* big wordmark */}
        <div className="pointer-events-none mt-16 select-none overflow-hidden">
          <p className="whitespace-nowrap text-center font-display text-[min(8vw,6.5rem)] font-extrabold leading-[0.85] tracking-tight text-cream/[0.05]">
            VANTALYNE MUN
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-parch/60">
            © 2026 Vantalyne MUN · Edition One · All rights reserved
          </p>
          <a
            href="https://vantalynelabs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-parch/60 transition-colors duration-300 hover:text-amber"
          >
            Flagship initiative of Vantalyne Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
