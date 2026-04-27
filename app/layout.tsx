import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/lib/site-data";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Integrated Chiropractic Care & Rehab in Overland Park`,
    template: `%s | ${SITE.name}`,
  },
  description: "Integrated chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park. Move better. Stay strong. Live without hesitation.",
  keywords: ["chiropractic", "chiropractor", "Overland Park", "rehab", "myofascial release", "shockwave therapy", "back pain", "neck pain", "sports injuries"],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Integrated Chiropractic Care & Rehab in Overland Park`,
    description: "Integrated chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park. Move better. Stay strong. Live without hesitation.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Integrated Chiropractic Care & Rehab in Overland Park`,
    description: "Integrated chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#003e87",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
