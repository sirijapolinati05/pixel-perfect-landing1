import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CTASection from "@/components/CTASection";
import CXOSection from "@/components/CXOSection";
import DeliverSection from "@/components/DeliverSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PartnersSection from "@/components/PartnersSection";
import PracticesSection from "@/components/PracticesSection";
import ProcessSection from "@/components/ProcessSection";
import ResearchSection from "@/components/ResearchSection";
import AnalystTeamHero from "@/components/AnalystTeam/AnalystTeamHero";
import AnalystTeamTierOne from "@/components/AnalystTeam/AnalystTeamTierOne";
import AnalystTeamTierTwo from "@/components/AnalystTeam/AnalystTeamTierTwo";
import AnalystTeamTierThree from "@/components/AnalystTeam/tierthree/AnalystTeamTierThree";
import MicroMarketResearchExpertise from "@/components/MicroMarketResearch/MicroMarketResearchExpertise";
import MicroMarketResearchHero from "@/components/MicroMarketResearch/MicroMarketResearchHero";
import MicroMarketResearchMethodology from "@/components/MicroMarketResearch/MicroMarketResearchMethodology";
import TechnologyResearchDomains from "@/components/TechnologyResearch/TechnologyResearchDomains";
import TechnologyResearchHero from "@/components/TechnologyResearch/TechnologyResearchHero";
import TechnologyResearchNavbar from "@/components/TechnologyResearch/TechnologyResearchNavbar";
import TechnologyResearchOffering from "@/components/TechnologyResearch/TechnologyResearchOffering";
import TechnologyResearchPapers from "@/components/TechnologyResearch/TechnologyResearchPapers";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
};

const HomePage = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <PracticesSection />
    <CXOSection />
    <DeliverSection />
    <ProcessSection />
    <ResearchSection />
    <PartnersSection />
    <CTASection />
    <Footer />
  </div>
);

const AnalystTeamPage = () => (
  <div className="min-h-screen bg-[#f8f7f3]">
    <Navbar />
    <div className="pt-[78px] lg:pt-[84px]">
      <AnalystTeamHero />
      <AnalystTeamTierOne />
      <AnalystTeamTierTwo />
      <AnalystTeamTierThree />
      <CTASection />
      <Footer />
    </div>
  </div>
);

const MicroMarketResearchPage = () => (
  <div className="min-h-screen bg-[#f8f7f3] pt-[78px] lg:pt-[84px]">
    <TechnologyResearchNavbar />
    <MicroMarketResearchHero />
    <MicroMarketResearchExpertise />
    <MicroMarketResearchMethodology />
    <CTASection />
    <Footer />
  </div>
);

const TechnologyResearchPage = () => (
  <div className="min-h-screen bg-[#f8f7f3] pt-[78px] lg:pt-[84px]">
    <TechnologyResearchNavbar />
    <TechnologyResearchHero />
    <TechnologyResearchDomains />
    <TechnologyResearchOffering />
    <TechnologyResearchPapers />
    <CTASection />
    <Footer />
  </div>
);

const NotFoundPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-muted">
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
      <a href="/" className="text-primary underline hover:text-primary/90">
        Return to Home
      </a>
    </div>
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyst-team" element={<AnalystTeamPage />} />
        <Route
          path="/micro-market-research"
          element={<MicroMarketResearchPage />}
        />
        <Route
          path="/technology-research"
          element={<TechnologyResearchPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
