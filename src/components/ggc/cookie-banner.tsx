"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  {
    key: "necessary",
    title: "Necessary",
    alwaysActive: true,
    description:
      "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
  },
  {
    key: "functional",
    title: "Functional",
    alwaysActive: false,
    description:
      "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
  },
  {
    key: "analytics",
    title: "Analytics",
    alwaysActive: false,
    description:
      "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
  },
  {
    key: "performance",
    title: "Performance",
    alwaysActive: false,
    description:
      "Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
  },
  {
    key: "advertisement",
    title: "Advertisement",
    alwaysActive: false,
    description:
      "Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.",
  },
];

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const consent = localStorage.getItem("ggc-cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (mode: "accept" | "reject" | "custom") => {
    const value =
      mode === "custom"
        ? Object.fromEntries(CATEGORIES.map((c) => [c.key, c.alwaysActive || !!prefs[c.key]]))
        : mode === "accept"
          ? Object.fromEntries(CATEGORIES.map((c) => [c.key, true]))
          : Object.fromEntries(CATEGORIES.map((c) => [c.key, c.alwaysActive]));
    localStorage.setItem("ggc-cookie-consent", JSON.stringify(value));
    setVisible(false);
    setShowPrefs(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] border-t border-[#e1e1e1] bg-white shadow-[0_-6px_30px_rgba(0,0,0,0.15)]"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
    >
      <div className="rg-container py-5">
        {!showPrefs ? (
          <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-4xl">
              <p className="mb-1 text-base font-bold text-[#1f2124]">We value your privacy</p>
              <p className="text-sm leading-relaxed text-[#666]">
                We use cookies to enhance your browsing experience, serve personalized ads or
                content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent
                to our use of cookies.{" "}
                <Link href="#privacy" className="font-semibold text-[#1B7DC3] underline">
                  Cookie Policy
                </Link>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                onClick={() => setShowPrefs(true)}
                className="border border-[#1B7DC3] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#1B7DC3] transition-colors hover:bg-[#1B7DC3]/10"
              >
                Customize
              </button>
              <button
                onClick={() => save("reject")}
                className="border border-[#ccc] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#444] transition-colors hover:bg-[#f5f5f5]"
              >
                Reject All
              </button>
              <button
                onClick={() => save("accept")}
                className="bg-[#1B7DC3] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1568A4]"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-1 text-base font-bold text-[#1f2124]">Customize Consent Preferences</p>
            <p className="mb-4 text-sm text-[#666]">
              We use cookies to help you navigate efficiently and perform certain functions. You
              will find detailed information about all cookies under each consent category below.
            </p>
            <div className="rg-scroll max-h-64 space-y-3 overflow-y-auto pr-2">
              {CATEGORIES.map((c) => (
                <div key={c.key} className="border border-[#e1e1e1] p-4">
                  <div className="mb-1.5 flex items-center justify-between">
                    <p className="text-sm font-bold text-[#1f2124]">
                      {c.title}
                      {c.alwaysActive && (
                        <span className="ml-2 text-[11px] font-semibold text-[#999]">
                          Always Active
                        </span>
                      )}
                    </p>
                    {!c.alwaysActive && (
                      <button
                        role="switch"
                        aria-checked={!!prefs[c.key]}
                        aria-label={`Enable ${c.title} cookies`}
                        onClick={() => setPrefs({ ...prefs, [c.key]: !prefs[c.key] })}
                        className={`relative h-5 w-10 rounded-full transition-colors ${
                          prefs[c.key] ? "bg-[#1B7DC3]" : "bg-[#ccc]"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                            prefs[c.key] ? "left-5" : "left-0.5"
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#666]">{c.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap justify-end gap-2">
              <button
                onClick={() => save("reject")}
                className="border border-[#ccc] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#444] transition-colors hover:bg-[#f5f5f5]"
              >
                Reject All
              </button>
              <button
                onClick={() => save("custom")}
                className="border border-[#1B7DC3] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#1B7DC3] transition-colors hover:bg-[#1B7DC3]/10"
              >
                Save My Preferences
              </button>
              <button
                onClick={() => save("accept")}
                className="bg-[#1B7DC3] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1568A4]"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
