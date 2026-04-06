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
    <section id="analysts" className="bg-background py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-6 h-[1px] bg-current opacity-40"></span>

          <p className="text-muted-foreground font-sans text-sm tracking-widest whitespace-nowrap">
            Research Partners
          </p>

          <span className="w-6 h-[1px] bg-current opacity-40"></span>
        </div>

        <h2 className="mb-3 text-3xl md:text-4xl font-bold text-foreground">
          Renowned Minds, Rigorous Perspectives
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground font-sans text-sm">
          Our research is shaped by partners who have spent decades at the forefront of technology research and advisory.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.name} className="relative">

              {/* SMALLER + LEFT SHIFTED IMAGE */}
              {partner.name === "Ashwin Gaidhani" && (
                <img
                  src={whiteTypographyImg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-44 -top-60 z-0 w-[360px] max-w-none opacity-90"
                />
              )}

              <div className="relative z-10 overflow-hidden rounded-xl bg-navy p-5 pt-7 text-center transition-transform duration-300 hover:scale-[0.97]">
                
                <div className="relative z-10 mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-teal/30">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h4 className="relative z-10 text-lg font-bold font-sans text-primary-foreground">
                  {partner.name}
                </h4>

                <div className="relative z-10 mt-2 mb-2">
                  <p className="text-sm font-medium font-sans text-[#38BDF8]">
                    {partner.role}
                  </p>

                  <p className="mt-1 text-xs font-sans text-[#38BDF8]">
                    {partner.subtitle}
                  </p>

                  <div className="mx-auto mt-3 h-[2px] w-24 bg-gray-400 opacity-70" />
                </div>

                <div className="relative z-10 mt-5 flex justify-center gap-3">
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/20 text-teal transition-colors hover:bg-teal/30"
                  >
                    <Linkedin size={14} />
                  </a>

                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/20 text-teal transition-colors hover:bg-teal/30"
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/analyst-team"
            className="inline-flex min-w-[180px] items-center justify-center rounded-[10px] border border-[#203A72] bg-white px-6 py-3 text-sm font-medium text-[#0A1F44] shadow-[0_6px_16px_rgba(10,31,68,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(10,31,68,0.2)]"
          >
            Meet the Analyst Team
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;