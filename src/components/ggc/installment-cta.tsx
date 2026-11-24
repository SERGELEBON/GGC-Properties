"use client";

import Image from "next/image";
import Link from "next/link";

export function InstallmentCta() {
  return (
    <section id="installment-plan" className="relative bg-white py-20 lg:py-24" aria-label="Installment payment plans">
      <div className="rg-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 h-[320px] overflow-hidden sm:h-[420px] lg:order-1 lg:h-[480px]">
            <Image
              src="/images/ggc/living-room.png"
              alt="A house for sale in Accra Ghana. An extended view of an open plan modern living room."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 border border-[#e1e1e1] translate-x-3 translate-y-3 -z-10" aria-hidden="true" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="rg-label mb-3">Buy a New Home</p>
            <h2 className="rg-heading text-3xl sm:text-4xl lg:text-[42px]">
              Premium Homes &amp; Lands in Accra with Flexible Payment Plans
            </h2>
            <h3 className="mt-4 text-xl font-semibold text-[#C8262C]">
              A Guide to our Flexible Payment Plans.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#666]">
              With up to 36 months of negotiated monthly payments, you can find a suitable plan
              for your new home or plot with GGC Properties.
            </p>
            <Link href="#contact" className="rg-btn mt-8">
              Find Out More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
