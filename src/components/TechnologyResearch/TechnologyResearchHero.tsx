import heroImage from "@/assets/TechnologyResearch/Technology-Research-hero.jpeg";

const stats = [
  { value: "3", label: "Focus Verticals" },
  { value: "100+", label: "Years of Combined Experience" },
  { value: "20+", label: "Focus Micro Markets" },
];

const TechnologyResearchHero = () => {
  return (
    <section className="bg-[#080f43] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#070d3f]" />
        <div
          className="absolute inset-y-0 right-0 w-[58%] opacity-85"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(12,15,70,0.12), rgba(12,15,70,0.12)), url(${heroImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(52,90,255,0.18),transparent_36%),linear-gradient(90deg,rgba(8,15,67,0.97)_0%,rgba(8,15,67,0.89)_42%,rgba(8,15,67,0.34)_70%,rgba(8,15,67,0.1)_100%)]" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:px-14 lg:py-28">
          <div className="max-w-[640px]">
            <h1 className="max-w-[620px] text-5xl leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Thought Shaping Research for Quantum, Chipsets &amp; AI
            </h1>

            <p className="mt-6 max-w-[700px] text-lg leading-8 text-white/90">
              ResearchFabric partners with the world's foremost technology analysts to
              produce Thought Shaping Papers that define the strategic direction of Quantum
              Computing, AI Hardware, and Artificial Intelligence.
            </p>

            <div className="relative mt-8 max-w-[520px] overflow-hidden rounded-[24px] border border-white/20 bg-white/10 shadow-[0_25px_60px_rgba(2,6,34,0.34)] backdrop-blur-xl md:rounded-[26px]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_35%,rgba(102,231,208,0.08)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
              <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-white/12 blur-2xl" />

              <div className="relative flex flex-col md:flex-row">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex-1 px-7 py-5 ${index < stats.length - 1 ? "border-b border-white/15 md:border-b-0 md:border-r" : ""} border-white/15`}
                >
                  <p className="text-5xl font-semibold leading-none text-[#68e1d0]">{stat.value}</p>
                  <p className="mt-2 max-w-[120px] text-xl leading-7 text-white">{stat.label}</p>
                </div>
              ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#papers"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#33ace5] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#2498cf]"
              >
                Explore Thought Shaping
              </a>
              <a
                href="#domains"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#64d7bf] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#4cc8ae]"
              >
                Our Focus Areas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyResearchHero;
