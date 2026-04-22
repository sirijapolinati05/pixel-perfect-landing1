import ashwinImg from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import tapatiImg from "@/assets/LandingPage/Tapati-Bandhopadhyay.png";
import markImg from "@/assets/LandingPage/Mark-Purdy.png";
import gaurangImg from "@/assets/LandingPage/Gaurang-Padgi.png";
import gmailLogo from "@/assets/ResearchTeam/Gmail-Logo.png";
import linkedInLogo from "@/assets/ResearchTeam/LinkedIn-Logo.png";
import circleBg from "@/assets/ResearchTeam/ResearchTeam-Background.jpeg";

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
  "group flex w-full max-w-full sm:max-w-[184px] " +
  "[@media_(min-width:1440px)_and_(max-width:2200px)]:max-w-[240px] " +
  "[@media_(min-width:2560px)]:max-w-[460px] " +
  "min-h-[300px] " +
  "[@media_(min-width:1440px)_and_(max-width:2200px)]:min-h-[320px] " +
  "[@media_(min-width:2560px)]:min-h-[520px] " +
  "flex-col rounded-xl border border-[#dfe4ea] bg-white px-4 pb-4 pt-4 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300";

const AnalystTeamTierOne = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-6 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#141948]">

      <div className="relative z-10 mx-auto max-w-[1600px] 
        [@media_(min-width:1440px)_and_(max-width:2200px)]:max-w-[1800px]
        [@media_(min-width:2560px)]:max-w-[2304px]">

        {/* 🔥 HEADINGS RESTORED */}
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

        {/* GRID */}
        <div className="mt-8 sm:mt-10 md:mt-14">
          <div className="
            mx-auto grid justify-items-center gap-10 
            sm:grid-cols-2 sm:gap-12 
            md:grid-cols-3 md:gap-16 md:px-4 
            lg:w-fit lg:grid-cols-[repeat(4,184px)] lg:gap-24 lg:px-0
            [@media_(min-width:1440px)_and_(max-width:2200px)]:grid-cols-[repeat(4,240px)]
            [@media_(min-width:2560px)]:grid-cols-[repeat(4,460px)]
            [@media_(min-width:2560px)]:gap-[100px]
          ">

            {partnerCards.map((member) => (
              <article key={member.name} className={cardClassName}>

                {/* IMAGE */}
                <div
                  className="
                    mx-auto mb-6 rounded-full overflow-hidden
                    h-24 w-24
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
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>

                {/* 🔥 NAME FIXED (1 LINE) */}
                <h3 className="analyst-tier-one-name
                  mt-4 text-[18px] sm:text-[20px]
                  [@media_(min-width:2560px)]:text-[32px]
                  text-[#17204c]
                  whitespace-nowrap
                ">
                  {member.name}
                </h3>

                <p className="mt-1 text-[14px] sm:text-[16px] text-[#1E4E8C]">
                  {member.subtitle}
                </p>

                <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5]" />

                {/* ICONS */}
                <div className="mt-6 flex items-center justify-center gap-6
                  [@media_(min-width:2560px)]:gap-12">
                  <img src={linkedInLogo}
                    className="h-7 w-7
                    [@media_(min-width:1440px)_and_(max-width:2200px)]:h-10
                    [@media_(min-width:1440px)_and_(max-width:2200px)]:w-10
                    [@media_(min-width:2560px)]:h-20
                    [@media_(min-width:2560px)]:w-20"
                  />

                  <img src={gmailLogo}
                    className="h-7 w-7
                    [@media_(min-width:1440px)_and_(max-width:2200px)]:h-10
                    [@media_(min-width:1440px)_and_(max-width:2200px)]:w-10
                    [@media_(min-width:2560px)]:h-20
                    [@media_(min-width:2560px)]:w-20"
                  />
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
