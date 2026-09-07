import type { Metadata } from "next";
import { BookContent } from "./book-content";
import { SITE } from "@/lib/site-data";

const bookTitle = "Book a Chiropractor in Overland Park, KS";
const bookFullTitle = `${bookTitle} | ${SITE.name}`;
const bookDescription = "Book an appointment at Move Muscle & Joint in Overland Park, KS. Hours, location, parking, what to bring, and online scheduling for new and returning patients.";

export const metadata: Metadata = {
  title: bookTitle,
  description: bookDescription,
  openGraph: {
    url: `${SITE.url}/book`,
    title: bookFullTitle,
    description: bookDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: bookFullTitle,
    description: bookDescription,
  },
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return <BookContent />;
}
