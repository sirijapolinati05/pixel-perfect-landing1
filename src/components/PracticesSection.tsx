import { Link } from "react-router-dom";

import techImg from "@/assets/LandingPage/Technology-Research.png";
import tickImg from "@/assets/LandingPage/technology-research-icon.png";
import microIcon from "@/assets/LandingPage/micromarket-research-icon.png";
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
  "rounded-full border border-[#C7D2E2] bg-white px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.3rem,0.8vw,0.7rem)] text-[clamp(0.875rem,1.2vw,1.375rem)] font-medium text-[#0A1F44] whitespace-nowrap";

const buttonClassName =
  "w-full inline-flex items-center justify-center gap-2 rounded-full h-[clamp(2.5rem,4vw,3.75rem)] px-6 text-[clamp(0.9rem,1.1vw,1.25rem)] font-medium text-white bg-[#111B4D] transition-all hover:scale-[1.02] whitespace-nowrap";

const cardBaseClass =
  "flex flex-col justify-between rounded-[10px] border border-[#E2E6EE] bg-white shadow-md";

const PracticesSection = () => {
  return (
    <section className="bg-[#F7F9FC] py-12">
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* IMAGE CARD */}
          <div className={`${cardBaseClass} overflow-hidden min-h-[400px]`}>
            <img src={techImg} className="h-full w-full object-cover" />
          </div>

          {/* TECHNOLOGY CARD */}
          <div className={`${cardBaseClass} p-5`}>
            <div>
              <img src={tickImg} className="mb-4 h-8 w-8" />
              <div className="mb-4">
                <h3 className="text-[clamp(1.125rem,1.5vw,1.375rem)] font-semibold text-[#0A1F44]">
                  Technology Research
                </h3>
                <p className="mt-2 text-[clamp(0.8125rem,1vw,0.875rem)] text-[#5A6B85]">
                  Macro-level research on Generative AI, Quantum Computing.
                </p>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-3">
                  {technologyTags.map((tag) => (
                    <span key={tag} className={tagClassName}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link to="/technology-research" className={buttonClassName}>
                Explore Technology Research
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>

          {/* MICRO MARKET CARD */}
          <div className={`${cardBaseClass} p-5`}>
            <div>
              <img src={microIcon} className="mb-4 h-8 w-8" />
              <div className="mb-4">
                <h3 className="text-[clamp(1.125rem,1.5vw,1.375rem)] font-semibold text-[#0A1F44]">
                  Micro-Market Research
                </h3>
                <p className="mt-2 text-[clamp(0.8125rem,1vw,0.875rem)] text-[#5A6B85]">
                  Granular analysis of high-growth market segments.
                </p>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-3">
                  {microMarketTags.map((tag) => (
                    <span key={tag} className={tagClassName}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link to="/micro-market-research" className={buttonClassName}>
                Explore Micro-Market Research
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PracticesSection;
