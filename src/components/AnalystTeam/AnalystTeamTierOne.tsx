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
  "group flex w-full max-w-full sm:max-w-[184px] lg:max-w-[220px] " +
  "[@media_(width:768px)]:max-w-[220px] " +
  "[@media_(width:912px)]:max-w-[280px] " +
  "[@media_(min-width:1440px)_and_(max-width:2200px)]:max-w-[240px] " +
  "[@media_(min-width:2560px)]:max-w-[460px] " +
  "min-h-[300px] " +
  "[@media_(min-width:1440px)_and_(max-width:2200px)]:min-h-[320px] " +
  "[@media_(min-width:2560px)]:min-h-[520px] " +
  "flex-col rounded-xl border border-[#dfe4ea] bg-white px-4 pb-4 pt-4 text-center " +
  "shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 ease-out " +
  "hover:-translate-y-2 hover:border-navy hover:bg-navy hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)] " +
  "active:-translate-y-2 active:border-navy active:bg-navy active:shadow-[0_20px_34px_rgba(8,18,59,0.24)]";

const AnalystTeamTierOne = () => {
  return (
    <section id="leadership" className="relative overflow-hidden bg-[#f8f7f3] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#141948]">
      
      <div className="page-shell relative z-10">
        {/* HEADER */}
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

        {/* CARDS */}
        <div className="mt-8 sm:mt-10 md:mt-14">
          <div
          className="
              mx-auto grid justify-items-center gap-10
              sm:grid-cols-2 sm:gap-12
              md:grid-cols-3 md:gap-16 md:px-4
              [@media_(width:768px)]:grid-cols-2
              [@media_(width:912px)]:grid-cols-2
              [@media_(width:912px)]:gap-10
              lg:w-fit lg:grid-cols-[repeat(4,220px)] lg:gap-8 lg:px-0
              [@media_(min-width:1440px)_and_(max-width:2200px)]:grid-cols-[repeat(4,240px)]
              [@media_(min-width:2560px)]:grid-cols-[repeat(4,460px)]
              [@media_(min-width:2560px)]:gap-[100px]
              [@media_(width:1024px)]:justify-center
              [@media_(width:1024px)]:gap-6
            "
          >
            {partnerCards.map((member) => (
              <article key={member.name} className={cardClassName}>
                
                {/* IMAGE */}
                <div
                  className="
                    analyst-team-circle
                    mx-auto mb-6 rounded-full overflow-hidden
                    h-28 w-28
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
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* NAME */}
                <h3
                  className="
                    mt-4 whitespace-nowrap
                    text-[18px]
                    min-[425px]:text-[20px]
                    sm:text-[18px]
                    lg:text-[19px]
                    [@media_(width:1024px)]:text-[16px]
                    text-[#17204c]
                    group-hover:text-white
                  "
                >
                  {member.name}
                </h3>

                {/* SUBTITLE */}
                <p
                  className="
                    mt-1
                    text-[15px]
                    min-[425px]:text-[17px]
                    sm:text-[16px]
                    lg:text-[16px]
                    text-[#1E4E8C]
                    group-hover:text-white/85
                  "
                >
                  {member.subtitle}
                </p>

                {/* DIVIDER */}
                <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] group-hover:bg-white/35" />

                {/* ICONS */}
                <div className="mt-6 flex items-center justify-center gap-6">
                  <img
                    src={linkedInLogo}
                    alt="LinkedIn"
                    className="
                      h-8 w-8
                      min-[425px]:h-9 min-[425px]:w-9
                      [@media_(min-width:1440px)_and_(max-width:2200px)]:h-10
                      [@media_(min-width:1440px)_and_(max-width:2200px)]:w-10
                      [@media_(min-width:2560px)]:h-20
                      [@media_(min-width:2560px)]:w-20
                    "
                  />

                  <img
                    src={gmailLogo}
                    alt="Gmail"
                    className="
                      h-8 w-8
                      min-[425px]:h-9 min-[425px]:w-9
                      [@media_(min-width:1440px)_and_(max-width:2200px)]:h-10
                      [@media_(min-width:1440px)_and_(max-width:2200px)]:w-10
                      [@media_(min-width:2560px)]:h-20
                      [@media_(min-width:2560px)]:w-20
                    "
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
