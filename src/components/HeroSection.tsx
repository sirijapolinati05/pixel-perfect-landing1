import heroImg from "@/assets/LandingPage/home-hero.png";

const HeroSection = () => {
  const ctaBaseClass =
    "flex justify-center items-center whitespace-nowrap rounded-full px-4 py-2.5 text-[15px] font-semibold text-[#081A34] transition-transform duration-200 hover:-translate-y-0.5";

  const statDividerClass = "border-white border-opacity-100";

  return (
    <section id="hero" className="relative bg-[#081A34] text-white overflow-hidden">

      {/* 🔹 HERO IMAGE + TEXT */}
      <div className="hidden lg:flex absolute top-0 right-0 w-[55%] flex-col z-0">

        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-auto object-cover"
        />

        <div className="w-full py-6 bg-[#081A34]">
          <p className="w-full text-[16px] lg:text-[18px] text-white/70 leading-relaxed break-words">
            RESEARCHFABRIC™ delivers practitioner-led Smart research on Perpetuating Technologies and maps the Micro-Markets where these technologies create commercial value. We identify high-growth segments, forecast competitive dynamics, and deliver decision-grade intelligence for enterprise strategy and investment.
          </p>
        </div>

      </div>

      {/* 🔹 CONTENT */}
      <div className="page-shell relative z-10 pt-0 pb-20 lg:pt-32">

        {/* 🔸 LEFT TEXT */}
        <div className="max-w-[42rem] 2xl:max-w-[56rem] 2xl:mt-24">

          <h1 className="font-serif leading-none text-[40px] sm:text-[48px] md:text-[56px] lg:text-[58px] 2xl:text-[64px]">

            <span className="block 2xl:whitespace-nowrap">
              Thought-Shaping
            </span>

            <span className="block">Intelligence on</span>

            <span className="block">
              <span className="text-white">P</span>
              <span className="bg-gradient-to-r from-white to-[#00A9F4] bg-clip-text text-transparent">
                erpe
              </span>
              <span className="text-[#00A9F4]">tuating</span>
            </span>

            <span className="block text-[#00A9F4]">Technologies</span>

            <span className="block">
              <span className="text-white">Micro-</span>
              <span className="bg-gradient-to-r from-white to-[#00A9F4] bg-clip-text text-transparent">
                Markets
              </span>
            </span>

          </h1>

          <div className="mt-10 flex gap-4">
            <div className={`${ctaBaseClass} bg-[#3CC8FF]`}>
              Explore Our Practices
            </div>
            <div className={`${ctaBaseClass} bg-[#43E0B1]`}>
              CXO AI Research
            </div>
          </div>

        </div>

        {/* 🔸 MOBILE + TABLET */}
        <div className="lg:hidden mt-10 flex flex-col gap-6">

          <img
            src={heroImg}
            className="w-full h-[360px] sm:h-[420px] md:h-[520px] object-cover"
          />

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/70 leading-relaxed break-words">
            RESEARCHFABRIC™ delivers practitioner-led Smart research on Perpetuating Technologies and maps the Micro-Markets where these technologies create commercial value. We identify high-growth segments, forecast competitive dynamics, and deliver decision-grade intelligence for enterprise strategy and investment.
          </p>

        </div>

        {/* 🔸 GRID + PRACTICES (MORE DOWN) */}
        <div className="mt-20 lg:mt-[420px] 2xl:mt-[650px]">

          <div className="w-full">

            <div className="grid grid-cols-2 text-center lg:grid-cols-4 auto-rows-fr">

              {[
                { title: "Technology", sub: "Deep Tech Capabilities" },
                { title: "Markets", sub: "B2B, B2C & B2G" },
                { title: "Products", sub: "Focused Functionalities" },
                { title: "Business", sub: "Sub & Micro-Sectors" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col justify-center items-center px-3 pt-8 pb-6
                  ${index % 2 === 0 ? `border-r ${statDividerClass}` : ""}
                  ${index < 2 ? `border-b ${statDividerClass} lg:border-b-0` : ""}
                  ${index < 3 ? `lg:border-r ${statDividerClass}` : ""}
                  `}
                >
                  <h3 className="text-[22px] sm:text-[26px] lg:text-[32px] text-[#5AE0BB] font-serif">
                    {item.title}
                  </h3>

                  <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-white/60 mt-2">
                    {item.sub}
                  </p>
                </div>
              ))}

            </div>

            <div className={`border-t ${statDividerClass} text-center py-8 flex flex-col items-center`}>

              <h3 className="text-[22px] sm:text-[26px] lg:text-[32px] text-[#5AE0BB] font-serif">
                Practices
              </h3>

              <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-white/60 mt-2">
                Research Engineering
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;