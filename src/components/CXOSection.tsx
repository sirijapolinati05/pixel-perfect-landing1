import linkBadge from "@/assets/LandingPage/Link.png";
import cutThroughIcon from "@/assets/LandingPage/cut-through-noise.png";
import translateIcon from "@/assets/LandingPage/translate-into-action.png";

const CXOSection = () => {
  return (
    <section id="cxo" className="py-10 sm:py-12 md:py-14 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* SMALL LINES + LEFT TEXT */}
        <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <span className="w-4 sm:w-6 h-[1px] bg-white/40"></span>

          <p className="text-primary-foreground/60 font-sans text-xs sm:text-sm tracking-widest">
            CXO AI Research
          </p>

          <span className="w-4 sm:w-6 h-[1px] bg-white/40"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* LEFT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-snug md:leading-tight">
              AI Leadership is Now a C-Suite Imperative
            </h2>

            <p className="text-primary-foreground/70 font-sans text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 max-w-sm sm:max-w-md">
              The AI landscape is noisy, volatile, and impossible for busy leaders to track.
              CEOs and CXOs are expected to drive growth, innovation, and new revenue with AI
              yet few have the bandwidth or in-house capability to stay ahead. We bridge that gap.
            </p>

            <a
              href="#"
              className="inline-block w-full sm:w-auto text-center bg-teal text-navy font-sans font-semibold 
              px-5 sm:px-6 py-2.5 md:py-3 rounded text-sm md:text-base 
              hover:bg-teal-light transition-colors"
            >
              Download approach note
            </a>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">

            {/* CARD 1 */}
            <div className="h-full flex flex-col rounded-lg border border-white/85 bg-white p-4 sm:p-5 
            shadow-[0_20px_55px_rgba(3,12,32,0.16)]
            transition-all duration-300 ease-in-out 
            hover:scale-[0.95] hover:bg-[#E6F2FF] hover:z-10">
              
              <div className="flex flex-col flex-grow">
                <img
                  src={cutThroughIcon}
                  alt="cut through noise"
                  className="mb-3 sm:mb-4 h-6 w-6 sm:h-7 sm:w-7 object-contain"
                />

                <h3 className="mb-2 text-base sm:text-lg font-bold text-[#0A1F44]">
                  Cut Through Noise
                </h3>

                <p className="font-sans text-sm sm:text-base leading-6 text-[#5A6B85] flex-grow">
                  Quantitative assessment of industry landscapes, competitive frameworks
                  and macro-economic metrics.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="h-full flex flex-col rounded-lg border border-white/85 bg-white p-4 sm:p-5 
            shadow-[0_20px_55px_rgba(3,12,32,0.16)]
            transition-all duration-300 ease-in-out 
            hover:scale-[0.95] hover:bg-[#E6F2FF] hover:z-10">
              
              <div className="flex flex-col flex-grow">
                <img
                  src={translateIcon}
                  alt="translate into action"
                  className="mb-3 sm:mb-4 h-6 w-6 sm:h-7 sm:w-7 object-contain"
                />

                <h3 className="mb-2 text-base sm:text-lg font-bold text-[#0A1F44]">
                  Translate Into Action
                </h3>

                <p className="font-sans text-sm sm:text-base leading-6 text-[#5A6B85] flex-grow">
                  We turn complex AI trends into clear business implications your
                  leadership team can act on immediately.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CXOSection;