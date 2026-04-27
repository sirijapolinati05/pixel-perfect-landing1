import { Link } from "react-router-dom";

import techImg from "@/assets/LandingPage/Technology-Research.png";
import tickImg from "@/assets/LandingPage/technology-research-icon.png";
import microIcon from "@/assets/LandingPage/micromarket-research-icon.png";
import patternImg from "@/assets/LandingPage/Typographic.png";
import { ArrowRightIcon } from "@/components/ui/Icons";

const technologyTags = [
  "Generative AI",
  "Agentic AI",
  "Future of Work",
  "Digital Engineering",
  "Quantum Computing",
  "AI Engineering",
  "Global Capability Centers (GCC)",
  "Economics of Technology & Business Impact",
];

const microMarketTags = [
  "Market Sizing",
  "Growth Vectors",
  "Forecasting",
  "Value Chain Mapping",
  "Ecosystem Dynamics",
  "Segment Archetyping",
  "Propensity Modelling",
  "Regulatory Frameworks",
  "Competitive Landscaping",
];

const tagClassName =
  "rounded-full border border-[#C7D2E2] bg-white " +
  "px-2 py-1 text-xs " +
  "sm:px-3 sm:py-1.5 sm:text-sm " +
  "md:px-2 md:py-1 md:text-[12px] " +
  "lg:px-2 lg:py-1 lg:text-[12px] " +
  "xl:px-4 xl:py-2 xl:text-base " +
  "2xl:px-6 2xl:py-3 2xl:text-xl " +
  "leading-none text-[#0A1F44]";

// ✅ UPDATED: 2XL button height increased
const buttonClassName =
  "mt-auto inline-flex items-center justify-center gap-2 rounded-full " +
  "h-9 sm:h-10 lg:h-8 2xl:h-12 " +   // 👈 ONLY CHANGE
  "px-4 sm:px-5 lg:px-3 " +
  "text-sm sm:text-base lg:text-[13px] " +
  "whitespace-nowrap " +
  "font-medium text-white bg-[#111B4D] shadow-[0_8px_18px_rgba(17,27,77,0.18)]";

const cardBaseClass =
  "h-full min-h-[300px] flex flex-col rounded-[10px] border border-[#E2E6EE] " +
  "bg-white shadow-[0_10px_24px_rgba(17,27,77,0.10)] " +
  "transition-all duration-300 hover:scale-[0.97]";

const PracticesSection = () => {
  return (
    <section
      id="practices"
      className="relative overflow-hidden scroll-mt-24 bg-[#F7F9FC]
      py-10 sm:py-12 md:py-14 lg:py-12 xl:py-14 2xl:py-16"
    >

      <div className="page-shell mx-auto mb-6 text-center sm:text-left">
        <h2 className="relative max-w-[1120px]
        text-[30px] sm:text-[36px] md:text-[42px] lg:text-[40px] xl:text-[48px]
        font-serif font-semibold leading-[1.2] text-[#0A0E33]">
          Two Practices on the <br className="sm:hidden" />
          Future of{" "}
          <span className="relative inline-block">
            <img
              src={patternImg}
              alt=""
              className="absolute right-[-10%] top-1/2 h-[200%] -translate-y-1/2 opacity-40"
            />
            <span className="relative z-10 bg-gradient-to-r from-[#0A0E33] to-[#26A9E0] bg-clip-text text-transparent">
              Technology and Markets
            </span>
          </span>
        </h2>

        <p className="mt-3 max-w-[920px]
        text-sm sm:text-base md:text-lg lg:text-[15px] xl:text-xl
        text-[#5A6B85]">
          RESEARCHFABRIC™ operates through two focused research practices.
        </p>
      </div>

      <div className="page-shell mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

        <div className={`${cardBaseClass} overflow-hidden`}>
          <img src={techImg} className="h-full min-h-[260px] w-full object-cover" />
        </div>

        {/* TECHNOLOGY */}
        <div className={`${cardBaseClass} p-5 hover:bg-[#E6F2FF]`}>
          <div className="flex flex-1 flex-col">
            <img src={tickImg} className="mb-4 h-8 w-8" />

            <div className="2xl:min-h-[180px]">
              <h3 className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-[20px] font-serif font-semibold text-[#0A1F44]">
                Technology Research
              </h3>

              <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-[14px] text-[#5A6B85]">
                Macro-level research on Generative AI, Quantum Computing.
              </p>
            </div>

            <div className="mb-4 flex flex-wrap gap-2 sm:gap-3">
              {technologyTags.map((tag) => (
                <span key={tag} className={tagClassName}>{tag}</span>
              ))}
            </div>
          </div>

          <Link to="/technology-research" className={buttonClassName}>
            Explore Technology Research
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* MICRO MARKET */}
        <div className={`${cardBaseClass} p-5 hover:bg-[#E6F2FF]`}>
          <div className="flex flex-1 flex-col">
            <img src={microIcon} className="mb-4 h-8 w-8" />

            <div className="2xl:min-h-[180px]">
              <h3 className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-[20px] font-serif font-semibold text-[#0A1F44]">
                Micro-Market Research
              </h3>

              <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-[14px] text-[#5A6B85]">
                Granular analysis of high-growth market segments.
              </p>
            </div>

            <div className="mb-4 flex flex-wrap gap-2 sm:gap-3">
              {microMarketTags.map((tag) => (
                <span key={tag} className={tagClassName}>{tag}</span>
              ))}
            </div>
          </div>

          <Link to="/micro-market-research" className={buttonClassName}>
            Explore Micro-Market Research
            <ArrowRightIcon size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PracticesSection;