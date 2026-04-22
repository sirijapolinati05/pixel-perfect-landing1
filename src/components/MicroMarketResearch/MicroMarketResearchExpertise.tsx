import starImg from "@/assets/MicroMarketResearch/Star.png";

const expertiseItems = [
  {
    title: "Granular Market Sizing",
    description:
      "Bottom-up TAM/SAM/SOM modeling for hyper-specific technology verticals, validating assumptions against real-world supply chain data.",
  },
  {
    title: "Competitive Landscape",
    description:
      "Identifying emerging players and start-ups before they appear on the radar of traditional research firms. We map the innovators, not just the incumbents.",
  },
  {
    title: "CX-Tech Stack Assessment",
    description:
      "Rigorous benchmarking of competing technical standards and protocols to determine which solutions will achieve commercial scale.",
  },
  {
    title: "Supply Chain Dynamics",
    description:
      "Mapping the flow of critical components and materials to identify bottlenecks, geopolitical risks, and pricing pressures.",
  },
  {
    title: "End-User Sentiment",
    description:
      'Direct engagement with early adopters and enterprise buyers to understand the "Why" behind procurement decisions in niche markets.',
  },
  {
    title: "M&A Target Identification",
    description:
      "Helping strategic investors identify high-value acquisition targets with unique IP portfolios in emerging micro-sectors.",
  },
];

const MicroMarketResearchExpertise = () => {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#101341] py-10 text-white sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12"
    >
      {/* BACKGROUND */}
      <div className="absolute left-[-56px] top-[-48px] h-[220px] w-[220px] sm:left-[-68px] sm:top-[-58px] sm:h-[270px] sm:w-[270px] md:left-[-80px] md:top-[-70px] md:h-[320px] md:w-[320px] rounded-full border border-white/20" />
      <div className="absolute left-[-44px] top-[-38px] h-[198px] w-[198px] sm:left-[-56px] sm:top-[-48px] sm:h-[244px] sm:w-[244px] md:left-[-64px] md:top-[-56px] md:h-[290px] md:w-[290px] rounded-full border border-white/20" />
      <div className="absolute left-[-32px] top-[-28px] h-[176px] w-[176px] sm:left-[-42px] sm:top-[-36px] sm:h-[218px] sm:w-[218px] md:left-[-48px] md:top-[-42px] md:h-[260px] md:w-[260px] rounded-full border border-white/20" />
      <div className="absolute left-[-22px] top-[-18px] h-[154px] w-[154px] sm:left-[-28px] sm:top-[-24px] sm:h-[190px] sm:w-[190px] md:left-[-32px] md:top-[-28px] md:h-[230px] md:w-[230px] rounded-full border border-white/20" />
      <div className="absolute left-[-10px] top-[-10px] h-[132px] w-[132px] sm:left-[-14px] sm:top-[-12px] sm:h-[164px] sm:w-[164px] md:left-[-16px] md:top-[-14px] md:h-[200px] md:w-[200px] rounded-full border border-white/20" />
      <div className="absolute left-0 top-0 h-[110px] w-[110px] sm:h-[140px] sm:w-[140px] md:h-[170px] md:w-[170px] rounded-full border border-white/20" />
      <div className="absolute bottom-[-36px] right-[-36px] h-[120px] w-[120px] sm:bottom-[-48px] sm:right-[-48px] sm:h-[156px] sm:w-[156px] md:bottom-[-60px] md:right-[-60px] md:h-[200px] md:w-[200px] rounded-full border border-white/20" />
      <div className="absolute bottom-[-26px] right-[-26px] h-[100px] w-[100px] sm:bottom-[-34px] sm:right-[-34px] sm:h-[132px] sm:w-[132px] md:bottom-[-44px] md:right-[-44px] md:h-[168px] md:w-[168px] rounded-full border border-white/20" />
      <div className="absolute bottom-[-16px] right-[-16px] h-[80px] w-[80px] sm:bottom-[-22px] sm:right-[-22px] sm:h-[106px] sm:w-[106px] md:bottom-[-28px] md:right-[-28px] md:h-[136px] md:w-[136px] rounded-full border border-white/20" />

      <div className="page-shell relative z-10 mx-auto">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[18px] md:text-[20px] font-bold tracking-normal text-[#18afe5]">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-6 sm:w-7 md:w-8 bg-[#18afe5]" />
              Our Expertise
              <span className="h-px w-6 sm:w-7 md:w-8 bg-[#18afe5]" />
            </span>
          </p>

          <h2 className="mt-4 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] font-bold leading-none tracking-[-0.02em]">
            Micro-Market Competencies
          </h2>

          <p className="mx-auto mt-3 max-w-[820px] text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] leading-6 sm:leading-7 text-white/90">
            Our proprietary framework allows us to dissect complex value chains
            and isolate the specific variables driving growth in emerging
            technology sectors.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-7 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 md:grid-cols-3 md:gap-x-8 lg:mt-6">
          {expertiseItems.map((item, index) => {
            const desktopOffsetClass =
              index % 3 === 1
                ? "md:translate-x-5 lg:translate-x-8"
                : index % 3 === 2
                  ? "md:translate-x-10 lg:translate-x-16"
                  : "";

            return (
              <article
                key={item.title}
                className={`max-w-full md:max-w-[320px] p-3 sm:p-4 md:p-3 rounded-xl cursor-pointer
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl ${desktopOffsetClass}`}
              >
                {/* ICON */}
                <div className="flex h-10 w-10 sm:h-[44px] sm:w-[44px] items-center justify-center">
                  <img
                    src={starImg}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 sm:h-[26px] sm:w-[26px] object-contain 
                    transition-all duration-300
                    hover:scale-110 hover:rotate-12"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-3 text-[20px] sm:text-[22px] md:text-[22px] lg:text-[24px] leading-tight tracking-[-0.01em]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-[16px] sm:text-[16px] md:text-[18px] leading-6 text-white/90">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MicroMarketResearchExpertise;
