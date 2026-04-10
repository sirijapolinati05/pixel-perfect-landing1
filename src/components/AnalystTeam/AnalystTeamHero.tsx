import heroImage from "@/assets/hero-3d.jpg";

const AnalystTeamHero = () => {
  return (
    <section className="relative overflow-hidden pb-10 text-white md:pb-12 lg:pb-12">
      <div className="absolute inset-x-0 top-0 h-[360px] overflow-hidden sm:h-[390px] md:h-[460px]">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,8,25,0.86)_0%,rgba(4,14,40,0.64)_50%,rgba(1,8,24,0.88)_100%)]" />

        {/* Right glow */}
        <div className="absolute inset-y-0 right-0 w-[34%] sm:w-[30%] md:w-[26%] bg-[radial-gradient(circle_at_bottom_right,rgba(38,124,255,0.28),transparent_58%)]" />
      </div>

      {/* Curves */}
      <div className="absolute bottom-0 right-0 h-[170px] w-[200px] sm:h-[190px] sm:w-[230px] md:h-[230px] md:w-[280px] rounded-tl-[96px] sm:rounded-tl-[116px] md:rounded-tl-[140px] border-l border-t border-[#2A49A5]/60 opacity-80" />
      <div className="absolute bottom-0 right-0 h-[145px] w-[170px] sm:h-[168px] sm:w-[200px] md:h-[200px] md:w-[240px] rounded-tl-[82px] sm:rounded-tl-[100px] md:rounded-tl-[120px] border-l border-t border-[#2A49A5]/60 opacity-70" />
      <div className="absolute bottom-0 right-0 h-[122px] w-[144px] sm:h-[145px] sm:w-[170px] md:h-[170px] md:w-[200px] rounded-tl-[70px] sm:rounded-tl-[82px] md:rounded-tl-[96px] border-l border-t border-[#2A49A5]/60 opacity-60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1100px] -translate-y-5 items-start justify-center px-4 pt-[98px] text-center sm:-translate-y-6 sm:px-6 sm:pt-[112px] md:-translate-y-8 md:px-8 md:pt-[146px] lg:px-6">
        <div className="max-w-4xl">
          
          {/* Heading - Single Line */}
          <h1 className="text-[32px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-semibold leading-[1.1] text-white md:whitespace-nowrap">
            The Minds Behind the Research
          </h1>

          {/* Description - Smaller */}
          <p className="mx-auto mt-4 sm:mt-5 md:mt-6 max-w-3xl text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[1.5] text-white/85">
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
