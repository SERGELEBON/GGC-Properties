"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Play, Loader2, Phone, Smartphone } from "lucide-react";
import { SHOWREEL_HREF, SITE } from "@/lib/ggc-data";

export function ReadyToHelp() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [done, setDone] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill in your name, email and message.", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setDone(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      toast({ title: "Message sent!", description: "You'll be connected to a team member for assistance." });
    } catch (err) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden" aria-label="Contact">
      {/* Background (GGC dusk exterior) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ggc/contact-bg.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#1a0d08]/75" aria-hidden="true" />
      </div>

      <div className="relative rg-container py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: heading + video */}
          <div className="text-white">
            <h2 className="rg-heading text-3xl text-white sm:text-4xl lg:text-[44px]">
              We&apos;re ready to help.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85">
              Have a question, feedback, or interest in buying, selling or renting a property?
              <br />
              You&apos;ll be connected to a team member for assistance.
            </p>

            {/* Phone numbers from the GGC signboard */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
              <a
                href={SITE.phones.officeHref}
                className="flex items-center gap-3 text-white transition-colors hover:text-[#A9D5F2]"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-[#1B7DC3] bg-[#1B7DC3]/20">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-white/70">Office</span>
                  <span className="text-base font-bold">{SITE.phones.office}</span>
                </span>
              </a>
              <a
                href={SITE.phones.mobileHref}
                className="flex items-center gap-3 text-white transition-colors hover:text-[#A9D5F2]"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-[#1B7DC3] bg-[#1B7DC3]/20">
                  <Smartphone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[2px] text-white/70">Mobile / WhatsApp</span>
                  <span className="text-base font-bold">{SITE.phones.mobile}</span>
                </span>
              </a>
            </div>

            <a
              href={SHOWREEL_HREF}
              className="group mt-10 flex items-center gap-4"
              aria-label="Explore our listings"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#1B7DC3] bg-[#1B7DC3]/20 transition-colors group-hover:bg-[#1B7DC3]">
                <Play className="ml-1 h-6 w-6 text-white" fill="currentColor" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[2px] text-white/90 group-hover:text-[#A9D5F2]">
                Explore our listings
              </span>
            </a>
          </div>

          {/* Right: form */}
          <form
            onSubmit={submit}
            className="bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-9"
            aria-label="Contact form"
          >
            {done && (
              <div className="mb-5 border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                Thank you! Your message has been received. Our team will contact you shortly.
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="mb-1.5 block text-[13px] font-semibold text-[#333]">
                  Your Name <span className="text-[#1B7DC3]">*</span>
                </label>
                <input
                  id="cf-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="e.g. Kwame Mensah"
                  className="h-12 w-full border border-[#e1e1e1] px-3 text-sm outline-none placeholder:text-[#bbb] focus:border-[#1B7DC3]"
                />
              </div>
              <div>
                <label htmlFor="cf-email" className="mb-1.5 block text-[13px] font-semibold text-[#333]">
                  Your Email <span className="text-[#1B7DC3]">*</span>
                </label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className="h-12 w-full border border-[#e1e1e1] px-3 text-sm outline-none placeholder:text-[#bbb] focus:border-[#1B7DC3]"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="cf-phone" className="mb-1.5 block text-[13px] font-semibold text-[#333]">
                Your Phone
              </label>
              <input
                id="cf-phone"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="Phone number"
                className="h-12 w-full border border-[#e1e1e1] px-3 text-sm outline-none placeholder:text-[#bbb] focus:border-[#1B7DC3]"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="cf-message" className="mb-1.5 block text-[13px] font-semibold text-[#333]">
                Your Message <span className="text-[#1B7DC3]">*</span>
              </label>
              <textarea
                id="cf-message"
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Text here"
                className="w-full resize-none border border-[#e1e1e1] p-3 text-sm outline-none placeholder:text-[#bbb] focus:border-[#1B7DC3]"
              />
            </div>
            <button type="submit" disabled={sending} className="rg-btn mt-6 disabled:opacity-60">
              {sending && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
