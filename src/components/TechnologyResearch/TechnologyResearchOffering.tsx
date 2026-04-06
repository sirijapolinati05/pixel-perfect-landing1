import { BookOpen, Sparkles, Users } from "lucide-react";
import researchImage from "@/assets/TechnologyResearch/signature-offering.png";

const features = [
  {
    icon: Users,
    title: "Analyst Co-Authorship",
    description:
      "Each paper pairs our research team with a recognized industry analyst, ensuring credibility and depth.",
  },
  {
    icon: Sparkles,
    title: "Narrative-First Methodology",
    description:
      "Each paper pairs our research team with a recognized industry analyst, ensuring credibility and depth.",
  },
  {
    icon: BookOpen,
    title: "Strategic Distribution",
    description:
      "Papers are positioned within enterprise decision cycles, reaching CTOs, board rooms, and investment committees.",
  },
];

const TechnologyResearchOffering = () => {
  return (
    <section className="bg-[#0c1044] px-6 py-24 text-white lg:px-14">
      <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        
        {/* LEFT CONTENT */}
        <div>

          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-[1px] bg-white/40"></span>

            <p className="text-[18px] font-semibold text-[#2fa7e8] whitespace-nowrap">
              Our Signature Offering
            </p>

            <span className="w-6 h-[1px] bg-white/40"></span>
          </div>

          {/* 🔥 GRADIENT TEXT APPLIED */}
          <h2 className="mt-4 max-w-none text-[2.55rem] leading-[1.04] tracking-[-0.03em] md:text-[3.05rem] lg:text-[3.35rem] lg:whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#7dd3fc] to-white bg-clip-text text-transparent">
              Thought Shaping Papers
            </span>{" "}
            that Define Markets
          </h2>

          <p className="mt-5 max-w-[760px] text-[18px] leading-8 text-white/84">
            Our Thought Shaping Papers are co-authored with renowned industry analysts and
            domain experts. These aren't ordinary whitepapers. They are strategic
            instruments designed to frame industry narratives, guide enterprise decisions,
            and accelerate technology adoption.
          </p>

          {/* CARDS */}
          <div className="mt-10 grid gap-3 md:grid-cols-3 md:max-w-[720px]">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex min-h-[120px] flex-col items-center justify-start rounded-[10px] 
                bg-[#f8f7f3] px-3 py-4 text-center text-[#0d1440] 
                shadow-[0_12px_30px_rgba(0,0,0,0.1)]
                hover:bg-[#cfe8ff] 
                hover:scale-105
                transition-all duration-300 ease-in-out"
              >
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-md bg-[#bfe7fb] text-[#0d1440]">
                  <feature.icon size={14} strokeWidth={1.8} />
                </div>

                <h3 className="mt-3 max-w-[130px] text-[0.95rem] leading-[1.05]">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-[145px] text-[9px] leading-[1.3] text-[#0d1440]/85">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[1300px] lg:mr-0">
          <div className="flex items-end justify-center">
            <img
              src={researchImage}
              alt="Technology strategy workshop"
              className="w-full object-contain scale-[1.9] -translate-x-24 translate-y-20"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyResearchOffering;