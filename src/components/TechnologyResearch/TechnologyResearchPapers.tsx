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
      className="relative overflow-hidden bg-[#f8f7f3] px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20 2xl:px-28 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 text-[#121742]"
    >
      <div className="relative mx-auto max-w-[1440px] xl:max-w-[1400px] 2xl:max-w-[1600px]">
        
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] xl:text-5xl 2xl:text-6xl leading-none text-[#31a8e4]">
          Thought Shaping Papers
        </h2>

        <div className="relative mt-5">
          
          {/* TYPOGRAPHIC IMAGE */}
          <img
            src={whiteTypographyImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-22%] sm:right-[-14%] md:right-[-10%] lg:right-[-8%] top-[-18%] sm:top-[-28%] md:top-[-40%] lg:top-[-50%] z-0 w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] opacity-20 scale-x-[-1] rotate-90"
          />

          {/* CARDS */}
          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-6">
            {papers.map((paper) => (
              <article
                key={paper.id}
                className="relative overflow-hidden bg-[#0c1044] p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 text-white 
                shadow-[0_16px_35px_rgba(12,16,68,0.15)]
                transition-all duration-300 ease-in-out
                hover:scale-[1.05] hover:shadow-xl"
              >
                <h3 className="relative max-w-[420px] text-xl sm:text-2xl md:text-[1.6rem] lg:text-[1.6rem] xl:text-3xl leading-[1.1]">
                  {paper.title}
                </h3>

                <p className="relative mt-3 max-w-[420px] text-sm sm:text-base md:text-[15px] lg:text-[15px] xl:text-lg leading-6 sm:leading-7 text-white/85">
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
                      <p className="text-sm sm:text-[15px] xl:text-base font-semibold leading-none">
                        Ashwin Gaidhani
                      </p>
                      <p className="mt-0.5 text-[10px] sm:text-[11px] xl:text-xs text-white/75">
                        Research Partner, ResearchFabric
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-[#d9eef8] px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-[#0d1440]">
                    <img src={linkedinBadge} alt="" className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain" />
                    Releasing soon on LinkedIn
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-5 flex justify-center sm:mt-6">
          <button
            type="button"
            className="w-full sm:w-auto rounded-lg border border-[#18204e] bg-white px-6 sm:px-8 md:px-10 lg:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg lg:text-[15px] font-semibold text-[#111741] shadow-[0_8px_18px_rgba(17,23,65,0.1)] transition-transform hover:-translate-y-0.5"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchPapers;
