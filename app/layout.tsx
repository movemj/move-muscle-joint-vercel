import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLdSchema } from "@/components/schema-json-ld";
import { SITE } from "@/lib/site-data";
import { schemas } from "@/lib/schemas";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Chiropractor Overland Park KS | Move Muscle & Joint",
    template: `%s | ${SITE.name}`,
  },
  description: "Experienced chiropractor in Overland Park KS offering integrated chiropractic care, myofascial release, shockwave therapy, and gym-based rehab. Move better and stay strong near 119th St & Roe Ave. Book your first visit today.",
  keywords: ["chiropractic", "chiropractor", "Overland Park", "rehab", "myofascial release", "shockwave therapy", "back pain", "neck pain", "sports injuries"],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Chiropractor Overland Park KS | Move Muscle & Joint",
    description: "Experienced chiropractor in Overland Park KS offering integrated chiropractic care, myofascial release, shockwave therapy, and gym-based rehab. Move better and stay strong near 119th St & Roe Ave. Book your first visit today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiropractor Overland Park KS | Move Muscle & Joint",
    description: "Experienced chiropractor in Overland Park KS offering integrated chiropractic care, myofascial release, shockwave therapy, and gym-based rehab. Move better and stay strong near 119th St & Roe Ave. Book your first visit today.",
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
    <html lang="en" className="bg-background">
      <head>
        <JsonLdSchema data={schemas.website()} />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
