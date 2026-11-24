"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { STAGES } from "@/lib/ggc-data";

export function Highlights() {
  return (
    <section
      id="highlights"
      className="relative py-20 lg:py-28"
      aria-label="Highlights"
    >
      {/* Background (GGC community park) */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ggc/highlights-bg.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/85" aria-hidden="true" />
      </div>

      <div className="rg-container">
        <div className="mb-10 text-center">
          <p className="rg-label mb-3">Highlights</p>
          <h2 className="rg-heading text-3xl sm:text-4xl lg:text-[46px]">
            Your trusted partner for lands &amp; houses in Ghana
          </h2>
        </div>

        <div className="mx-auto max-w-4xl rounded-none border border-[#e1e1e1] bg-white/95 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-12">
          <h3 className="rg-heading text-2xl sm:text-3xl">Buy, Sell &amp; Rent The GGC Way</h3>
          <p className="mt-4 text-base leading-relaxed text-[#666]">
            Every GGC property starts with genuine title verification and ends with keys (or cash)
            safely in your hands. We verify documents, service the land, guide your payments and
            stay available long after the deal is signed — that is why our clients keep coming back.
          </p>

          <h3 className="rg-heading mt-10 text-2xl sm:text-3xl">How we do it. The Stages</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {STAGES.map((stage) => (
              <li key={stage} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1B7DC3]" />
                <span className="text-base font-medium text-[#333]">{stage}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href="#lands-plots" className="rg-btn">
              See How We Do It
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
