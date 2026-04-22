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
    <section className="tr-offering-section bg-[#0a0f3c] py-14 text-white">

      <style>{`

        /* ✅ ONLY 375px RANGE */
        @media (min-width: 321px) and (max-width: 375px) {

          .tr-offering-cards {
            justify-content: center;
            gap: 0.75rem;
          }

          .tr-offering-card {
            width: 220px;        /* 🔥 smaller cards */
            padding: 1rem;       /* 🔥 less padding */
          }

          .tr-offering-card h3 {
            font-size: 16px;     /* 🔥 slightly smaller title */
          }

          .tr-offering-card p {
            font-size: 13px;     /* 🔥 smaller text */
          }

          .tr-offering-card img {
            height: 32px;        /* 🔥 smaller icon */
            width: 32px;
          }
        }

        /* ✅ 768px */
        @media (width: 768px) {
          .tr-offering-cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            width: 100%;
          }

          .tr-offering-card {
            width: 100%;
          }
        }

        /* ✅ 1024px */
        @media (width: 1024px) {
          .tr-offering-main {
            flex-direction: column;
            align-items: stretch;
            gap: 2rem;
          }

          .tr-offering-cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            width: 100%;
          }

          .tr-offering-card {
            width: 100%;
          }
        }

      `}</style>

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
            Our Thought Shaping Papers are co-authored with renowned industry analysts and domain experts.
          </p>
        </div>

        {/* MAIN */}
        <div className="tr-offering-main flex flex-col lg:flex-row items-center gap-12">

          {/* CARDS */}
          <div className="tr-offering-cards flex gap-6 flex-wrap justify-center lg:flex-nowrap">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                tr-offering-card
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
                  alt=""
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

          {/* IMAGE */}
          <div className="tr-offering-image flex justify-center w-full">
            <img
              src={researchImage}
              alt=""
              className="w-[420px] sm:w-[480px] lg:w-[520px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchOffering;