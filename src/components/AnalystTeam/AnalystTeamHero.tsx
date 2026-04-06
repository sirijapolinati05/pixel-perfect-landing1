import heroImage from "@/assets/hero-3d.jpg";

const AnalystTeamHero = () => {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#030B1E] text-white">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,8,25,0.86)_0%,rgba(4,14,40,0.64)_50%,rgba(1,8,24,0.88)_100%)]" />

      {/* Right glow */}
      <div className="absolute inset-y-0 right-0 w-[26%] bg-[radial-gradient(circle_at_bottom_right,rgba(38,124,255,0.28),transparent_58%)]" />

      {/* Curves */}
      <div className="absolute bottom-0 right-0 h-[230px] w-[280px] rounded-tl-[140px] border-l border-t border-[#2A49A5]/60 opacity-80" />
      <div className="absolute bottom-0 right-0 h-[200px] w-[240px] rounded-tl-[120px] border-l border-t border-[#2A49A5]/60 opacity-70" />
      <div className="absolute bottom-0 right-0 h-[170px] w-[200px] rounded-tl-[96px] border-l border-t border-[#2A49A5]/60 opacity-60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1100px] items-center justify-center px-6 py-24 text-center md:py-32">
        <div className="max-w-4xl">
          
          {/* Heading - Single Line */}
          <h1 className="whitespace-nowrap text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-[56px]">
            The Minds Behind the Research
          </h1>

          {/* Description - Smaller */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-[1.5] text-white/85 md:text-xl">
            A carefully assembled team of practitioners, strategists, and
            researchers delivering thought-shaping intelligence across
            Perpetuating Technologies and Micro-Markets.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AnalystTeamHero;