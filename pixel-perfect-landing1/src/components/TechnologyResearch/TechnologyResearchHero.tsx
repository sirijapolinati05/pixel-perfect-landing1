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

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#070d3f]" />

        <div className="absolute inset-y-0 right-0 w-full sm:w-[80%] md:w-[65%] lg:w-[58%] xl:w-[55%] 2xl:w-[50%] opacity-85">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover object-[center_12%] sm:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,70,0.12),rgba(12,15,70,0.12))]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(52,90,255,0.18),transparent_36%),linear-gradient(90deg,rgba(8,15,67,0.97)_0%,rgba(8,15,67,0.89)_42%,rgba(8,15,67,0.34)_70%,rgba(8,15,67,0.1)_100%)]" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-[1600px] [@media_(min-width:2560px)]:max-w-[2304px]
        px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-6
        py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36">

          <div className="max-w-[520px] sm:max-w-[600px] md:max-w-[640px] lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1100px]">

            {/* HEADING */}
            <h1 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[52px] 2xl:text-[58px]
            leading-[1.1] tracking-[-0.02em] text-white">
              Thought Shaping Research for Quantum, Chipsets & AI
            </h1>

            {/* SUBTEXT */}
            <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px]
            leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-white/90">
              ResearchFabric partners with the world's foremost technology analysts to
              produce Thought Shaping Papers that define the strategic direction of Quantum
              Computing, AI Hardware, and Artificial Intelligence.
            </p>

            {/* STATS CARD */}
            <div className="group relative mt-6 sm:mt-8 w-full overflow-hidden rounded-[20px] sm:rounded-[24px]
            border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_25px_60px_rgba(2,6,34,0.34)]">

              <div className="relative flex flex-row divide-x divide-white/15">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 px-3 sm:px-5 md:px-6 py-4 sm:py-5 text-center"
                  >
                    <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#68e1d0]">
                      {stat.value}
                    </p>
                    <p className="mt-1 sm:mt-2 text-[14px] sm:text-[17px] md:text-[18px] text-white">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-5 flex flex-row gap-2 sm:mt-8 sm:gap-4 md:gap-6">

              <a
                href="#papers"
                className="flex-1 inline-flex items-center justify-center rounded-full bg-[#33ace5]
                px-2 py-1.5 min-[375px]:px-5 min-[375px]:py-2
                sm:px-8 md:px-10 sm:py-4
                text-[10px] min-[375px]:text-[13px] sm:text-[17px] md:text-[18px] 2xl:text-[20px]
                whitespace-nowrap font-medium sm:font-semibold text-white text-center
                transition-all duration-300 hover:scale-105 hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(51,172,229,0.5)]">
                Explore Thought Shaping
              </a>

              <a
                href="#domains"
                className="flex-1 inline-flex items-center justify-center rounded-full bg-[#64d7bf]
                px-2 py-1.5 min-[375px]:px-5 min-[375px]:py-2
                sm:px-8 md:px-10 sm:py-4
                text-[10px] min-[375px]:text-[13px] sm:text-[17px] md:text-[18px] 2xl:text-[20px]
                whitespace-nowrap font-medium sm:font-semibold text-white text-center
                transition-all duration-300 hover:scale-105 hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(100,215,191,0.5)]">
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