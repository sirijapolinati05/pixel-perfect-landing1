import researchImage from "@/assets/TechnologyResearch/signature-offering.png";
import peopleIcon from "@/assets/TechnologyResearch/People.png";
import starIcon from "@/assets/TechnologyResearch/Star1.png";
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
      "Each paper pairs our research team with a recognized industry analyst, ensuring credibility and depth.",
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
      px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 2xl:px-28
      py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24"
    >
      <div
        className="
        mx-auto grid
        max-w-[1440px] xl:max-w-[1400px] 2xl:max-w-[1600px]
        gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-10 2xl:gap-12
        grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]
        lg:items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          {/* LABEL */}
          <div className="mb-2 flex items-center gap-2 sm:gap-3">
            <span className="h-[1px] w-4 sm:w-6 md:w-8 lg:w-6 bg-white/40"></span>

            <p className="
              text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-[1.75rem]
              font-bold tracking-[0.01em] text-[#2fa7e8] whitespace-nowrap">
              Our Signature Offering
            </p>

            <span className="h-[1px] w-4 sm:w-6 md:w-8 lg:w-6 bg-white/40"></span>
          </div>

          {/* HEADING */}
          <h2 className="
            mt-2 sm:mt-3
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[3.8rem]
            font-bold leading-[1.1] tracking-[-0.03em] lg:whitespace-nowrap">
            
            <span className="bg-gradient-to-r from-[#7dd3fc] to-white bg-clip-text text-transparent">
              Thought Shaping Papers
            </span>{" "}
            that Define Markets
          </h2>

          {/* SUBTEXT */}
          <p className="
            mt-3 sm:mt-4
            max-w-[600px] sm:max-w-[760px] xl:max-w-[900px]
            text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-[1.75rem]
            leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10
            text-white/84">
            Our Thought Shaping Papers are co-authored with renowned industry analysts and
            domain experts. These aren't ordinary whitepapers. They are strategic
            instruments designed to frame industry narratives, guide enterprise decisions,
            and accelerate technology adoption.
          </p>

          {/* SMALL CARDS */}
          <div className="
            mt-4 sm:mt-5
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-2 sm:gap-3 md:gap-4
            md:max-w-[760px] xl:max-w-[900px]">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                flex flex-col items-center justify-start
                min-h-[90px] sm:min-h-[100px] md:min-h-[110px]
                rounded-[8px]
                bg-[#f8f7f3]
                px-2 sm:px-3 md:px-3
                py-2 sm:py-3 md:py-3
                text-center text-[#0d1440]
                shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                hover:bg-[#cfe8ff] hover:scale-105
                transition-all duration-300 ease-in-out"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 object-contain"
                />

                <h3 className="
                  mt-1
                  max-w-[110px] sm:max-w-[120px] md:max-w-[130px]
                  text-[11px] sm:text-xs md:text-sm
                  font-semibold leading-tight">
                  {feature.title}
                </h3>

                <p className="
                  mt-1
                  max-w-[130px] sm:max-w-[140px] md:max-w-[150px]
                  text-[9px] sm:text-[10px] md:text-xs
                  leading-[1.3] text-[#0d1440]/85">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="
          relative mx-auto w-full
          max-w-[220px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]
          lg:mr-0">

          <div className="flex items-end justify-center">
            <img
              src={researchImage}
              alt="Technology strategy workshop"
              className="
              w-full object-contain
              scale-[1] sm:scale-[1.05] md:scale-[1.1] lg:scale-[1.2]
              -translate-x-2 sm:-translate-x-4 md:-translate-x-6 lg:-translate-x-8
              translate-y-10 sm:translate-y-12 md:translate-y-14 lg:translate-y-18
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyResearchOffering;