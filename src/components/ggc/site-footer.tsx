"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Youtube, Twitter, Instagram, Send, Loader2, ArrowUp, Phone } from "lucide-react";
import { SITE, FOOTER_LINKS_1, FOOTER_LINKS_2, SOCIALS, WHATSAPP_URL } from "@/lib/ggc-data";
import { GGCLogo } from "./ggc-logo";
import { useToast } from "@/hooks/use-toast";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
  instagram: Instagram,
};

export function FooterCta() {
  return (
    <section id="greenview-estate" className="relative overflow-hidden" aria-label="Available houses">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ggc/hero-estate.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#1568A4]/85" aria-hidden="true" />
      <div className="relative rg-container flex flex-col items-center gap-6 py-16 text-center lg:flex-row lg:justify-between lg:py-20 lg:text-left">
        <div>
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[4px] text-[#A9D5F2]">
            GGC Greenview Estate
          </p>
          <h2 className="rg-heading max-w-3xl text-3xl text-white sm:text-4xl">
            Lands &amp; houses for sale in Ghana —
            <br className="hidden sm:block" /> move into your new home this year
          </h2>
        </div>
        <Link href="#search-homes" className="rg-btn shrink-0">
          Available Houses for Sale
        </Link>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Subscription failed");
      toast({ title: "Subscribed!", description: "You have been added to our newsletter." });
      setEmail("");
    } catch (err) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <footer className="relative bg-[#111111] text-white" aria-label="Site footer">
      <div className="rg-container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Col 1: Logo + about + phones */}
        <div>
          <div className="mb-5 inline-block bg-white p-3">
            <GGCLogo className="h-10 w-auto" />
          </div>
          <h2 className="rg-heading mb-3 text-xl text-white">GGC Properties — Lands &amp; Houses</h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">{SITE.about}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{SITE.about2}</p>
          <div className="mt-5 flex flex-col gap-2">
            <a
              href={SITE.phones.officeHref}
              className="flex items-center gap-2.5 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#A9D5F2]" />
              {SITE.phones.office}
            </a>
            <a
              href={SITE.phones.mobileHref}
              className="flex items-center gap-2.5 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#A9D5F2]" />
              {SITE.phones.mobile}
            </a>
          </div>
        </div>

        {/* Col 2: Useful links */}
        <nav aria-label="Useful links">
          <h2 className="rg-heading mb-5 text-xl text-white">Useful Links</h2>
          <ul className="space-y-2.5">
            {FOOTER_LINKS_1.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#1B7DC3]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 3: secondary links */}
        <nav aria-label="Quick links">
          <h2 className="rg-heading mb-5 text-xl text-white">&nbsp;</h2>
          <ul className="space-y-2.5">
            {FOOTER_LINKS_2.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#1B7DC3]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 4: Subscribe + socials */}
        <div>
          <h2 className="rg-heading mb-3 text-xl text-white">Subscribe</h2>
          <p className="mb-4 text-sm text-white/70">
            Get In Touch — subscribe to receive our latest news and offers.
          </p>
          <form onSubmit={subscribe} className="flex" aria-label="Newsletter subscription">
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input
              id="nl-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-12 w-full border border-white/20 bg-white/10 px-3 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#1B7DC3]"
            />
            <button
              type="submit"
              disabled={busy}
              aria-label="Subscribe"
              className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#1B7DC3] text-white transition-colors hover:bg-[#1568A4] disabled:opacity-60"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </form>

          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/25 text-white/80 transition-all hover:border-[#1B7DC3] hover:bg-[#1B7DC3] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="rg-container flex flex-col items-center justify-between gap-3 py-5 text-sm text-white/60 sm:flex-row">
          <p>
            {SITE.copyright.replace("All Rights Reserved |", "All Rights Reserved")}
          </p>
          <div className="flex items-center gap-4 text-[13px]">
            <Link href="#contact" className="hover:text-[#1B7DC3]">Contact</Link>
            <span aria-hidden="true">|</span>
            <Link href="#privacy" className="hover:text-[#1B7DC3]">Cookie Policy</Link>
            <span aria-hidden="true">|</span>
            <Link href="#privacy" className="hover:text-[#1B7DC3]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Back to top (original #backupthepage) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center bg-[#1B7DC3] text-white shadow-lg transition-all hover:bg-[#1568A4] ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp float (GGC mobile line) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2a9.9 9.9 0 0 0-8.51 14.94L2 22l5.18-1.36A9.9 9.9 0 1 0 12.04 2Zm0 1.67a8.23 8.23 0 1 1-4.19 15.32l-.3-.18-3.05.8.81-2.98-.19-.31a8.23 8.23 0 0 1 6.92-12.65Zm-3.1 4.28c-.18 0-.46.06-.7.33-.24.26-.92.9-.92 2.19s.94 2.54 1.07 2.72c.13.17 1.82 2.91 4.5 3.96 2.23.88 2.68.7 3.17.66.48-.05 1.56-.64 1.78-1.26.22-.62.22-1.15.16-1.26-.07-.11-.24-.18-.5-.31-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.17.26-.68.85-.83 1.03-.15.17-.3.2-.56.06a7.06 7.06 0 0 1-2.08-1.29 8.03 8.03 0 0 1-1.44-1.8c-.15-.26-.02-.4.11-.53.12-.13.44-.52.55-.7.11-.18.06-.35-.02-.48-.09-.13-.6-1.5-.85-2.05-.2-.44-.4-.44-.57-.45h-.5Z" />
        </svg>
        WhatsApp us
      </a>
    </>
  );
}
