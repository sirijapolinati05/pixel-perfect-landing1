import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import techImg from "@/assets/LandingPage/Technology-Research.png";
import tickImg from "@/assets/LandingPage/technology-research-icon.png";
import microIcon from "@/assets/LandingPage/micromarket-research-icon.png";
import patternImg from "@/assets/LandingPage/Typographic.png";
import whitePattern from "@/assets/LandingPage/White-Typography.png";

const technologyTags = [
  "Generative AI",
  "Agentic AI",
  "Future of Work",
  "Digital Engineering",
  "Quantum Computing",
  "Global Capability Centers (GCC)",
  "AI Engineering",
  "Economics of Technology & Business Impact",
];

const microMarketTags = [
  "Market Sizing",
  "Competitive Landscape",
  "Growth Vectors",
  "Forecasting",
];

const tagClassName =
  "rounded-full border border-[#C7D2E2] bg-white px-3 py-[6px] text-[11px] sm:text-[12px] md:text-[13px] leading-none text-[#0A1F44]";

const buttonClassName =
  "mt-auto inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-full bg-[#111B4D] px-4 sm:px-5 text-[11px] sm:text-[12px] md:text-sm font-medium text-white shadow-[0_8px_18px_rgba(17,27,77,0.18)]";

const PracticesSection = () => {
  return (
    <section
      id="practices"
      className="relative overflow-hidden bg-[#F7F9FC] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24"
    >
      {/* HEADER */}
      <div className="mx-auto mb-5 sm:mb-6 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="relative max-w-[1120px] 
        text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[4.5rem] 
        font-serif font-semibold leading-[1.2] text-[#0A1F44]">
          
          Two Practices on the Future of{" "}
          
          <span className="relative inline-block">
            <img
              src={patternImg}
              alt=""
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 
              h-[180%] sm:h-[200%] md:h-[240%] 
              max-w-none -translate-x-1/2 -translate-y-[56%] opacity-40"
            />
            <span className="relative z-10 text-[#2F80ED]">
              Technology and Markets
            </span>
          </span>
        </h2>

        <p className="mt-2 sm:mt-3 max-w-[600px] sm:max-w-[760px] 
        text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm xl:text-base 2xl:text-lg 
        leading-[1.6] sm:leading-[1.85] text-[#5A6B85]">
          RESEARCHFABRIC™ operates through two focused research practices.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto grid max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] items-stretch 
      gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        {/* IMAGE CARD */}
        <div className="h-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] 
        overflow-hidden rounded-[10px] border border-[#E2E6EE] bg-white 
        shadow-[0_10px_24px_rgba(17,27,77,0.10)] 
        transition-all duration-300 hover:scale-[0.95] hover:z-10">
          <img
            src={techImg}
            alt="Technology"
            className="h-full w-full object-cover"
          />
        </div>

        {/* TECHNOLOGY CARD */}
        <div className="flex h-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] 
        flex-col rounded-[10px] border border-[#E2E6EE] bg-white 
        p-3 sm:p-4 
        shadow-[0_10px_24px_rgba(17,27,77,0.10)] 
        transition-all duration-300 hover:bg-[#E6F2FF] hover:scale-[0.95] hover:z-10">

          <div className="flex flex-1 flex-col">
            <img src={tickImg} alt="tick" className="mb-2 sm:mb-3 h-6 w-6 sm:h-7 sm:w-7" />

            <h3 className="mb-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-serif font-semibold text-[#0A1F44]">
              Technology Research
            </h3>

            <p className="mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-5 sm:leading-6 text-[#5A6B85]">
              Macro-level research on Generative AI, Quantum Computing, and advanced architectures.
            </p>

            <div className="mb-3 flex flex-wrap content-start gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5">
              {technologyTags.map((tag) => (
                <span key={tag} className={tagClassName}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link to="/technology-research" className={buttonClassName}>
            Explore Technology Research
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* MICRO MARKET CARD */}
        <div className="relative h-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px]">
          
          <img
            src={whitePattern}
            alt="pattern"
            className="pointer-events-none absolute 
            right-[-20%] sm:right-[-30%] md:right-[-35%] 
            top-[-30%] sm:top-[-45%] md:top-[-55%] 
            h-[120%] sm:h-[130%] md:h-[140%] 
            w-[120%] sm:w-[130%] md:w-[140%] 
            scale-x-[-1] object-cover opacity-[0.15]"
          />

          <div className="relative flex h-full flex-col overflow-hidden rounded-[10px] 
          border border-[#E2E6EE] bg-white 
          p-3 sm:p-4 
          shadow-[0_10px_24px_rgba(17,27,77,0.10)] 
          transition-all duration-300 hover:bg-[#E6F2FF] hover:scale-[0.95] hover:z-10">

            <div className="relative z-10 flex flex-1 flex-col">
              <img
                src={microIcon}
                alt="micro market icon"
                className="mb-2 sm:mb-3 h-6 w-6 sm:h-7 sm:w-7"
              />

              <h3 className="mb-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-serif font-semibold text-[#0A1F44]">
                Micro-Market Research
              </h3>

              <p className="mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-5 sm:leading-6 text-[#5A6B85]">
                Granular analysis of high-growth market segments.
              </p>

              <div className="mb-3 flex flex-wrap content-start gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5">
                {microMarketTags.map((tag) => (
                  <span key={tag} className={tagClassName}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/micro-market-research"
              className={`relative z-10 ${buttonClassName}`}
            >
              Explore Micro-Market Research
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesSection;
