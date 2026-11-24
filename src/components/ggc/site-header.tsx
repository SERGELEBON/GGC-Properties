"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/lib/ggc-data";
import { GGCLogo } from "./ggc-logo";

type NavItem = (typeof NAV)[number] & { children?: NavItem[] };

function SubMenu({ items, depth = 0 }: { items: NavItem[]; depth?: number }) {
  return (
    <ul
      className={`min-w-[240px] py-2 ${depth > 0 ? "" : "shadow-[0_10px_30px_rgba(0,0,0,0.12)]"}`}
    >
      {items.map((item) => (
        <li key={item.label} className="rg-nav-item group relative">
          <Link
            href={item.href}
            className="flex items-center justify-between gap-3 px-5 py-2.5 text-[13px] font-semibold tracking-wide text-[#1f2124] transition-colors hover:bg-[#1B7DC3] hover:text-white"
          >
            <span className="flex items-center gap-2">
              {item.label}
              {item.badge && (
                <span className="rounded-sm bg-[#1B7DC3] px-1.5 py-0.5 text-[9px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </span>
            {item.children && <ChevronDown className="h-3.5 w-3.5 -rotate-90" />}
          </Link>
          {item.children && (
            <div className="rg-dropdown invisible absolute left-full top-0 z-50 hidden opacity-0 md:block">
              <div className="ml-1 border border-[#e1e1e1] bg-white">
                <SubMenu items={item.children} depth={depth + 1} />
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleSub = (label: string) => setOpenSub(openSub === label ? null : label);

  const renderMobileItems = (items: NavItem[], depth = 0) =>
    items.map((item) => (
      <div key={item.label}>
        <div
          className={`flex items-center justify-between ${depth === 0 ? "py-3 border-b border-[#eee]" : "py-2.5"} `}
        >
          <Link
            href={item.href}
            className={`text-[13px] font-semibold tracking-wide ${depth === 0 ? "text-[#1f2124]" : "text-[#666]"}`}
            onClick={() => !item.children && setMobileOpen(false)}
          >
            <span className="flex items-center gap-2">
              {item.label}
              {item.badge && (
                <span className="rounded-sm bg-[#1B7DC3] px-1.5 py-0.5 text-[9px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </span>
          </Link>
          {item.children && (
            <button
              aria-label={`Toggle ${item.label}`}
              onClick={() => toggleSub(item.label)}
              className="p-1"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${openSub === item.label ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
        {item.children && openSub === item.label && (
          <div className="pl-4 pb-2">{renderMobileItems(item.children, depth + 1)}</div>
        )}
      </div>
    ));

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-[0_2px_18px_rgba(0,0,0,0.12)]" : ""
      }`}
    >
      <div className="rg-container flex h-[76px] items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="GGC Properties — Home">
          <GGCLogo className="h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => (
              <li key={item.label} className="rg-nav-item group relative">
                <Link
                  href={item.href}
                  className="rg-nav-link flex items-center gap-1.5 py-6 text-[13px] font-bold tracking-wide text-[#1f2124] hover:text-[#1B7DC3]"
                  data-active={item.label === "HOME"}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {item.children && (
                  <div className="rg-dropdown invisible absolute left-0 top-full z-50 opacity-0">
                    <div className="border border-[#e1e1e1] bg-white">
                      <SubMenu items={item.children as NavItem[]} />
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="#search-homes" className="rg-btn !py-3.5 !px-7">
                Buy a House
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className="xl:hidden flex h-11 w-11 items-center justify-center border border-[#e1e1e1] text-[#1f2124]"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Brand red bottom bar (GGC signboard accent) */}
      <div className="h-[5px] w-full bg-[#C8262C]" aria-hidden="true" />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white">
            <div className="flex items-center justify-between border-b border-[#eee] p-4">
              <GGCLogo className="h-9 w-auto" />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center border border-[#e1e1e1]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
              {renderMobileItems(NAV as NavItem[])}
            </nav>
            <div className="border-t border-[#eee] p-5">
              <Link
                href="#search-homes"
                className="rg-btn w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Buy a House
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
