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
    <div>

      <section
        id="analysts"
        className="overflow-hidden bg-background py-10 sm:py-12 md:py-14 lg:py-12 xl:py-14 2xl:py-16 font-serif"
      >
        <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 text-center">

          <div>

            <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
              <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>

              <p className="text-black text-[18px] sm:text-[20px] md:text-[22px] font-bold whitespace-nowrap">
                Research Partners
              </p>

              <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
            </div>

            <h2 className="
              mb-2 font-bold leading-[1.1] tracking-tight
              text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]
              bg-gradient-to-r from-[#0B3F60] to-[#26A9E0]
              bg-clip-text text-transparent
            ">
              Renowned Minds, Rigorous Perspectives
            </h2>

            <p className="
              mx-auto mb-5 max-w-xl font-medium
              text-[clamp(1.125rem,1.1vw,1.375rem)]
              text-[#5A6B85] sm:mb-7 sm:max-w-2xl md:max-w-3xl
              whitespace-nowrap
            ">
              Our research is shaped by partners who have spent decades at the forefront of technology research and advisory.
            </p>

          </div>

          <div className="flex justify-center">
            <div className="w-full">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">

                {partners.map((partner) => (
                  <div key={partner.name} className="relative h-full">

                    <div className="
                      group relative flex h-full flex-col rounded-xl bg-navy p-4 text-center
                      min-h-[280px] sm:min-h-[300px] md:min-h-[320px]
                      transition-all duration-300
                      hover:scale-[0.96] hover:shadow-inner
                    ">

                      <div
                        className="
                          mx-auto mb-4 rounded-full overflow-hidden
                          h-20 w-20
                          sm:h-24 sm:w-24
                          md:h-28 md:w-28
                          lg:h-24 lg:w-24
                          xl:h-32 xl:w-32
                          2xl:h-36 2xl:w-36
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

                      <h4 className="text-white font-bold text-[clamp(1.25rem,1.5vw,1.5rem)]">
                        {partner.name}
                      </h4>

                      <div className="mt-1 mb-2 flex flex-col">
                        <p className="text-[clamp(1.125rem,1vw,1.125rem)] text-[#38BDF8] font-bold">
                          {partner.role}
                        </p>

                        <p className="mt-1 text-[clamp(1.125rem,0.9vw,1.125rem)] text-white/90 font-medium">
                          {partner.subtitle}
                        </p>

                        <div className="mx-auto mt-3 h-[2px] w-20 bg-gray-400 opacity-70" />
                      </div>

                      <div className="mt-auto flex justify-center gap-8 pt-6">
                        <img src={linkedInLogo} className="h-7 w-7" />
                        <img src={gmailLogo} className="h-7 w-7" />
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/analyst-team"
              className="
              inline-flex px-[clamp(1rem,2vw,2rem)] py-[clamp(0.6rem,1.2vw,0.75rem)]
              text-[clamp(0.875rem,1.1vw,1.125rem)]
              border border-[#203A72] bg-white text-[#0A1F44]
              rounded transition-all duration-300
              hover:bg-[#0A1F44] hover:text-white hover:scale-95
              whitespace-nowrap
              "
            >
              Meet the Analyst Team
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PartnersSection;