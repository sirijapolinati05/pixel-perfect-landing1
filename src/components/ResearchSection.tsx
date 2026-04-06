import linkedinIcon from "@/assets/LandingPage/linkedin.png";
import research1 from "@/assets/LandingPage/Agentic-Enterprise.png";
import research2 from "@/assets/LandingPage/silicon.jpeg";
import research3 from "@/assets/LandingPage/Quantum-Readiness.png";
import research4 from "@/assets/LandingPage/Agentic-Enterprise1.png"; // ✅ NEW IMAGE
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";

const ResearchSection = () => {
  return (
    <section id="latest-research" className="overflow-hidden bg-[#F7F9FC] py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-[1px] w-6 bg-current opacity-40"></span>

          <p className="whitespace-nowrap text-xs tracking-widest text-gray-500">
            Latest Research
          </p>

          <span className="h-[1px] w-6 bg-current opacity-40"></span>
        </div>

        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          Fresh from the <span className="text-blue-600">ResearchFabric</span>
        </h2>

        <p className="mb-12 text-xs text-gray-500">
          Our most recent Thought Shaping Papers and strategic briefings.
        </p>

        <div className="grid items-stretch gap-6 md:grid-cols-3">

          {/* FIRST CARD */}
          <div className="relative">
            <img
              src={whiteTypographyImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-44 -top-28 z-0 w-[360px] max-w-none opacity-90"
            />

            <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-md">
              <div className="flex-1 p-4">
                <span className="rounded-full bg-gradient-to-r from-blue-800 to-sky-400 px-2 py-1 text-[10px] text-white">
                  AI / IA
                </span>

                <h3 className="mt-3 text-sm font-semibold">
                  The Agentic Enterprise: When AI Stops Assisting and Starts Acting
                </h3>

                <p className="mt-2 text-[11px] text-gray-500">
                  A framework for how autonomous AI agents reshape enterprise operations.
                </p>

                <div className="mt-3 flex items-center justify-between whitespace-nowrap">
                  <p className="text-[10px] font-medium text-gray-700">
                    FEB 2026 · Thought Shaping Paper
                  </p>

                  <div className="flex items-center text-black">
                    <img src={linkedinIcon} className="h-5 w-5 object-contain" />
                    <span className="-ml-1 text-[9px] leading-none">
                      Releasing soon on <span className="font-semibold">LinkedIn</span>
                    </span>
                  </div>
                </div>
              </div>

              <img src={research1} className="h-auto w-full" />
            </div>
          </div>

          {/* SECOND COLUMN */}
          <div className="flex h-full flex-col gap-4">

            <div className="relative overflow-hidden rounded-2xl shadow-md">
              <img src={research2} className="h-32 w-full object-cover" />

              <div className="absolute inset-0 flex flex-col justify-between bg-black/60 p-3 text-left">
                <span className="w-fit rounded-full bg-gradient-to-r from-blue-800 to-sky-400 px-2 py-1 text-[10px] text-white">
                  Chipset
                </span>

                <div>
                  <h4 className="text-sm font-bold leading-tight text-white">
                    Beyond Moore: Custom Silicon in AI Infrastructure
                  </h4>

                  <p className="mt-1 text-[10px] text-white/80">
                    How hyperscalers in-house chip programs are reshaping the semiconductor landscape
                  </p>

                  <div className="mt-2 flex items-center text-white">
                    <img src={linkedinIcon} className="h-4 w-4 object-contain" />
                    <span className="ml-1 text-[9px] leading-none">
                      Releasing soon on <span className="font-semibold">LinkedIn</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-h-[320px] flex-1 flex-col overflow-hidden rounded-2xl bg-white text-left shadow-md">
              <img src={research3} className="h-36 w-full object-cover" />

              <div className="flex flex-1 flex-col justify-between p-3">
                <div>
                  <span className="rounded-full bg-gradient-to-r from-blue-800 to-sky-400 px-2 py-1 text-[10px] text-white">
                    Quantum
                  </span>

                  <h4 className="mt-2 text-xs font-semibold">
                    Quantum Readiness Index 2026: Enterprise Preparedness Assessment
                  </h4>

                  <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
                    Benchmarking Fortune 500 quantum strategies across readiness, talent, and investment vectors.
                  </p>
                </div>

                <div className="mt-3 flex items-center text-black">
                  <img src={linkedinIcon} className="h-5 w-5 object-contain" />
                  <span className="-ml-1 text-[9px] leading-none">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* THIRD CARD ✅ ONLY IMAGE CHANGED */}
          <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-md">
            <div className="flex-1 p-4">
              <span className="rounded-full bg-gradient-to-r from-blue-800 to-sky-400 px-2 py-1 text-[10px] text-white">
                AI / IA
              </span>

              <h3 className="mt-3 text-sm font-semibold">
                The Agentic Enterprise: When AI Stops Assisting and Starts Acting
              </h3>

              <p className="mt-2 text-[11px] text-gray-500">
                A framework for how autonomous AI agents reshape enterprise operations.
              </p>

              <div className="mt-3 flex items-center justify-between whitespace-nowrap">
                <p className="text-[10px] font-medium text-gray-700">
                  FEB 2026 · Thought Shaping Paper
                </p>

                <div className="flex items-center text-black">
                  <img src={linkedinIcon} className="h-5 w-5 object-contain" />
                  <span className="-ml-1 text-[9px] leading-none">
                    Releasing soon on <span className="font-semibold">LinkedIn</span>
                  </span>
                </div>
              </div>
            </div>

            {/* ✅ ONLY THIS LINE CHANGED */}
            <img src={research4} className="h-auto w-full" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchSection;