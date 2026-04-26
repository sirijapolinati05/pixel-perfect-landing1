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
  <article className="
    group flex flex-col
    w-full max-w-[240px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[220px] xl:max-w-[240px]
    2xl:max-w-[520px]

    min-h-[300px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[320px] xl:min-h-[340px]
    2xl:min-h-[600px]

    rounded-xl border border-[#dfe4ea] bg-white
    px-4 pt-4 pb-4 text-center
    shadow-[0_4px_10px_rgba(8,18,59,0.15)]
    transition-all duration-300
    hover:-translate-y-2 hover:border-navy hover:bg-navy hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]
  ">
    <div
      className="
      mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center
      h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-28 lg:w-28 xl:h-32 xl:w-32
      2xl:h-72 2xl:w-72
    "
      style={{
        backgroundImage: `url(${circleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={image} alt={name} className="h-full w-full object-cover rounded-full" />
    </div>

    <h3 className="
      mt-2 whitespace-nowrap
      text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[19px]
      2xl:!text-[13px]
      text-[#17204c]
      group-hover:text-white
    ">
      {name}
    </h3>

    <p className="
      mt-2 whitespace-nowrap
      text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px]
      text-[#1E4E8C]
      group-hover:text-white/85
    ">
      {subtitle}
    </p>

    <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] group-hover:bg-white/35" />

    <div className="mt-6 flex items-center justify-center gap-6">
      <img src={linkedInLogo} className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 xl:h-10 xl:w-10 2xl:h-20 2xl:w-20" />
      <img src={gmailLogo} className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 xl:h-10 xl:w-10 2xl:h-20 2xl:w-20" />
    </div>
  </article>
);

const AnalystTeamTierTwo = () => {
  return (
    <section className="bg-[#33a9da] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#111948]">
      <div className="page-shell px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

        {/* 🔥 HEADER */}
        <div className="max-w-[660px]">
          
          {/* ✅ UPDATED LABEL WITH LINES */}
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#111948]">
            <span className="inline-flex items-center gap-3 sm:gap-4">
              <span className="h-px w-6 sm:w-8 md:w-[44px] bg-[#111948]" />
              Enabling Leaders
              <span className="h-px w-6 sm:w-8 md:w-[44px] bg-[#111948]" />
            </span>
          </p>

          {/* ✅ MATCHED HEADING */}
          <h2 className="
            mt-4
            text-[28px]
            sm:text-[34px]
            md:text-[44px]
            lg:text-[50px]
            leading-tight
          ">
            Lead & Business Analysts
          </h2>
        </div>

        <div className="mt-10 grid gap-y-10">

          {/* LEAD ANALYSTS */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[160px_1fr] lg:gap-8">
            <div className="flex items-center">
              <p className="text-[16px] sm:text-[18px] md:text-[20px]">
                Lead Analysts
              </p>
            </div>

            <div className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              gap-6 md:gap-8
              justify-items-center lg:justify-items-start
            ">
              {leadAnalysts.map((member) => (
                <TierTwoCard key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* BUSINESS ANALYST */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[160px_1fr] lg:gap-8">
            <div className="flex items-center">
              <p className="text-[16px] sm:text-[18px] md:text-[20px]">
                Business Analyst
              </p>
            </div>

            <div className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              gap-6 md:gap-8
              justify-items-center lg:justify-items-start
            ">
              <TierTwoCard
                name="Saurav Patra"
                subtitle="Micro-Markets"
                image={sauravImg}
              />
            </div>
          </div>

          {/* FEATURED */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[160px_1fr] lg:gap-8">
            <div className="flex items-center">
              <p className="text-[16px] sm:text-[18px]">
                {featuredAnalyst.subtitle}
              </p>
            </div>

            <div className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              gap-6 md:gap-8
              justify-items-center lg:justify-items-start
            ">
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