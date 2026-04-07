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
      className="relative overflow-hidden bg-[#f8f7f3] px-6 py-14 text-[#141742] lg:px-14"
    >
      <img
        src={whiteTypographyImg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-22%] top-[-12%] w-[520px] opacity-20 scale-x-[-1] rotate-90 -rotate-[30deg]"
      />

      <div className="relative mx-auto max-w-[1440px]">

        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-[1px] bg-current opacity-40"></span>

          <p className="text-[18px] font-bold tracking-[0.01em] text-[#202453] whitespace-nowrap">
            Research Domains
          </p>

          <span className="w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        <h2 className="mt-3 max-w-none text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] md:text-[3rem] lg:text-[3.35rem]">
          Three Pillars Shaping the Future of Technology
        </h2>

        <p className="mt-4 max-w-[900px] text-xl leading-9 text-[#202453]/88">
          Our research is concentrated across three transformative domains where deep
          analysis and expert perspective create outsized strategic value.
        </p>

        <div className="relative mt-6 grid gap-4 lg:grid-cols-3">
          {domains.map((domain) => (
            <article
              key={domain.title}
              className="group relative w-full flex flex-col h-full p-4 rounded-xl
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
              <h3 className="mt-2.5 max-w-[250px] text-[1.45rem] leading-[1.04] transition-colors duration-300 group-hover:text-[#0A1F44]">
                {domain.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 max-w-[285px] text-[14px] leading-6 text-[#202453]/88 flex-grow transition-colors duration-300 group-hover:text-[#202453]">
                {domain.description}
              </p>

              {/* BUTTON */}
              <a
                href="#papers"
                className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.02em] text-[#161a46]
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