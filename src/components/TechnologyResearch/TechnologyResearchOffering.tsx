import researchImage from "@/assets/TechnologyResearch/signature-offering.png";
import peopleIcon from "@/assets/TechnologyResearch/People.png";
import starIcon from "@/assets/TechnologyResearch/star1.png";
import bookIcon from "@/assets/TechnologyResearch/Book.png";

const features = [
  {
    icon: peopleIcon,
    title: "Analyst\nCo-Authorship",
    description:
      "Each paper pairs our research team with a recognized industry analyst, ensuring credibility and depth.",
  },
  {
    icon: starIcon,
    title: "Narrative-First\nMethodology",
    description:
      "Every paper is crafted to shape industry narratives, making complex ideas clear, compelling, and influential.",
  },
  {
    icon: bookIcon,
    title: "Strategic\nDistribution",
    description:
      "Papers are positioned within enterprise decision cycles, reaching CTOs, board rooms, and investment committees.",
  },
];

const TechnologyResearchOffering = () => {
  return (
    <section className="bg-[#0a0f3c] py-14 sm:py-20 lg:py-24 xl:py-28 text-white">
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 mx-auto">
        {/* HEADER */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <p className="text-[#38bdf8] text-[clamp(1rem,1.2vw,1.25rem)] mb-2 font-medium">
            — Our Signature Offering —
          </p>

          <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-semibold leading-tight">
            Thought Shaping Papers that Define Markets
          </h2>

          <p className="mt-4 max-w-[620px] text-[clamp(0.9rem,1.1vw,1.125rem)] text-white/80 leading-relaxed">
            Our Thought Shaping Papers are co-authored with renowned industry analysts and domain experts.
          </p>
        </div>

        {/* MAIN */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* CARDS */}
          <div className="flex flex-wrap justify-center lg:flex-nowrap gap-6 lg:gap-8 w-full lg:w-2/3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
              flex-1 min-w-[260px] max-w-[340px]
              bg-[#f1f5f9]
              text-[#0d1440]
              rounded-xl
              p-[clamp(1.25rem,2vw,2rem)]
              shadow-[0_8px_30px_rgba(0,0,0,0.3)]
              text-center
              transition-all duration-300
              hover:scale-[1.05] hover:-translate-y-2"
              >
                <img
                  src={feature.icon}
                  className="h-[clamp(2.5rem,3vw,3.5rem)] w-[clamp(2.5rem,3vw,3.5rem)] mx-auto mb-4"
                  alt=""
                />

                <h3 className="text-[clamp(1.125rem,1.3vw,1.5rem)] font-bold whitespace-pre-line leading-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[clamp(0.875rem,1vw,1rem)] leading-relaxed text-[#5A6B85]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="flex justify-center w-full lg:w-1/3">
            <img
              src={researchImage}
              alt=""
              className="w-full max-w-[420px] lg:max-w-none xl:scale-110 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchOffering;
