import cxoBg from "@/assets/LandingPage/CXO-image.jpg";

import surfaceIcon from "@/assets/LandingPage/surface-value-pathways.png";
import strategyIcon from "@/assets/LandingPage/keep-strategy-dynamic.png";
import adviseIcon from "@/assets/LandingPage/advice-leadership.png";
import readinessIcon from "@/assets/LandingPage/build-readiness.png";

const deliverables = [
  {
    icon: surfaceIcon,
    title: "Surface Value Pathways",
    description:
      "We help find new products, services, efficiencies, and revenue streams powered by AI.",
  },
  {
    icon: strategyIcon,
    title: "Keep Strategy Dynamic",
    description:
      "We continuously refresh your AI roadmap and decisions as the landscape evolves.",
  },
  {
    icon: adviseIcon,
    title: "Advise Leadership",
    description:
      "We act as your on-call AI partner for strategic choices and direction at the board level.",
  },
  {
    icon: readinessIcon,
    title: "Build Readiness",
    description:
      "We prepare your organization for responsible, scalable AI adoption across all functions.",
  },
];

const DeliverSection = () => {
  return (
    <div> {/* ✅ FULL WRAPPER */}

      <section className="relative overflow-hidden bg-[#031126] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src={cxoBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="page-shell relative z-10">

          {/* ✅ HEADING + CARDS IN ONE DIV */}
          <div>

            {/* HEADING */}
            <h3
              className="
              mb-6 inline-block border-b border-white/40 pb-2
              text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[40px]
              font-serif text-white
            ">
              What We Deliver
            </h3>

            {/* ✅ GRID CARDS (RESPONSIVE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className="
                  relative rounded-xl bg-white
                  p-4 sm:p-5
                  border border-[#E6ECF5]
                  shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.20)]
                  hover:bg-[#D6E9FF]
                  hover:scale-[1.03]
                  transition-all duration-300
                "
                >

                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3 sm:mb-4 h-7 w-7 sm:h-8 sm:w-8"
                  />

                  <h4
                    className="
                    mb-2 font-bold text-[#0A1F44] font-serif
                    text-[20px] sm:text-[22px] md:text-[24px] lg:text-[22px] xl:text-[26px]
                  ">
                    {item.title}
                  </h4>

                  <p
                    className="
                    font-serif text-[#5A6B85]
                    text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px]
                    leading-relaxed
                  ">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default DeliverSection;