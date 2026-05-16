import { createFileRoute } from "@tanstack/react-router";
import { Nav, Hero, Features } from "@/components/landing/Hero";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials, FAQ, CTA, Footer } from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FaceFlow AI — IA, CRM e WhatsApp para clínicas odontológicas premium" },
      {
        name: "description",
        content:
          "Transforme sua clínica em uma máquina de conversão automatizada. CRM visual, IA comercial, WhatsApp e automações — tudo em uma plataforma.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
