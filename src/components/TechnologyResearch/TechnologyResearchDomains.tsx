import { useState } from "react";

import processOne from "@/assets/TechnologyResearch/HPC-QuantumComputing.png";
import processTwo from "@/assets/TechnologyResearch/Chipset-AIHardware.png";
import processThree from "@/assets/TechnologyResearch/AI-IntelligenceAugmentation.png";
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";

const domains = [
  {
    image: processOne,
    title: "HPC & Quantum Computing",
    description:
      "Mapping the trajectory from NISQ-era devices to fault-tolerant quantum systems. We analyze qubit architectures, error correction breakthroughs, and the emerging quantum software ecosystem.",
  },
  {
    image: processTwo,
    title: "Chipset & AI Hardware",
    description:
      "Deep dives into next-generation silicon, from custom AI accelerators and neuromorphic chips to advanced packaging and the geopolitics of semiconductor supply chains.",
  },
  {
    image: processThree,
    title: "AI & Intelligence Augmentation",
    description:
      "From foundation models to agentic AI and intelligence augmentation, our research navigates enterprise adoption, safety frameworks, and the convergence of human and machine intelligence.",
  },
];

const TechnologyResearchDomains = () => {
  // ✅ ONLY ONE ACTIVE CARD
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="domains"
      className="
      relative overflow-hidden bg-white
      py-10 sm:py-12 md:py-14 lg:py-12 xl:py-14 2xl:py-16
      text-[#141742]"
    >
      <img
        src={whiteTypographyImg}
        alt=""
        aria-hidden="true"
        className="
        pointer-events-none absolute 
        right-[-45%] sm:right-[-34%] md:right-[-25%] lg:right-[-22%] xl:right-[-18%] 2xl:right-[-15%]
        top-[-8%] sm:top-[-10%] md:top-[-14%] lg:top-[-12%]
        w-[180px] sm:w-[260px] md:w-[400px] lg:w-[520px] xl:w-[600px] 2xl:w-[700px]
        opacity-20 scale-x-[-1] rotate-90 -rotate-[30deg]"
      />

      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 relative mx-auto">

        <div className="mb-2 flex items-center gap-2 sm:gap-3">
          <span className="h-[1px] w-4 bg-current opacity-40"></span>

          <p className="text-[clamp(1rem,1.2vw,1.375rem)] font-bold text-[#202453] whitespace-nowrap">
            Research Domains
          </p>

          <span className="h-[1px] w-4 bg-current opacity-40"></span>
        </div>

        <h2 className="
        mt-2
        text-[clamp(1.75rem,4vw,3rem)]
        font-bold leading-[1.05] tracking-[-0.03em]">
          Three Pillars Shaping the Future of Technology
        </h2>

        <p className="
        mt-3
        max-w-[900px]
        text-[clamp(0.875rem,1.1vw,1.25rem)]
        leading-relaxed
        text-[#202453]/88">
          Our research is concentrated across three transformative domains where deep
          analysis and expert perspective create outsized strategic value.
        </p>

        <div className="
        mt-6
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-5 sm:gap-6 md:gap-7 lg:gap-6">

          {domains.map((domain, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={domain.title}
                onClick={() => setActiveIndex(index)}
                className={`
                  group flex flex-col h-full
                  p-4 sm:p-5 md:p-6
                  transition-all duration-300
                  cursor-pointer
                  ${isActive ? "bg-[#26A9E0]" : "bg-white"}
                  hover:-translate-y-1 hover:scale-[1.02]
                `}
              >
                <div className="aspect-[1.02/0.72] overflow-hidden bg-[#11153b]">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="h-full w-full object-cover transition group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-3 text-[clamp(1.25rem,1.5vw,1.5rem)] font-semibold leading-tight text-[#111111] break-words">
                  {domain.title}
                </h3>

                <p className="mt-2 text-[clamp(0.875rem,1vw,1rem)] leading-relaxed text-[#202453]/88 break-words flex-grow">
                  {domain.description}
                </p>

                <a
                  href="#papers"
                  className="mt-4 inline-flex items-center gap-2 text-[13px] sm:text-[14px] md:text-[16px] font-semibold uppercase text-[#111111]"
                >
                  Explore Research →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchDomains;