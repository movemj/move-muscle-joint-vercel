'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTAButton } from '@/components/ui/cta-button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { SITE } from '@/lib/site-data';
import { buildJaneUrl } from '@/lib/booking';
import { JsonLdSchema } from '@/components/schema-json-ld';
import { schemas } from '@/lib/schemas';

const serviceAreas = ["Overland Park", "Leawood", "Prairie Village", "Olathe", "Shawnee", "Lenexa", "Kansas City metro"];
const janeUrl = buildJaneUrl({ campaign: "contact" });

async function sendContactForm(data: any) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.ok;
}

export function ContactContent() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const success = await sendContactForm(form);
      if (success) {
        router.push("/thank-you");
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
    setSending(false);
  };

  return (
    <>
      <JsonLdSchema data={schemas.localBusinessChiropractor()} />
      <JsonLdSchema data={schemas.person()} />
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact", path: "/contact" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl mt-4">
            Contact Move Muscle & Joint
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-5 text-lg text-white/70 max-w-2xl">
            Have a question? Use the form below or visit our office in Overland Park. Call or text us at (913) 303-0989.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <SectionHeading tag="Get In Touch" title="Send us a message." />
            <form onSubmit={handleSubmit} className="space-y-5 -mt-8">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5" />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <Button type="submit" disabled={sending} className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full font-semibold">
                {sending ? "Sending..." : "Send Message"}
              </Button>
              <p className="text-xs text-steel">Looking to schedule an appointment? <a href={buildJaneUrl({ campaign: "contact" })} target="_blank" rel="noopener noreferrer" className="text-navy font-semibold hover:underline">Book online</a> for the fastest experience.</p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <SectionHeading tag="Visit Us" title="Office information." />
              <div className="space-y-5 -mt-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-charcoal">Address</p>
                    <p className="text-sm text-steel">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-charcoal">Phone</p>
                    <a href="tel:+19133030989" className="text-sm text-steel hover:text-navy">{SITE.phone}</a>
                    <p className="text-xs text-steel mt-0.5">Call or text us at (913) 303-0989.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-charcoal">Hours</p>
                    <p className="text-sm text-steel">Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p className="text-sm text-steel">Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
              <iframe
                title="Move Muscle & Joint location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.52608666434!2d-94.63572429999999!3d38.9348915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e976123d316f%3A0xdbb76f9248886b15!2sMove%20Muscle%20%26%20Joint!5e0!3m2!1sen!2sus!4v1788751242235!5m2!1sen!2sus"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="mt-6">
              <CTAButton href="/book" label="Book Your Appointment" showArrow size="lg" campaign="contact" />
              <p className="mt-3 text-sm text-steel">
                Need hours, parking, or what to expect first?{" "}
                <Link href="/book" className="font-semibold text-navy hover:underline">Visit our booking & hours page</Link>.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="bg-secondary">
        <SectionHeading tag="Service Area" title="Proudly serving the Kansas City metro." />
        <div className="flex flex-wrap gap-3 -mt-8">
          {serviceAreas.map((area) => (
            <span key={area} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-sm text-charcoal font-medium">
              <MapPin className="w-3.5 h-3.5 text-navy" />
              {area}
            </span>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
