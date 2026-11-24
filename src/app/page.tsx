import { SiteHeader } from "@/components/ggc/site-header";
import { HeroSlider } from "@/components/ggc/hero-slider";
import { ProjectsShowcase } from "@/components/ggc/projects-showcase";
import { HomesSearch } from "@/components/ggc/homes-search";
import { InstallmentCta } from "@/components/ggc/installment-cta";
import { Highlights } from "@/components/ggc/highlights";
import { ReadyToHelp } from "@/components/ggc/ready-to-help";
import { Testimonials } from "@/components/ggc/testimonials";
import { NewsArticles } from "@/components/ggc/news-articles";
import { FooterCta, SiteFooter, FloatingButtons } from "@/components/ggc/site-footer";
import { CookieBanner } from "@/components/ggc/cookie-banner";

export default function GGCPropertiesHome() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        <h1 className="sr-only">
          Homepage — GGC Properties | Lands &amp; Houses — Buy, Sell &amp; Rent in Ghana
        </h1>
        <HeroSlider />
        <ProjectsShowcase />
        <HomesSearch />
        <InstallmentCta />
        <Highlights />
        <ReadyToHelp />
        <Testimonials />
        <NewsArticles />
        <FooterCta />
      </main>

      <SiteFooter />
      <FloatingButtons />
      <CookieBanner />
    </div>
  );
}
