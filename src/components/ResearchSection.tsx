import linkedinIcon from "../assets/LandingPage/LinkedIn.png";
import research1 from "../assets/LandingPage/Agentic-Enterprise.png";
import research2 from "../assets/LandingPage/silicon.jpeg";
import research3 from "../assets/LandingPage/Quantum-Readiness.png";
import research4 from "../assets/LandingPage/Agentic-Enterprise1.png";

const ResearchSection = () => {
  return (
    <section className="bg-[#F7F9FC] py-8">
      <div className="mx-auto max-w-6xl px-4">

        {/* ✅ ADDED HEADING (SAME AS OUR PROCESS) */}
        <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3 lg:mb-3">
          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>

          <p className="text-navy font-serif text-[18px] md:text-[20px] font-bold tracking-normal whitespace-nowrap">
            Latest Research
          </p>

          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {/* FIRST CARD */}
          <div className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-md hover:scale-[1.05] hover:bg-[#0A1F44]">

            <div className="p-3 text-left">
              <span className="text-[12px] text-white bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] rounded-full">
                AI / IA
              </span>

              <h3 className="mt-1 text-[22px] font-semibold group-hover:text-white leading-[26px]">
                The Agentic Enterprise: When AI Stops Assisting and Starts Acting
              </h3>

              <p className="mt-1 text-[16px] leading-[24px] text-gray-500 group-hover:text-white/80">
                A comprehensive framework for understanding how autonomous AI agents will reshape enterprise operations.
              </p>

              <div className="mt-1 flex items-center justify-between">
                <p className="text-[14px] font-bold text-gray-600 group-hover:text-white/80">
                  FEB 2026 · Thought Shaping Paper
                </p>

                <div className="flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                  <img src={linkedinIcon} className="h-3 w-3" />
                  <span className="text-[12px] leading-none">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>

            <img src={research1} className="mt-auto w-full object-contain" />
          </div>

          {/* SECOND COLUMN */}
          <div className="flex flex-col gap-4">

            {/* CHIPSET CARD */}
            <div className="relative overflow-hidden rounded-2xl shadow-md hover:scale-[1.05]">
              <img src={research2} className="h-40 w-full object-cover" />

              <div className="absolute inset-0 flex flex-col bg-black/60 p-2.5 text-left">

                <span className="text-[12px] text-white bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] rounded-full w-fit">
                  Chipset
                </span>

                <h4 className="mt-1 text-[22px] text-white font-semibold leading-[26px]">
                  Beyond Moore: The Custom Silicon Arms Race in AI Infrastructure
                </h4>

                <p className="mt-1 text-[16px] leading-[24px] text-white/70">
                  How hyperscalers' in-house chip programs are reshaping the semiconductor landscape.
                </p>

                <div className="mt-2 flex items-center gap-1 text-white">
                  <img src={linkedinIcon} className="h-3 w-3" />
                  <span className="text-[12px] leading-none">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>

              </div>
            </div>

            {/* QUANTUM CARD */}
            <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:scale-[1.05] hover:bg-[#0A1F44]">

              <img src={research3} className="h-32 w-full object-contain" />

              <div className="p-3 text-left flex flex-col">
                <span className="text-[12px] text-white bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] rounded-full w-fit">
                  Quantum
                </span>

                <h4 className="mt-1 text-[22px] font-semibold group-hover:text-white leading-[26px]">
                  Quantum Readiness Index 2026: Enterprise Preparedness Assessment
                </h4>

                <p className="mt-1 text-[16px] leading-[24px] text-gray-500 group-hover:text-white/80">
                  Benchmarking Fortune 500 quantum strategies across readiness, talent, and investment vectors.
                </p>

                <div className="mt-auto pt-1 flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                  <img src={linkedinIcon} className="h-3 w-3" />
                  <span className="text-[12px] leading-none">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* THIRD CARD */}
          <div className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-md hover:scale-[1.05] hover:bg-[#0A1F44]">

            <div className="p-3 text-left">
              <span className="text-[12px] text-white bg-gradient-to-r from-[#0A0E33] to-[#25A6DD] px-2 py-[2px] rounded-full">
                AI / IA
              </span>

              <h3 className="mt-1 text-[22px] font-semibold group-hover:text-white leading-[26px]">
                The Agentic Enterprise: When AI Stops Assisting and Starts Acting
              </h3>

              <p className="mt-1 text-[16px] leading-[24px] text-gray-500 group-hover:text-white/80">
                A comprehensive framework for understanding how autonomous AI agents will reshape enterprise operations.
              </p>

              <div className="mt-1 flex items-center justify-between">
                <p className="text-[14px] font-bold text-gray-600 group-hover:text-white/80">
                  FEB 2026 · Thought Shaping Paper
                </p>

                <div className="flex items-center gap-1 text-gray-600 group-hover:text-white/80">
                  <img src={linkedinIcon} className="h-3 w-3" />
                  <span className="text-[12px] leading-none">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>

            <img src={research4} className="mt-auto w-full object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
