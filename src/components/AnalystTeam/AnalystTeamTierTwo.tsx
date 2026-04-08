import { Linkedin, Mail } from "lucide-react";

import lalithaImg from "@/assets/ResearchTeam/Lalitha-Yanamandra.png";
import meghnaImg from "@/assets/ResearchTeam/Meghna-Dodke.png";
import sameenImg from "@/assets/ResearchTeam/Sameen-Siddique.png";
import sauravImg from "@/assets/ResearchTeam/Saurav-Patra.png";
import johnBurnellImg from "@/assets/ResearchTeam/John-Burnell.png";
import AnalystTeamAvatar from "@/components/AnalystTeam/AnalystTeamAvatar";

const leadAnalysts = [
  {
    name: "Mega Dodke",
    subtitle: "Enterprise Platform",
    image: meghnaImg,
  },
  {
    name: "Sameen Siddique",
    subtitle: "Enterprise Cloud",
    image: sameenImg,
  },
  {
    name: "Lalitha Yanamandra",
    subtitle: "Enterprise Services",
    image: lalithaImg,
  },
];

const featuredAnalyst = {
  name: "John Burnell",
  subtitle: "Custom research & Editor",
  cardName: "John Burnell",
  cardSubtitle: "Technology Platforms",
  image: johnBurnellImg,
};

const cardClassName =
  "group flex min-h-[220px] sm:min-h-[228px] md:min-h-[236px] w-full max-w-full sm:max-w-[184px] flex-col border border-[#dfe4ea] bg-white px-4 pb-5 pt-3 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0d4f96] hover:bg-[#0d4f96] hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]";

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
    <AnalystTeamAvatar
      name={name}
      image={image}
      fallbackText={image ? undefined : "SP"}
    />

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

const AnalystTeamTierTwo = () => {
  return (
    <section
      id="tier-2"
      className="relative overflow-hidden bg-[#33a9da] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#111948]"
    >
      <div className="absolute left-[-64px] top-[-90px] h-[170px] w-[170px] sm:left-[-80px] sm:top-[-108px] sm:h-[210px] sm:w-[210px] md:left-[-94px] md:top-[-126px] md:h-[250px] md:w-[250px] rounded-full border border-[#13245a]/25" />
      <div className="absolute left-[-50px] top-[-72px] h-[144px] w-[144px] sm:left-[-62px] sm:top-[-88px] sm:h-[176px] sm:w-[176px] md:left-[-74px] md:top-[-106px] md:h-[210px] md:w-[210px] rounded-full border border-[#13245a]/25" />
      <div className="absolute left-[-36px] top-[-54px] h-[116px] w-[116px] sm:left-[-46px] sm:top-[-70px] sm:h-[144px] sm:w-[144px] md:left-[-54px] md:top-[-86px] md:h-[170px] md:w-[170px] rounded-full border border-[#13245a]/25" />
      <div className="absolute left-[-22px] top-[-38px] h-[88px] w-[88px] sm:left-[-28px] sm:top-[-52px] sm:h-[106px] sm:w-[106px] md:left-[-34px] md:top-[-66px] md:h-[130px] md:w-[130px] rounded-full border border-[#13245a]/25" />

      <div className="absolute bottom-[-78px] right-[-60px] h-[160px] w-[160px] sm:bottom-[-96px] sm:right-[-72px] sm:h-[196px] sm:w-[196px] md:bottom-[-118px] md:right-[-86px] md:h-[240px] md:w-[240px] rounded-full border border-[#13245a]/25" />
      <div className="absolute bottom-[-62px] right-[-46px] h-[132px] w-[132px] sm:bottom-[-78px] sm:right-[-56px] sm:h-[164px] sm:w-[164px] md:bottom-[-96px] md:right-[-64px] md:h-[196px] md:w-[196px] rounded-full border border-[#13245a]/25" />
      <div className="absolute bottom-[-46px] right-[-30px] h-[104px] w-[104px] sm:bottom-[-60px] sm:right-[-36px] sm:h-[128px] sm:w-[128px] md:bottom-[-74px] md:right-[-42px] md:h-[152px] md:w-[152px] rounded-full border border-[#13245a]/25" />
      <div className="absolute bottom-[-30px] right-[-14px] h-[76px] w-[76px] sm:bottom-[-40px] sm:right-[-16px] sm:h-[92px] sm:w-[92px] md:bottom-[-52px] md:right-[-20px] md:h-[108px] md:w-[108px] rounded-full border border-[#13245a]/25" />

      <div className="relative z-10 mx-auto max-w-[1120px] xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div className="max-w-[660px]">
          <p className="text-sm sm:text-base md:text-[17px] lg:text-[17px] font-semibold leading-none text-[#111948]">
            <span className="inline-flex items-center gap-4">
              <span className="h-px w-8 sm:w-10 md:w-[44px] bg-[#111948]" />
              Enabling Leaders
              <span className="h-px w-8 sm:w-10 md:w-[44px] bg-[#111948]" />
            </span>
          </p>

          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-[3.2rem] lg:text-[3.2rem] leading-[1.02] tracking-[-0.03em]">
            Lead &amp; Business Analysts
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-y-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-x-16 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-x-20">
          <div className="grid gap-y-6 sm:gap-y-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-x-8">
            <div className="flex items-center">
              <p className="text-base sm:text-[1.05rem] md:text-[1.22rem] lg:text-[1.22rem] leading-none text-[#101535] sm:whitespace-nowrap">
                Lead Analysts
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-[repeat(3,184px)] md:gap-x-14">
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
              <p className="text-base sm:text-[1.05rem] md:text-[1.22rem] lg:text-[1.22rem] leading-none text-[#101535] sm:whitespace-nowrap">
                Business Analyst
              </p>
            </div>

            <div className="grid max-w-full sm:max-w-[184px]">
              <TierTwoCard
                name="Saurav Patra"
                subtitle="Micro-Markets"
                image={sauravImg}
              />
            </div>
          </div>

          <div className="grid grid-cols-[32px_minmax(0,1fr)] sm:grid-cols-[40px_minmax(0,1fr)] items-center gap-x-4 sm:gap-x-8 lg:gap-x-10">
            <div className="flex h-full justify-center lg:translate-x-16 xl:translate-x-20">
              <div className="relative flex h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] items-center justify-center">
                <div className="h-full w-px rounded-full bg-[linear-gradient(180deg,transparent_0px,transparent_12px,rgba(255,255,255,0.85)_12px,rgba(255,255,255,0.85)_calc(100%-12px),transparent_calc(100%-12px),transparent_100%)]" />
                <div className="absolute top-1/2 h-3 w-3 -translate-y-[calc(140px-50%)] sm:-translate-y-[calc(160px-50%)] md:-translate-y-[calc(180px-50%)] rounded-full border border-[#5e677d] bg-white" />
                <div className="absolute top-1/2 h-3 w-3 translate-y-[calc(140px-50%)] sm:translate-y-[calc(160px-50%)] md:translate-y-[calc(180px-50%)] rounded-full border border-[#5e677d] bg-white" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-[1.02rem] md:text-[1.02rem] leading-[1.25] text-[#101535]">
                  {featuredAnalyst.name}
                </h3>
                <p className="mt-1 text-base sm:text-[1.02rem] md:text-[1.02rem] leading-[1.25] text-[#101535]">
                  {featuredAnalyst.subtitle}
                </p>
              </div>

              <TierTwoCard
                name={featuredAnalyst.cardName}
                subtitle={featuredAnalyst.cardSubtitle}
                image={featuredAnalyst.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalystTeamTierTwo;

