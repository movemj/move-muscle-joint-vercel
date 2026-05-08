import type { Metadata } from "next";
import { BookContent } from "./book-content";

export const metadata: Metadata = {
  title: "Book Chiropractic Appointment in Overland Park, KS",
  description: "Book chiropractic care, myofascial release therapy, shockwave therapy, or targeted rehab at Move Muscle & Joint in Overland Park, KS.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return <BookContent />;
}
