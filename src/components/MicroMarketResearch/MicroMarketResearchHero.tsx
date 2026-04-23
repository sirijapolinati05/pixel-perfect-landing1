import heroImage from "@/assets/MicroMarketResearch/micro-market-research-hero.jpeg";

const heroStats = [
  ["10+", "Niche Markets", "Tracked"],
  ["95%", "Forecast", "Accuracy"],
  ["5+", "Global Enterprises", "Served"],
];

const MicroMarketResearchHero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#15203c] pb-12 pt-20 text-white sm:pb-16 sm:pt-24 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28 xl:pb-28 xl:pt-32"
    >
      
      {/* BACKGROUNDS */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1e3158_0%,#132443_28%,#1c58c2_28%,#1c58c2_36%,#1a2747_36%,#15203c_46%,#1d5fd0_46%,#1d5fd0_52%,#17315d_52%,#132443_60%,#0f1d37_100%)] opacity-95" />
      
      <div className="absolute inset-y-0 right-0 w-full sm:w-[78%] md:w-[64%] lg:w-[56%] xl:w-[52%] opacity-30 sm:opacity-40">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_10%] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,32,60,0.88)_0%,rgba(21,32,60,0.42)_48%,rgba(21,32,60,0.18)_100%)]" />
      </div>

      <div className="absolute inset-0 bg-[repeating-linear-gradient(123deg,transparent_0px,transparent_42px,rgba(43,114,255,0.88)_42px,rgba(43,114,255,0.88)_66px,transparent_66px,transparent_132px)] opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,10,22,0.3),rgba(6,10,22,0.04),rgba(6,10,22,0.3))]" />

      <div className="page-shell relative mx-auto">
        <div className="max-w-[760px] pt-6 sm:pt-8 md:pt-10 lg:pt-20">

          {/* TITLE */}
          <h1 className="max-w-[680px] text-[36px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[0.95] tracking-[-0.03em]">
            Decoding the Niche.
            <br />
            Defining the Future.
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 sm:mt-5 max-w-[860px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-6 sm:leading-7 md:leading-8 text-white/95">
            We specialize in identifying, sizing, and forecasting
            high-potential micro-markets within broader technology ecosystems.
            Where others see a rounding error, we see the next billion-dollar
            opportunity.
          </p>

          {/* GLASS STATS */}
          <div className="group relative mt-6 sm:mt-8 max-w-full overflow-hidden rounded-[22px] sm:rounded-[24px] border border-white/20 bg-white/10 shadow-[0_25px_60px_rgba(2,6,34,0.34)] backdrop-blur-xl md:rounded-[26px]
          transition-all duration-500 ease-in-out
          hover:-translate-y-2 hover:scale-[1.02] hover:border-white/40 hover:shadow-[0_35px_80px_rgba(2,6,34,0.55)]">

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_35%,rgba(102,231,208,0.08)_100%)]
            opacity-80 group-hover:opacity-100 transition duration-500" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40 group-hover:bg-white/70 transition" />

            <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/12 blur-2xl
            group-hover:bg-[#68e1d0]/30 transition duration-500" />

            <div className="relative flex flex-row divide-x divide-white/15">
              {heroStats.map(([value, lineOne, lineTwo]) => (
                <div
                  key={value}
                  className="flex-1 px-3 sm:px-6 md:px-7 py-4 sm:py-5 text-center"
                >
                  <p className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-none text-[#68e1d0] transition duration-300 group-hover:text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[16px] sm:text-[18px] md:text-[20px] leading-5 sm:leading-7 text-white">
                    {lineOne}
                    <br />
                    {lineTwo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTON (TEXT BLACK FIXED) */}
          <button
            type="button"
            className="mt-6 w-fit mx-auto sm:mx-0 rounded-full 
            bg-[linear-gradient(180deg,#31b9ee_0%,#249fd8_100%)] 
            px-3.5 sm:px-4.5 md:px-6 
            py-2 sm:py-2.5 
            text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] 
            font-semibold !text-black
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:-translate-y-1"
          >
            Explore Capabilities
          </button>

        </div>
      </div>
    </section>
  );
};

export default MicroMarketResearchHero;
