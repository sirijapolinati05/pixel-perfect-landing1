import authorImage from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import linkedinBadge from "@/assets/LandingPage/LinkedIn.png";
import whiteTypographyImg from "@/assets/LandingPage/White-Typography.png";

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
      <div className="page-shell relative mx-auto">

        {/* HEADING */}
        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px] leading-none text-[#31a8e4]">
          Thought Shaping Papers
        </h2>

        <div className="relative mt-4 sm:mt-5">
          
          {/* TYPOGRAPHIC IMAGE */}
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

          {/* CARDS */}
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
                w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[360px] xl:max-w-[380px] 2xl:max-w-[420px]
                bg-[#0c1044] 
                p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 2xl:p-7
                text-white 
                shadow-[0_16px_35px_rgba(12,16,68,0.15)]
                transition-all duration-300 ease-in-out
                hover:scale-[1.05] hover:shadow-xl"
              >
                <h3 className="
                  max-w-[420px] 
                  text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]
                  leading-[1.1]"
                >
                  {paper.title}
                </h3>

                <p className="
                  mt-3 max-w-[420px] 
                  text-[14px] sm:text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]
                  leading-6 sm:leading-7 text-white/85"
                >
                  {paper.description}
                </p>

                <div className="mt-4 border-t border-white/25 pt-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={authorImage}
                      alt="Ashwin Gaidhani"
                      className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 2xl:h-12 2xl:w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] 2xl:text-[18px] font-semibold leading-none">
                        Ashwin Gaidhani
                      </p>
                      <p className="mt-0.5 text-[12px] sm:text-[13px] md:text-[14px] 2xl:text-[16px] text-white/75">
                        Research Partner, ResearchFabric
                      </p>
                    </div>
                  </div>

                  <div className="
                    mt-2 inline-flex items-center gap-1.5 
                    rounded-md bg-[#d9eef8] 
                    px-2.5 py-1 sm:px-3 sm:py-1.5
                    text-[12px] sm:text-[13px] md:text-[14px] 2xl:text-[15px]
                    font-semibold text-[#0d1440]"
                  >
                    <img
                      src={linkedinBadge}
                      alt=""
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5 object-contain"
                    />
                    Releasing soon on LinkedIn
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-4 sm:mt-5 flex justify-center">
          <button
            type="button"
            className="
            inline-flex items-center justify-center
            rounded-lg border border-[#18204e] bg-white
            
            px-4 sm:px-6 md:px-8 lg:px-10
            py-2 sm:py-3
            
            text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]
            font-semibold text-[#111741]
            
            shadow-[0_8px_18px_rgba(17,23,65,0.1)]
            transition-all duration-300 hover:bg-[#0A1F44] hover:text-white hover:scale-95"
          >
            Load More
          </button>
        </div>

      </div>
    </section>
  );
};

export default TechnologyResearchPapers;