import linkBadge from "@/assets/LandingPage/Link.png";
import cutThroughIcon from "@/assets/LandingPage/cut-through-noise.png";
import translateIcon from "@/assets/LandingPage/translate-into-action.png";

const CXOSection = () => {
  return (
    <section id="cxo" className="py-12 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* SMALL LINES + LEFT TEXT */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-white/40"></span>

          <p className="text-primary-foreground/60 font-sans text-sm tracking-widest">
            CXO AI Research
          </p>

          <span className="w-6 h-[1px] bg-white/40"></span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
              AI Leadership is Now a C-Suite Imperative
            </h2>

            <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed mb-6 max-w-md">
              The AI landscape is noisy, volatile, and impossible for busy leaders to track.
              CEOs and CXOs are expected to drive growth, innovation, and new revenue with AI
              yet few have the bandwidth or in-house capability to stay ahead. We bridge that gap.
            </p>

            <a
              href="#"
              className="inline-block bg-teal text-navy font-sans font-semibold px-6 py-3 rounded text-sm hover:bg-teal-light transition-colors"
            >
              Download approach note
            </a>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-4">

            {/* CARD 1 */}
            <div className="rounded-lg border border-white/85 bg-white p-6 shadow-[0_20px_55px_rgba(3,12,32,0.16)]
              hover:scale-105 transition-transform duration-300 ease-in-out">
              
              <img
                src={cutThroughIcon}
                alt="cut through noise"
                className="mb-5 h-7 w-7 object-contain"
              />

              <h3 className="mb-2 text-lg font-bold text-[#0A1F44]">
                Cut Through Noise
              </h3>

              <p className="font-sans text-xs leading-6 text-[#5A6B85]">
                Quantitative assessment of industry landscapes, competitive frameworks
                and macro-economic metrics.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="rounded-lg border border-white/85 bg-white p-6 shadow-[0_20px_55px_rgba(3,12,32,0.16)]
              hover:scale-105 transition-transform duration-300 ease-in-out">
              
              <img
                src={translateIcon}
                alt="translate into action"
                className="mb-5 h-7 w-7 object-contain"
              />

              <h3 className="mb-2 text-lg font-bold text-[#0A1F44]">
                Translate Into Action
              </h3>

              <p className="font-sans text-xs leading-6 text-[#5A6B85]">
                We turn complex AI trends into clear business implications your
                leadership team can act on immediately.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CXOSection;