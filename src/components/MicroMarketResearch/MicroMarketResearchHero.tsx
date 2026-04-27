import heroImage from "@/assets/MicroMarketResearch/micro-market-research-hero1.jpeg";

const heroStats = [
  ["10+", "Niche Markets", "Tracked"],
  ["95%", "Forecast", "Accuracy"],
  ["5+", "Global Enterprises", "Served"],
];

const MicroMarketResearchHero = () => {
  return (
    <section
      id="hero"
      className="micro-market-hero relative overflow-hidden pb-12 pt-20 text-white sm:pb-16 sm:pt-24 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28 xl:pb-28 xl:pt-32"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,32,60,0.94)_0%,rgba(21,32,60,0.82)_38%,rgba(21,32,60,0.52)_64%,rgba(21,32,60,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(52,90,255,0.22),transparent_34%)]" />

      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 relative z-10 mx-auto">
        <div className="max-w-[860px] pt-6 sm:pt-8 md:pt-10 lg:pt-20">
          <h1 className="micro-market-hero-title text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Decoding the Niche.
            <br />
            Defining the Future.
          </h1>

          <p className="micro-market-hero-copy mt-4 text-[clamp(1rem,1.2vw,1.25rem)] leading-relaxed text-white/95 sm:mt-5">
            We specialize in identifying, sizing, and forecasting
            high-potential micro-markets within broader technology ecosystems.
            Where others see a rounding error, we see the next billion-dollar
            opportunity.
          </p>

          <div className="group relative mt-6 max-w-full overflow-hidden rounded-[22px] border border-white/20 bg-white/10 shadow-[0_25px_60px_rgba(2,6,34,0.34)] backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/40 hover:shadow-[0_35px_80px_rgba(2,6,34,0.55)] sm:mt-8">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_35%,rgba(102,231,208,0.08)_100%)] opacity-80 transition duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40 transition group-hover:bg-white/70" />
            <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 rounded-full bg-white/12 blur-2xl transition duration-500 group-hover:bg-[#68e1d0]/30 sm:h-24 sm:w-24" />

            <div className="relative flex flex-row divide-x divide-white/15">
              {heroStats.map(([value, lineOne, lineTwo]) => (
                <div
                  key={value}
                  className="micro-market-hero-stat flex-1 px-3 py-4 text-center sm:px-6 sm:py-5 md:px-7"
                >
                  <p className="micro-market-hero-stat-value text-[clamp(1.5rem,4vw,3.5rem)] font-semibold leading-none text-[#68e1d0] transition duration-300 group-hover:text-white">
                    {value}
                  </p>
                  <p className="micro-market-hero-stat-label mt-2 text-[clamp(0.8125rem,1vw,1rem)] leading-tight text-white">
                    {lineOne}
                    <br />
                    {lineTwo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="micro-market-hero-cta mx-auto mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(180deg,#31b9ee_0%,#249fd8_100%)] px-8 py-3 text-[clamp(0.9375rem,1vw,1.125rem)] font-semibold !text-black transition-transform duration-200 hover:-translate-y-0.5 sm:mx-0"
          >
            Explore Capabilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default MicroMarketResearchHero;
