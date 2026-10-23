import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://faiez-info.netlify.app"),
  title: "Faiez Ahmed | Creative UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Faiez Ahmed — Creative UI/UX Designer & Frontend Developer from Udaipur, India. Specializing in Next.js, React, Figma design systems, and pixel-perfect high-conversion web applications.",
  keywords: [
    "Faiez Ahmed",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Figma Designer",
    "Web Designer India",
    "Design Systems",
    "Udaipur Web Developer",
  ],
  authors: [{ name: "Faiez Ahmed" }],
  creator: "Faiez Ahmed",
  publisher: "Faiez Ahmed",
  openGraph: {
    title: "Faiez Ahmed — Creative UI/UX Designer & Frontend Developer",
    description:
      "Crafting high-performance digital experiences where aesthetics meet precision code. Explore featured SaaS dashboards, client websites, and Figma prototypes.",
    url: "https://faiez-info.netlify.app/",
    siteName: "Faiez Ahmed Portfolio",
    images: [
      {
        url: "/images/profile/about.jpg",
        width: 1200,
        height: 630,
        alt: "Faiez Ahmed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiez Ahmed — Creative UI/UX Designer & Frontend Developer",
    description:
      "Crafting high-performance digital experiences where aesthetics meet precision code. Available for freelance & full-time roles.",
    images: ["/images/profile/about.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
      <head>
        <meta name="theme-color" content="#050608" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
