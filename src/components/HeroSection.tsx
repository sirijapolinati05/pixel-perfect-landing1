import heroImg from "@/assets/LandingPage/home-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#081A34]">
      <div className="absolute inset-0 h-full w-full bg-[#081A34]" />

      {/* IMAGE + RIGHT TEXT */}
      <div className="absolute top-0 right-0 flex flex-col items-end w-full md:w-auto">
        <img
          src={heroImg}
          alt="Abstract 3D"
          className="h-auto w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px] max-w-full object-contain"
        />

        <div className="w-full md:w-[600px] lg:w-[750px] max-w-full md:-translate-x-6 px-4 sm:px-6">
          <p className="text-left text-xs sm:text-sm md:text-base leading-relaxed text-white/70">
            RESEARCHFABRIC delivers practitioner-led Smart research on{" "}
            <strong className="text-white">Perpetuating Technologies</strong>{" "}
            and maps the <strong className="text-white">Micro-Markets</strong>{" "}
            where these technologies create commercial value. We identify
            high-growth segments, forecast competitive dynamics, and deliver
            decision-grade intelligence for enterprise strategy and investment.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12">
        
        <div className="max-w-xl sm:max-w-2xl mt-16 sm:mt-20">
          <h1 className="mb-5 sm:mb-6 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] text-white">
            <span className="block">Thought-Shaping</span>
            <span className="block">Intelligence on</span>

            <span className="block">
              <span className="text-white">Pe</span>
              <span className="bg-gradient-to-r from-white via-[#2FE6D6] to-[#2FE6D6] bg-clip-text text-transparent">
                r
              </span>
              <span className="text-[#2FE6D6]">petuating</span>
            </span>

            <span className="block">
              <span className="text-white">Te</span>
              <span className="bg-gradient-to-r from-white via-[#2FE6D6] to-[#2FE6D6] bg-clip-text text-transparent">
                ch
              </span>
              <span className="text-[#2FE6D6]">nologies</span>
            </span>

            <span className="block">
              <span className="text-white">and </span>
              <span className="text-[#2FE6D6]">Micro-Markets</span>
            </span>
          </h1>

          {/* BUTTONS */}
          <div className="flex w-full sm:w-fit flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#practices"
              className="flex items-center justify-center rounded-full bg-[#3CC8FF] px-5 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-semibold text-[#081A34]
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(60,200,255,0.5)]"
            >
              Explore Our Practices
            </a>

            <a
              href="#cxo"
              className="flex items-center justify-center rounded-full bg-[#43E0B1] px-5 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-semibold text-[#081A34]
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(67,224,177,0.5)]"
            >
              CXO AI Research
            </a>
          </div>
        </div>

        {/* 🔥 FIXED: BOTTOM GRID (MOVED DOWN) */}
        <div className="mt-32 sm:mt-40 md:mt-52 lg:mt-56 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center">
            {[
              { title: "Technology", sub: "Deep Tech Capabilities" },
              { title: "Markets", sub: "B2B, B2C & B2G" },
              { title: "Products", sub: "Focused Functionalities" },
              { title: "Business", sub: "Sub & Micro-Sectors" },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group cursor-pointer px-3 sm:px-4 py-5 sm:py-6 transition-all duration-300 ${
                  index !== 3 ? "border-r border-white/20" : ""
                }`}
              >
                <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-[#2FE6D6]
                transition-transform duration-300 group-hover:scale-90">
                  {item.title}
                </h3>

                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/60
                transition-transform duration-300 group-hover:scale-90">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="group mt-[-1px] cursor-pointer border-t border-white/20 pt-3 sm:pt-4 text-center">
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-[#2FE6D6]
            transition-transform duration-300 group-hover:scale-90">
              Practices
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-white/60
            transition-transform duration-300 group-hover:scale-90">
              Research Engineering
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;