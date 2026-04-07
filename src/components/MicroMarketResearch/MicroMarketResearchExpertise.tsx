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
      className="relative overflow-hidden bg-[#101341] px-6 py-14 text-white lg:px-14"
    >
      {/* BACKGROUND */}
      <div className="absolute left-[-80px] top-[-70px] h-[320px] w-[320px] rounded-full border border-white/20" />
      <div className="absolute left-[-64px] top-[-56px] h-[290px] w-[290px] rounded-full border border-white/20" />
      <div className="absolute left-[-48px] top-[-42px] h-[260px] w-[260px] rounded-full border border-white/20" />
      <div className="absolute left-[-32px] top-[-28px] h-[230px] w-[230px] rounded-full border border-white/20" />
      <div className="absolute left-[-16px] top-[-14px] h-[200px] w-[200px] rounded-full border border-white/20" />
      <div className="absolute left-[0px] top-[0px] h-[170px] w-[170px] rounded-full border border-white/20" />
      <div className="absolute bottom-[-60px] right-[-60px] h-[200px] w-[200px] rounded-full border border-white/20" />
      <div className="absolute bottom-[-44px] right-[-44px] h-[168px] w-[168px] rounded-full border border-white/20" />
      <div className="absolute bottom-[-28px] right-[-28px] h-[136px] w-[136px] rounded-full border border-white/20" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[17px] font-bold tracking-[0.01em] text-[#18afe5]">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#18afe5]" />
              Our Expertise
              <span className="h-px w-8 bg-[#18afe5]" />
            </span>
          </p>

          <h2 className="mt-4 text-[2.5rem] font-bold leading-none tracking-[-0.02em] md:text-[3.2rem]">
            Micro-Market Competencies
          </h2>

          <p className="mx-auto mt-3 max-w-[820px] text-[16px] leading-7 text-white/90">
            Our proprietary framework allows us to dissect complex value chains
            and isolate the specific variables driving growth in emerging
            technology sectors.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-3">
          {expertiseItems.map((item) => {
            return (
              <article
                key={item.title}
                className="max-w-[320px] p-3 rounded-xl cursor-pointer
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl"
              >
                {/* ICON */}
                <div className="flex h-[44px] w-[44px] items-center justify-center">
                  <img
                    src={starImg}
                    alt=""
                    aria-hidden="true"
                    className="h-[26px] w-[26px] object-contain 
                    transition-all duration-300
                    hover:scale-110 hover:rotate-12"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-3 text-[1.2rem] leading-tight tracking-[-0.01em]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-[14px] leading-6 text-white/90">
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
