import authorImage from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import linkedinBadge from "@/assets/LandingPage/LinkedIn.png";
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";
import circleBg from "@/assets/ResearchTeam/ResearchTeam-Background.jpeg";

const papers = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  title: "The Post-NISQ Inflection: How Fault-Tolerant Quantum Changes Everything",
  description:
    "An in-depth analysis of the technical, economic, and strategic milestones required to transition from noisy intermediate-scale quantum devices to systems capable of real-world computational advantage.",
}));

const TechnologyResearchPapers = () => {
  return (
    <section
      id="papers"
      className="relative overflow-hidden bg-[#f8f7f3] py-10 sm:py-12 md:py-14 lg:py-10 xl:py-12 2xl:py-14 text-[#121742]"
    >
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 relative mx-auto">

        <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] leading-none text-[#31a8e4] font-bold">
          Thought Shaping Papers
        </h2>

        <div className="relative mt-4 sm:mt-5">
          
          <img
            src={whiteTypographyImg}
            alt=""
            aria-hidden="true"
            className="
            pointer-events-none absolute 
            right-[-25%] sm:right-[-18%] md:right-[-12%] lg:right-[-10%] xl:right-[-8%]
            top-[-20%] sm:top-[-30%] md:top-[-40%] lg:top-[-45%]
            z-0 
            w-[180px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px] 2xl:w-[480px]
            opacity-20 scale-x-[-1] rotate-90"
          />

          <div className="
            relative z-10 grid grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6 2xl:gap-8
            justify-items-center"
          >
            {papers.map((paper) => (
              <article
                key={paper.id}
                className="
                relative overflow-hidden 
                w-full
                bg-[#0c1044] 
                p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 2xl:p-7
                text-white 
                shadow-[0_16px_35px_rgba(12,16,68,0.15)]
                transition-all duration-300 ease-in-out
                hover:scale-[1.05] hover:shadow-xl"
              >
                <h3 className="
                  text-[clamp(1.25rem,1.5vw,1.75rem)]
                  font-bold
                  leading-[1.1]"
                >
                  {paper.title}
                </h3>

                <p className="
                  mt-3
                  text-[clamp(1.125rem,1vw,1.125rem)]
                  leading-relaxed text-white/90 font-medium"
                >
                  {paper.description}
                </p>

                <div className="mt-4 border-t border-white/25 pt-4">
                  <div className="flex items-center gap-3">
                    
                    {/* ✅ NO BORDER / CLEAN BACKGROUND */}
                    <div
                      className="h-12 w-12 rounded-full overflow-hidden"
                      style={{
                        backgroundImage: `url(${circleBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <img
                        src={authorImage}
                        alt="Ashwin Gaidhani"
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>

                    <div>
                      <p className="text-[clamp(1.125rem,1vw,1.125rem)] font-bold leading-none">
                        Ashwin Gaidhani
                      </p>
                      <p className="mt-1 text-[clamp(1.125rem,0.9vw,1.125rem)] text-white/80 font-medium">
                        Research Partner, ResearchFabric
                      </p>
                    </div>
                  </div>

                  <div className="
                    mt-4 inline-flex items-center gap-2 
                    rounded-md bg-[#d9eef8] 
                    px-4 py-2
                    text-[clamp(1.125rem,0.9vw,1.125rem)]
                    font-bold text-[#0d1440]
                    whitespace-nowrap"
                  >
                    <img
                      src={linkedinBadge}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                    Releasing soon on LinkedIn
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            type="button"
            className="
            inline-flex items-center justify-center
            rounded-lg border border-[#18204e] bg-white
            px-8 py-3
            text-[clamp(1.125rem,1.1vw,1.25rem)]
            font-bold text-[#111741]
            shadow-[0_8px_18px_rgba(17,23,65,0.1)]
            transition-all duration-300 hover:bg-[#0A1F44] hover:text-white hover:scale-95
            whitespace-nowrap"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchPapers;