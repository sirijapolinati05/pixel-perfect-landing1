import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import techImg from "@/assets/LandingPage/Technology-Research.png";
import tickImg from "@/assets/LandingPage/technology-research-icon.png";
import microIcon from "@/assets/LandingPage/micromarket-research-icon.png"; // ✅ FIXED PATH
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
  "rounded-full border border-[#C7D2E2] bg-white px-3 py-[6px] text-[11px] leading-none text-[#0A1F44]";

const buttonClassName =
  "mt-auto inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#111B4D] px-5 text-[12px] font-medium text-white shadow-[0_8px_18px_rgba(17,27,77,0.18)]";

const PracticesSection = () => {
  return (
    <section
      id="practices"
      className="relative overflow-hidden bg-[#F7F9FC] py-20"
    >
      <div className="mx-auto mb-10 max-w-7xl px-6">
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

        <p className="mt-5 max-w-[760px] text-[13px] leading-[1.85] text-[#5A6B85]">
          RESEARCHFABRIC™ operates through two focused research practices, each
          designed to deliver deep, SME-led intelligence at different scales of
          the technology landscape.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl items-stretch gap-3 px-6 md:grid-cols-3">

        {/* IMAGE CARD */}
        <div className="h-[364px] overflow-hidden rounded-[10px] border border-[#E2E6EE] bg-white shadow-[0_10px_24px_rgba(17,27,77,0.10)]">
          <img
            src={techImg}
            alt="Technology"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 2nd CARD */}
        <div className="flex h-[364px] flex-col rounded-[10px] border border-[#E2E6EE] bg-white p-4 shadow-[0_10px_24px_rgba(17,27,77,0.10)]">
          <div className="flex flex-1 flex-col">
            <img src={tickImg} alt="tick" className="mb-3 h-7 w-7" />

            <h3 className="mb-2 text-[18px] font-serif font-semibold leading-tight text-[#0A1F44]">
              Technology Research
            </h3>

            <p className="mb-4 text-[11px] leading-[1.45] text-[#5A6B85]">
              Macro-level research on Generative AI, Quantum Computing, and
              advanced architectures, mapping technologies from breakthroughs to
              enterprise adoption.
            </p>

            <div className="mb-4 flex min-h-[126px] flex-wrap content-start gap-2">
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

        {/* 3rd CARD ✅ ICON UPDATED */}
        <div className="relative h-[364px] rounded-[10px]">
          <img
            src={whitePattern}
            alt="pattern"
            className="pointer-events-none absolute right-[-35%] top-[-55%] h-[140%] w-[140%] scale-x-[-1] object-cover opacity-[0.15]"
          />

          <div className="relative flex h-full flex-col overflow-hidden rounded-[10px] border border-[#E2E6EE] bg-white p-4 shadow-[0_10px_24px_rgba(17,27,77,0.10)]">
            <div className="relative z-10 flex flex-1 flex-col">

              {/* ✅ ICON CHANGE */}
              <img
                src={microIcon}
                alt="micro market icon"
                className="mb-3 h-7 w-7"
              />

              <h3 className="mb-2 text-[18px] font-serif font-semibold leading-tight text-[#0A1F44]">
                Micro-Market Research
              </h3>

              <p className="mb-4 text-[11px] leading-[1.45] text-[#5A6B85]">
                Granular analysis of high-growth market segments, mapping
                competitive dynamics and delivering actionable intelligence for
                strategic decisions.
              </p>

              <div className="mb-4 flex min-h-[126px] flex-wrap content-start gap-2">
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