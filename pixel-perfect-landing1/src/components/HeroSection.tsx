import heroImg from "@/assets/LandingPage/home-hero.png";

const HeroSection = () => {
  const ctaBaseClass =
    "flex justify-center items-center whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-semibold text-[#081A34] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A34] sm:px-5 sm:py-3 sm:text-[16px] md:text-[14px] [@media_(max-width:340px)]:text-[12px] " +

    "[@media_(min-width:2560px)]:!px-24 " +
    "[@media_(min-width:2560px)]:!py-8 " +
    "[@media_(min-width:2560px)]:!text-[26px] " +
    "[@media_(min-width:2560px)]:!gap-5 " +
    "[@media_(min-width:2560px)]:scale-100";

  return (
    <section id="hero" className="relative bg-[#081A34] text-white">

      {/* ================= DESKTOP IMAGE + TEXT ================= */}
      <div className="hidden lg:flex absolute top-0 right-0 flex-col items-end z-10">
        <div
          className="
          lg:w-[815px] 
          [@media_(min-width:1400px)_and_(max-width:1500px)]:w-[775px]
          [@media_(min-width:1800px)_and_(max-width:2100px)]:!w-[690px]

          [@media_(min-width:2560px)]:w-[53vw]

          [@media_(min-width:1024px)_and_(max-width:1280px)]:w-[580px]
        "
        >
          <img
            src={heroImg}
            alt="Abstract 3D"
            className="w-full h-auto object-cover"
          />

          <div className="mt-3">
            <p className="text-[18px] leading-relaxed text-white/70">
              RESEARCHFABRIC™ delivers practitioner-led Smart research on Perpetuating Technologies and maps the Micro-Markets where these technologies create commercial value. We identify high-growth segments, forecast competitive dynamics, and deliver decision-grade intelligence for enterprise strategy and investment.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="relative z-20 mx-auto max-w-[1600px] px-4 pt-0 pb-10 sm:px-6 md:px-8 lg:min-h-screen lg:flex lg:flex-col lg:justify-between lg:px-8 lg:pt-32 xl:px-10 2xl:px-6 [@media_(min-width:2560px)]:max-w-[2304px] [@media_(min-width:1024px)_and_(max-width:1280px)]:max-w-[1280px] [@media_(min-width:1024px)_and_(max-width:1280px)]:px-3 [@media_(min-width:1024px)_and_(max-width:1280px)]:pt-24">

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col gap-6 lg:hidden">

          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -mt-2">
            <img
              src={heroImg}
              alt="Abstract"
              className="w-full h-[360px] sm:h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center px-6 pt-10">
              <h1 className="font-serif text-[32px] sm:text-[38px] font-semibold leading-tight">

                <span className="block text-white">Thought-Shaping</span>
                <span className="block text-white">Intelligence on</span>

                <span className="block">
                  <span className="text-white">P</span>
                  <span className="bg-gradient-to-r from-white to-[#00A9F4] bg-clip-text text-transparent">erpe</span>
                  <span className="text-[#00A9F4]">tuating</span>
                </span>

                <span className="block">
                  <span className="text-white">Te</span>
                  <span className="bg-gradient-to-r from-white to-[#00A9F4] bg-clip-text text-transparent">chn</span>
                  <span className="text-[#00A9F4]">ologies</span>
                </span>

                <span className="block">
                  <span className="text-white">and </span>
                  <span className="text-[#00A9F4]">Micro-Markets</span>
                </span>

              </h1>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex w-full max-w-[360px] gap-3">
            <div className={`${ctaBaseClass} flex-1 bg-[#3CC8FF] cursor-pointer`}>
              Explore Our Practices
            </div>

            <div className={`${ctaBaseClass} flex-1 bg-[#43E0B1] cursor-pointer`}>
              CXO AI Research
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-white/70">
            RESEARCHFABRIC™ delivers practitioner-led Smart research on Perpetuating Technologies and maps the Micro-Markets where these technologies create commercial value.
          </p>

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          <div className="mt-20 max-w-[42rem] [@media_(min-width:2560px)]:max-w-[1100px]">

            <h1 className="mb-5 font-serif font-semibold text-white text-[58px] leading-none [@media_(min-width:2560px)]:text-[5.75rem] [@media_(min-width:2560px)]:leading-[1.02]">

              <span className="block text-white [@media_(min-width:2560px)]:whitespace-nowrap">Thought-Shaping</span>
              <span className="block text-white [@media_(min-width:2560px)]:whitespace-nowrap">Intelligence on</span>

              <span className="block [@media_(min-width:2560px)]:whitespace-nowrap">
                <span className="text-white">P</span>
                <span className="bg-gradient-to-r from-white to-[#00A9F4] bg-clip-text text-transparent">erpe</span>
                <span className="text-[#00A9F4]">tuating</span>
              </span>

              <span className="block [@media_(min-width:2560px)]:whitespace-nowrap">
                <span className="text-white">Te</span>
                <span className="bg-gradient-to-r from-white to-[#00A9F4] bg-clip-text text-transparent">chn</span>
                <span className="text-[#00A9F4]">ologies</span>
              </span>

              <span className="block [@media_(min-width:2560px)]:whitespace-nowrap">
                <span className="text-white">and </span>
                <span className="text-[#00A9F4]">Micro-Markets</span>
              </span>

            </h1>

            {/* BUTTONS */}
            <div className="mt-12 flex gap-4 [@media_(min-width:2560px)]:gap-8">
              <div className={`${ctaBaseClass} bg-[#3CC8FF] cursor-pointer`}>
                Explore Our Practices
              </div>

              <div className={`${ctaBaseClass} bg-[#43E0B1] cursor-pointer`}>
                CXO AI Research
              </div>
            </div>

          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-4 pt-2 sm:mt-16 md:mt-8 lg:mt-64 xl:mt-72 [@media_(min-width:2560px)]:mt-[-360px] [@media_(min-width:1024px)_and_(max-width:1280px)]:lg:mt-40">
          <div className="grid grid-cols-2 text-center lg:grid-cols-4">
            {[
              { title: "Technology", sub: "Deep Tech Capabilities" },
              { title: "Markets", sub: "B2B, B2C & B2G" },
              { title: "Products", sub: "Focused Functionalities" },
              { title: "Business", sub: "Sub & Micro-Sectors" },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group cursor-pointer px-3 pt-4 pb-3 sm:px-4 sm:pt-6 lg:pt-8 sm:pb-4 ${
                  index % 2 === 0 ? "border-r border-white/20" : ""
                } ${index < 2 ? "border-b border-white/20 lg:border-b-0" : ""} ${
                  index < 3 ? "lg:border-r lg:border-white/20" : "lg:border-r-0"
                }`}
              >
                <h3 className="font-serif text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#5AE0BB]">
                  {item.title}
                </h3>

                <p className="-mt-1 text-[14px] sm:text-[16px] md:text-[18px] text-white/60">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[-1px] border-t border-white/20 text-center pt-6 sm:pt-8 lg:pt-6">
            <h3 className="font-serif text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#5AE0BB]">
              Practices
            </h3>

            <p className="-mt-1 text-[14px] sm:text-[16px] md:text-[18px] text-white/60">
              Research Engineering
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
