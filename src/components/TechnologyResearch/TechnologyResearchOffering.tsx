import researchImage from "@/assets/TechnologyResearch/signature-offering.png";
import peopleIcon from "@/assets/TechnologyResearch/People.png";
import starIcon from "@/assets/TechnologyResearch/star1.png";
import bookIcon from "@/assets/TechnologyResearch/Book.png";

const features = [
  {
    icon: peopleIcon,
    title: "Analyst Co-Authorship",
    description:
      "Each paper pairs our research team with a recognized industry analyst, ensuring credibility and depth.",
  },
  {
    icon: starIcon,
    title: "Narrative-First Methodology",
    description:
      "Every paper is crafted to shape industry narratives, making complex ideas clear, compelling, and influential.",
  },
  {
    icon: bookIcon,
    title: "Strategic Distribution",
    description:
      "Papers are positioned within enterprise decision cycles, reaching CTOs, board rooms, and investment committees.",
  },
];

const TechnologyResearchOffering = () => {
  return (
    <section
      className="
      bg-[#0c1044] text-white
      px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-6
      py-10 sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12"
    >
      <div
        className="
        mx-auto
        max-w-[1600px] [@media_(min-width:2560px)]:max-w-[2304px]
        flex flex-col gap-8 lg:gap-7 xl:gap-8"
      >
        {/* TOP CONTENT */}
        <div>
          {/* LABEL */}
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[1px] w-6 bg-white/40"></span>

            <p className="text-[18px] md:text-[20px] font-bold tracking-normal text-[#2fa7e8]">
              Our Signature Offering
            </p>

            <span className="h-[1px] w-6 bg-white/40"></span>
          </div>

          {/* HEADING */}
          <h2
            className="
            mt-3
            text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[50px]
            font-bold leading-[1.1]"
          >
            <span className="bg-gradient-to-r from-[#7dd3fc] to-white bg-clip-text text-transparent">
              Thought Shaping Papers
            </span>{" "}
            that Define Markets
          </h2>

          {/* SUBTEXT */}
          <p
            className="
            mt-4
            max-w-[750px]
            text-[16px] md:text-[18px] lg:text-[20px]
            text-white/85"
          >
            Our Thought Shaping Papers are co-authored with renowned industry analysts and
            domain experts. These aren't ordinary whitepapers. They are strategic
            instruments designed to frame industry narratives, guide enterprise decisions,
            and accelerate technology adoption.
          </p>
        </div>

        {/* BOXES + IMAGE */}
        <div
          className="
          flex flex-col lg:flex-row
          items-start lg:items-center
          gap-8 lg:gap-7"
        >
          {/* LEFT → 3 BOXES */}
          <div
            className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 w-full lg:w-[70%]"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                flex flex-col items-start text-left
                min-h-[170px]
                rounded-[12px] bg-white
                px-6 py-5 text-[#0d1440]
                shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                transition-all duration-300 
                hover:scale-[1.02] hover:bg-[#e6f2ff]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-8 w-8 object-contain"
                  />

                  <h3 className="text-[18px] md:text-[20px] font-semibold">
                    {feature.title}
                  </h3>
                </div>

                <p className="mt-3 text-[16px] md:text-[18px] text-[#0d1440]/85">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT → IMAGE */}
          <div
            className="
            w-full lg:w-[30%]
            flex justify-center lg:justify-end"
          >
            <img
              src={researchImage}
              alt="Technology strategy workshop"
              className="
              w-full 
              max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]
              object-contain
              drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchOffering;
