import { Linkedin, Mail } from "lucide-react";

import ashwinImg from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import tapatiImg from "@/assets/LandingPage/Tapati-Bandhopadhyay.png";
import markImg from "@/assets/LandingPage/Mark-Purdy.png";
import gaurangImg from "@/assets/LandingPage/Gaurang-Padgi.png";
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
    subtitle: "Global Capability Centers(GCC) & BPO Services",
    image: gaurangImg,
  },
];

const cardClassName =
  "group flex min-h-[220px] sm:min-h-[228px] md:min-h-[236px] w-full max-w-full sm:max-w-[184px] flex-col border border-[#dfe4ea] bg-white px-4 pb-5 pt-3 text-center shadow-[0_4px_10px_rgba(8,18,59,0.15)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0d4f96] hover:bg-[#0d4f96] hover:shadow-[0_20px_34px_rgba(8,18,59,0.24)]";

const AnalystTeamTierOne = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 2xl:px-28 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#141948]">
      <div className="relative z-10 mx-auto max-w-[1240px] xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div className="max-w-[760px]">
            <p className="text-sm sm:text-base md:text-[17px] lg:text-[17px] font-bold leading-none tracking-[0.01em] text-[#20254d]">
            <span className="inline-flex items-center gap-4">
              <span className="h-px w-8 sm:w-10 md:w-[48px] bg-[#20254d]" />
              Core Leadership Team
              <span className="h-px w-8 sm:w-10 md:w-[48px] bg-[#20254d]" />
            </span>
          </p>

          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-[3.5rem] lg:text-[3.5rem] leading-[1.02] tracking-[-0.03em] md:whitespace-nowrap">
            Research Partners &amp; Principal Analysts
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:items-center">
          <div className="flex items-center lg:min-h-[220px]">
            <p className="text-base sm:text-[1.05rem] md:text-[1.22rem] lg:text-[1.22rem] font-bold leading-none tracking-[0.01em] text-[#101535] sm:whitespace-nowrap">
              Research Partners
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-3">
            {partnerCards.map((member) => (
              <article key={member.name} className={cardClassName}>
                <AnalystTeamAvatar name={member.name} image={member.image} />

                <h3 className="mt-4 text-base sm:text-[1.02rem] md:text-[1.02rem] leading-[1.15] tracking-[-0.02em] text-[#17204c] transition-colors duration-300 group-hover:text-white">
                  {member.name}
                </h3>

                <p
                  className={`mt-1 min-h-[32px] text-[11px] sm:text-[0.68rem] md:text-[0.68rem] leading-[1.2] text-[#5ab5eb] transition-colors duration-300 group-hover:text-white/85 ${
                    member.name === "Gaurang Pagdi"
                      ? "mx-auto max-w-[150px]"
                      : ""
                  }`}
                >
                  {member.subtitle}
                </p>

                <div className="mx-auto mt-auto h-px w-full bg-[#c8ccd5] transition-colors duration-300 group-hover:bg-white/35" />

                <div className="mt-4 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58dec5] text-[#0d173f] transition-all duration-300 group-hover:bg-white group-hover:text-[#0d4f96] hover:-translate-y-1"
                  >
                    <Linkedin size={14} strokeWidth={2.2} />
                  </button>
                  <button
                    type="button"
                    aria-label={`${member.name} email`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58dec5] text-[#0d173f] transition-all duration-300 group-hover:bg-white group-hover:text-[#0d4f96] hover:-translate-y-1"
                  >
                    <Mail size={14} strokeWidth={2.2} />
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
