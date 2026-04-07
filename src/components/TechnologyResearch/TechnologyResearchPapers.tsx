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
      className="relative overflow-hidden bg-[#f8f7f3] px-6 py-12 text-[#121742] lg:px-14"
    >
      <div className="relative mx-auto max-w-[1440px]">
        
        {/* HEADING */}
        <h2 className="text-[2.4rem] leading-none text-[#31a8e4] md:text-[2.8rem]">
          Thought Shaping Papers
        </h2>

        <div className="relative mt-5">
          
          {/* TYPOGRAPHIC IMAGE */}
          <img
            src={whiteTypographyImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-8%] top-[-50%] z-0 w-[420px] opacity-20 scale-x-[-1] rotate-90"
          />

          {/* CARDS */}
          <div className="relative z-10 grid gap-4 lg:grid-cols-3">
            {papers.map((paper) => (
              <article
                key={paper.id}
                className="relative overflow-hidden bg-[#0c1044] p-5 text-white 
                shadow-[0_16px_35px_rgba(12,16,68,0.15)]
                transition-all duration-300 ease-in-out
                hover:scale-[1.05] hover:shadow-xl"
              >
                <h3 className="relative max-w-[420px] text-[1.6rem] leading-[1.1]">
                  {paper.title}
                </h3>

                <p className="relative mt-3 max-w-[420px] text-[15px] leading-6 text-white/85">
                  {paper.description}
                </p>

                <div className="relative mt-4 border-t border-white/25 pt-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={authorImage}
                      alt="Ashwin Gaidhani"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[15px] font-semibold leading-none">
                        Ashwin Gaidhani
                      </p>
                      <p className="mt-0.5 text-[11px] text-white/75">
                        Research Partner, ResearchFabric
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-[#d9eef8] px-2.5 py-1 text-[10px] font-semibold text-[#0d1440]">
                    <img src={linkedinBadge} alt="" className="h-3.5 w-3.5 object-contain" />
                    Releasing soon on LinkedIn
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            className="rounded-lg border border-[#18204e] bg-white px-8 py-2.5 text-[15px] font-semibold text-[#111741] shadow-[0_8px_18px_rgba(17,23,65,0.1)] transition-transform hover:-translate-y-0.5"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchPapers;