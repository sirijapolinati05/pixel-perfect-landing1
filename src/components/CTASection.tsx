const CTASection = () => {
  return (
    <section
      id="cta"
      className="-mt-6 scroll-mt-24 bg-gradient-to-r from-navy-dark via-navy to-sky/80 py-10 sm:-mt-8 sm:py-12 md:-mt-10 md:py-14"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold text-primary-foreground mb-3 leading-snug md:leading-tight">
          Ready to Shape the
          <br className="hidden sm:block" /> Technology Narrative?
        </h2>

        <p className="text-primary-foreground/70 font-serif text-[15px] sm:text-[17px] md:text-[18px] mb-5 sm:mb-6 max-w-md sm:max-w-lg mx-auto">
          Whether you're looking to commission a Thought Shaping Paper, partner as an analyst, or subscribe to our research — we'd love to hear from you.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-row flex-wrap gap-2 sm:gap-3 justify-center items-center">
          
          {/* PRIMARY BUTTON */}
          <a
            href="#"
            className="w-fit text-center bg-teal text-navy font-serif font-semibold 
            px-3 sm:px-6 py-2 md:py-3 rounded-full text-[14px] sm:text-[16px] md:text-[18px]
            transition-all duration-300 ease-in-out
            hover:scale-105 sm:hover:scale-110 hover:-translate-y-1
            hover:bg-teal-light
            hover:shadow-[0_10px_25px_rgba(45,212,191,0.5)]
            active:scale-95"
          >
            Download Approach Note
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href="#"
            className="w-fit text-center border border-primary-foreground/40 text-primary-foreground font-serif font-semibold 
            px-3 sm:px-6 py-2 md:py-3 rounded-full text-[14px] sm:text-[16px] md:text-[18px]
            transition-all duration-300 ease-in-out
            hover:scale-105 sm:hover:scale-110 hover:-translate-y-1
            hover:bg-primary-foreground/10
            hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]
            active:scale-95"
          >
            Get in Touch
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
