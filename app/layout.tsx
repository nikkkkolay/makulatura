import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import { TopBar, Footer, ScrollUp, SmoothScrollWrapper } from "@/components";

import "./globals.css";

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
    template: "%s | МАКУЛАТУРА ",
  },
  description: "Самый лучший магазин наклеек",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        <TopBar />
        {children}
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
