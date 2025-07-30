import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import { TopBar, Footer, ScrollUp, YMInitializer } from "@/components";

import "./globals.css";
import { Suspense } from "react";

const montserrat = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "МАКУЛАТУРА | НАКЛЕЙКИ",
    template: "%s | МАКУЛАТУРА",
  },
  description: "Крутые накоейки с уникальным дизайном.",
  keywords: ["наклейки", "стикеры", "дизайн", "макулатура", "магазин наклеек"],
  authors: [{ name: "МАКУЛАТУРА" }],
  creator: "МАКУЛАТУРА",
  metadataBase: new URL("https://makulatura.website"),

  openGraph: {
    title: "МАКУЛАТУРА | НАКЛЕЙКИ",
    description: "Крутые наклейки с уникальным дизайном.",
    url: "https://makulatura.website",
    siteName: "МАКУЛАТУРА",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "МАКУЛАТУРА — магазин наклеек",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        <Suspense fallback={<></>}>
          <YMInitializer />
        </Suspense>
        <TopBar />
        {children}
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
