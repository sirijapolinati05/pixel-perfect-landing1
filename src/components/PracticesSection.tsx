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
  "Competitive Landscaping",
  "Value Chain Mapping",
  "Ecosystem Dynamics",
  "Segment Archetyping",
  "Propensity Modelling",
  "Regulatory Frameworks",
];

const tagClassName =
  "rounded-full border border-[#C7D2E2] bg-white px-3 py-[6px] text-[14px] sm:text-[15px] md:px-2.5 md:py-[5px] md:text-[14px] lg:px-2 lg:py-[4px] lg:text-[13px] leading-none text-[#0A1F44]";

const buttonClassName =
  "mt-auto inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-full bg-[#111B4D] px-4 sm:px-5 text-[14px] sm:text-[15px] md:text-[15px] font-medium text-white shadow-[0_8px_18px_rgba(17,27,77,0.18)]";

const cardBaseClass =
  "h-full min-h-[300px] flex flex-col rounded-[10px] border border-[#E2E6EE] bg-white shadow-[0_10px_24px_rgba(17,27,77,0.10)] transition-all duration-300 hover:scale-[0.95] hover:z-10";

const PracticesSection = () => {
  return (
    <section
      id="practices"
      className="relative overflow-hidden scroll-mt-24 bg-[#F7F9FC] py-10 sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12"
    >
      <div className="mx-auto mb-5 max-w-[1600px] px-4 text-center sm:mb-6 sm:px-6 sm:text-left lg:px-8 xl:px-10 2xl:px-6">
        <h2 className="relative max-w-[1120px] text-center sm:text-left text-[32px] sm:text-[40px] md:text-[46px] font-serif font-semibold leading-[1.2] text-[#0A1F44]">
          Two Practices on the <br className="sm:hidden" />
          Future of{" "}
          <span className="relative inline-block">
            <img
              src={patternImg}
              alt=""
              className="pointer-events-none absolute right-[-10%] top-1/2 h-[200%] -translate-y-[56%] opacity-40"
            />
            <span className="relative z-10 text-[#2F80ED]">
              Technology and Markets
            </span>
          </span>
        </h2>

        <p className="mt-2 sm:mt-3 max-w-[920px] text-center sm:text-left text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-[#5A6B85]">
          RESEARCHFABRIC™ operates through two focused research practices, each
          designed to deliver deep, SME-led intelligence at different scales of
          the technology landscape.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1600px] auto-rows-fr grid-cols-1 items-stretch gap-4 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 lg:px-8 xl:px-10 2xl:px-6">
        <div
          className={`${cardBaseClass} overflow-hidden sm:col-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1`}
        >
          <img
            src={techImg}
            alt="Technology"
            className="h-full min-h-[260px] w-full object-cover sm:max-h-[360px] md:max-h-none"
          />
        </div>

        <div className={`${cardBaseClass} p-4 md:min-h-[280px] hover:bg-[#E6F2FF]`}>
          <div className="flex flex-1 flex-col">
            <img src={tickImg} alt="tick" className="mb-3 h-7 w-7" />

            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] font-serif font-semibold text-[#0A1F44]">
              Technology Research
            </h3>

            <p className="mb-3 text-[16px] md:text-[18px] text-[#5A6B85]">
              Macro-level research on Generative AI, Quantum Computing.
            </p>

            <div className="mb-3 flex flex-wrap gap-2">
              {technologyTags.map((tag) => (
                <span key={tag} className={tagClassName}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link to="/technology-research" className={buttonClassName}>
            Explore Technology Research
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className={`${cardBaseClass} p-4 md:min-h-[280px] hover:bg-[#E6F2FF]`}>
          <div className="flex flex-1 flex-col">
            <img src={microIcon} alt="icon" className="mb-3 h-7 w-7" />

            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] font-serif font-semibold text-[#0A1F44]">
              Micro-Market Research
            </h3>

            <p className="mb-3 text-[16px] md:text-[18px] text-[#5A6B85]">
              Granular analysis of high-growth market segments.
            </p>

            <div className="mb-3 flex flex-wrap gap-2">
              {microMarketTags.map((tag) => (
                <span key={tag} className={tagClassName}>
                  {tag}
                </span>
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
