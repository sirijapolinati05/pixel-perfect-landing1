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
        <div className="relative mx-auto max-w-[1600px]
        px-4 sm:px-6 lg:px-8 xl:px-10
        py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">

          <div className="max-w-[700px] xl:max-w-[900px]">

            {/* HEADING */}
            <h1 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[52px]
            leading-[1.1] tracking-[-0.02em] text-white">
              Thought Shaping Research for Quantum, Chipsets & AI
            </h1>

            {/* SUBTEXT */}
            <p className="mt-5 text-[16px] sm:text-[18px] lg:text-[20px]
            leading-7 sm:leading-8 text-white/90">
              ResearchFabric partners with the world's foremost technology analysts to
              produce Thought Shaping Papers that define the strategic direction of Quantum
              Computing, AI Hardware, and Artificial Intelligence.
            </p>

            {/* STATS */}
            <div className="mt-8 w-full overflow-hidden rounded-[24px]
            border border-white/20 bg-white/10 backdrop-blur-xl">

              <div className="flex divide-x divide-white/15">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 px-6 py-5 text-center"
                  >
                    <p className="text-5xl font-semibold text-[#68e1d0]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[16px] text-white">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS (BLACK TEXT) */}
            <div className="mt-8 flex gap-5">

              <a
                href="#papers"
                className="inline-flex items-center justify-center rounded-full bg-[#33ace5]
                px-5 py-2.5
                text-[14px] sm:text-[15px]
                font-medium text-black
                transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                Explore Thought Shaping
              </a>

              <a
                href="#domains"
                className="inline-flex items-center justify-center rounded-full bg-[#64d7bf]
                px-5 py-2.5
                text-[14px] sm:text-[15px]
                font-medium text-black
                transition-all duration-300 hover:scale-105 hover:-translate-y-1">
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