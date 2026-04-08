import { Linkedin, Mail } from "lucide-react";

import arnabImg from "@/assets/ResearchTeam/Arnab-Das.png";
import sachinImg from "@/assets/ResearchTeam/Sachin-Birajdar.png";
import shatakshiImg from "@/assets/ResearchTeam/Shatakshi-Singh.png";
import virajImg from "@/assets/ResearchTeam/Viraj-Narvekar.png";
import AnalystTeamAvatar from "@/components/AnalystTeam/AnalystTeamAvatar";

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
  "group flex min-h-[220px] sm:min-h-[228px] md:min-h-[236px] w-full max-w-full sm:max-w-[184px] flex-col border border-[#dfe4ea] bg-white px-4 pb-5 pt-3 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0d4f96] hover:bg-[#0d4f96] hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]";

const TierThreeCard = ({
  name,
  image,
  subtitle = "",
}: TierThreeCardProps) => (
  <article className={cardClassName}>
    <AnalystTeamAvatar name={name} image={image} />

    <h3 className="mt-4 text-base sm:text-[1.02rem] md:text-[1.02rem] leading-[1.15] tracking-[-0.02em] text-[#17204c] transition-colors duration-300 group-hover:text-white">
      {name}
    </h3>

    <p className="mt-1 min-h-[32px] text-[11px] sm:text-[0.68rem] md:text-[0.68rem] leading-[1.2] text-[#5ab5eb] transition-colors duration-300 group-hover:text-white/85">
      {subtitle}
    </p>

    <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] transition-colors duration-300 group-hover:bg-white/35" />

    <div className="mt-4 flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label={`${name} LinkedIn`}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58dec5] text-[#0d173f] transition-all duration-300 group-hover:bg-white group-hover:text-[#0d4f96] hover:-translate-y-1"
      >
        <Linkedin size={14} strokeWidth={2.2} />
      </button>
      <button
        type="button"
        aria-label={`${name} email`}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58dec5] text-[#0d173f] transition-all duration-300 group-hover:bg-white group-hover:text-[#0d4f96] hover:-translate-y-1"
      >
        <Mail size={14} strokeWidth={2.2} />
      </button>
    </div>
  </article>
);

const AnalystTeamTierThree = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#111948]">
      <div className="absolute -right-8 -top-10 h-[150px] w-[150px] sm:-right-10 sm:-top-12 sm:h-[180px] sm:w-[180px] md:-right-12 md:-top-16 md:h-[220px] md:w-[220px] rounded-full border border-[#20305f]/25" />
      <div className="absolute -right-4 -top-6 h-[122px] w-[122px] sm:-right-5 sm:-top-8 sm:h-[148px] sm:w-[148px] md:-right-6 md:-top-10 md:h-[180px] md:w-[180px] rounded-full border border-[#20305f]/25" />
      <div className="absolute right-0 top-0 h-[96px] w-[96px] sm:top-[-2px] sm:h-[118px] sm:w-[118px] md:top-[-4px] md:h-[140px] md:w-[140px] rounded-full border border-[#20305f]/25" />
      <div className="absolute -bottom-10 -left-12 h-[150px] w-[150px] sm:-bottom-12 sm:-left-14 sm:h-[180px] sm:w-[180px] md:-bottom-14 md:-left-16 md:h-[220px] md:w-[220px] rounded-full border border-[#20305f]/25" />
      <div className="absolute -bottom-5 -left-7 h-[122px] w-[122px] sm:-bottom-7 sm:-left-8 sm:h-[148px] sm:w-[148px] md:-bottom-8 md:-left-10 md:h-[180px] md:w-[180px] rounded-full border border-[#20305f]/25" />
      <div className="absolute bottom-0 left-0 h-[96px] w-[96px] sm:h-[118px] sm:w-[118px] md:bottom-[-2px] md:left-[-4px] md:h-[140px] md:w-[140px] rounded-full border border-[#20305f]/25" />

      <div className="relative z-10 mx-auto max-w-[1120px] xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div className="max-w-[760px]">
          <p className="text-sm sm:text-base md:text-[17px] lg:text-[17px] font-semibold leading-none text-[#20254d]">
            <span className="inline-flex items-center gap-4">
              <span className="h-px w-8 sm:w-10 md:w-[48px] bg-[#20254d]" />
              Support Leads
              <span className="h-px w-8 sm:w-10 md:w-[48px] bg-[#20254d]" />
            </span>
          </p>

          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-[3.15rem] lg:text-[3.15rem] leading-[1.05] tracking-[-0.03em] text-[#17204c]">
            Research Specialists &amp; Analysts
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-y-6 sm:gap-y-8 lg:grid-cols-[155px_minmax(0,1fr)] lg:gap-x-8">
          <div className="flex items-center lg:min-h-[180px]">
            <p className="text-sm sm:text-[0.95rem] md:text-[1.08rem] lg:text-[1.08rem] leading-none text-[#101535] sm:whitespace-nowrap">
              Research Specialists
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-[repeat(2,184px)] md:gap-x-14">
            {researchSpecialists.map((member) => (
              <TierThreeCard
                key={member.name}
                name={member.name}
                image={member.image}
              />
            ))}
          </div>

          <div className="flex items-center lg:min-h-[180px]">
            <p className="text-sm sm:text-[0.95rem] md:text-[1.08rem] lg:text-[1.08rem] leading-none text-[#101535] sm:whitespace-nowrap">
              Research Analysts
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-[repeat(3,184px)] md:gap-x-14">
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
