export interface Committee {
  id: string;
  acronym: string;
  name: string;
  agenda: string;
  tag?: string;
}

export const COMMITTEES: Committee[] = [
  {
    id: "unga",
    acronym: "UNGA",
    name: "United Nations General Assembly",
    agenda:
      "Deliberation on Strengthening International Cooperation for the Peaceful, Sustainable, and Equitable Governance of Outer Space Activities.",
  },
  {
    id: "unsc",
    acronym: "UNSC",
    name: "United Nations Security Council",
    agenda:
      "Addressing the Convergence of Transnational Organized Crime, Cybercrime, and Illicit Financial Networks in the Digital Age as Emerging Threats to International Peace and Security.",
  },
  {
    id: "unhrc",
    acronym: "UNHRC",
    name: "United Nations Human Rights Council",
    agenda:
      "Assessing the Protection of Human Rights and Fundamental Freedoms amidst the Escalating Humanitarian and Political Crisis in Afghanistan.",
  },
  {
    id: "uncsw",
    acronym: "UNCSW",
    name: "United Nations Commission on the Status of Women",
    agenda:
      "Discussing the Protection and Advancement of Reproductive Rights within International Human Rights Frameworks and Domestic Legal Systems.",
  },
  {
    id: "ecosoc",
    acronym: "ECOSOC",
    name: "United Nations Economic and Social Council",
    agenda:
      "Deliberation upon the Economic and Social Implications of Artificial Intelligence, Automation, and Workforce Displacement in the 21st Century.",
    tag: "Double Delegation",
  },
  {
    id: "aippm",
    acronym: "AIPPM",
    name: "All India Political Parties Meet",
    agenda:
      "Discussing the Escalating Constitutional and Political Crisis Following the Allahabad High Court Verdict and the Question of Executive Authority Amid Mounting National Unrest.",
    tag: "Freeze Date · 25 June 1975",
  },
  {
    id: "ipc",
    acronym: "IPC",
    name: "International Press Corps",
    agenda:
      "Constructing, Controlling, and Contesting Narratives in a World of Crisis.",
  },
];

export const CONFERENCE = {
  dates: "10–11 October 2026",
  venue: "Delhi Metropolitan Education (DME), Sector 62, Noida",
  tagline: "Innovation Through Diplomacy",
  edition: "Vantalyne MUN · Edition One",
};

export const STATS = [
  { to: 7, label: "carefully curated committees" },
  { to: 2, label: "days of debate in Delhi" },
  { to: 250, label: "numbered founding seats" },
  { to: 2000, label: "early bird fee", prefix: "₹" },
];

export const EARLY_BIRD = {
  label: "Early bird rate ends 15 August 2026",
  endsIso: "2026-08-15T23:59:59+05:30",
};

export const TRUST_LINE = [
  "Built by Vantalyne Labs",
  "Run on Gavelling",
  "Supervised at all times",
  "Parent-informed",
];

export const FOUNDING = {
  seats: 250,
  seatRange: "Seat #001 – #250 · never reissued",
  line: "Founding delegates get their name on the charter, their seat number forever, the founding-class price forever, a guaranteed seat in every future edition — and the badge to prove they were first.",
  quote: "Edition Two, Edition Five, Edition Ten will have delegates. Edition One has founders.",
};

export const FOUNDING_BENEFITS = [
  {
    phase: "Permanent",
    tag: "Forever, not a day more",
    items: [
      {
        title: "Name on the Founding Charter",
        desc: "Printed, signed, and carried by the 250 — your name opens every future edition of Vantalyne MUN.",
      },
      {
        title: "Seat number 001–250, never reissued",
        desc: "A permanent founding ID. No delegate of any future edition will ever hold your number.",
      },
      {
        title: "Founding-class price, locked for life",
        desc: "Founding delegates keep the earliest price Vantalyne MUN will ever offer — in every future edition.",
      },
      {
        title: "Guaranteed seat in future editions",
        desc: "No re-application, no competition. Your seat in every future edition is already saved.",
      },
    ],
  },
  {
    phase: "Before the conference",
    tag: "September prep",
    items: [
      {
        title: "Accepted, not just purchased",
        desc: "Applications are reviewed and accepted — with a seat number confirmed before any payment is due.",
      },
      {
        title: "Two preparation sessions",
        desc: "Led by the Executive Board in September — procedure, position papers, and public speaking.",
      },
      {
        title: "Committee dossier + study guide",
        desc: "A researched dossier on your committee and agenda, plus a full study guide before the conference.",
      },
    ],
  },
  {
    phase: "At the conference",
    tag: "Visible from day one",
    items: [
      {
        title: "Founding Class badge and lanyard",
        desc: "Visibly different from any future edition's delegate materials.",
      },
      {
        title: "Recognition in the opening ceremony",
        desc: "The 250 founding delegates are welcomed by name.",
      },
      {
        title: "Professional photographs in 24 hours",
        desc: "Committee photos and portraits delivered within a day of closing.",
      },
    ],
  },
  {
    phase: "The afterglow",
    tag: "Long after the gavel falls",
    items: [
      {
        title: "Foil-sealed Founding Class certificate",
        desc: '"Edition One · Seat #034 · One of 250" — numbered and sealed, impossible to reprint.',
      },
      {
        title: "Hall of Founders",
        desc: "A permanent digital page carrying all 250 names of the founding class.",
      },
      {
        title: "Founding Alumni group",
        desc: "The community that outlives the conference — first access, first invitations, always.",
      },
    ],
  },
];

export const MARQUEE_ITEMS = [
  "UNGA",
  "UNSC",
  "UNHRC",
  "UNCSW",
  "ECOSOC",
  "AIPPM",
  "IPC",
];

export const PRICING = {
  earlyBird: "₹2,000",
  regular: "₹2,200",
};

export const DELEGATION_DISCOUNTS = [
  { min: "5+", label: "delegates", off: "₹100 off" },
  { min: "10+", label: "delegates", off: "₹200 off" },
];

export const INCLUDES = [
  "Professional photography",
  "Lunch & refreshments on both days",
  "Gavelling-powered committees",
  "Networking opportunities",
  "Participation certificate",
];

export const STEPS = [
  {
    n: "01",
    title: "Apply on Gavelling",
    desc: "Sign up on Gavelling and submit your application through the portal — takes 2–3 minutes and costs nothing.",
  },
  {
    n: "02",
    title: "Selection, not purchase",
    desc: "Every application is reviewed. You are accepted — or not — before any payment is taken.",
  },
  {
    n: "03",
    title: "Receive your seat number",
    desc: "Accepted delegates get a confirmation email with their founding seat number within 24–48 hours.",
  },
  {
    n: "04",
    title: "Pay to lock your seat",
    desc: "Early bird rate for early applicants — the seat is held once payment is confirmed.",
  },
  {
    n: "05",
    title: "Prep with the board",
    desc: "September prep sessions, your committee dossier, and the study guide before the conference.",
  },
];

export const CONTACT = {
  email: "team@vantalynelabs.in",
  instagram: "https://www.instagram.com/vantalynemun",
  instagramHandle: "@vantalynemun",
  phone: "+91 70119 29194",
  phoneHref: "tel:+917011929194",
  website: "https://vantalynelabs.in/vmun",
  websiteLabel: "vantalynelabs.in/vmun",
  register: "https://gavelling.com/conferences/vantalyne-model-united-nations-26-nn2td",
};

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#founding", label: "Founding Class" },
  { href: "#committees", label: "Committees" },
  { href: "#register", label: "Register" },
  { href: "#contact", label: "Contact" },
];
