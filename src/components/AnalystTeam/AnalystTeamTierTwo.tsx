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

const TierTwoCard = ({ name, subtitle, image }) => (
  <article
    className="
      group flex flex-col
      w-full
      mx-auto

      /* ✅ FLUID WIDTH */
      max-w-[clamp(240px,18vw,360px)]

      /* ✅ FLUID HEIGHT */
      min-h-[clamp(300px,22vw,480px)]

      rounded-xl border border-[#dfe4ea] bg-white
      px-4 pt-6 pb-4 text-center
      shadow-[0_4px_10px_rgba(8,18,59,0.15)]
      transition-all duration-300
      hover:-translate-y-2 hover:border-navy hover:bg-navy
    "
  >

    {/* IMAGE (same as Tier1 behavior) */}
    <div
      className="mx-auto mb-6 rounded-full overflow-hidden"
      style={{
        width: "clamp(100px, 7vw, 160px)",
        height: "clamp(100px, 7vw, 160px)",
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

    {/* NAME */}
    <h3 className="
      mt-2 whitespace-nowrap

      text-[18px]
      lg:text-[20px]
      xl:text-[22px]
      2xl:text-[24px]

      min-[2500px]:text-[28px]

      text-[#17204c]
      group-hover:text-white
    ">
      {name}
    </h3>

    {/* SUBTITLE */}
    <p className="
      mt-2 whitespace-nowrap

      text-[clamp(1.125rem,1vw,1.125rem)]

      min-[2500px]:text-[22px]

      text-[#1E4E8C]
      group-hover:text-white/90
      font-bold
    ">
      {subtitle}
    </p>

    {/* DIVIDER */}
    <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] group-hover:bg-white/35" />

    {/* ICONS */}
    <div className="mt-6 flex items-center justify-center gap-6">
      <img src={linkedInLogo} className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9" />
      <img src={gmailLogo} className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9" />
    </div>

  </article>
);

const AnalystTeamTierTwo = () => {
  return (
    <section id="analysts" className="bg-[#33a9da] py-16 lg:py-20 xl:py-24 text-[#141948]">

      {/* SAME CONTAINER AS TIER1 */}
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 mx-auto">

        {/* HEADER */}
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

        <div className="mt-12 lg:mt-16 space-y-12">

          {/* LEAD */}
          <div className="grid gap-6 lg:grid-cols-[160px_1fr]">
            <p className="flex items-center text-[18px] font-semibold">Lead Analysts</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {leadAnalysts.map((member) => (
                <TierTwoCard key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* BUSINESS */}
          <div className="grid gap-6 lg:grid-cols-[160px_1fr]">
            <p className="flex items-center text-[18px] font-semibold">Business Analyst</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <TierTwoCard
                name="Saurav Patra"
                subtitle="Micro-Markets"
                image={sauravImg}
              />
            </div>
          </div>

          {/* FEATURED */}
          <div className="grid gap-6 lg:grid-cols-[160px_1fr]">
            <p className="flex items-center text-[18px] font-semibold">
              {featuredAnalyst.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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