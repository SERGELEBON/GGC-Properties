/**
 * Centralised content for the GGC Properties website.
 * Brand, services and contacts follow the company signboard:
 * GGC PROPERTIES (LANDS & HOUSES) — BUY / SELL / RENT
 * Phone: 0303-93-53-13 / 0202-80-80-80
 */

export const SITE = {
  name: "GGC Properties",
  tagline: "Lands & Houses",
  title: "GGC Properties | Lands & Houses — Buy, Sell & Rent in Ghana",
  description:
    "GGC Properties helps you buy, sell and rent lands and houses across Accra and beyond. Trusted property advisors for homes, serviced plots and rentals in Ghana.",
  copyright: "Copyright © 2025 | GGC Properties | All Rights Reserved",
  phones: {
    office: "0303-93-53-13",
    officeHref: "tel:+23303935313",
    mobile: "0202-80-80-80",
    mobileHref: "tel:+233202808080",
  },
  about:
    "GGC Properties is a Ghanaian real estate agency dedicated to lands and houses. We help families, investors and the diaspora buy, sell and rent with total confidence.",
  about2:
    "From titled serviced plots to finished homes and managed rentals, our team handles the search, the paperwork and the negotiation — so you can move in or cash out with peace of mind.",
} as const;

/* ------------------------------------------------------------------ */
/* NAVIGATION                                                          */
/* ------------------------------------------------------------------ */

export type NavItem = {
  label: string;
  href: string;
  badge?: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT GGC",
    href: "#",
    children: [
      { label: "OVERVIEW", href: "#corporate-overview" },
      { label: "HALLMARKS", href: "#hallmarks" },
      { label: "BRAND STORY", href: "#brand-story" },
      { label: "HOW WE WORK", href: "#how-we-are-organised" },
      { label: "GGC AT A GLANCE", href: "#ggc-at-a-glance" },
      { label: "OUR TEAM", href: "#our-team" },
    ],
  },
  {
    label: "OUR SERVICES",
    href: "#",
    children: [
      {
        label: "BUY A HOUSE",
        href: "#buy-a-house",
        children: [
          { label: "HOW TO BUY", href: "#how-to-buy" },
          { label: "WHY WE'RE TRUSTED", href: "#why-trusted" },
        ],
      },
      {
        label: "SELL WITH US",
        href: "#sell-with-us",
        children: [
          { label: "VALUATION & PRICING", href: "#valuation-pricing" },
          { label: "MARKETING & VIEWINGS", href: "#marketing-viewings" },
          { label: "CLOSING & DOCUMENTATION", href: "#closing-documentation" },
        ],
      },
      {
        label: "RENT & LEASE",
        href: "#rent-lease",
        children: [
          { label: "RESIDENTIAL RENTALS", href: "#residential-rentals" },
          { label: "SHORT STAY & CORPORATE", href: "#short-stay" },
          { label: "PROPERTY MANAGEMENT", href: "#property-management" },
        ],
      },
      {
        label: "LANDS & PLOTS",
        href: "#lands-plots",
        children: [
          { label: "SERVICED PLOTS", href: "#serviced-plots" },
          { label: "COMMERCIAL LAND", href: "#commercial-land" },
        ],
      },
    ],
  },
  { label: "NEWS & INSIGHTS", href: "#news" },
  {
    label: "BUY A HOUSE",
    href: "#buy-a-house",
    children: [
      { label: "HOW TO BUY", href: "#how-to-buy" },
      { label: "WHY WE'RE TRUSTED", href: "#why-trusted" },
      { label: "GGC GREENVIEW ESTATE", href: "#greenview-estate", badge: "NEW" },
      { label: "GGC SUNSET COURT", href: "#sunset-court" },
      { label: "EAST LEGON GARDENS (SOLD OUT)", href: "#east-legon-gardens" },
    ],
  },
  { label: "CONTACT", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* HERO SLIDER                                                         */
/* ------------------------------------------------------------------ */

export type HeroSlide = {
  image: string;
  alt: string;
  brand?: string;
  titleLines?: string[];
  text?: string;
  button?: { label: string; href: string };
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/ggc/hero-house.png",
    alt: "A modern family house available for sale in a serene GGC Properties community in Accra",
  },
  {
    image: "/images/ggc/hero-kitchen.png",
    alt: "Move into a home with a beautifully finished modern kitchen",
    brand: "GGC Properties — Lands & Houses",
    titleLines: ["Homes finished", "to your taste"],
    text: "Move into a beautifully completed home or customise the finishes to make it truly yours.",
    button: { label: "Discover Homes", href: "#search-homes" },
  },
  {
    image: "/images/ggc/hero-land.png",
    alt: "Secure serviced land plots ready for construction in prime locations",
    brand: "GGC Properties — Lands & Houses",
    titleLines: ["Serviced Plots", "Ready To Build"],
    text: "Secure titled land in prime locations and start building your dream project right away.",
    button: { label: "View Lands", href: "#projects" },
  },
  {
    image: "/images/ggc/hero-estate.png",
    alt: "Buy, sell and rent with one trusted partner for lands and houses in Ghana",
    brand: "GGC Properties — Lands & Houses",
    titleLines: ["Buy.", "Sell. Rent."],
    text: "One trusted partner for lands and houses across Ghana — call us today and get moving.",
    button: { label: "Talk To Us", href: "#contact" },
  },
];

