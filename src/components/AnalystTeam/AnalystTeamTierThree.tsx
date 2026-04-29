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

const tierCardClass =
  "group mx-auto flex h-full w-full sm:max-w-[clamp(240px,18vw,360px)] max-sm:max-w-[340px] flex-col rounded-xl border border-[#dfe4ea] bg-white px-4 pt-6 pb-6 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 hover:-translate-y-2 hover:border-[#17204c] hover:bg-[#17204c] hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)] sm:min-h-[clamp(300px,22vw,480px)] max-sm:min-h-[380px] sm:mx-0";

const tierGridClass =
  "grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3";

const TierThreeCard = ({ name, image }) => (
  <article className={tierCardClass}>
    <div
      className="mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center"
      style={{
        width: "clamp(110px, 8vw, 170px)",
        height: "clamp(110px, 8vw, 170px)",
        backgroundImage: `url(${circleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={image} alt={name} className="h-full w-full object-cover rounded-full" />
    </div>

    <h3 className="mt-2 whitespace-nowrap text-[#17204c] group-hover:text-white text-[18px] max-sm:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] transition-colors duration-300 min-[2500px]:text-[28px]">
      {name}
    </h3>

    <p
      aria-hidden="true"
      className="mt-2 whitespace-nowrap text-[clamp(1.125rem,1vw,1.125rem)] font-bold opacity-0 min-[2500px]:text-[22px]"
    >
      Research Analyst
    </p>

    <div className="mt-auto w-full pt-6">
      <div className="h-px w-full bg-[#c8ccd5] transition-colors duration-300 group-hover:bg-white/40" />

      <div className="mt-5 flex justify-center gap-6">
        <img src={linkedInLogo} className="h-7 w-7 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9" />
        <img src={gmailLogo} className="h-7 w-7 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9" />
      </div>
    </div>
  </article>
);

const AnalystTeamTierThree = () => {
  return (
    <section
      id="research-team"
      className="bg-[#f8f7f3] py-16 lg:py-20 xl:py-24 text-[#141948]"
    >
      <div className="mx-auto w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36">
        <div className="max-w-[1200px]">

          <div className="mb-4">
            <p className="flex items-center gap-2 text-[clamp(1.125rem,1.2vw,1.375rem)] font-bold text-[#20254d]">
              <span className="h-px w-6 bg-[#20254d]" />
              Support Leads
              <span className="h-px w-6 bg-[#20254d]" />
            </p>
          </div>

          <h2 className="mt-4 text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-tight tracking-[-0.02em]">
            Research Specialists & Analysts
          </h2>

          <div className="mt-12 space-y-12 lg:mt-16">

            {/* Specialists (unchanged) */}
            <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
              <p className="flex items-center text-[18px] font-semibold lg:min-h-[44px]">
                Research Specialists
              </p>

              <div className={tierGridClass}>
                {researchSpecialists.map((member, index) => (
                  <div
                    key={member.name}
                    className={index === 1 ? "md:translate-x-4 lg:translate-x-8" : ""}
                  >
                    <TierThreeCard {...member} />
                  </div>
                ))}
              </div>
            </div>

            {/* Analysts (ONLY Shatakshi changed) */}
            <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
              <p className="flex items-center text-[18px] font-semibold lg:min-h-[44px]">
                Research Analysts
              </p>

              <div className={tierGridClass}>
                {researchAnalysts.map((member, index) => (
                  <div
                    key={member.name}
                    className={
                      index === 1
                        ? "md:translate-x-4 lg:translate-x-8"
                        : index === 2
                        ? "md:translate-x-8 lg:translate-x-16"  // ✅ only this changed
                        : ""
                    }
                  >
                    <TierThreeCard {...member} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalystTeamTierThree;
