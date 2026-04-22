import { Link } from "react-router-dom";

import ashwinImg from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import tapatiImg from "@/assets/LandingPage/Tapati-Bandhopadhyay.png";
import markImg from "@/assets/LandingPage/Mark-Purdy.png";
import gaurangImg from "@/assets/LandingPage/Gaurang-Padgi.png";
import gmailLogo from "@/assets/ResearchTeam/Gmail-Logo.png";
import linkedInLogo from "@/assets/ResearchTeam/LinkedIn-Logo.png";
import circleBg from "@/assets/ResearchTeam/ResearchTeam-Background.jpeg";

const partners = [
  {
    name: "Ashwin Gaidhani",
    role: "Research Partner",
    subtitle: "Forbes Tech Council Member",
    image: ashwinImg,
  },
  {
    name: "Dr. Tapati Bandhopadhyay",
    role: "Research Partner",
    subtitle: "Board Level Strategy Advisor",
    image: tapatiImg,
  },
  {
    name: "Mark Purdy",
    role: "Research Partner",
    subtitle: "Senior Research Advisor",
    image: markImg,
  },
  {
    name: "Gaurang Pagdi",
    role: "Research Partner",
    subtitle: "GCC & BPO Services",
    image: gaurangImg,
  },
];

const PartnersSection = () => {
  return (
    <section
      id="analysts"
      className="overflow-hidden bg-background py-10 sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12 font-serif"
    >
      <div className="page-shell mx-auto text-center">

        {/* Heading */}
        <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
          <p className="text-black text-[18px] md:text-[20px] font-bold whitespace-nowrap">
            Research Partners
          </p>
          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        <h2 className="mb-2 text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[40px] md:text-[44px] lg:text-[48px]
          bg-gradient-to-r from-[#0B3F60] to-[#26A9E0] 
          bg-clip-text text-transparent">
          Renowned Minds, Rigorous Perspectives
        </h2>

        <p className="mx-auto mb-5 max-w-xl text-[16px] text-muted-foreground sm:mb-7 sm:max-w-2xl md:max-w-3xl md:text-[18px] lg:text-[20px]">
          Our research is shaped by partners who have spent decades at the forefront of technology research and advisory.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">

          {partners.map((partner) => (
            <div key={partner.name} className="relative h-full">

              <div className="
                group relative flex h-full flex-col rounded-xl bg-navy p-4 text-center
                min-h-[300px] md:min-h-[320px]
                transition-all duration-300 ease-out
                hover:scale-[0.96] hover:shadow-inner
                active:scale-[0.94]
              ">

                {/* 🔽 CIRCLE SIZE DECREASED */}
                <div
                  className="
                    mx-auto mb-4 rounded-full overflow-hidden
                    h-20 w-20
                    sm:h-22 sm:w-22
                    xl:h-32 xl:w-32
                    2xl:h-40 2xl:w-40
                  "
                  style={{
                    backgroundImage: `url(${circleBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>

                <h4 className="text-[20px] font-bold text-white">
                  {partner.name}
                </h4>

                <div className="mt-1 mb-2 flex flex-col">
                  <p className="text-[16px] font-medium text-[#38BDF8]">
                    {partner.role}
                  </p>

                  <p className="mt-1 text-[14px] text-[#38BDF8]">
                    {partner.subtitle}
                  </p>

                  <div className="mx-auto mt-3 h-[2px] w-20 bg-gray-400 opacity-70" />
                </div>

                {/* 🔼 ICON SIZE INCREASED */}
                <div className="mt-auto flex justify-center gap-10 pt-6">
                  <img 
                    src={linkedInLogo} 
                    alt="LinkedIn"
                    className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 object-contain" 
                  />

                  <img 
                    src={gmailLogo} 
                    alt="Gmail"
                    className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 object-contain" 
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/analyst-team"
            className="inline-flex px-5 py-2.5 border border-[#203A72] bg-white text-[#0A1F44] rounded text-[16px]
            transition-all duration-300 hover:bg-[#0A1F44] hover:text-white hover:scale-95"
          >
            Meet the Analyst Team
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;