import { Linkedin, Mail } from "lucide-react";

import lalithaImg from "@/assets/ResearchTeam/Lalitha-Yanamandra.png";
import meghnaImg from "@/assets/ResearchTeam/Meghna-Dodke.png";
import sameenImg from "@/assets/ResearchTeam/Sameen-Siddique.png";
import sauravImg from "@/assets/ResearchTeam/Saurav-Patra.png";

const leadAnalysts = [
  {
    name: "Meghna Dodke",
    subtitle: "Technology Platforms",
    image: meghnaImg,
  },
  {
    name: "Sameen Siddique",
    subtitle: "Technology Platforms",
    image: sameenImg,
  },
  {
    name: "Lalitha Yanamandra",
    subtitle: "Technology Platforms",
    image: lalithaImg,
  },
];

const cardClassName =
  "flex min-h-[236px] w-full max-w-[184px] flex-col border border-[#dfe4ea] bg-white px-4 pb-5 pt-3 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)]";

const TierTwoCard = ({
  name,
  subtitle,
  image,
}: {
  name: string;
  subtitle: string;
  image?: string;
}) => (
  <article className={cardClassName}>
    {image ? (
      <div className="mx-auto h-[94px] w-[94px] overflow-hidden rounded-full bg-[#e9eef5]">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
    ) : (
      <div className="mx-auto flex h-[94px] w-[94px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#4f5b67_0%,#202733_72%)] text-[2rem] font-semibold text-white">
        SP
      </div>
    )}

    <h3 className="mt-4 text-[1.02rem] leading-[1.15] tracking-[-0.02em] text-[#17204c]">
      {name}
    </h3>
    <p className="mt-1 min-h-[32px] text-[0.68rem] leading-[1.2] text-[#5ab5eb]">
      {subtitle}
    </p>

    <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5]" />

    <div className="mt-4 flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label={`${name} LinkedIn`}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58dec5] text-[#0d173f]"
      >
        <Linkedin size={14} strokeWidth={2.2} />
      </button>
      <button
        type="button"
        aria-label={`${name} email`}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58dec5] text-[#0d173f]"
      >
        <Mail size={14} strokeWidth={2.2} />
      </button>
    </div>
  </article>
);

const AnalystTeamTierTwo = () => {
  return (
    <section
      id="tier-2"
      className="relative overflow-hidden bg-[#33a9da] px-6 py-16 text-[#111948] lg:px-10 lg:py-20"
    >
      <div className="absolute left-[-94px] top-[-126px] h-[250px] w-[250px] rounded-full border border-[#13245a]/25" />
      <div className="absolute left-[-74px] top-[-106px] h-[210px] w-[210px] rounded-full border border-[#13245a]/25" />
      <div className="absolute left-[-54px] top-[-86px] h-[170px] w-[170px] rounded-full border border-[#13245a]/25" />
      <div className="absolute left-[-34px] top-[-66px] h-[130px] w-[130px] rounded-full border border-[#13245a]/25" />

      <div className="absolute bottom-[-118px] right-[-86px] h-[240px] w-[240px] rounded-full border border-[#13245a]/25" />
      <div className="absolute bottom-[-96px] right-[-64px] h-[196px] w-[196px] rounded-full border border-[#13245a]/25" />
      <div className="absolute bottom-[-74px] right-[-42px] h-[152px] w-[152px] rounded-full border border-[#13245a]/25" />
      <div className="absolute bottom-[-52px] right-[-20px] h-[108px] w-[108px] rounded-full border border-[#13245a]/25" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="max-w-[660px]">
          <p className="text-[17px] font-semibold leading-none text-[#111948]">
            <span className="inline-flex items-center gap-4">
              <span className="h-px w-[44px] bg-[#111948]" />
              Tier 2
              <span className="h-px w-[44px] bg-[#111948]" />
            </span>
          </p>

          <h2 className="mt-5 text-[2.55rem] leading-[1.02] tracking-[-0.03em] md:text-[3.2rem]">
            Lead &amp; Business Analysts
          </h2>
        </div>

        <div className="mt-14 grid gap-y-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-x-8">
          <div className="flex items-center">
            <p className="whitespace-nowrap text-[1.05rem] leading-none text-[#101535] md:text-[1.22rem]">
              Lead Analysts
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[repeat(3,184px)] md:gap-x-14">
            {leadAnalysts.map((member) => (
              <TierTwoCard
                key={member.name}
                name={member.name}
                subtitle={member.subtitle}
                image={member.image}
              />
            ))}
          </div>

          <div className="flex items-center">
            <p className="whitespace-nowrap text-[1.05rem] leading-none text-[#101535] md:text-[1.22rem]">
              Business Analyst
            </p>
          </div>

          <div className="grid max-w-[184px]">
            <TierTwoCard
              name="Saurav Patra"
              subtitle="Micro-Markets"
              image={sauravImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalystTeamTierTwo;