/* ------------------------------------------------------------------ */
/* SERVICES SHOWCASE (was Projects)                                    */
/* ------------------------------------------------------------------ */

export const PROJECT_CARDS = [
  {
    title: "Houses For Sale",
    image: "/images/ggc/project-buy.png",
    alt: "A beautiful modern family house with a manicured garden listed for sale by GGC Properties",
    href: "#search-homes",
  },
  {
    title: "Serviced Lands & Plots",
    image: "/images/ggc/project-land.png",
    alt: "Serviced residential plots with green lawn and survey beacons ready for construction",
    href: "#lands-plots",
  },
  {
    title: "Rentals & Leasing",
    image: "/images/ggc/project-rent.png",
    alt: "A contemporary apartment building with balconies available for rent through GGC Properties",
    href: "#rent-lease",
  },
];

/* ------------------------------------------------------------------ */
/* PROPERTY LISTINGS                                                   */
/* ------------------------------------------------------------------ */

export type Property = {
  id: number;
  title: string;
  slug: string;
  price: number;
  excerpt: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  gallery: string[];
  tags: string[];
  location: string;
};

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "2 Bedroom Detached House (Expandable)",
    slug: "2-bedroom-detached-house-ggc-greenview",
    price: 165000,
    excerpt:
      "A cozy detached starter home with room to grow — expandable to three bedrooms on a generous plot inside GGC Greenview Estate.",
    beds: 2,
    baths: 2,
    area: 138,
    image: "/images/ggc/prop-1.png",
    gallery: [
      "/images/ggc/prop-1.png",
      "/images/ggc/living-room.png",
      "/images/ggc/hero-kitchen.png",
    ],
    tags: ["Detached", "Expandable", "Two Bedroom", "GGC Greenview Estate"],
    location: "GGC Greenview Estate, Oyibi",
  },
  {
    id: 2,
    title: "2 Bedroom Storey Home (Semi-Detached)",
    slug: "2-bedroom-storey-semi-detached-ggc-sunset",
    price: 212500,
    excerpt:
      "A modern storey home with all rooms ensuite, a guest washroom and a sunny balcony — designed for comfortable family living.",
    beds: 2,
    baths: 3,
    area: 165,
    image: "/images/ggc/prop-2.png",
    gallery: [
      "/images/ggc/prop-2.png",
      "/images/ggc/living-room.png",
      "/images/ggc/hero-kitchen.png",
    ],
    tags: ["All Rooms Ensuite", "+ Guest Washroom", "Semi-Detached", "Storey", "GGC Sunset Court"],
    location: "GGC Sunset Court, Adenta",
  },
  {
    id: 3,
    title: "3 Bedroom Storey House + 1 Bedsitter",
    slug: "3-bedroom-storey-detached-ggc-palm-grove",
    price: 253000,
    excerpt:
      "A spacious three bedroom family house with an extra one-bedroom bedsitter — perfect for extended family or steady rental income.",
    beds: 4,
    baths: 4,
    area: 180,
    image: "/images/ggc/prop-3.png",
    gallery: [
      "/images/ggc/prop-3.png",
      "/images/ggc/living-room.png",
      "/images/ggc/hero-kitchen.png",
    ],
    tags: ["+ Extra 1 Bedsitter", "+ Guest Washroom", "Detached", "GGC Palm Grove"],
    location: "GGC Palm Grove, Amasaman",
  },
];

