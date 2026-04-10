import heroImage from "@/assets/TechnologyResearch/Technology-Research-hero.jpeg";

const stats = [
  { value: "3", label: "Focus Verticals" },
  { value: "100+", label: "Years of Combined Experience" },
  { value: "20+", label: "Focus Micro Markets" },
];

const TechnologyResearchHero = () => {
  return (
    <section className="bg-[#080f43] text-white">
      <div className="relative overflow-hidden">

        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 bg-[#070d3f]" />

        <div
          className="
          absolute inset-y-0 right-0
          w-full sm:w-[80%] md:w-[65%] lg:w-[58%] xl:w-[55%] 2xl:w-[50%]
          opacity-85"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(12,15,70,0.12), rgba(12,15,70,0.12)), url(${heroImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(52,90,255,0.18),transparent_36%),linear-gradient(90deg,rgba(8,15,67,0.97)_0%,rgba(8,15,67,0.89)_42%,rgba(8,15,67,0.34)_70%,rgba(8,15,67,0.1)_100%)]" />

        {/* CONTENT */}
        <div className="
        relative mx-auto max-w-[1440px] xl:max-w-[1400px] 2xl:max-w-[1600px]
        px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 2xl:px-28
        py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36">

          <div className="max-w-[520px] sm:max-w-[600px] md:max-w-[640px] lg:max-w-[700px]">

            {/* HEADING */}
            <h1 className="
            text-[34px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]
            leading-[1.1] tracking-[-0.02em] text-white">
              Thought Shaping Research for Quantum, Chipsets & AI
            </h1>

            {/* SUBTEXT */}
            <p className="
            mt-4 sm:mt-6
            text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]
            leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10
            text-white/90">
              ResearchFabric partners with the world's foremost technology analysts to
              produce Thought Shaping Papers that define the strategic direction of Quantum
              Computing, AI Hardware, and Artificial Intelligence.
            </p>

            {/* GLASS CARD */}
            <div className="
            group relative mt-6 sm:mt-8
            w-full
            overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[26px]
            border border-white/20 bg-white/10
            shadow-[0_25px_60px_rgba(2,6,34,0.34)]
            backdrop-blur-xl
            transition-all duration-500 ease-in-out
            hover:-translate-y-2 hover:scale-[1.02] hover:border-white/40 hover:shadow-[0_35px_80px_rgba(2,6,34,0.55)]">

              {/* EFFECTS */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_35%,rgba(102,231,208,0.08)_100%)]
              opacity-80 group-hover:opacity-100 transition duration-500" />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40 group-hover:bg-white/70 transition" />

              <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/12 blur-2xl
              group-hover:bg-[#68e1d0]/30 transition duration-500" />

              {/* STATS */}
              <div className="relative flex flex-row divide-x divide-white/15">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 px-3 sm:px-5 md:px-6 lg:px-7 py-4 sm:py-5 text-center"
                  >
                    <p className="
                    text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                    font-semibold leading-none text-[#68e1d0]
                    transition duration-300 group-hover:text-white">
                      {stat.value}
                    </p>

                    <p className="
                    mt-1 sm:mt-2
                    text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[20px]
                    leading-4 sm:leading-6 md:leading-7 text-white">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ UPDATED BUTTONS (SIDE-BY-SIDE ON MOBILE) */}
            <div className="mt-6 flex flex-row gap-3 sm:mt-8 sm:gap-4 md:gap-6 lg:gap-4">

              <a
                href="#papers"
                className="
                flex-1 inline-flex
                items-center justify-center
                rounded-full bg-[#33ace5]
                px-4 sm:px-8 md:px-10 lg:px-8 py-2.5 sm:py-4
                text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px]
                font-semibold text-white text-center
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(51,172,229,0.5)]"
              >
                Explore Thought Shaping
              </a>

              <a
                href="#domains"
                className="
                flex-1 inline-flex
                items-center justify-center
                rounded-full bg-[#64d7bf]
                px-4 sm:px-8 md:px-10 lg:px-8 py-2.5 sm:py-4
                text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px]
                font-semibold text-white text-center
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(100,215,191,0.5)]"
              >
                Our Focus Areas
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchHero;
