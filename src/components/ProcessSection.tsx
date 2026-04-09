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
    <section
      id="process"
      className="overflow-hidden bg-process-blue py-10 sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12"
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center">

        {/* TOP LABEL */}
        <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3 lg:mb-3">
          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>

          <p className="text-navy font-serif text-xs sm:text-sm font-bold tracking-widest whitespace-nowrap">
            Our Process
          </p>

          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        {/* HEADING */}
        <h2 className="mb-2 text-2xl font-bold text-navy sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          From Inquiry to Industry Narrative
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mb-6 max-w-xl font-serif text-xs text-navy/70 sm:mb-8 sm:max-w-2xl sm:text-sm md:text-base lg:mb-7 lg:text-lg xl:text-xl 2xl:text-2xl">
          Every Thought Shaping Paper follows a rigorous four-phase methodology that ensures depth, accuracy, and strategic relevance.
        </p>

        {/* PROGRESS LINE */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[12px] left-0 right-0 h-[2px] bg-navy/30 z-0" />

          <div className="relative z-10 mb-4 hidden grid-cols-4 lg:grid">
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
        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 md:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6">
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
                className={`relative z-10 group p-3 text-left transition-all duration-300 sm:p-4 ${
                  activeStep === index
                    ? "bg-white shadow-[0_18px_40px_rgba(10,31,68,0.16)]"
                    : "hover:bg-white hover:shadow-[0_18px_40px_rgba(10,31,68,0.16)]"
                }`}
              >
                {/* IMAGE */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="mb-3 h-32 w-full object-cover sm:mb-4 sm:h-36 md:h-40 lg:h-36 xl:h-40"
                />

                {/* TITLE */}
                <h4 className="mb-2 font-serif text-base font-bold text-navy sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
                  {step.title}
                </h4>

                {/* TEXT */}
                <p className="text-navy/70 font-serif text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-5 sm:leading-6">
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
