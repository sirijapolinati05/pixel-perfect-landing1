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
    <section className="bg-[#0a0f3c] py-14 text-white">
      <div className="page-shell mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-[#38bdf8] text-[18px] mb-2 font-medium">
            — Our Signature Offering —
          </p>

          <h2 className="text-[42px] font-semibold leading-tight">
            Thought Shaping Papers that Define Markets
          </h2>

          <p className="mt-4 max-w-[620px] text-[16px] text-white/80 leading-7">
            Our Thought Shaping Papers are co-authored with renowned industry analysts and domain experts. These aren't ordinary whitepapers — they are strategic instruments designed to frame industry narratives, guide enterprise decisions, and accelerate technology adoption.
          </p>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CARDS */}
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                bg-[#f1f5f9]
                text-[#0d1440]
                rounded-xl
                p-6
                w-[260px]
                shadow-[0_8px_20px_rgba(0,0,0,0.2)]
                text-center
                transition-all duration-300
                hover:scale-[1.03]"
              >
                <img
                  src={feature.icon}
                  className="h-10 w-10 mx-auto mb-4"
                />

                <h3 className="text-[18px] font-semibold whitespace-pre-line">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#5A6B85]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE (ADJUSTED DOWN) */}
          <div className="-mt-12 lg:-mt-20">
            <img
              src={researchImage}
              alt=""
              className="
              w-[420px] 
              sm:w-[480px] 
              lg:w-[520px] 
              object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchOffering;
