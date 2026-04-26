import heroImg from "@/assets/LandingPage/home-hero.png";

const HeroSection = () => {
  const ctaBaseClass =
    "flex justify-center items-center whitespace-nowrap rounded-full px-4 py-2.5 text-[15px] font-semibold text-[#081A34] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A34] sm:px-6 sm:py-3 sm:text-[17px] md:px-7 md:py-3.5 md:text-[17px]";

  return (
    <section id="hero" className="relative bg-[#081A34] text-white">

      {/* ================= DESKTOP IMAGE ================= */}
      <div className="hidden lg:flex absolute top-0 right-0 flex-col items-end z-10 w-[55%] overflow-visible">
        <div className="w-full">
          <img src={heroImg} alt="Abstract 3D" className="w-full h-auto object-cover" />

          <div className="mt-3 pb-6">
            <p className="text-[18px] leading-relaxed text-white/70 whitespace-normal break-words">
              RESEARCHFABRIC™ delivers practitioner-led Smart research on Perpetuating Technologies and maps the Micro-Markets where these technologies create commercial value. We identify high-growth segments, forecast competitive dynamics, and deliver decision-grade intelligence for enterprise strategy and investment.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="page-shell relative z-20 pt-0 pb-20 lg:flex lg:flex-col lg:justify-between lg:pt-32">

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col gap-6 lg:hidden w-full">
          <div className="relative w-screen -ml-[50vw] left-1/2 -mt-2">
            <img src={heroImg} className="w-full h-[360px] object-cover" />
          </div>
        </div>

        {/* ================= DESKTOP TEXT ================= */}
        {/* ✅ EXTREME DOWN SHIFT */}
        <div className="hidden lg:block mt-20 2xl:mt-[500px] max-w-[42rem]">

          <h1 className="text-[58px] font-serif leading-none">

            <span className="block 2xl:whitespace-nowrap">
              Thought-Shaping
            </span>

            <span className="block 2xl:whitespace-nowrap">
              Intelligence on
            </span>

            <span className="block whitespace-nowrap">
              <span className="text-white">P</span>
              <span className="bg-gradient-to-r from-white to-[#00A9F4] bg-clip-text text-transparent">
                erpe
              </span>
              <span className="text-[#00A9F4]">tuating</span>
            </span>

            <span className="block text-[#00A9F4]">
              Technologies
            </span>

            <span className="block 2xl:whitespace-nowrap">
              <span className="text-white">Micro-</span>
              <span className="bg-gradient-to-r from-white to-[#00A9F4] bg-clip-text text-transparent">
                Markets
              </span>
            </span>

          </h1>

          <div className="mt-12 flex gap-4">
            <div className={`${ctaBaseClass} bg-[#3CC8FF]`}>
              Explore Our Practices
            </div>
            <div className={`${ctaBaseClass} bg-[#43E0B1]`}>
              CXO AI Research
            </div>
          </div>

        </div>

        {/* ================= GRID ================= */}
        <div className="mt-4 pt-2 sm:mt-12 md:mt-8 lg:mt-40 xl:mt-48">

          <div className="grid grid-cols-2 text-center lg:grid-cols-4 auto-rows-fr">
            {[
              { title: "Technology", sub: "Deep Tech Capabilities" },
              { title: "Markets", sub: "B2B, B2C & B2G" },
              { title: "Products", sub: "Focused Functionalities" },
              { title: "Business", sub: "Sub & Micro-Sectors" },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col justify-center items-center px-3 pt-8 pb-3
                ${index % 2 === 0 ? "border-r border-white" : ""}
                ${index < 2 ? "border-b border-white lg:border-b-0" : ""}
                ${index < 3 ? "lg:border-r lg:border-white" : ""}
                `}
              >
                <h3 className="text-[32px] text-[#5AE0BB] font-serif">
                  {item.title}
                </h3>

                <p className="text-[16px] text-white/60 whitespace-nowrap">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-white text-center pt-8 flex flex-col justify-center items-center">
            <h3 className="text-[32px] text-[#5AE0BB] font-serif">
              Practices
            </h3>

            <p className="text-[16px] text-white/60 whitespace-nowrap">
              Research Engineering
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;