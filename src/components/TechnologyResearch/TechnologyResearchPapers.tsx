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
      className="relative overflow-hidden bg-[#f8f7f3] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-6 py-10 sm:py-12 md:py-14 lg:py-8 xl:py-10 2xl:py-12 text-[#121742]"
    >
      <div className="relative mx-auto max-w-[1600px] [@media_(min-width:2560px)]:max-w-[2304px]">
        
        {/* HEADING */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[50px] 2xl:text-[50px] leading-none text-[#31a8e4]">
          Thought Shaping Papers
        </h2>

        <div className="relative mt-4 lg:mt-5">
          
          {/* TYPOGRAPHIC IMAGE */}
          <img
            src={whiteTypographyImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-22%] sm:right-[-14%] md:right-[-10%] lg:right-[-8%] top-[-18%] sm:top-[-28%] md:top-[-40%] lg:top-[-50%] z-0 w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] opacity-20 scale-x-[-1] rotate-90"
          />

          {/* CARDS */}
          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-6 justify-items-center">
            {papers.map((paper) => (
              <article
                key={paper.id}
                className="relative overflow-hidden 
                w-full max-w-[380px]
                bg-[#0c1044] p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 text-white 
                shadow-[0_16px_35px_rgba(12,16,68,0.15)]
                transition-all duration-300 ease-in-out
                hover:scale-[1.05] hover:shadow-xl"
              >
                <h3 className="relative max-w-[420px] text-[22px] sm:text-[24px] md:text-[24px] lg:text-[24px] xl:text-[26px] leading-[1.1]">
                  {paper.title}
                </h3>

                <p className="relative mt-3 max-w-[420px] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[18px] leading-6 sm:leading-7 text-white/85">
                  {paper.description}
                </p>

                <div className="relative mt-4 border-t border-white/25 pt-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={authorImage}
                      alt="Ashwin Gaidhani"
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[16px] sm:text-[16px] xl:text-[18px] font-semibold leading-none">
                        Ashwin Gaidhani
                      </p>
                      <p className="mt-0.5 text-[14px] sm:text-[14px] xl:text-[16px] text-white/75">
                        Research Partner, ResearchFabric
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-[#d9eef8] px-2.5 py-1 text-[14px] sm:text-[14px] font-semibold text-[#0d1440]">
                    <img src={linkedinBadge} alt="" className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain" />
                    Releasing soon on LinkedIn
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-4 flex justify-center sm:mt-5">
          <button
            type="button"
            className="
            inline-flex items-center justify-center
            rounded-lg border border-[#18204e] bg-white
            
            px-4 sm:px-8 md:px-10
            py-2 sm:py-3
            
            text-[14px] sm:text-[17px] md:text-[18px]
            font-semibold text-[#111741]
            
            shadow-[0_8px_18px_rgba(17,23,65,0.1)]
            transition-transform hover:-translate-y-0.5"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchPapers;