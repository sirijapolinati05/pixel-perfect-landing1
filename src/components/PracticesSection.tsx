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
  "rounded-full border border-[#C7D2E2] bg-white px-3 py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 text-[clamp(0.8rem,0.9vw,1.1rem)] font-semibold xl:font-bold text-[#0A1F44] transition-all duration-300 hover:bg-[#F0F4F9]";

const buttonClassName =
  "w-full inline-flex items-center justify-center gap-1.5 lg:gap-2 rounded-full h-[clamp(2.75rem,3.5vw,4rem)] px-3 lg:px-6 xl:px-8 text-[clamp(0.8rem,0.9vw,1.25rem)] font-semibold xl:font-bold text-white bg-[#111B4D] transition-all duration-300 hover:scale-[1.02] hover:bg-[#1A2B6D] whitespace-normal sm:whitespace-nowrap text-center leading-tight";

const cardBaseClass =
  "group flex flex-col justify-between rounded-[12px] border border-[#E2E6EE] bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";

const PracticesSection = () => {
  return (
    <section id="practices" className="bg-[#F7F9FC] py-12 sm:py-16 lg:py-20">

      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 mx-auto">

        {/* HEADING */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-semibold leading-tight tracking-[-0.02em] text-[clamp(1.75rem,4vw,3.25rem)] text-[#0B1F3A]">
            Two Practices on the Future of{" "}
            <span className="bg-gradient-to-r from-[#0B1F3A] to-[#2DA8FF] bg-clip-text text-transparent">
              Technology and Markets
            </span>
          </h2>

          <p className="mt-4 max-w-[900px] text-[clamp(1rem,1.2vw,1.375rem)] text-[#5A6B85] leading-relaxed">
            RESEARCHFABRIC™ operates through two focused research practices, each designed to deliver deep,
            SME-led intelligence at different scales of the technology landscape.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">

          {/* CARD 1 (IMAGE) */}
          <div className={`${cardBaseClass} overflow-hidden min-h-[340px] md:min-h-[400px]`}>
            <img
              src={techImg}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* CARD 2 */}
          <div className={`${cardBaseClass} p-[clamp(1.25rem,2vw,2rem)]`}>

            <div className="transition-all duration-300 group-hover:-translate-y-1">
              <img src={tickImg} className="mb-4 h-[clamp(2rem,3vw,3rem)] w-[clamp(2rem,3vw,3rem)]" />

              <div className="mb-4">
                <h3 className="text-[clamp(1.25rem,1.6vw,2rem)] font-bold text-[#0A1F44]">
                  Technology Research
                </h3>
                <p className="mt-2 text-[clamp(0.95rem,1.05vw,1.25rem)] text-[#5A6B85] leading-relaxed">
                  Macro-level research on Generative AI, Quantum Computing, and advanced architectures,
                  mapping technologies from breakthroughs to enterprise adoption.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {technologyTags.map((tag) => (
                    <span key={tag} className={tagClassName}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <Link to="/technology-research" className={buttonClassName}>
                Explore Technology Research
                <ArrowRightIcon size={18} />
              </Link>
            </div>

          </div>

          {/* CARD 3 */}
          <div className={`${cardBaseClass} p-[clamp(1.25rem,2vw,2rem)]`}>

            <div className="transition-all duration-300 group-hover:-translate-y-1">
              <img src={microIcon} className="mb-4 h-[clamp(2rem,3vw,3rem)] w-[clamp(2rem,3vw,3rem)]" />

              <div className="mb-4">
                <h3 className="text-[clamp(1.25rem,1.6vw,2rem)] font-bold text-[#0A1F44]">
                  Micro-Market Research
                </h3>
                <p className="mt-2 text-[clamp(0.95rem,1.05vw,1.25rem)] text-[#5A6B85] leading-relaxed">
                  Granular analysis of high-growth market segments, mapping competitive dynamics and delivering actionable intelligence for strategic decisions.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {microMarketTags.map((tag) => (
                    <span key={tag} className={tagClassName}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <Link to="/micro-market-research" className={buttonClassName}>
                Explore Micro-Market Research
                <ArrowRightIcon size={18} />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PracticesSection;