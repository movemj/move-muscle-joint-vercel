'use client';

import { useState } from 'react';
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

const serviceAreas = ["Overland Park", "Leawood", "Prairie Village", "Olathe", "Shawnee", "Lenexa", "Kansas City metro"];

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
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact", path: "/contact" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl mt-4">
            Contact Move Muscle & Joint
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-5 text-lg text-white/70 max-w-2xl">
            Have a question? Use the form below or visit our office in Overland Park. To schedule care, we recommend booking online.
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
              <p className="text-xs text-steel">Looking to schedule an appointment? <a href="/book" className="text-navy font-semibold hover:underline">Book online</a> for the fastest experience.</p>
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
                    <p className="text-sm text-steel">{SITE.phone}</p>
                    <p className="text-xs text-steel mt-0.5">For general questions only. To schedule, please book online.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-charcoal">Hours</p>
                    <p className="text-sm text-steel">Monday – Friday: By appointment</p>
                    <p className="text-sm text-steel">Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-64 bg-secondary">
              <iframe
                title="Move Muscle & Joint Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.5!2d-94.646!3d38.926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU1JzMzLjAiTiA5NMKwMzgnNDUuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6">
              <CTAButton href="/book" label="Book Your Appointment" showArrow size="lg" />
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
