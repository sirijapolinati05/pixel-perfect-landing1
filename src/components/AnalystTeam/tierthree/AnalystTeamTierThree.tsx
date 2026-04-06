import { Linkedin, Mail } from "lucide-react";

import arnabImg from "@/assets/ResearchTeam/Arnab-Das.png";
import sachinImg from "@/assets/ResearchTeam/Sachin-Birajdar.png";
import shatakshiImg from "@/assets/ResearchTeam/Shatakshi-Singh.png";
import virajImg from "@/assets/ResearchTeam/Viraj-Narvekar.png";

const researchSpecialists = [
  {
    name: "Viraj Narvekar",
    image: virajImg,
  },
  {
    name: "Sachin Birajdar",
    image: sachinImg,
  },
];

const researchAnalysts = [
  {
    name: "Shatakshi Singh",
    image: shatakshiImg,
  },
  {
    name: "Arnab Das",
    image: arnabImg,
  },
  {
    name: "Shatakshi Singh",
    image: shatakshiImg,
  },
];

type TierThreeCardProps = {
  name: string;
  image: string;
  subtitle?: string;
};

const cardClassName =
  "flex min-h-[236px] w-full max-w-[184px] flex-col border border-[#dfe4ea] bg-white px-4 pb-5 pt-3 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)]";

const TierThreeCard = ({
  name,
  image,
  subtitle = "",
}: TierThreeCardProps) => (
  <article className={cardClassName}>
    <div className="mx-auto h-[94px] w-[94px] overflow-hidden rounded-full bg-[#eef1f5]">
      <img src={image} alt={name} className="h-full w-full object-cover" />
    </div>

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

const AnalystTeamTierThree = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] px-6 py-16 text-[#111948] lg:px-12 lg:py-20">
      <div className="absolute -right-12 -top-16 h-[220px] w-[220px] rounded-full border border-[#20305f]/25" />
      <div className="absolute -right-6 -top-10 h-[180px] w-[180px] rounded-full border border-[#20305f]/25" />
      <div className="absolute right-0 top-[-4px] h-[140px] w-[140px] rounded-full border border-[#20305f]/25" />
      <div className="absolute -bottom-14 -left-16 h-[220px] w-[220px] rounded-full border border-[#20305f]/25" />
      <div className="absolute -bottom-8 -left-10 h-[180px] w-[180px] rounded-full border border-[#20305f]/25" />
      <div className="absolute bottom-[-2px] left-[-4px] h-[140px] w-[140px] rounded-full border border-[#20305f]/25" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="max-w-[760px]">
          <p className="text-[17px] font-semibold leading-none text-[#20254d]">
            <span className="inline-flex items-center gap-4">
              <span className="h-px w-[48px] bg-[#20254d]" />
              Tier 3
              <span className="h-px w-[48px] bg-[#20254d]" />
            </span>
          </p>

          <h2 className="mt-5 text-[2.4rem] leading-[1.05] tracking-[-0.03em] text-[#17204c] md:text-[3.15rem]">
            Research Specialists &amp; Analysts
          </h2>
        </div>

        <div className="mt-14 grid gap-y-8 lg:grid-cols-[155px_minmax(0,1fr)] lg:gap-x-8">
          <div className="flex items-center lg:min-h-[180px]">
            <p className="whitespace-nowrap text-[0.95rem] leading-none text-[#101535] md:text-[1.08rem]">
              Research Specialists
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[repeat(2,184px)] md:gap-x-14">
            {researchSpecialists.map((member) => (
              <TierThreeCard
                key={member.name}
                name={member.name}
                image={member.image}
              />
            ))}
          </div>

          <div className="flex items-center lg:min-h-[180px]">
            <p className="whitespace-nowrap text-[0.95rem] leading-none text-[#101535] md:text-[1.08rem]">
              Research Analysts
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-[repeat(3,184px)] md:gap-x-14">
            {researchAnalysts.map((member, index) => (
              <TierThreeCard
                key={`${member.name}-${index}`}
                name={member.name}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalystTeamTierThree;
