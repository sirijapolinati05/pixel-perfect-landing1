import heroImg from "@/assets/LandingPage/home-hero.png";

const HeroSection = () => {

  const ctaBaseClass =
    "flex justify-center items-center whitespace-nowrap rounded-full px-4 py-2.5 text-[15px] font-semibold text-[#081A34] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02]";

  const cta2xlClass =
    "2xl:px-8 2xl:py-5 2xl:text-[20px] 2xl:rounded-[999px] 2xl:hover:scale-105";

  const descriptionText = (
    <>
      RESEARCHFABRIC™ delivers practitioner-led Smart research on{" "}
      <strong>Perpetuating Technologies</strong> and maps the{" "}
      <strong>Micro-Markets</strong> where these technologies create commercial
      value. We identify high-growth segments, forecast competitive dynamics,
      and deliver decision-grade intelligence for enterprise strategy and investment.
    </>
  );

  return (
    <section id="hero" className="relative bg-[#081A34] text-white overflow-hidden">

      {/* 🔥 DESKTOP */}
      <div className="hidden lg:flex relative w-full">

        <div className="w-[45%] z-10 pl-20 xl:pl-28 2xl:pl-36 pt-44 xl:pt-48 2xl:pt-56">

          <h1 className="font-serif leading-[1.05] text-[clamp(2.5rem,5vw,4.5rem)] lg:text-[clamp(3rem,4.5vw,5.5rem)]">
            <span className="block">Thought-Shaping</span>
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

          <div className="mt-10 flex gap-4 2xl:gap-6">
            <div className={`${ctaBaseClass} ${cta2xlClass} bg-[#3CC8FF]`}>
              Explore Our Practices
            </div>
            <div className={`${ctaBaseClass} ${cta2xlClass} bg-[#43E0B1]`}>
              CXO AI Research
            </div>
          </div>

        </div>

        <div className="w-[55%] flex flex-col">
          <img src={heroImg} alt="Hero" className="w-full h-auto object-cover" />

          <div className="w-full py-6 bg-[#081A34]">
            <p className="w-full text-[clamp(1.125rem,1.5vw,1.75rem)] text-white/70 leading-relaxed break-words">
              {descriptionText}
            </p>
          </div>
        </div>

      </div>

      {/* 🔹 MOBILE */}
      <div className="page-shell relative z-10 pt-0 pb-6 lg:hidden">

        <div className="relative w-screen left-1/2 -translate-x-1/2 h-[420px] sm:h-[480px] md:h-[560px] overflow-hidden">

          <img
            src={heroImg}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-center px-6">
            <div className="mt-12 sm:mt-16 md:mt-20">

              <h1 className="font-serif leading-[1.1] text-[clamp(2rem,8vw,3rem)]">
                <span className="block">Thought-Shaping</span>
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

              <div className="mt-6 flex gap-3 flex-wrap">
                <div className={`${ctaBaseClass} ${cta2xlClass} bg-[#3CC8FF]`}>
                  Explore Our Practices
                </div>
                <div className={`${ctaBaseClass} ${cta2xlClass} bg-[#43E0B1]`}>
                  CXO AI Research
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 px-5">
          <p className="text-[clamp(1rem,3vw,1.375rem)] text-white/70 leading-relaxed">
            {descriptionText}
          </p>
        </div>

      </div>

      {/* 🔸 GRID (ONLY INNER LINES) */}
      <div className="-mt-2 lg:mt-[10px] px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36">

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
              ${index % 2 === 0 ? `border-r border-white/100` : ""}
              ${index < 2 ? `border-b border-white/100 lg:border-b-0` : ""}
              ${index < 3 ? `lg:border-r border-white/100` : ""}`}
            >
              <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] text-[#5AE0BB] font-serif font-bold">
                {item.title}
              </h3>
              <p className="text-[clamp(1.125rem,1.2vw,1.375rem)] text-white/80 mt-2 font-medium">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* ONLY THIS LINE REMAINS */}
        <div className="border-t border-white/100 text-center py-8 flex flex-col items-center">
          <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] text-[#5AE0BB] font-serif font-bold">
            Practices
          </h3>
          <p className="text-[clamp(1.125rem,1.2vw,1.375rem)] text-white/80 mt-2 font-medium">
            Research Engineering
          </p>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;