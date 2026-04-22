import arnabImg from "@/assets/ResearchTeam/Arnab-Das.png";
import apoorvaImg from "@/assets/ResearchTeam/Apoorva-Rao.png";
import gmailLogo from "@/assets/ResearchTeam/Gmail-Logo.png";
import linkedInLogo from "@/assets/ResearchTeam/LinkedIn-Logo.png";
import sachinImg from "@/assets/ResearchTeam/Sachin-Birajdar.png";
import shatakshiImg from "@/assets/ResearchTeam/Shatakshi-Singh.png";
import virajImg from "@/assets/ResearchTeam/Viraj-Narvekar.png";
import circleBg from "@/assets/ResearchTeam/ResearchTeam-Background.jpeg";

const researchSpecialists = [
  { name: "Viraj Narvekar", image: virajImg },
  { name: "Sachin Birajdar", image: sachinImg },
];

const researchAnalysts = [
  { name: "Shatakshi Singh", image: shatakshiImg },
  { name: "Arnab Das", image: arnabImg },
  { name: "Apoorva Rao", image: apoorvaImg },
];

const cardClassName =
  "group flex w-full max-w-full sm:max-w-[184px] " +
  "[@media_(width:1024px)]:max-w-[220px] " +
  "[@media_(min-width:1440px)_and_(max-width:2200px)]:max-w-[240px] " +
  "[@media_(min-width:2560px)]:max-w-[480px] " +
  "min-h-[300px] " +
  "[@media_(min-width:1440px)_and_(max-width:2200px)]:min-h-[320px] " +
  "[@media_(min-width:2560px)]:min-h-[520px] " +
  "flex-col rounded-xl border border-[#dfe4ea] bg-white px-4 pb-4 pt-4 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0d4f96] hover:bg-[#0d4f96] hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]";

const TierThreeCard = ({ name, image }) => (
  <article className={cardClassName}>
    
    {/* IMAGE */}
    <div
      className="
        mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center
        h-28 w-28   /* ✅ increased for 320px */
        min-[425px]:h-28 min-[425px]:w-28
        [@media_(min-width:1440px)_and_(max-width:2200px)]:h-36
        [@media_(min-width:1440px)_and_(max-width:2200px)]:w-36
        [@media_(min-width:2560px)]:h-60
        [@media_(min-width:2560px)]:w-60
      "
      style={{
        backgroundImage: `url(${circleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover rounded-full"
      />
    </div>

    {/* NAME */}
    <h3
      className="
        mt-4 
        text-[18px]
        min-[425px]:text-[20px]
        sm:text-[20px]
        text-[#17204c] group-hover:text-white whitespace-nowrap
      "
    >
      {name}
    </h3>

    <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] group-hover:bg-white/35" />

    {/* ICONS */}
    <div className="mt-6 flex items-center justify-center gap-6
      [@media_(min-width:2560px)]:gap-12">

      <img
        src={linkedInLogo}
        className="
          h-8 w-8   /* ✅ increased */
          min-[425px]:h-9 min-[425px]:w-9
          [@media_(min-width:1440px)_and_(max-width:2200px)]:h-10
          [@media_(min-width:1440px)_and_(max-width:2200px)]:w-10
          [@media_(min-width:2560px)]:h-20
          [@media_(min-width:2560px)]:w-20
        "
      />

      <img
        src={gmailLogo}
        className="
          h-8 w-8   /* ✅ increased */
          min-[425px]:h-9 min-[425px]:w-9
          [@media_(min-width:1440px)_and_(max-width:2200px)]:h-10
          [@media_(min-width:1440px)_and_(max-width:2200px)]:w-10
          [@media_(min-width:2560px)]:h-20
          [@media_(min-width:2560px)]:w-20
        "
      />
    </div>
  </article>
);

const AnalystTeamTierThree = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#111948]">
      <div className="page-shell relative z-10">
        <div className="max-w-[760px]">
          <p className="text-[18px] md:text-[20px] font-semibold text-[#20254d]">
            <span className="inline-flex items-center gap-4">
              <span className="h-px w-8 sm:w-10 md:w-[48px] bg-[#20254d]" />
              Support Leads
              <span className="h-px w-8 sm:w-10 md:w-[48px] bg-[#20254d]" />
            </span>
          </p>

          <h2 className="mt-4 sm:mt-5 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] text-[#17204c]
            [@media_(min-width:2560px)]:text-[60px]">
            Research Specialists &amp; Analysts
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-y-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:items-center lg:gap-x-8 xl:grid-cols-[150px_minmax(0,1fr)] xl:gap-x-8 [@media_(min-width:2560px)]:gap-y-16 [@media_(min-width:2560px)]:grid-cols-[280px_minmax(0,1fr)] [@media_(min-width:2560px)]:gap-x-24">

          <div className="flex items-center lg:self-center">
            <p className="text-[18px] md:text-[20px] text-[#101535]">
              Research Specialists
            </p>
          </div>

          <div className="grid gap-12
            md:grid-cols-[repeat(2,184px)]
            [@media_(width:1024px)]:grid-cols-[repeat(2,220px)]
            [@media_(min-width:1440px)_and_(max-width:2200px)]:grid-cols-[repeat(2,240px)]
            [@media_(min-width:2560px)]:grid-cols-[repeat(2,480px)]
            ">

            {researchSpecialists.map((member) => (
              <TierThreeCard key={member.name} {...member} />
            ))}
          </div>

          <div className="flex items-center lg:self-center">
            <p className="text-[18px] md:text-[20px] text-[#101535]">
              Research Analysts
            </p>
          </div>

          <div className="grid gap-12
            md:grid-cols-[repeat(3,184px)]
            [@media_(width:1024px)]:grid-cols-[repeat(3,220px)]
            [@media_(min-width:1440px)_and_(max-width:2200px)]:grid-cols-[repeat(3,240px)]
            [@media_(min-width:2560px)]:grid-cols-[repeat(3,480px)]
            ">

            {researchAnalysts.map((member, index) => (
              <TierThreeCard key={`${member.name}-${index}`} {...member} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnalystTeamTierThree;
