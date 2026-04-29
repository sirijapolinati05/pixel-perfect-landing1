import lalithaImg from "@/assets/ResearchTeam/Lalitha-Yanamandra.png";
import meghnaImg from "@/assets/ResearchTeam/Meghna-Dodke.png";
import sameenImg from "@/assets/ResearchTeam/Sameen-Siddique.png";
import sauravImg from "@/assets/ResearchTeam/Saurav-Patra.png";
import johnBurnellImg from "@/assets/ResearchTeam/John-Burnell.png";
import gmailLogo from "@/assets/ResearchTeam/Gmail-Logo.png";
import linkedInLogo from "@/assets/ResearchTeam/LinkedIn-Logo.png";
import circleBg from "@/assets/ResearchTeam/ResearchTeam-Background.jpeg";

const leadAnalysts = [
  { name: "Mega Dodke", subtitle: "Enterprise Platform", image: meghnaImg },
  { name: "Sameen Siddique", subtitle: "Enterprise Cloud", image: sameenImg },
  { name: "Lalitha Yanamandra", subtitle: "Enterprise Services", image: lalithaImg },
];

const featuredAnalyst = {
  name: "John Burnell",
  subtitle: "Custom research & Editor",
  cardName: "John Burnell",
  cardSubtitle: "Technology Platforms",
  image: johnBurnellImg,
};

const tierCardClass =
  "group mx-auto flex h-full w-full sm:max-w-[clamp(240px,18vw,360px)] max-sm:max-w-[340px] flex-col rounded-xl border border-[#dfe4ea] bg-white px-4 pt-6 pb-6 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 hover:-translate-y-2 hover:border-navy hover:bg-navy sm:min-h-[clamp(300px,22vw,480px)] max-sm:min-h-[380px] sm:mx-0";

const tierGridClass =
  "grid grid-cols-1 gap-8 sm:grid-cols-2 md:flex md:flex-wrap md:justify-start lg:gap-10 xl:gap-12";

const TierTwoCard = ({ name, subtitle, image }) => (
  <article className={tierCardClass}>
    <div
      className="mx-auto mb-6 rounded-full overflow-hidden"
      style={{
        width: "clamp(110px, 8vw, 170px)",
        height: "clamp(110px, 8vw, 170px)",
        backgroundImage: `url(${circleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-full"
      />
    </div>

    <h3
      className="
        mt-2 whitespace-nowrap text-[#17204c] group-hover:text-white
        text-[18px] max-sm:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]
        min-[2500px]:text-[28px]
      "
    >
      {name}
    </h3>

    <p
      className="
        mt-2 whitespace-nowrap text-[clamp(1.125rem,1vw,1.125rem)] font-bold text-[#1E4E8C]
        group-hover:text-white/90 min-[2500px]:text-[22px]
      "
    >
      {subtitle}
    </p>

    <div className="mt-auto w-full pt-6">
      <div className="h-px w-full bg-[#c8ccd5] group-hover:bg-white/35" />

      <div className="mt-5 flex justify-center gap-6">
        <img src={linkedInLogo} className="h-7 w-7 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9" />
        <img src={gmailLogo} className="h-7 w-7 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9" />
      </div>
    </div>
  </article>
);

const AnalystTeamTierTwo = () => {
  return (
    <section id="analysts" className="bg-[#33a9da] py-16 lg:py-20 xl:py-24 text-[#141948]">
      <div className="mx-auto w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-[1200px]">
          <p className="flex items-center gap-2 text-[clamp(1rem,1.2vw,1.375rem)] font-bold text-[#20254d]">
            <span className="h-px w-6 bg-[#20254d]" />
            Enabling Leaders
            <span className="h-px w-6 bg-[#20254d]" />
          </p>

          <h2 className="mt-4 text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-tight tracking-[-0.02em]">
            Lead & Business Analysts
          </h2>
        </div>

        <div className="mt-12 space-y-12 lg:mt-16">
          <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
            <p className="flex items-center text-[18px] font-semibold lg:min-h-[44px]">
              Lead Analysts
            </p>

            <div className={tierGridClass}>
              {leadAnalysts.map((member) => (
                <TierTwoCard key={member.name} {...member} />
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
            <p className="flex items-center text-[18px] font-semibold lg:min-h-[44px]">
              Business Analyst
            </p>

            <div className={tierGridClass}>
              <TierTwoCard
                name="Saurav Patra"
                subtitle="Micro-Markets"
                image={sauravImg}
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
            <p className="flex items-center text-[18px] font-semibold lg:min-h-[44px]">
              {featuredAnalyst.subtitle}
            </p>

            <div className={tierGridClass}>
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
