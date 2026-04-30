import Image from "next/image";
import Link from "next/link";
import { SITE, IMAGES } from "@/lib/site-data";
import { MapPin, Phone, Mail } from "lucide-react";

interface AuthorBioProps {
  author: string;
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="mt-12 p-8 bg-lightgray rounded-lg">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="shrink-0">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={IMAGES.provider}
              alt={author}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-softblue mb-2">
            About the Author
          </p>
          <h3 className="text-xl font-bold text-charcoal mb-2">
            <Link href="/about" className="hover:text-navy transition-colors">
              {author}
            </Link>
          </h3>
          <p className="text-steel leading-relaxed mb-4">
            Founder of {SITE.name} and movement-focused chiropractor in {SITE.addressCity} with 20+ years of experience. 
            Team physician for Sporting KC and care provider for University of Kansas Athletics.
          </p>
          
          {/* NAP Information for GMB consistency */}
          <div className="space-y-2 text-sm text-steel">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-softblue shrink-0" />
              <span>{SITE.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-softblue shrink-0" />
              <a href={`tel:${SITE.phone}`} className="hover:text-navy transition-colors">
                {SITE.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-softblue shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-navy transition-colors">
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
