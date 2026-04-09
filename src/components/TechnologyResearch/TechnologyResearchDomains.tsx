import processOne from "@/assets/TechnologyResearch/HPC-QuantumComputing.png";
import processTwo from "@/assets/TechnologyResearch/Chipset-AIHardware.png";
import processThree from "@/assets/TechnologyResearch/AI-IntelligenceAugmentation.png";
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";

const domains = [
  {
    image: processOne,
    title: "HPC & Quantum Computing",
    description:
      "Mapping the trajectory from NISQ-era devices to fault-tolerant quantum systems. We analyze qubit architectures, error correction breakthroughs, and the emerging quantum software ecosystem.",
  },
  {
    image: processTwo,
    title: "Chipset & AI Hardware",
    description:
      "Deep dives into next-generation silicon, from custom AI accelerators and neuromorphic chips to advanced packaging and the geopolitics of semiconductor supply chains.",
  },
  {
    image: processThree,
    title: "AI & Intelligence Augmentation",
    description:
      "From foundation models to agentic AI and intelligence augmentation, our research navigates enterprise adoption, safety frameworks, and the convergence of human and machine intelligence.",
  },
];

const TechnologyResearchDomains = () => {
  return (
    <section
      id="domains"
      className="
      relative overflow-hidden bg-[#f8f7f3]
      px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 2xl:px-28
      py-10 sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12
      text-[#141742]"
    >
      {/* BACKGROUND TYPO */}
      <img
        src={whiteTypographyImg}
        alt=""
        aria-hidden="true"
        className="
        pointer-events-none absolute 
        right-[-45%] sm:right-[-34%] md:right-[-25%] lg:right-[-22%] xl:right-[-18%] 2xl:right-[-15%]
        top-[-8%] sm:top-[-10%] md:top-[-14%] lg:top-[-12%]
        w-[180px] sm:w-[260px] md:w-[400px] lg:w-[520px] xl:w-[600px] 2xl:w-[700px]
        opacity-20 scale-x-[-1] rotate-90 -rotate-[30deg]"
      />

      <div className="relative mx-auto max-w-[1440px] xl:max-w-[1400px] 2xl:max-w-[1600px]">

        {/* TOP LABEL */}
        <div className="mb-2 flex items-center gap-2 sm:gap-3">
          <span className="h-[1px] w-4 sm:w-6 md:w-8 lg:w-6 bg-current opacity-40"></span>

          <p className="
          text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-[1.75rem]
          font-bold tracking-[0.01em] text-[#202453] whitespace-nowrap">
            Research Domains
          </p>

          <span className="h-[1px] w-4 sm:w-6 md:w-8 lg:w-6 bg-current opacity-40"></span>
        </div>

        {/* HEADING */}
        <h2 className="
        mt-2 sm:mt-3
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[3.8rem]
        font-bold leading-[1.1] tracking-[-0.02em]">
          Three Pillars Shaping the Future of Technology
        </h2>

        {/* SUBTEXT */}
        <p className="
        mt-3 sm:mt-4
        max-w-[600px] sm:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px]
        text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-[1.75rem]
        leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10
        text-[#202453]/88">
          Our research is concentrated across three transformative domains where deep
          analysis and expert perspective create outsized strategic value.
        </p>

        {/* GRID */}
        <div className="
        relative mt-5 sm:mt-6 lg:mt-6 xl:mt-7
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3
        gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10">

          {domains.map((domain) => (
            <article
              key={domain.title}
              className="
              group relative w-full flex flex-col h-full
              p-3 sm:p-4 md:p-5 lg:p-6
              rounded-xl
              transition-all duration-300 ease-in-out
              hover:scale-[1.04] hover:bg-white hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="aspect-[1.02/0.72] overflow-hidden bg-[#11153b] rounded-lg">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TITLE */}
              <h3 className="
              mt-2 sm:mt-2.5 md:mt-3
              max-w-[240px] sm:max-w-[250px]
              text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.6rem]
              leading-tight
              transition-colors duration-300 group-hover:text-[#0A1F44]">
                {domain.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="
              mt-2
              max-w-[260px] sm:max-w-[285px] md:max-w-[320px]
              text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
              leading-5 sm:leading-6 md:leading-7
              text-[#202453]/88 flex-grow
              transition-colors duration-300 group-hover:text-[#202453]">
                {domain.description}
              </p>

              {/* BUTTON */}
              <a
                href="#papers"
                className="
                mt-3 inline-flex items-center gap-2
                text-xs sm:text-sm md:text-base lg:text-[13px] xl:text-sm 2xl:text-base
                font-semibold uppercase tracking-[0.02em] text-[#161a46]
                transition-all duration-300 group-hover:gap-3"
              >
                Explore Research
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchDomains;
