import linkedinIcon from "../assets/LandingPage/LinkedIn.png";
import research1 from "../assets/LandingPage/Agentic-Enterprise.png";
import research2 from "../assets/LandingPage/silicon.jpeg";
import research3 from "../assets/LandingPage/Quantum-Readiness.png";
import research4 from "../assets/LandingPage/Agentic-Enterprise1.png";

const ResearchSection = () => {
  return (
    <section id="latest-research" className="scroll-mt-24 bg-white py-8">
      <div className="page-shell mx-auto">

        <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3 lg:mb-3">
          <span className="h-[1px] w-4 bg-current opacity-40 sm:w-6"></span>
          <p className="whitespace-nowrap font-serif text-[18px] font-bold tracking-normal text-navy md:text-[20px]">
            Latest Research
          </p>
          <span className="h-[1px] w-4 bg-current opacity-40 sm:w-6"></span>
        </div>

        <h2 className="mb-2 bg-gradient-to-r from-[#0B3F60] to-[#26A9E0] bg-clip-text text-center text-[32px] font-bold tracking-tight text-transparent sm:text-[40px] md:text-[44px] lg:text-[48px]">
          Fresh from the ResearchFabric
        </h2>

        <p className="mx-auto mb-6 max-w-xl text-center text-[16px] text-muted-foreground sm:max-w-2xl md:text-[18px] lg:text-[20px]">
          Our most recent Thought Shaping Papers and strategic briefings.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">

          {/* FIRST CARD */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44]">

            <img
              src={research1}
              className="w-full h-[240px] object-cover"
            />

            <div className="p-4 text-left">

              <span className="rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[12px] text-white">
                AI / IA
              </span>

              <h3 className="mt-1 text-[22px] font-semibold group-hover:text-white">
                The Agentic Enterprise: When AI Stops Assisting and Starts Acting
              </h3>

              <p className="mt-1 text-[16px] text-gray-500 group-hover:text-white/80">
                A comprehensive framework for understanding how autonomous AI agents will reshape enterprise operations, workforce dynamics, and competitive strategy by 2028.
              </p>

              <div className="mt-1 flex items-center justify-between">
                <p className="text-[10px] font-bold text-gray-600 group-hover:text-white/80 min-[1440px]:text-[12px]">
                  FEB 2026 · Thought Shaping Paper
                </p>

                <div className="flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                  <img src={linkedinIcon} className="h-3 w-3" />
                  <span className="text-[12px]">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND COLUMN */}
          <div className="flex flex-col gap-4">

            {/* CHIPSET CARD */}
            <div className="group relative overflow-hidden rounded-2xl shadow-md h-[200px] max-[320px]:h-[260px]">
              <img src={research2} className="absolute inset-0 h-full w-full object-cover" />

              <div className="absolute inset-0 flex flex-col bg-black/60 p-4 text-left">

                <span className="w-fit rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[12px] text-white">
                  Chipset
                </span>

                <h4 className="mt-1 text-[20px] font-semibold text-white">
                  Beyond Moore: The Custom Silicon Arms Race in AI Infrastructure
                </h4>

                <p className="mt-1 text-[15px] text-white/80 group-hover:text-white">
                  How hyperscalers' in-house chip programs are reshaping the semiconductor landscape.
                </p>

                <div className="mt-auto flex items-center gap-1 text-white">
                  <img src={linkedinIcon} className="h-3 w-3" />
                  <span className="text-[12px]">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>

              </div>
            </div>

            {/* QUANTUM CARD */}
            <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44]">
              <img src={research3} className="h-[130px] w-full object-cover" />

              <div className="p-4 text-left">

                <span className="w-fit rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[12px] text-white">
                  Quantum
                </span>

                <h4 className="mt-1 text-[22px] font-semibold group-hover:text-white">
                  Quantum Readiness Index 2026: Enterprise Preparedness Assessment
                </h4>

                <p className="mt-1 text-[16px] text-gray-500 group-hover:text-white/80">
                  Benchmarking Fortune 500 quantum strategies across readiness, talent, and investment vectors.
                </p>

                <div className="mt-auto flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                  <img src={linkedinIcon} className="h-3 w-3" />
                  <span className="text-[12px]">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* THIRD CARD */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:bg-[#0A1F44]">

            <img
              src={research4}
              className="w-full h-[210px] object-cover"
            />

            <div className="p-4 text-left">

              <span className="rounded-full bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] text-[12px] text-white">
                AI / IA
              </span>

              <h3 className="mt-1 text-[22px] font-semibold group-hover:text-white">
                The Agentic Enterprise: When AI Stops Assisting and Starts Acting
              </h3>

              <p className="mt-1 text-[16px] text-gray-500 group-hover:text-white/80">
                A comprehensive framework for understanding how autonomous AI agents will reshape enterprise operations, workforce dynamics, and competitive strategy by 2028.
              </p>

              <div className="mt-1 flex items-center justify-between">
                <p className="text-[10px] font-bold text-gray-600 group-hover:text-white/80 min-[1440px]:text-[12px]">
                  FEB 2026 · Thought Shaping Paper
                </p>

                <div className="flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                  <img src={linkedinIcon} className="h-3 w-3" />
                  <span className="text-[12px]">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="mt-6 h-6 bg-white sm:mt-8 sm:h-10 lg:h-12" />
    </section>
  );
};

export default ResearchSection;