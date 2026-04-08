import { useState } from "react";
import process1 from "@/assets/LandingPage/Landscape-Mapping.png";
import process2 from "@/assets/LandingPage/Analyst-Pairing.png";
import process3 from "@/assets/LandingPage/Narrative-Architecture.png";
import process4 from "@/assets/LandingPage/Strategic-Release.png";
import typographicImg from "@/assets/LandingPage/Typographic.png";

const steps = [
  {
    image: process1,
    title: "Landscape Mapping",
    description:
      "Comprehensive scanning of patents, projects, earnings calls, and expert interviews to identify the signal in the noise.",
  },
  {
    image: process2,
    title: "Analyst Pairing",
    description:
      "We match each research question with the most authoritative analyst voice — ensuring domain-specific credibility.",
  },
  {
    image: process3,
    title: "Narrative Architecture",
    description:
      "Data, insight, and foresight are woven into a compelling strategic narrative designed to shape decisions.",
  },
  {
    image: process4,
    title: "Strategic Release",
    description:
      "Papers are launched with precision timing — aligned to industry events, earnings cycles, and decision windows.",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-process-blue overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center">

        {/* TOP LABEL */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>

          <p className="text-navy font-sans text-xs sm:text-sm font-bold tracking-widest whitespace-nowrap">
            Our Process
          </p>

          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-navy mb-3 sm:mb-4">
          From Inquiry to Industry Narrative
        </h2>

        {/* SUBTEXT */}
        <p className="text-navy/70 font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
          Every Thought Shaping Paper follows a rigorous four-phase methodology that ensures depth, accuracy, and strategic relevance.
        </p>

        {/* PROGRESS LINE */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[12px] left-0 right-0 h-[2px] bg-navy/30 z-0" />

          <div className="hidden lg:grid grid-cols-4 mb-6 sm:mb-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.title} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-process-blue transition-transform duration-300 hover:scale-110"
                >
                  <div
                    className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full border border-navy/20 transition-colors duration-300 ${
                      activeStep === index ? "bg-white" : "bg-navy/30"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-10 mt-6 sm:mt-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">

              {/* TYPO IMAGE FIX */}
              {index === 3 && (
                <img
                  src={typographicImg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute 
                  -right-10 sm:-right-32 md:-right-40 lg:-right-40 xl:-right-44 
                  -top-12 sm:-top-28 md:-top-32 lg:-top-32 xl:-top-36 
                  z-0 w-[180px] sm:w-[320px] md:w-[400px] lg:w-[400px] xl:w-[440px] 
                  scale-[1.1] sm:scale-[1.5] md:scale-[1.6] lg:scale-[1.6] 
                  opacity-80 invert brightness-0"
                />
              )}

              <button
                type="button"
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative z-10 group p-3 sm:p-4 text-left transition-all duration-300 ${
                  activeStep === index
                    ? "bg-white shadow-[0_18px_40px_rgba(10,31,68,0.16)]"
                    : "hover:bg-white hover:shadow-[0_18px_40px_rgba(10,31,68,0.16)]"
                }`}
              >
                {/* IMAGE */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-32 sm:h-36 md:h-40 object-cover mb-3 sm:mb-4"
                />

                {/* TITLE */}
                <h4 className="text-navy font-bold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-serif italic mb-2">
                  {step.title}
                </h4>

                {/* TEXT */}
                <p className="text-navy/70 font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-5 sm:leading-6">
                  {step.description}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
