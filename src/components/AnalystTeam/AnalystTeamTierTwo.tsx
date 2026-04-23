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

const cardClassName =
  "group flex w-full max-w-full sm:max-w-[184px] " +
  "[@media_(width:1024px)]:max-w-[220px] " +
  "[@media_(min-width:1440px)_and_(max-width:2200px)]:max-w-[240px] " +
  "min-h-[300px] " +
  "[@media_(min-width:1440px)_and_(max-width:2200px)]:min-h-[320px] " +
  "[@media_(min-width:2560px)]:max-w-[460px] " +
  "[@media_(min-width:2560px)]:min-h-[520px] " +
  "flex-col rounded-xl border border-[#dfe4ea] bg-white px-4 pb-4 pt-4 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 hover:-translate-y-2 hover:border-navy hover:bg-navy hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]";

const TierTwoCard = ({ name, subtitle, image }) => (
  <article className={cardClassName}>
    
    {/* IMAGE */}
    <div
      className="
      mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center
      analyst-team-circle h-28 w-28   /* ✅ increased for 320px */
      min-[425px]:h-28 min-[425px]:w-28
      [@media_(min-width:1440px)_and_(max-width:2200px)]:h-36
      [@media_(min-width:1440px)_and_(max-width:2200px)]:w-36
      [@media_(min-width:2560px)]:h-64
      [@media_(min-width:2560px)]:w-64
      "
      style={{
        backgroundImage: `url(${circleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={image} alt={name} className="h-full w-full object-cover rounded-full" />
    </div>

    {/* NAME */}
    <h3 className="
      mt-4 whitespace-nowrap
      text-[18px]   /* ✅ increased */
      min-[425px]:text-[20px]
      sm:text-[18px]
      lg:text-[19px]
      text-[#17204c]
      group-hover:text-white
    ">
      {name}
    </h3>

    {/* SUBTITLE */}
    <p className="
      mt-1
      text-[15px]   /* ✅ increased */
      min-[425px]:text-[17px]
      sm:text-[16px]
      text-[#1E4E8C]
      group-hover:text-white/85
      whitespace-nowrap
    ">
      {subtitle}
    </p>

    <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] group-hover:bg-white/35" />

    {/* ICONS */}
    <div className="mt-4 flex items-center justify-center gap-6
      [@media_(min-width:2560px)]:gap-12">

      <img src={linkedInLogo}
        className="
        h-8 w-8   /* ✅ increased */
        min-[425px]:h-9 min-[425px]:w-9
        [@media_(min-width:1440px)_and_(max-width:2200px)]:h-10
        [@media_(min-width:1440px)_and_(max-width:2200px)]:w-10
        [@media_(min-width:2560px)]:h-20
        [@media_(min-width:2560px)]:w-20"
      />

      <img src={gmailLogo}
        className="
        h-8 w-8   /* ✅ increased */
        min-[425px]:h-9 min-[425px]:w-9
        [@media_(min-width:1440px)_and_(max-width:2200px)]:h-10
        [@media_(min-width:1440px)_and_(max-width:2200px)]:w-10
        [@media_(min-width:2560px)]:h-20
        [@media_(min-width:2560px)]:w-20"
      />
    </div>

  </article>
);

const AnalystTeamTierTwo = () => {
  return (
    <section id="analysts" className="relative overflow-hidden bg-[#33a9da] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#111948]">

      <div className="page-shell relative z-10">

        <div className="max-w-[660px]">
          <p className="text-[18px] md:text-[20px] font-semibold text-[#111948]">
            <span className="inline-flex items-center gap-4">
              <span className="h-px w-8 sm:w-10 md:w-[44px] bg-[#111948]" />
              Enabling Leaders
              <span className="h-px w-8 sm:w-10 md:w-[44px] bg-[#111948]" />
            </span>
          </p>

          <h2 className="mt-4 sm:mt-5 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px]">
            Lead &amp; Business Analysts
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-y-8 lg:grid-cols-1 lg:gap-y-10">

          <div className="grid gap-y-6 sm:gap-y-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-x-8 [@media_(min-width:2560px)]:gap-y-16 [@media_(min-width:2560px)]:grid-cols-[280px_minmax(0,1fr)] [@media_(min-width:2560px)]:gap-x-24">

            <div className="flex items-center">
              <p className="text-[18px] md:text-[20px] text-[#101535]">Lead Analysts</p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-[repeat(3,184px)]
              [@media_(width:1024px)]:grid-cols-[repeat(3,220px)]
              [@media_(min-width:1440px)_and_(max-width:2200px)]:grid-cols-[repeat(3,240px)]
              [@media_(min-width:2560px)]:grid-cols-[repeat(3,460px)]
              [@media_(min-width:2560px)]:gap-[100px]">

              {leadAnalysts.map((member) => (
                <TierTwoCard key={member.name} {...member} />
              ))}
            </div>

            <div className="flex items-center">
              <p className="text-[18px] md:text-[20px] text-[#101535]">Business Analyst</p>
            </div>

            <div className="grid max-w-full sm:max-w-[184px]
              [@media_(width:1024px)]:max-w-[220px]
              [@media_(min-width:1440px)_and_(max-width:2200px)]:max-w-[240px]
              [@media_(min-width:2560px)]:max-w-[460px]">

              <TierTwoCard
                name="Saurav Patra"
                subtitle="Micro-Markets"
                image={sauravImg}
              />
            </div>

            <div className="mt-8 flex items-center">
              <p className="text-[16px] sm:text-[18px] text-[#101535]">
                {featuredAnalyst.subtitle}
              </p>
            </div>

            <div className="grid max-w-full sm:max-w-[184px]
              [@media_(width:1024px)]:max-w-[220px]
              [@media_(min-width:1440px)_and_(max-width:2200px)]:max-w-[240px]
              [@media_(min-width:2560px)]:max-w-[460px]">

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
