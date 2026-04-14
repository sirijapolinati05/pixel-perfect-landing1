import ashwinImg from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import tapatiImg from "@/assets/LandingPage/Tapati-Bandhopadhyay.png";
import markImg from "@/assets/LandingPage/Mark-Purdy.png";
import gaurangImg from "@/assets/LandingPage/Gaurang-Padgi.png";
import gmailLogo from "@/assets/ResearchTeam/Gmail-Logo.png";
import linkedInLogo from "@/assets/ResearchTeam/LinkedIn-Logo.png";
import AnalystTeamAvatar from "@/components/AnalystTeam/AnalystTeamAvatar";

const partnerCards = [
  {
    name: "Ashwin Gaidhani",
    subtitle: "Forbes Tech Council Member",
    image: ashwinImg,
  },
  {
    name: "Dr. Tapati Bandhopadhyay",
    subtitle: "Board-Level Strategy Advisor",
    image: tapatiImg,
  },
  {
    name: "Mark Purdy",
    subtitle: "Head of UK Practice",
    image: markImg,
  },
  {
    name: "Gaurang Pagdi",
    subtitle: "GCC & BPO Services",
    image: gaurangImg,
  },
];

const cardClassName =
  "group flex min-h-[300px] sm:min-h-[236px] md:min-h-[244px] w-full max-w-full sm:max-w-[184px] flex-col rounded-xl border border-[#dfe4ea] bg-white px-4 pb-4 pt-4 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0d4f96] hover:bg-[#0d4f96] hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]";

const AnalystTeamTierOne = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] px-4 sm:px-6 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#141948]">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-[760px]">
          <p className="text-[18px] md:text-[20px] font-bold leading-none tracking-[0.01em] text-[#20254d]">
            <span className="inline-flex items-center gap-4">
              <span className="h-px w-8 sm:w-10 md:w-[48px] bg-[#20254d]" />
              Core Leadership Team
              <span className="h-px w-8 sm:w-10 md:w-[48px] bg-[#20254d]" />
            </span>
          </p>

          <h2 className="mt-4 sm:mt-5 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[1.02] tracking-[-0.03em] md:whitespace-nowrap">
            Research Partners &amp; Principal Analysts
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14">
          <div className="max-w-6xl mx-auto ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-6">
            {partnerCards.map((member) => (
              <article key={member.name} className={cardClassName}>
                <AnalystTeamAvatar name={member.name} image={member.image} />

                <h3 className="mt-4 text-[18px] sm:text-[20px] leading-[1.15] tracking-[-0.02em] text-[#17204c] transition-colors duration-300 group-hover:text-white">
                  {member.name}
                </h3>

                {/* ✅ EXTRA DARK SUBTITLE */}
                <p
                  className={`mt-1 min-h-[36px] text-[14px] sm:text-[16px] leading-[1.25] text-[#1E4E8C] transition-colors duration-300 group-hover:text-white/85 ${
                    member.subtitle === "Forbes Tech Council Member" ||
                    member.subtitle === "Board-Level Strategy Advisor"
                      ? "mx-auto max-w-[148px] text-[13px] sm:text-[14px] leading-[1.2]"
                      : ""
                  } ${
                    member.name === "Gaurang Pagdi"
                      ? "mx-auto max-w-[150px]"
                      : ""
                  }`}
                >
                  {member.subtitle}
                </p>

                <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] transition-colors duration-300 group-hover:bg-white/35" />

                <div className="mt-4 flex items-center justify-center gap-5">
                  <button className="flex items-center justify-center p-1 transition-transform duration-300 hover:-translate-y-1">
                    <img src={linkedInLogo} className="h-7 w-7 object-contain" />
                  </button>

                  <button className="flex items-center justify-center p-1 transition-transform duration-300 hover:-translate-y-1">
                    <img src={gmailLogo} className="h-7 w-7 object-contain" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalystTeamTierOne;