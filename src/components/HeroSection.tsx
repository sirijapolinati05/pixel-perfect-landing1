import heroImg from "@/assets/LandingPage/home-hero.png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#081A34] text-white">

      {/* ================= DESKTOP IMAGE (UNCHANGED) ================= */}
      <div className="hidden lg:flex absolute top-0 right-0 flex-col items-end z-10">

        <img
          src={heroImg}
          alt="Abstract 3D"
          className="lg:w-[750px] lg:h-auto object-cover"
        />

        <div className="mt-3 w-[750px] -translate-x-6 px-4">
          <p className="text-[18px] leading-relaxed text-white/70">
            RESEARCHFABRIC delivers practitioner-led Smart research on{" "}
            <strong className="text-white">Perpetuating Technologies</strong>{" "}
            and maps the <strong className="text-white">Micro-Markets</strong>{" "}
            where these technologies create commercial value.
          </p>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pt-0 pb-10 sm:px-6 md:px-8 lg:min-h-screen lg:flex lg:flex-col lg:justify-between lg:pt-32">

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col gap-6 lg:hidden">

          <div className="relative w-screen -ml-4 -mt-2">

            <img
              src={heroImg}
              alt="Abstract"
              className="w-full h-[360px] sm:h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center px-6 pt-10">
              <h1 className="font-serif text-[32px] sm:text-[38px] font-semibold leading-tight">
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
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex w-full max-w-[360px] gap-3">
            <a className="flex flex-1 justify-center rounded-full bg-[#3CC8FF] px-4 py-3 text-[16px] font-semibold text-[#081A34]">
              Explore Our Practices
            </a>

            <a className="flex flex-1 justify-center rounded-full bg-[#43E0B1] px-4 py-3 text-[16px] font-semibold text-[#081A34]">
              CXO AI Research
            </a>
          </div>

          <p className="text-[16px] leading-relaxed text-white/70">
            RESEARCHFABRIC delivers practitioner-led Smart research on{" "}
            <strong className="text-white">Perpetuating Technologies</strong>{" "}
            and maps the <strong className="text-white">Micro-Markets</strong>{" "}
            where these technologies create commercial value.
          </p>

        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          <div className="mt-20 max-w-[42rem]">

            <h1 className="mb-5 font-serif text-[50px] font-semibold leading-none text-white">
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

            <div className="mt-12 flex gap-4">
              <a className="rounded-full bg-[#3CC8FF] px-5 py-3 text-[16px] font-semibold text-[#081A34]">
                Explore Our Practices
              </a>

              <a className="rounded-full bg-[#43E0B1] px-5 py-3 text-[16px] font-semibold text-[#081A34]">
                CXO AI Research
              </a>
            </div>

          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-8 pt-4 sm:mt-28 md:mt-20 lg:mt-44">
          <div className="grid grid-cols-2 text-center lg:grid-cols-4">
            {[
              { title: "Technology", sub: "Deep Tech Capabilities" },
              { title: "Markets", sub: "B2B, B2C & B2G" },
              { title: "Products", sub: "Focused Functionalities" },
              { title: "Business", sub: "Sub & Micro-Sectors" },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`group cursor-pointer px-3 py-5 sm:px-4 sm:py-6 ${
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

          <div className="mt-[-1px] border-t border-white/20 text-center pt-3 sm:pt-4">
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
