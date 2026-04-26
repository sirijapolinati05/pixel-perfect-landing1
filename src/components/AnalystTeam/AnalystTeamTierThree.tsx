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
  { name: "Apoorva Rao", image: apoorvaImg },
  { name: "Arnab Das", image: arnabImg },
  { name: "Shatakshi Singh", image: shatakshiImg },
];

const TierThreeCard = ({ name, image }) => (
  <article className="
    group flex flex-col w-full
    max-w-[240px] 2xl:max-w-[520px]
    min-h-[320px] 2xl:min-h-[600px]
    rounded-xl border border-[#dfe4ea] bg-white
    px-4 pt-4 pb-4 text-center
    shadow-[0_4px_10px_rgba(8,18,59,0.15)]
    transition-all duration-300
    hover:-translate-y-2 hover:border-navy hover:bg-navy hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]
  ">
    <div
      className="
      mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center
      h-28 w-28 md:h-32 md:w-32 xl:h-36 xl:w-36
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

    <h3 className="mt-2 text-[18px] 2xl:text-[16px] text-[#17204c] group-hover:text-white">
      {name}
    </h3>

    <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] group-hover:bg-white/35" />

    <div className="mt-5 flex items-center justify-center gap-6">
      <img src={linkedInLogo} className="h-8 w-8 2xl:h-20 2xl:w-20" />
      <img src={gmailLogo} className="h-8 w-8 2xl:h-20 2xl:w-20" />
    </div>
  </article>
);

const AnalystTeamTierThree = () => {
  return (
    <section className="bg-[#f8f7f3] py-12 text-[#111948]">
      <div className="page-shell px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

        {/* 🔥 SUPPORT LEADS LABEL (TOP) */}
        <div className="mb-4">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#111948]">
            <span className="inline-flex items-center gap-3 sm:gap-4">
              <span className="h-px w-6 sm:w-8 md:w-[44px] bg-[#111948]" />
              Support Leads
              <span className="h-px w-6 sm:w-8 md:w-[44px] bg-[#111948]" />
            </span>
          </p>
        </div>

        {/* 🔥 MAIN HEADING */}
        <h2 className="
          text-[28px]
          sm:text-[34px]
          md:text-[44px]
          lg:text-[50px]
          leading-tight
          mb-10
        ">
          Research Specialists & Analysts
        </h2>

        {/* SPECIALISTS */}
        <div className="grid gap-10 lg:grid-cols-[160px_1fr]">
          <div className="flex items-center">
            <p className="text-lg">Research Specialists</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center lg:justify-items-start">
            {researchSpecialists.map((member) => (
              <TierThreeCard key={member.name} {...member} />
            ))}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* ANALYSTS */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[160px_1fr]">
          <div className="flex items-center">
            <p className="text-lg">Research Analysts</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center lg:justify-items-start">
            {researchAnalysts.map((member) => (
              <TierThreeCard key={member.name} {...member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalystTeamTierThree;