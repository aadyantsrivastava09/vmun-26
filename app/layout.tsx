import type { Metadata, Viewport } from "next";
import { Bitter, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jb = JetBrains_Mono({
  variable: "--font-jb",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Vantalyne MUN — Edition One | The Founding Class | Innovation Through Diplomacy",
  description:
    "Vantalyne Model United Nations 2026 — Edition One. Exactly 250 founding seats, numbered and never reissued. 10–11 October 2026 at Delhi Metropolitan Education (DME), Sector 62, Noida. Seven committees, rigorous debate, meaningful diplomacy.",
  keywords: [
    "Vantalyne MUN",
    "Vantalyne Model United Nations",
    "Edition One",
    "Founding Class",
    "MUN Delhi",
    "MUN Noida",
    "2026",
    "conference",
  ],
  openGraph: {
    title: "Vantalyne MUN — Edition One | Claim a Founding Seat",
    description:
      "Vantalyne Model United Nations 2026, Edition One. 250 founding seats. 10–11 October 2026, DME Sector 62, Noida. Applications open.",
    type: "website",
    siteName: "Vantalyne MUN — Edition One",
  },
};

export const viewport: Viewport = {
  themeColor: "#344c36",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${inter.variable} ${jb.variable} h-full antialiased`}
    >
      <body className="grain min-h-full">{children}</body>
    </html>
  );
}
