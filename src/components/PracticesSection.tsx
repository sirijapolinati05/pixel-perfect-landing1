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
  "rounded-full border border-[#C7D2E2] bg-white px-3 py-[6px] text-[13px] leading-none text-[#0A1F44]";

const buttonClassName =
  "mt-auto inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#111B4D] px-5 text-[12px] font-medium text-white shadow-[0_8px_18px_rgba(17,27,77,0.18)]";

const PracticesSection = () => {
  return (
    <section
      id="practices"
      className="relative overflow-hidden bg-[#F7F9FC] py-10"
    >
      {/* HEADER */}
      <div className="mx-auto mb-6 max-w-7xl px-6">
        <h2 className="relative max-w-[1120px] text-[32px] font-serif font-semibold leading-[1.15] text-[#0A1F44] md:text-[56px]">
          Two Practices on the Future of{" "}
          <span className="relative inline-block">
            <img
              src={patternImg}
              alt=""
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[240%] max-w-none -translate-x-1/2 -translate-y-[56%] opacity-40"
            />
            <span className="relative z-10 text-[#2F80ED]">
              Technology and Markets
            </span>
          </span>
        </h2>

        <p className="mt-3 max-w-[760px] text-[13px] leading-[1.85] text-[#5A6B85]">
          RESEARCHFABRIC™ operates through two focused research practices.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto grid max-w-6xl items-stretch gap-3 px-6 md:grid-cols-3">

        {/* IMAGE CARD */}
        <div className="h-full min-h-[380px] overflow-hidden rounded-[10px] border border-[#E2E6EE] bg-white shadow-[0_10px_24px_rgba(17,27,77,0.10)] 
        transform transition-all duration-300 hover:scale-[0.95] hover:z-10">
          <img
            src={techImg}
            alt="Technology"
            className="h-full w-full object-cover"
          />
        </div>

        {/* TECHNOLOGY CARD */}
        <div className="flex h-full min-h-[380px] flex-col rounded-[10px] border border-[#E2E6EE] bg-white p-4 shadow-[0_10px_24px_rgba(17,27,77,0.10)] 
        transform transition-all duration-300 hover:bg-[#E6F2FF] hover:scale-[0.95] hover:z-10">

          <div className="flex flex-1 flex-col">
            <img src={tickImg} alt="tick" className="mb-3 h-7 w-7" />

            <h3 className="mb-2 text-[18px] font-serif font-semibold text-[#0A1F44]">
              Technology Research
            </h3>

            {/* 🔥 UPDATED */}
            <p className="mb-3 text-sm leading-6 text-[#5A6B85]">
              Macro-level research on Generative AI, Quantum Computing, and advanced architectures.
            </p>

            <div className="mb-3 flex flex-wrap content-start gap-2">
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
        <div className="relative h-full min-h-[380px]">
          <img
            src={whitePattern}
            alt="pattern"
            className="pointer-events-none absolute right-[-35%] top-[-55%] h-[140%] w-[140%] scale-x-[-1] object-cover opacity-[0.15]"
          />

          <div className="relative flex h-full flex-col overflow-hidden rounded-[10px] border border-[#E2E6EE] bg-white p-4 shadow-[0_10px_24px_rgba(17,27,77,0.10)] 
          transform transition-all duration-300 hover:bg-[#E6F2FF] hover:scale-[0.95] hover:z-10">

            <div className="relative z-10 flex flex-1 flex-col">
              <img
                src={microIcon}
                alt="micro market icon"
                className="mb-3 h-7 w-7"
              />

              <h3 className="mb-2 text-[18px] font-serif font-semibold text-[#0A1F44]">
                Micro-Market Research
              </h3>

              {/* 🔥 UPDATED */}
              <p className="mb-3 text-sm leading-6 text-[#5A6B85]">
                Granular analysis of high-growth market segments.
              </p>

              <div className="mb-3 flex flex-wrap content-start gap-2">
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