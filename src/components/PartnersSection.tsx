import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import ashwinImg from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import tapatiImg from "@/assets/LandingPage/Tapati-Bandhopadhyay.png";
import markImg from "@/assets/LandingPage/Mark-Purdy.png";
import gaurangImg from "@/assets/LandingPage/Gaurang-Padgi.png";
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">

        {/* TOP LABEL */}
        <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>

          <p className="text-black text-[24px] font-bold tracking-widest whitespace-nowrap">
            Research Partners
          </p>

          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        {/* HEADING */}
        <h2 className="mb-2 text-[32px] sm:text-[48px] font-bold leading-[1.1] tracking-tight 
          bg-gradient-to-r from-[#0B3F60] to-[#26A9E0] 
          bg-clip-text text-transparent">
          Renowned Minds, Rigorous Perspectives
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mb-5 max-w-xl text-[20px] text-muted-foreground sm:mb-7 sm:max-w-2xl">
          Our research is shaped by partners who have spent decades at the forefront of technology research and advisory.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">

          {partners.map((partner) => (
            <div key={partner.name} className="relative h-full">

              {partner.name === "Ashwin Gaidhani" && (
                <img
                  src={whiteTypographyImg}
                  alt=""
                  className="pointer-events-none absolute -left-20 -top-28 z-0 w-[180px] opacity-90"
                />
              )}

              <div className="relative z-10 flex h-full min-h-[300px] flex-col rounded-xl bg-navy p-4 text-center">

                {/* ✅ BIGGER CIRCLE */}
                <div
                  className="mx-auto mb-4 h-24 w-24 rounded-full overflow-hidden"
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

                {/* ✅ BIGGER NAME */}
                <h4 className="text-lg font-bold text-white">
                  {partner.name}
                </h4>

                {/* ✅ BIGGER ROLE + SUBTITLE */}
                <div className="mt-1 mb-2 flex flex-col">
                  <p className="text-sm font-medium text-[#38BDF8]">
                    {partner.role}
                  </p>

                  <p className="mt-1 text-xs text-[#38BDF8]">
                    {partner.subtitle}
                  </p>

                  <div className="mx-auto mt-3 h-[2px] w-20 bg-gray-400 opacity-70" />
                </div>

                <div className="mt-auto flex justify-center gap-3 pt-3">
                  <a className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/20 text-teal">
                    <Linkedin size={16} />
                  </a>

                  <a className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/20 text-teal">
                    <Mail size={16} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/analyst-team"
            className="inline-flex px-5 py-2.5 border border-[#203A72] bg-white text-[#0A1F44] rounded"
          >
            Meet the Analyst Team
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
