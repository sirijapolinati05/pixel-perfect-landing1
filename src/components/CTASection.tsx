const CTASection = () => {
  return (
    <section className="py-12 md:py-14 bg-gradient-to-r from-navy-dark via-navy to-sky/80">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3 leading-tight">
          Ready to Shape the<br />Technology Narrative?
        </h2>

        <p className="text-primary-foreground/70 font-sans text-sm mb-6 max-w-lg mx-auto">
          Whether you're looking to commission a Thought Shaping Paper, partner as an analyst, or subscribe to our research — we'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="bg-teal text-navy font-sans font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-teal-light transition-colors"
          >
            Download approach note
          </a>

          <a
            href="#"
            className="border border-primary-foreground/40 text-primary-foreground font-sans font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTASection;