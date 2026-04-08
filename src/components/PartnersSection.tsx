import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import ashwinImg from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import tapatiImg from "@/assets/LandingPage/Tapati-Bandhopadhyay.png";
import markImg from "@/assets/LandingPage/Mark-Purdy.png";
import gaurangImg from "@/assets/LandingPage/Gaurang-Padgi.png";
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";

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
    role: "Global Capability Centers(GCC) &",
    subtitle: "BPO Services",
    image: gaurangImg,
  },
];

const PartnersSection = () => {
  return (
    <section id="analysts" className="bg-background py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-center">

        {/* TOP LABEL */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>

          <p className="text-muted-foreground font-sans text-xs sm:text-sm font-bold tracking-widest whitespace-nowrap">
            Research Partners
          </p>

          <span className="w-4 sm:w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        {/* HEADING */}
        <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground">
          Renowned Minds, Rigorous Perspectives
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mb-6 sm:mb-8 max-w-xl sm:max-w-2xl text-muted-foreground font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Our research is shaped by partners who have spent decades at the forefront of technology research and advisory.
        </p>

        {/* GRID */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.name} className="relative">

              {/* BACKGROUND TYPOGRAPHY IMAGE */}
              {partner.name === "Ashwin Gaidhani" && (
                <img
                  src={whiteTypographyImg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute 
                  -left-20 sm:-left-36 md:-left-44 lg:-left-44 xl:-left-48 
                  -top-28 sm:-top-52 md:-top-60 lg:-top-60 xl:-top-64 
                  z-0 w-[180px] sm:w-[300px] md:w-[360px] lg:w-[360px] xl:w-[400px] 
                  max-w-none opacity-90"
                />
              )}

              <div className="relative z-10 overflow-hidden rounded-xl bg-navy 
              p-4 sm:p-5 pt-6 sm:pt-7 text-center 
              transition-transform duration-300 hover:scale-[0.97]">
                
                {/* IMAGE */}
                <div className="relative z-10 mx-auto mb-3 sm:mb-4 
                h-20 w-20 sm:h-24 sm:w-24 
                overflow-hidden rounded-full border-4 border-teal/30">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* NAME */}
                <h4 className="relative z-10 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold font-sans text-primary-foreground">
                  {partner.name}
                </h4>

                {/* ROLE */}
                <div className="relative z-10 mt-2 mb-2">
                  <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-medium font-sans text-[#38BDF8]">
                    {partner.role}
                  </p>

                  <p className="mt-1 text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base font-sans text-[#38BDF8]">
                    {partner.subtitle}
                  </p>

                  <div className="mx-auto mt-3 h-[2px] w-20 sm:w-24 bg-gray-400 opacity-70" />
                </div>

                {/* ICONS */}
                <div className="relative z-10 mt-4 sm:mt-5 flex justify-center gap-3">
                  <a
                    href="#"
                    className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-teal/20 text-teal transition-colors hover:bg-teal/30"
                  >
                    <Linkedin size={14} />
                  </a>

                  <a
                    href="#"
                    className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-teal/20 text-teal transition-colors hover:bg-teal/30"
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            to="/analyst-team"
            className="inline-flex w-full sm:w-auto min-w-[160px] sm:min-w-[180px] 
            items-center justify-center rounded-[10px] border border-[#203A72] 
            bg-white px-5 sm:px-6 py-2.5 sm:py-3 
            text-xs sm:text-sm font-medium text-[#0A1F44] 
            shadow-[0_6px_16px_rgba(10,31,68,0.15)] 
            transition-all duration-300 
            hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(10,31,68,0.2)]"
          >
            Meet the Analyst Team
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