/* ------------------------------------------------------------------ */
/* HIGHLIGHTS                                                          */
/* ------------------------------------------------------------------ */

export const STAGES = [
  "Identify Prime Locations",
  "Service The Land & Infrastructure",
  "Build & Manage Quality Homes",
  "Match Buyers, Sellers & Tenants",
];

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Buying our first home through GGC Properties was stress-free. They handled the documentation, walked us through every payment milestone and handed us the keys exactly when promised.",
    name: "Mrs. Adwoa Boateng",
    role: "Homeowner, GGC Sunset Court",
    avatar: "/images/ggc/avatar-1.png",
  },
  {
    quote:
      "I listed my house with GGC Properties and it sold within two months at a fair price. Their team kept me updated after every viewing and negotiated firmly on my behalf.",
    name: "Mr. Kwame Osei",
    role: "Property Seller, East Legon",
    avatar: "/images/ggc/avatar-2.png",
  },
  {
    quote:
      "From abroad, I rent out my apartment through GGC and I have total peace of mind. They screen the tenants, collect the rent on time and send me a clear report every month.",
    name: "Ms. Efua Mensah",
    role: "Landlord, Airport Residential Area",
    avatar: "/images/ggc/avatar-3.png",
  },
];

/* ------------------------------------------------------------------ */
/* NEWS & ARTICLES                                                     */
/* ------------------------------------------------------------------ */

export type Article = {
  title: string;
  image: string;
  categories: string[];
  date: string;
  author: string;
  href: string;
};

export const ARTICLES: Article[] = [
  {
    title: "5 Things To Check Before You Buy Land In Ghana",
    image: "/images/ggc/news-1.png",
    categories: ["Buying Tips", "Lands"],
    date: "January 14, 2026",
    author: "GGC Editorial",
    href: "#news",
  },
  {
    title: "How Our Flexible Payment Plans Help You Own A Home Sooner",
    image: "/images/ggc/news-2.png",
    categories: ["Payment Plans", "Homeownership"],
    date: "March 3, 2026",
    author: "GGC Editorial",
    href: "#news",
  },
  {
    title: "Renting In Accra: A Simple Guide For Tenants And Landlords",
    image: "/images/ggc/news-3.png",
    categories: ["Renting", "Insights"],
    date: "April 21, 2026",
    author: "GGC Editorial",
    href: "#news",
  },
];

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */

export const FOOTER_LINKS_1 = [
  { label: "Search Homes", href: "#search-homes" },
  { label: "Contact Us", href: "#contact" },
  { label: "Brand Story", href: "#brand-story" },
  { label: "Our Team", href: "#our-team" },
  { label: "Our Hallmarks", href: "#hallmarks" },
  { label: "Our Services", href: "#lands-plots" },
  { label: "News & Insights", href: "#news" },
];

export const FOOTER_LINKS_2 = [
  { label: "Search Homes", href: "#search-homes" },
  { label: "Contact Us", href: "#contact" },
  { label: "Flexible Payment Plan", href: "#installment-plan" },
  { label: "Lands For Sale", href: "#lands-plots" },
  { label: "Rent & Lease", href: "#rent-lease" },
];

export const SOCIALS = [
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "Youtube", icon: "youtube", href: "#" },
  { label: "Twitter", icon: "twitter", href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
];

export const WHATSAPP_URL = "https://wa.me/233202808080";
export const SHOWREEL_HREF = "#projects";
