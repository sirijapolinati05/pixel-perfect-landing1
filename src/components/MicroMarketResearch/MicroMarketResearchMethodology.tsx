import { useEffect, useState } from "react";

import methodologyImage from "@/assets/MicroMarketResearch/Pyramid.png";
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";

const methodCards = [
  {
    step: "01",
    title: "Patent & IP Landscape Analysis",
    description:
      "We analyze patent filings to identify where R&D dollars are flowing before products even hit the market.",
    className: "md:col-span-2",
  },
  {
    step: "02",
    title: "Primary Expert Interviews",
    description:
      "We don’t rely on secondary desk research. We speak directly to the engineers and scientists building the future.",
  },
  {
    step: "03",
    title: "Ecosystem Triangulation",
    description:
      "We cross-verify market data across suppliers, integrators, and end-users to eliminate reporting bias.",
  },
];

const MicroMarketResearchMethodology = () => {
  const [activeCardStep, setActiveCardStep] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateMobileView = (event?: MediaQueryListEvent) => {
      const matches = event ? event.matches : mediaQuery.matches;
      setIsMobileView(matches);
    };

    updateMobileView();
    mediaQuery.addEventListener("change", updateMobileView);

    return () => mediaQuery.removeEventListener("change", updateMobileView);
  }, []);

  return (
    <section
      id="methodology"
      className="relative overflow-hidden bg-[#f8f7f3] py-10 text-[#141742] sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12"
    >
      
      {/* Background */}
      <div className="pointer-events-none absolute right-[-18%] sm:right-[-12%] md:right-[-8%] lg:right-[-6%] -top-10 sm:-top-14 md:-top-20 z-0">
        <img
          src={whiteTypographyImg}
          alt=""
          aria-hidden="true"
          className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px] opacity-20 rotate-[120deg]"
        />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 relative mx-auto">

        {/* Header */}
        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          <span className="h-px w-4 bg-current opacity-40 sm:w-6 md:w-8" />
          <p className="text-[clamp(1rem,1.2vw,1.375rem)] font-bold text-[#1d214f] md:text-[20px]">
            Methodology
          </p>
          <span className="h-px w-4 bg-current opacity-40 sm:w-6 md:w-8" />
        </div>

        {/* Title */}
        <h2 className="relative z-10 mt-3 text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[1.05]">
          The "Signal-to-Noise" Approach
        </h2>

        {/* Description */}
        <p className="relative z-10 mt-3 max-w-[720px] text-[clamp(1.125rem,1.1vw,1.25rem)] leading-relaxed text-[#1d214f] font-medium">
          In micro-markets, data is scarce and often unreliable. Our methodology is
          designed to synthesize fragmented data points into a coherent strategic picture.
        </p>

        {/* Layout */}
        <div className="relative z-10 mt-5 grid items-start gap-6 sm:gap-8 lg:mt-4 lg:grid-cols-[1.05fr_1.2fr]">

          {/* Cards */}
          <div className="order-2 grid items-start gap-5 sm:gap-6 md:grid-cols-2 lg:order-none lg:col-start-1">
            {methodCards.map((card) => {
              const isActive = activeCardStep === card.step;

              return (
                <article
                  key={card.step}
                  onTouchStart={() => {
                    if (isMobileView) setActiveCardStep(card.step);
                  }}
                  onTouchEnd={() => {
                    if (isMobileView) setActiveCardStep(null);
                  }}
                  className={`group relative h-full border border-[#e6e8f0] bg-white px-4 pb-3 pt-5 shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-all duration-300 sm:px-5 sm:pb-4 md:px-6 lg:px-5 ${
                    isActive ? "-translate-y-2 shadow-xl" : ""
                  } ${card.className || ""}`}
                >

                  <div className={`absolute inset-0 z-0 bg-gradient-to-br from-[#0b1f3a] via-[#1e3a8a] to-[#22d3ee] transition duration-500 
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                  `} />

                  <div className={`absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#64dfc6] text-sm font-bold text-[#141742] shadow transition-all duration-300 sm:h-9 sm:w-9
                    ${isActive ? "bg-white text-[#0b1f3a]" : "group-hover:bg-white group-hover:text-[#0b1f3a]"}
                  `}>
                    {card.step}
                  </div>

                  <div className="relative z-10">
                    <h3 className={`text-[20px] font-bold leading-[1.15] transition-colors duration-300 sm:text-[22px]
                      ${isActive ? "text-white" : "group-hover:text-white"}
                    `}>
                      {card.title}
                    </h3>

                    <p className={`mt-2 text-[clamp(1.125rem,1vw,1.125rem)] leading-6 text-[#141742] transition-colors duration-300 font-medium
                      ${isActive ? "text-white/90" : "group-hover:text-white/90"}
                    `}>
                      {card.description}
                    </p>
                  </div>

                </article>
              );
            })}
          </div>

          {/* IMAGE */}
          <div className="
            order-1 relative mt-[-3px] flex items-start justify-center lg:order-none lg:col-start-2 lg:justify-end
            sm:mt-[-1px] md:mt-[1px]
            pr-0 lg:pr-[2px]
          ">
            <img
              src={methodologyImage}
              alt="Micro-market methodology"
              className="
                h-[195px] 
                sm:h-[245px] 
                md:h-[330px] 
                lg:h-[305px]
                w-auto max-w-full object-contain mx-auto lg:mx-0
                transition-transform duration-500 hover:scale-105
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MicroMarketResearchMethodology;
