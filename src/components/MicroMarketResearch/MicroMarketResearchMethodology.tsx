import methodologyImage from "@/assets/MicroMarketResearch/Pyramid.png";
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";

const methodCards = [
  {
    step: "01",
    title: "Patent & IP Landscape Analysis",
    description:
      "We analyze patent filings to identify where R&D dollars are flowing before products even hit the market.",
    className: "md:col-span-2",
  },
  {
    step: "02",
    title: "Primary Expert Interviews",
    description:
      "We don’t rely on secondary desk research. We speak directly to the engineers and scientists building the future.",
  },
  {
    step: "03",
    title: "Ecosystem Triangulation",
    description:
      "We cross-verify market data across suppliers, integrators, and end-users to eliminate reporting bias.",
  },
];

const MicroMarketResearchMethodology = () => {
  return (
    <section className="relative bg-[#f8f7f3] px-6 py-20 text-[#141742] lg:pl-14 lg:pr-0">
      
      {/* 🔥 TYPOGRAPHY IMAGE (VISIBLE ABOVE SECTION, NO CUT) */}
      <div className="pointer-events-none absolute right-[-6%] -top-24 z-0">
        <img
          src={whiteTypographyImg}
          alt=""
          aria-hidden="true"
          className="w-[360px] opacity-20 rotate-[120deg]"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px]">

        <p className="relative z-10 text-[16px] font-medium text-[#1d214f]">
          — Methodology —
        </p>

        <h2 className="relative z-10 mt-4 text-[3.2rem] leading-[1.05] font-semibold">
          The "Signal-to-Noise" Approach
        </h2>

        <p className="relative z-10 mt-4 max-w-[720px] text-[17px] leading-7 text-[#1d214f]/80">
          In micro-markets, data is scarce and often unreliable. Our methodology is
          designed to synthesize fragmented data points into a coherent strategic picture.
        </p>

        <div className="relative z-10 mt-12 grid items-start gap-10 lg:grid-cols-[1.05fr_1.2fr]">

          <div className="grid items-start gap-8 md:grid-cols-2">
            {methodCards.map((card) => (
              <article
                key={card.step}
                className={`relative h-fit self-start border border-[#e6e8f0] bg-white px-6 pb-4 pt-6 shadow-[0_8px_18px_rgba(0,0,0,0.08)]
                ${card.className}`}
              >
                <div className="absolute -top-5 -left-5 h-10 w-10 flex items-center justify-center rounded-full bg-[#64dfc6] text-[14px] font-semibold text-[#141742] shadow">
                  {card.step}
                </div>

                <h3 className="text-[1.5rem] leading-[1.15] font-medium">
                  {card.title}
                </h3>

                <p className="mt-3 text-[15px] leading-6 text-[#141742]/75">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          {/* IMAGE */}
          <div className="relative flex items-start justify-end -mt-6">
            <img
              src={methodologyImage}
              alt="Micro-market methodology"
              className="h-[380px] w-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MicroMarketResearchMethodology;