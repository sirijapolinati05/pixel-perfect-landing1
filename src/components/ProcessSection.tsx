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
      <div className="mx-auto max-w-[1600px] px-4 text-center sm:px-6 lg:px-8 xl:px-10 2xl:px-6 [@media_(min-width:2560px)]:max-w-[2304px]">

        {/* TOP LABEL */}
        <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3 lg:mb-3">
          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>

          <p className="text-navy font-serif text-[18px] md:text-[20px] font-bold tracking-normal whitespace-nowrap">
            Our Process
          </p>

          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        {/* HEADING */}
        <h2 className="mb-2 text-[32px] font-bold text-navy sm:text-[38px] md:text-[44px] lg:text-[46px] xl:text-[48px] 2xl:text-[50px]">
          From Inquiry to Industry Narrative
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mb-6 max-w-xl font-serif text-[16px] text-navy/70 sm:mb-8 sm:max-w-2xl sm:text-[17px] md:text-[18px] lg:mb-7 lg:text-[19px] xl:text-[20px] 2xl:text-[20px]">
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
        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 md:gap-5 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">

              {/* TYPO IMAGE FIX */}
              {index === 3 && (
                <img
                  src={typographicImg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute 
                  -right-10 sm:-right-32 md:-right-24 lg:-right-40 xl:-right-44 
                  -top-12 sm:-top-28 md:-top-20 lg:-top-32 xl:-top-36 
                  z-0 w-[180px] sm:w-[320px] md:w-[260px] lg:w-[400px] xl:w-[440px] 
                  scale-[1.1] sm:scale-[1.5] md:scale-[1.15] lg:scale-[1.6] 
                  opacity-80 invert brightness-0"
                />
              )}

              <button
                type="button"
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`process-step-card relative z-10 group p-3 text-left transition-all duration-300 sm:p-4 ${
                  activeStep === index
                    ? "bg-white shadow-[0_18px_40px_rgba(10,31,68,0.16)]"
                    : "hover:bg-white hover:shadow-[0_18px_40px_rgba(10,31,68,0.16)]"
                }`}
              >
                {/* IMAGE */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="process-step-image mb-3 h-32 w-full object-cover sm:mb-4 sm:h-36 md:h-32 lg:h-36 xl:h-40 [@media_(width:768px)]:h-44 [@media_(min-width:2560px)]:h-60"
                />

                {/* ✅ TITLE → 22px */}
                <h4 className="mb-2 font-serif text-[24px] font-bold text-navy leading-[30px]">
                  {step.title}
                </h4>

                {/* DESCRIPTION → 16px */}
                <p className="text-navy/70 font-serif text-[16px] leading-[24px]">
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
