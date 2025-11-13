import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { PartnerBenefitsSection } from "./components/PartnerBenefitsSection";
import { CategorySection } from "./components/CategorySection";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { TreatmentCards } from "./components/TreatmentCards";
import { DoctorSection } from "./components/DoctorSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { LeadForm } from "./components/LeadForm";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";
import { HairTransplantDetail } from "./components/HairTransplantDetail";
import { OphthalmologyDetail } from "./components/OphthalmologyDetail";
import { DermatologyDetail } from "./components/DermatologyDetail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "hair" | "ophthalmology" | "dermatology"
  >("home");
  const [scrollToForm, setScrollToForm] = useState(false);

  // Scroll to top when page changes, or scroll to form if needed
  useEffect(() => {
    if (scrollToForm) {
      // Wait for page to render, then scroll to form
      setTimeout(() => {
        const formElement = document.querySelector(
          "#consultation-form",
        );
        if (formElement) {
          formElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        setScrollToForm(false);
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, scrollToForm]);

  const navigateToForm = (
    page: "home" | "hair" | "ophthalmology" | "dermatology",
  ) => {
    setCurrentPage(page);
    setScrollToForm(true);
  };

  if (currentPage === "hair") {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          onNavigate={setCurrentPage}
          currentPage={currentPage}
        />
        <HairTransplantDetail
          onBack={() => setCurrentPage("home")}
        />
        <FloatingCTA />
        <Footer />
      </div>
    );
  }

  if (currentPage === "ophthalmology") {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          onNavigate={setCurrentPage}
          currentPage={currentPage}
        />
        <OphthalmologyDetail
          onBack={() => setCurrentPage("home")}
        />
        <FloatingCTA />
        <Footer />
      </div>
    );
  }

  if (currentPage === "dermatology") {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          onNavigate={setCurrentPage}
          currentPage={currentPage}
        />
        <DermatologyDetail
          onBack={() => setCurrentPage("home")}
        />
        <FloatingCTA />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
      <HeroSection />
      <PartnerBenefitsSection />
      <CategorySection onNavigate={setCurrentPage} />
      <BeforeAfterSlider />
      <TreatmentCards onNavigate={navigateToForm} />
      <DoctorSection />
      <TestimonialsSection />
      <LeadForm />
      <FloatingCTA />
      <Footer />
    </div>
  );
}