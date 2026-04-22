import linkedinIcon from "../assets/LandingPage/LinkedIn.png";
import research1 from "../assets/LandingPage/Agentic-Enterprise.png";
import research2 from "../assets/LandingPage/silicon.jpeg";
import research3 from "../assets/LandingPage/Quantum-Readiness.png";
import research4 from "../assets/LandingPage/Agentic-Enterprise1.png";

const ResearchSection = () => {
  return (
    <section id="latest-research" className="scroll-mt-24 bg-white py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-6 [@media_(min-width:2560px)]:max-w-[2304px]">
        <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3 lg:mb-3">
          <span className="h-[1px] w-4 bg-current opacity-40 sm:w-6"></span>
          <p className="whitespace-nowrap font-serif text-[18px] font-bold tracking-normal text-navy md:text-[20px]">
            Latest Research
          </p>
          <span className="h-[1px] w-4 bg-current opacity-40 sm:w-6"></span>
        </div>

        <h2 className="mb-2 bg-gradient-to-r from-[#0B3F60] to-[#26A9E0] bg-clip-text text-center text-[32px] font-bold leading-[1.1] tracking-tight text-transparent sm:text-[40px] md:text-[44px] lg:text-[48px]">
          Fresh from the ResearchFabric
        </h2>

        <p className="mx-auto mb-6 max-w-xl text-center text-[16px] text-muted-foreground sm:max-w-2xl md:max-w-3xl md:text-[18px] lg:text-[20px]">
          Our most recent Thought Shaping Papers and strategic briefings.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr [@media_(width:768px)]:gap-2.5">
          {/* FIRST CARD */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44] [@media_(width:768px)]:h-auto [@media_(width:768px)]:flex-col-reverse">
            <div className="p-4 text-left [@media_(width:768px)]:p-3">
              <span className="rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[12px] text-white [@media_(width:768px)]:px-1.5 [@media_(width:768px)]:py-[1px] [@media_(width:768px)]:text-[9px]">
                AI / IA
              </span>

              <h3 className="mt-1 text-[22px] font-semibold leading-[26px] group-hover:text-white [@media_(width:768px)]:mt-2 [@media_(width:768px)]:text-[16px] [@media_(width:768px)]:leading-[20px]">
                The Agentic Enterprise: When AI Stops Assisting and Starts Acting
              </h3>

              <p className="mt-1 text-[16px] leading-[24px] text-gray-500 group-hover:text-white/80 [@media_(width:768px)]:mt-2 [@media_(width:768px)]:text-[12px] [@media_(width:768px)]:leading-[16px]">
                A comprehensive framework for understanding how autonomous AI agents will reshape enterprise operations.
              </p>

              <div className="mt-1 flex items-center justify-between [@media_(width:768px)]:hidden [@media_(width:1024px)]:mt-2 [@media_(width:1024px)]:flex-col [@media_(width:1024px)]:items-start [@media_(width:1024px)]:gap-1">
                <p className="text-[10px] font-bold text-gray-600 group-hover:text-white/80 [@media_(width:768px)]:text-[8px] [@media_(width:1024px)]:text-[12px]">
                  FEB 2026 · Thought Shaping Paper
                </p>

                <div className="flex items-center gap-1 text-gray-600 group-hover:text-white/80 [@media_(width:768px)]:gap-0.5 [@media_(width:1024px)]:gap-1">
                  <img src={linkedinIcon} className="h-3 w-3 [@media_(width:768px)]:h-2 [@media_(width:768px)]:w-2" />
                  <span className="text-[12px] leading-none [@media_(width:768px)]:text-[8px] [@media_(width:1024px)]:text-[12px]">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>

            <img src={research1} className="mt-auto w-full object-contain [@media_(width:768px)]:h-[210px] [@media_(width:768px)]:max-h-none" />
          </div>

          {/* SECOND COLUMN */}
          <div className="flex h-full flex-col gap-4 [@media_(width:768px)]:gap-2.5">
            {/* CHIPSET CARD */}
            <div
              className="
                relative overflow-hidden rounded-2xl shadow-md
                h-[200px]
              [@media_(width:768px)]:h-[128px]
                [@media_(width:1024px)]:h-[172px]
                [@media_(min-width:1440px)_and_(max-width:2200px)]:h-[165px]
                [@media_(min-width:2560px)]:h-[280px]
              "
            >
              <img src={research2} className="absolute inset-0 h-full w-full object-cover" />

              <div className="absolute inset-0 flex flex-col bg-black/60 p-4 text-left [@media_(width:768px)]:p-2">
                <span className="w-fit rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[12px] text-white [@media_(width:768px)]:px-1.5 [@media_(width:768px)]:py-[1px] [@media_(width:768px)]:text-[9px]">
                  Chipset
                </span>

                <h4 className="mt-1 text-[20px] font-semibold leading-[24px] text-white [@media_(width:768px)]:mt-0.5 [@media_(width:768px)]:text-[13px] [@media_(width:768px)]:leading-[15px]">
                  Beyond Moore: The Custom Silicon Arms Race in AI Infrastructure
                </h4>

                <p className="mt-1 text-[15px] leading-[22px] text-white/80 [@media_(width:768px)]:mt-0.5 [@media_(width:768px)]:text-[9px] [@media_(width:768px)]:leading-[12px]">
                  How hyperscalers' in-house chip programs are reshaping the semiconductor landscape.
                </p>

                <div className="mt-auto flex items-center gap-1 text-white [@media_(width:768px)]:gap-0.5">
                  <img src={linkedinIcon} className="h-3 w-3 [@media_(width:768px)]:h-2 [@media_(width:768px)]:w-2" />
                  <span className="text-[12px] leading-none [@media_(width:768px)]:text-[8px]">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>

            {/* QUANTUM CARD */}
            <div className="group flex flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44] [@media_(min-width:2560px)]:h-[300px] [@media_(width:768px)]:flex-none [@media_(width:768px)]:h-[188px]">
              <img
                src={research3}
                className="h-[130px] w-full object-cover object-center sm:h-[150px] [@media_(width:768px)]:h-[72px] [@media_(min-width:2560px)]:h-full"
              />

              <div className="flex flex-1 flex-col p-4 text-left [@media_(width:768px)]:p-2">
                <span className="w-fit rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[12px] text-white [@media_(width:768px)]:px-1.5 [@media_(width:768px)]:py-[1px] [@media_(width:768px)]:text-[9px]">
                  Quantum
                </span>

                <h4 className="mt-1 text-[22px] font-semibold leading-[26px] group-hover:text-white [@media_(width:768px)]:mt-0.5 [@media_(width:768px)]:text-[14px] [@media_(width:768px)]:leading-[16px]">
                  Quantum Readiness Index 2026: Enterprise Preparedness Assessment
                </h4>

                <p className="mt-1 text-[16px] leading-[24px] text-gray-500 group-hover:text-white/80 [@media_(width:768px)]:mt-0.5 [@media_(width:768px)]:text-[10px] [@media_(width:768px)]:leading-[13px]">
                  Benchmarking Fortune 500 quantum strategies across readiness, talent, and investment vectors.
                </p>

                <div className="mt-auto flex items-center gap-1 pt-1 text-gray-600 group-hover:text-white/80 [@media_(width:768px)]:gap-0.5 [@media_(width:768px)]:pt-0.5">
                  <img src={linkedinIcon} className="h-3 w-3 [@media_(width:768px)]:h-2 [@media_(width:768px)]:w-2" />
                  <span className="text-[12px] leading-none [@media_(width:768px)]:text-[7px]">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* THIRD CARD */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44] [@media_(width:768px)]:h-auto [@media_(width:768px)]:flex-col-reverse">
            <div className="p-4 text-left [@media_(width:768px)]:p-3">
              <span className="rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[12px] text-white [@media_(width:768px)]:px-1.5 [@media_(width:768px)]:py-[1px] [@media_(width:768px)]:text-[9px]">
                AI / IA
              </span>

              <h3 className="mt-1 text-[22px] font-semibold leading-[26px] group-hover:text-white [@media_(width:768px)]:mt-2 [@media_(width:768px)]:text-[16px] [@media_(width:768px)]:leading-[20px]">
                The Agentic Enterprise: When AI Stops Assisting and Starts Acting
              </h3>

              <p className="mt-1 text-[16px] leading-[24px] text-gray-500 group-hover:text-white/80 [@media_(width:768px)]:mt-2 [@media_(width:768px)]:text-[12px] [@media_(width:768px)]:leading-[16px]">
                A comprehensive framework for understanding how autonomous AI agents will reshape enterprise operations.
              </p>

              <div className="mt-1 flex items-center justify-between [@media_(width:768px)]:hidden [@media_(width:1024px)]:mt-2 [@media_(width:1024px)]:flex-col [@media_(width:1024px)]:items-start [@media_(width:1024px)]:gap-1">
                <p className="text-[10px] font-bold text-gray-600 group-hover:text-white/80 [@media_(width:768px)]:text-[8px] [@media_(width:1024px)]:text-[12px]">
                  FEB 2026 · Thought Shaping Paper
                </p>

                <div className="flex items-center gap-1 text-gray-600 group-hover:text-white/80 [@media_(width:768px)]:gap-0.5 [@media_(width:1024px)]:gap-1">
                  <img src={linkedinIcon} className="h-3 w-3 [@media_(width:768px)]:h-2 [@media_(width:768px)]:w-2" />
                  <span className="text-[12px] leading-none [@media_(width:768px)]:text-[8px] [@media_(width:1024px)]:text-[12px]">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>

            <img src={research4} className="mt-auto w-full object-contain [@media_(width:768px)]:h-[210px] [@media_(width:768px)]:max-h-none" />
          </div>
        </div>
      </div>

      <div className="mt-6 h-6 bg-white sm:mt-8 sm:h-10 lg:h-12" />
    </section>
  );
};

export default ResearchSection;
