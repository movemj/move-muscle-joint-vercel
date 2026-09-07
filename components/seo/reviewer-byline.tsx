import Link from "next/link";

export function ReviewerByline() {
  return (
    <p className="text-xs text-white/55">
      Reviewed by{" "}
      <Link href="/about" className="underline underline-offset-2 hover:text-white/80">
        Joseph Hugunin, DC — Team Chiropractor, Sporting Kansas City
      </Link>
    </p>
  );
}
