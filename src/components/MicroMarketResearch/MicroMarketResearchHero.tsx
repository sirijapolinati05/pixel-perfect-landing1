const heroStats = [
  ["10+", "Niche Markets", "Tracked"],
  ["95%", "Forecast", "Accuracy"],
  ["5+", "Global Enterprises", "Served"],
];

const MicroMarketResearchHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#15203c] px-6 pb-20 pt-24 text-white lg:px-14 lg:pb-24 lg:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#1e3158_0%,#132443_28%,#1c58c2_28%,#1c58c2_36%,#1a2747_36%,#15203c_46%,#1d5fd0_46%,#1d5fd0_52%,#17315d_52%,#132443_60%,#0f1d37_100%)] opacity-95" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(123deg,transparent_0px,transparent_42px,rgba(43,114,255,0.88)_42px,rgba(43,114,255,0.88)_66px,transparent_66px,transparent_132px)] opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,10,22,0.3),rgba(6,10,22,0.04),rgba(6,10,22,0.3))]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="max-w-[760px] pt-10 lg:pt-20">
          <h1 className="max-w-[680px] text-[3.4rem] leading-[0.95] tracking-[-0.03em] md:text-[5rem]">
            Decoding the Niche.
            <br />
            Defining the Future.
          </h1>
          <p className="mt-5 max-w-[860px] text-[18px] leading-8 text-white/95 md:text-[19px]">
            We specialize in identifying, sizing, and forecasting
            high-potential micro-markets within broader technology ecosystems.
            Where others see a rounding error, we see the next billion-dollar
            opportunity.
          </p>

          <div className="relative mt-8 max-w-[520px] overflow-hidden rounded-[24px] border border-white/20 bg-white/10 shadow-[0_25px_60px_rgba(2,6,34,0.34)] backdrop-blur-xl md:rounded-[26px]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_35%,rgba(102,231,208,0.08)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
            <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-white/12 blur-2xl" />

            <div className="relative flex flex-col md:flex-row">
              {heroStats.map(([value, lineOne, lineTwo], index) => (
                <div
                  key={value}
                  className={`flex-1 px-7 py-5 ${
                    index < heroStats.length - 1
                      ? "border-b border-white/15 md:border-b-0 md:border-r"
                      : ""
                  } border-white/15`}
                >
                  <p className="text-5xl font-semibold leading-none text-[#68e1d0]">
                    {value}
                  </p>
                  <p className="mt-2 max-w-[120px] text-xl leading-7 text-white">
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
            className="mt-5 rounded-full bg-[linear-gradient(180deg,#31b9ee_0%,#249fd8_100%)] px-8 py-3 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(18,130,193,0.42)] transition hover:brightness-105"
          >
            Explore Capabilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default MicroMarketResearchHero;
