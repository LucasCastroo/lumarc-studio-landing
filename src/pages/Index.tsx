import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PartnersSection from "@/components/PartnersSection";
import ProcessSection from "@/components/ProcessSection";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lumarc Studio | Sites e Landing Pages de Alta Conversão</title>
        <meta
          name="description"
          content="Criamos sites e landing pages de alta conversão para pequenos e médios empreendedores. Design moderno, performance e estratégia para fazer sua empresa vender mais."
        />
        <meta name="keywords" content="landing page, site institucional, web design, conversão, SEO, desenvolvimento web" />
        <link rel="canonical" href="https://lumarcstudio.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Lumarc Studio | Sites e Landing Pages de Alta Conversão" />
        <meta property="og:description" content="Design moderno e estratégia para fazer sua empresa vender mais no digital." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lumarcstudio.com" />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Lumarc Studio",
            "description": "Especialistas em criação de sites e landing pages de alta conversão",
            "url": "https://lumarcstudio.com",
            "serviceType": ["Web Design", "Landing Page", "Site Institucional"],
            "areaServed": "BR"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyChooseSection />
          <PartnersSection />
          <ProcessSection />

          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
