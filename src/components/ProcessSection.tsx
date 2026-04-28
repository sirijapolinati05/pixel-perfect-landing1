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
    <div> {/* ✅ FULL WRAPPER */}

      <section
        id="process"
        className="overflow-hidden bg-process-blue py-10 sm:py-12 md:py-14 lg:py-12 xl:py-14 2xl:py-16"
      >
        <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 text-center">

          {/* ✅ HEADING BLOCK */}
          <div>

            <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
              <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>

              <p className="text-navy font-serif text-[18px] sm:text-[20px] md:text-[22px] font-bold whitespace-nowrap">
                Our Process
              </p>

              <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
            </div>

            <h2 className="mb-2 font-bold text-navy text-[28px] sm:text-[34px] md:text-[40px] lg:text-[42px] xl:text-[48px]">
              From Inquiry to Industry Narrative
            </h2>

            <p className="mx-auto mb-6 max-w-xl font-serif text-navy font-medium text-[clamp(1.125rem,1.1vw,1.25rem)] sm:mb-8 sm:max-w-2xl md:max-w-3xl">
              Every Thought Shaping Paper follows a rigorous four-phase methodology that ensures depth, accuracy, and strategic relevance.
            </p>

          </div>

          {/* ✅ PROGRESS WRAPPER */}
          <div className="relative">

            <div className="hidden lg:block absolute top-[12px] left-0 right-0 h-[2px] bg-navy/30 z-0" />

            <div className="relative z-10 mb-4 hidden lg:grid grid-cols-4">
              {steps.map((_, index) => (
                <div key={index} className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-process-blue"
                  >
                    <div
                      className={`h-6 w-6 rounded-full border border-navy/20 ${
                        activeStep === index ? "bg-white" : "bg-navy/30"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

          </div>

          {/* ✅ CARDS WRAPPER */}
          <div className="flex justify-center">

            <div className="w-full">

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">

                {steps.map((step, index) => (
                  <div key={step.title} className="relative">

                    {/* TYPO BG */}
                    {index === 3 && (
                      <img
                        src={typographicImg}
                        alt=""
                        className="pointer-events-none absolute z-0 opacity-80 invert brightness-0
                        -right-10 sm:-right-24 md:-right-20 lg:-right-32 xl:-right-40
                        -top-10 sm:-top-24 md:-top-20 lg:-top-28 xl:-top-32
                        w-[160px] sm:w-[280px] md:w-[240px] lg:w-[360px] xl:w-[420px]"
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

                      <img
                        src={step.image}
                        alt={step.title}
                        className="mb-3 w-full object-cover h-36 sm:h-40 md:h-40 lg:h-44 xl:h-52"
                      />

                      <h4 className="mb-2 font-serif font-bold text-navy text-[clamp(1.25rem,1.5vw,1.5rem)]">
                        {step.title}
                      </h4>

                      <p className="font-serif text-navy/90 text-[clamp(1.125rem,1vw,1.125rem)] leading-relaxed font-medium">
                        {step.description}
                      </p>

                    </button>
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProcessSection;