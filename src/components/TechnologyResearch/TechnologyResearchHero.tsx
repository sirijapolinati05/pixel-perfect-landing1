import heroImage from "@/assets/TechnologyResearch/Technology-Research-hero.jpeg";

const stats = [
  { value: "3", label: "Focus Verticals" },
  { value: "100+", label: "Years of Combined Experience" },
  { value: "20+", label: "Focus Micro Markets" },
];

const TechnologyResearchHero = () => {
  return (
    <section className="technology-research-hero relative overflow-hidden pb-12 pt-20 text-white sm:pb-16 sm:pt-24 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28 xl:pb-28 xl:pt-32">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,15,67,0.94)_0%,rgba(8,15,67,0.82)_38%,rgba(8,15,67,0.52)_64%,rgba(8,15,67,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(52,90,255,0.22),transparent_34%)]" />

      <div className="page-shell relative z-10 mx-auto">
        <div className="max-w-[760px] pt-6 sm:pt-8 md:pt-10 lg:pt-20">
          <h1 className="technology-research-hero-title max-w-[680px] text-[36px] font-semibold leading-[0.95] tracking-[-0.03em] sm:text-[40px] md:text-[48px] lg:text-[50px]">
            Thought Shaping Research for Quantum, Chipsets & AI
          </h1>

          <p className="technology-research-hero-copy mt-4 max-w-[860px] text-[16px] leading-6 text-white/95 sm:mt-5 sm:text-[18px] sm:leading-7 md:text-[20px] md:leading-8">
            ResearchFabric partners with the world&apos;s foremost technology analysts to
            produce Thought Shaping Papers that define the strategic direction of
            Quantum Computing, AI Hardware, and Artificial Intelligence.
          </p>

          <div className="group relative mt-6 max-w-full overflow-hidden rounded-[22px] border border-white/20 bg-white/10 shadow-[0_25px_60px_rgba(2,6,34,0.34)] backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/40 hover:shadow-[0_35px_80px_rgba(2,6,34,0.55)] sm:mt-8 sm:rounded-[24px] md:rounded-[26px]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_35%,rgba(102,231,208,0.08)_100%)] opacity-80 transition duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40 transition group-hover:bg-white/70" />
            <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 rounded-full bg-white/12 blur-2xl transition duration-500 group-hover:bg-[#68e1d0]/30 sm:h-24 sm:w-24" />

            <div className="relative flex flex-row divide-x divide-white/15">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="technology-research-hero-stat flex-1 px-3 py-4 text-center sm:px-6 sm:py-5 md:px-7"
                >
                  <p className="technology-research-hero-stat-value text-2xl font-semibold leading-none text-[#68e1d0] transition duration-300 group-hover:text-white sm:text-4xl md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="technology-research-hero-stat-label mt-2 text-[16px] leading-5 text-white sm:text-[18px] sm:leading-7 md:text-[20px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="technology-research-hero-cta mx-auto mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#31b9ee_0%,#249fd8_100%)] px-4 py-2.5 text-[15px] font-semibold !text-black transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A34] sm:mx-0 sm:px-6 sm:py-3 sm:text-[17px] md:px-7 md:py-3.5 md:text-[17px] [@media_(max-width:340px)]:text-[12px]"
          >
            Explore Thought Shaping
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchHero;
