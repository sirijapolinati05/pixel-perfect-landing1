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
    <section className="relative overflow-hidden bg-[#031126] py-10 sm:py-12 md:py-14">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={cxoBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <h3 className="mb-5 sm:mb-6 inline-block border-b border-white/40 pb-2 
        text-xl sm:text-2xl md:text-3xl font-serif text-white">
          What We Deliver
        </h3>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="relative rounded-xl bg-white p-4 sm:p-5 
              border border-[#E6ECF5] 
              shadow-[0_15px_40px_rgba(0,0,0,0.12)] 
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.20)] 
              hover:bg-[#D6E9FF] 
              hover:scale-105
              transition-all duration-300 ease-in-out"
            >
              
              {/* ICON */}
              <img
                src={item.icon}
                alt={item.title}
                className="mb-3 sm:mb-4 h-7 w-7 sm:h-8 sm:w-8 object-contain"
              />

              {/* Title - 32px */}
              <h4 className="mb-2 text-[32px] leading-tight font-bold text-[#0A1F44] font-serif">
                {item.title}
              </h4>

              {/* ✅ Description - 13px */}
              <p className="font-sans text-[13px] leading-5 text-[#5A6B85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;