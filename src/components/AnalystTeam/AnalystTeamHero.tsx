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

      {/* CONTENT */}
      <div
        className="
        w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 
        relative z-10 mx-auto flex justify-center text-center

        /* MOVED UP */
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
