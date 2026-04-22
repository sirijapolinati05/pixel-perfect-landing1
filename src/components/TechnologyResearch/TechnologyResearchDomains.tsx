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
      relative overflow-hidden bg-white
      py-10 sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12
      text-[#141742]"
    >
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

      <div className="page-shell relative mx-auto">

        <div className="mb-2 flex items-center gap-2 sm:gap-3">
          <span className="h-[1px] w-4 bg-current opacity-40"></span>

          <p className="text-[18px] md:text-[20px] font-bold text-[#202453] whitespace-nowrap">
            Research Domains
          </p>

          <span className="h-[1px] w-4 bg-current opacity-40"></span>
        </div>

        <h2 className="
        mt-2
        text-[32px] sm:text-[40px] md:text-[44px] lg:text-[40px] xl:text-[44px]
        font-bold leading-[1.05] tracking-[-0.03em]">
          Three Pillars Shaping the Future of Technology
        </h2>

        <p className="
        mt-3
        max-w-[900px]
        text-[16px] sm:text-[18px] lg:text-[20px]
        leading-7
        text-[#202453]/88">
          Our research is concentrated across three transformative domains where deep
          analysis and expert perspective create outsized strategic value.
        </p>

        <div className="
        mt-6
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-6">

          {domains.map((domain) => (
            <article
              key={domain.title}
              className="
              group flex flex-col h-full
              p-5
              bg-white
              transition-all duration-300
              hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#26A9E0]"
            >
              <div className="aspect-[1.02/0.72] overflow-hidden bg-[#11153b]">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition"
                />
              </div>

              {/* TITLE FIX */}
              <h3 className="
              mt-3
              w-full
              text-[22px] md:text-[24px]
              leading-tight
              text-[#111111] break-words">
                {domain.title}
              </h3>

              {/* DESCRIPTION FIX */}
              <p className="
              mt-2
              w-full
              text-[16px] md:text-[18px]
              leading-7
              text-[#202453]/88
              break-words flex-grow">
                {domain.description}
              </p>

              <a
                href="#papers"
                className="
                mt-4 inline-flex items-center gap-2
                text-[14px] md:text-[16px]
                font-semibold uppercase
                text-[#111111]"
              >
                Explore Research →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchDomains;
