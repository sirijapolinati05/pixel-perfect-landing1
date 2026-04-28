import heroImage from "@/assets/hero-3d.jpg";

const AnalystTeamHero = () => {
  return (
    <section
      id="hero"
      className="
      relative overflow-hidden text-white

      -mt-[92px] pt-[92px]

      pb-8 sm:pb-10 md:pb-12 lg:pb-14
      "
    >
      {/* BACKGROUND */}
      <div
        className="
        absolute inset-x-0 top-0 overflow-hidden

        h-[400px]
        sm:h-[420px]
        md:h-[460px]
        lg:h-[520px]
        xl:h-[560px]
        2xl:h-[640px]
        "
      >
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,8,25,0.86)_0%,rgba(4,14,40,0.64)_50%,rgba(1,8,24,0.88)_100%)]" />

        {/* Right glow */}
        <div
          className="
          absolute inset-y-0 right-0

          w-[40%]
          sm:w-[34%]
          md:w-[30%]
          lg:w-[26%]
          xl:w-[24%]
          2xl:w-[20%]

          bg-[radial-gradient(circle_at_bottom_right,rgba(38,124,255,0.28),transparent_60%)]
        "
        />
      </div>

      {/* CURVES */}
      <div className="absolute bottom-0 right-0 h-[140px] w-[160px] sm:h-[180px] sm:w-[210px] md:h-[220px] md:w-[260px] lg:h-[260px] lg:w-[300px] xl:h-[300px] xl:w-[340px] 2xl:h-[360px] 2xl:w-[420px] rounded-tl-[80px] sm:rounded-tl-[110px] md:rounded-tl-[140px] xl:rounded-tl-[180px] border-l border-t border-[#2A49A5]/60 opacity-80" />

      <div className="absolute bottom-0 right-0 h-[120px] w-[140px] sm:h-[150px] sm:w-[180px] md:h-[190px] md:w-[220px] lg:h-[220px] lg:w-[260px] xl:h-[250px] xl:w-[300px] 2xl:h-[300px] 2xl:w-[360px] rounded-tl-[70px] sm:rounded-tl-[100px] md:rounded-tl-[120px] xl:rounded-tl-[150px] border-l border-t border-[#2A49A5]/60 opacity-70" />

      <div className="absolute bottom-0 right-0 h-[100px] w-[120px] sm:h-[130px] sm:w-[150px] md:h-[160px] md:w-[190px] lg:h-[190px] lg:w-[220px] xl:h-[210px] xl:w-[260px] 2xl:h-[260px] 2xl:w-[300px] rounded-tl-[60px] sm:rounded-tl-[80px] md:rounded-tl-[100px] xl:rounded-tl-[130px] border-l border-t border-[#2A49A5]/60 opacity-60" />

      {/* CONTENT */}
      <div
        className="
        w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 
        relative z-10 mx-auto flex justify-center text-center

        /* 🔥 MOVED UP */
        pt-[74px]
        sm:pt-[88px]
        md:pt-[108px]
        lg:pt-[128px]
        xl:pt-[148px]
        2xl:pt-[168px]

        -translate-y-6
        sm:-translate-y-5
        md:-translate-y-9
        lg:-translate-y-11
      "
      >
        <div className="max-w-[1000px] px-4">

          {/* HEADING */}
          <h1
            className="
            font-semibold leading-[1.1] tracking-[-0.03em]
            text-[clamp(1.875rem,5vw,3.75rem)]
            break-words
          "
          >
            The Minds Behind the Research
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
            mx-auto
            mt-4 sm:mt-5 md:mt-6
            max-w-[860px]
            text-[clamp(1.125rem,1.2vw,1.375rem)]
            leading-relaxed
            text-white/95
            font-medium
          "
          >
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
