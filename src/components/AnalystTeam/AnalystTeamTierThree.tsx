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
  <article
    className="
      group flex flex-col w-full mx-auto

      max-w-[clamp(220px,18vw,320px)]
      min-h-[clamp(280px,22vw,420px)]

      rounded-xl border border-[#dfe4ea] bg-white
      px-4 pt-5 pb-4 text-center
      shadow-[0_4px_10px_rgba(8,18,59,0.15)]

      transition-all duration-300

      /* ✅ ONLY HOVER */
      hover:-translate-y-2
      hover:border-[#17204c]
      hover:bg-[#17204c]
      hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]
    "
  >
    {/* IMAGE */}
    <div
      className="mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center"
      style={{
        width: "clamp(100px, 7vw, 150px)",
        height: "clamp(100px, 7vw, 150px)",
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
        mt-2 whitespace-nowrap

        text-[18px]
        sm:text-[19px]
        lg:text-[20px]
        xl:text-[22px]
        2xl:text-[24px]
        min-[2500px]:text-[26px]

        text-[#17204c]
        transition-colors duration-300

        group-hover:text-white
      "
    >
      {name}
    </h3>

    {/* DIVIDER */}
    <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] transition-colors duration-300 group-hover:bg-white/40" />

    {/* ICONS */}
    <div className="mt-5 flex items-center justify-center gap-6">
      <img
        src={linkedInLogo}
        className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9"
      />
      <img
        src={gmailLogo}
        className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9"
      />
    </div>
  </article>
);

const AnalystTeamTierThree = () => {
  return (
    <section
      id="research-team"
      className="bg-[#f8f7f3] py-16 lg:py-20 xl:py-24 text-[#141948]"
    >
      <div className="max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] min-[2500px]:max-w-[2300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* SUPPORT LEADS */}
        <div className="mb-4">
          <p className="flex items-center gap-2 text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#20254d]">
            <span className="h-px w-6 bg-[#20254d]" />
            Support Leads
            <span className="h-px w-6 bg-[#20254d]" />
          </p>
        </div>

        {/* HEADING */}
        <h2 className="mt-4 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[56px] mb-10">
          Research Specialists & Analysts
        </h2>

        {/* SPECIALISTS */}
        <div className="grid gap-10 lg:grid-cols-[160px_1fr]">
          <div className="flex items-center">
            <p className="text-[18px] font-semibold">Research Specialists</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {researchSpecialists.map((member) => (
              <TierThreeCard key={member.name} {...member} />
            ))}
          </div>
        </div>

        {/* ANALYSTS */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[160px_1fr]">
          <div className="flex items-center">
            <p className="text-[18px] font-semibold">Research Analysts</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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