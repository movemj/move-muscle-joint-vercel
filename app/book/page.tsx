import type { Metadata } from "next";
import { BookContent } from "./book-content";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book chiropractic care, myofascial release therapy, shockwave therapy, or targeted rehab at Move Muscle & Joint in Overland Park, KS.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return <BookContent />;
}
