import heroImg from "@/assets/LandingPage/home-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#081A34]">
      <div className="absolute inset-0 h-full w-full bg-[#081A34]" />

      {/* IMAGE + RIGHT TEXT */}
      <div className="absolute top-0 right-0 w-full md:w-auto flex flex-col items-end">

        <img
          src={heroImg}
          alt="Abstract 3D"
          className="
            w-full h-[45vh] object-cover
            sm:h-[55vh]
            md:h-auto md:w-[600px] lg:w-[750px]
          "
        />

        <div className="w-full md:w-[600px] lg:w-[750px] max-w-full md:-translate-x-6 px-4 sm:px-6 mt-3 sm:mt-4">
          <p className="text-left text-[15px] sm:text-[17px] md:text-[20px] leading-relaxed text-white/70">
            RESEARCHFABRIC delivers practitioner-led Smart research on{" "}
            <strong className="text-white">Perpetuating Technologies</strong>{" "}
            and maps the <strong className="text-white">Micro-Markets</strong>{" "}
            where these technologies create commercial value.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex flex-col px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-10">
        
        <div className="max-w-xl sm:max-w-2xl mt-4 sm:mt-20">

          <h1 className="mb-5 sm:mb-6 font-serif text-[36px] sm:text-[48px] md:text-[58px] font-semibold leading-none text-white">
            <span className="block">Thought-Shaping</span>
            <span className="block">Intelligence on</span>

            <span className="block">
              <span className="text-white">Pe</span>
              <span className="bg-gradient-to-r from-white via-[#3CC8FF] to-[#3CC8FF] bg-clip-text text-transparent">
                r
              </span>
              <span className="text-[#3CC8FF]">petuating</span>
            </span>

            <span className="block">
              <span className="text-white">Te</span>
              <span className="bg-gradient-to-r from-white via-[#3CC8FF] to-[#3CC8FF] bg-clip-text text-transparent">
                ch
              </span>
              <span className="text-[#3CC8FF]">nologies</span>
            </span>

            <span className="block">
              <span className="text-white">and </span>
              <span className="text-[#3CC8FF]">Micro-Markets</span>
            </span>
          </h1>

          {/* ✅ BUTTONS MOVED DOWN (MOBILE ONLY) */}
          <div className="mt-52 flex w-full max-w-[360px] flex-row gap-3 sm:mt-28 sm:max-w-none sm:w-fit sm:gap-4 md:mt-12">
            <a
              href="#practices"
              className="flex flex-1 items-center justify-center rounded-full bg-[#3CC8FF] px-3 py-2.5 text-center text-[13px] font-semibold text-[#081A34] transition hover:scale-105 sm:flex-none sm:px-5 sm:text-sm md:text-base"
            >
              Explore Our Practices
            </a>

            <a
              href="#cxo"
              className="flex flex-1 items-center justify-center rounded-full bg-[#43E0B1] px-3 py-2.5 text-center text-[13px] font-semibold text-[#081A34] transition hover:scale-105 sm:flex-none sm:px-5 sm:text-sm md:text-base"
            >
              CXO AI Research
            </a>
          </div>

        </div>

        {/* GRID */}
        <div className="mt-4 sm:mt-28 md:mt-40 lg:mt-44 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center">
            {[
              { title: "Technology", sub: "Deep Tech Capabilities" },
              { title: "Markets", sub: "B2B, B2C & B2G" },
              { title: "Products", sub: "Focused Functionalities" },
              { title: "Business", sub: "Sub & Micro-Sectors" },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group cursor-pointer px-3 sm:px-4 py-5 sm:py-6 ${
                  index !== 3 ? "border-r border-white/20" : ""
                }`}
              >
                <h3 className="font-serif text-[24px] sm:text-[30px] md:text-[35px] font-semibold text-[#5AE0BB]">
                  {item.title}
                </h3>

                <p className="-mt-1 text-[16px] sm:text-[18px] md:text-[20px] text-white/60">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[-1px] border-t border-white/20 text-center pt-3 sm:pt-4">
            <h3 className="font-serif text-[24px] sm:text-[30px] md:text-[35px] font-semibold text-[#5AE0BB]">
              Practices
            </h3>

            <p className="-mt-1 text-[16px] sm:text-[18px] md:text-[20px] text-white/60">
              Research Engineering
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
