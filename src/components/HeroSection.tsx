import heroImg from "@/assets/LandingPage/home-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#081A34] overflow-hidden">
      
      {/* LEFT DARK PANEL */}
      <div className="absolute inset-0 w-full h-full bg-[#081A34]" />

      {/* IMAGE */}
      <div className="absolute top-0 right-0 w-[48%] h-[58%] overflow-hidden">
        <img
          src={heroImg}
          alt="Abstract 3D"
          className="w-full h-full object-cover object-[center_-20px]"
        />
      </div>

      {/* TEXT BELOW IMAGE */}
      <div className="absolute right-0 top-[60%] w-[48%] px-6">
        <p className="text-white/70 text-sm leading-relaxed text-left">
          RESEARCHFABRIC™ delivers practitioner-led Smart research on{" "}
          <strong className="text-white">Perpetuating Technologies</strong>{" "}
          and maps the{" "}
          <strong className="text-white">Micro-Markets</strong>{" "}
          where these technologies create commercial value. We identify high-growth segments,
          forecast competitive dynamics, and deliver decision-grade intelligence
          for enterprise strategy and investment.
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 pt-32 pb-20 flex flex-col justify-center min-h-screen">
        
        {/* HEADING */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-[1.2] text-white mb-6">
            
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
          <div className="flex flex-col gap-4 w-fit">
            <a
              href="#practices"
              className="bg-[#3CC8FF] text-[#081A34] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              Explore Our Practices
            </a>

            <a
              href="#cxo"
              className="bg-[#43E0B1] text-[#081A34] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              CXO AI Research
            </a>
          </div>
        </div>

        {/* GRID SECTION */}
        <div className="mt-40 pt-12">
          
          {/* TOP 4 ITEMS */}
          <div className="grid grid-cols-2 md:grid-cols-4 text-center">
            
            {[
              { title: "Technology", sub: "Deep Tech Capabilities" },
              { title: "Markets", sub: "B2B, B2C & B2G" },
              { title: "Products", sub: "Focused Functionalities" },
              { title: "Business", sub: "Sub & Micro-Sectors" },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`px-4 py-6 ${
                  index !== 3 ? "border-r border-white/20" : ""
                }`}
              >
                <h3 className="text-[#2FE6D6] font-serif text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm mt-2">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* 🔥 PRACTICES (FINAL PERFECT POSITION) */}
          <div className="text-center mt-3 pt-5 border-t border-white/20">
            <h3 className="text-[#2FE6D6] font-serif text-xl font-semibold">
              Practices
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Research Engineering
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
