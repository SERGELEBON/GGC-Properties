import type { Metadata } from "next";
import "@fontsource/barlow/100.css";
import "@fontsource/barlow/200.css";
import "@fontsource/barlow/300.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/800.css";
import "@fontsource/barlow/900.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "GGC Properties | Lands & Houses — Buy, Sell & Rent in Ghana",
  description:
    "GGC Properties helps you buy, sell and rent lands and houses across Accra and beyond. Trusted property advisors for homes, serviced plots and rentals in Ghana. Call 0303-93-53-13 / 0202-80-80-80.",
  keywords: [
    "GGC Properties",
    "lands and houses Ghana",
    "houses for sale in Accra",
    "buy house Ghana",
    "sell house Ghana",
    "rent house Accra",
    "serviced plots Ghana",
    "real estate Ghana",
  ],
  openGraph: {
    title: "GGC Properties | Lands & Houses — Buy, Sell & Rent in Ghana",
    description:
      "GGC Properties helps you buy, sell and rent lands and houses across Accra and beyond. Trusted property advisors for homes, serviced plots and rentals in Ghana.",
    siteName: "GGC Properties — Lands & Houses",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GGC Properties | Lands & Houses — Buy, Sell & Rent in Ghana",
    description:
      "GGC Properties helps you buy, sell and rent lands and houses across Accra and beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
