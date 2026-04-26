import ashwinImg from "@/assets/LandingPage/Ashwin-Gaidhani.png";
import tapatiImg from "@/assets/LandingPage/Tapati-Bandhopadhyay.png";
import markImg from "@/assets/LandingPage/Mark-Purdy.png";
import gaurangImg from "@/assets/LandingPage/Gaurang-Padgi.png";
import gmailLogo from "@/assets/ResearchTeam/Gmail-Logo.png";
import linkedInLogo from "@/assets/ResearchTeam/LinkedIn-Logo.png";
import circleBg from "@/assets/ResearchTeam/ResearchTeam-Background.jpeg";

const partnerCards = [
  {
    name: "Ashwin Gaidhani",
    subtitle: "Forbes Tech Council Member",
    image: ashwinImg,
  },
  {
    name: "Dr. Tapati Bandhopadhyay",
    subtitle: "Board-Level Strategy Advisor",
    image: tapatiImg,
  },
  {
    name: "Mark Purdy",
    subtitle: "Head of UK Practice",
    image: markImg,
  },
  {
    name: "Gaurang Pagdi",
    subtitle: "GCC & BPO Services",
    image: gaurangImg,
  },
];

const AnalystTeamTierOne = () => {
  return (
    <section className="bg-[#f8f7f3] py-16 xl:py-20 text-[#141948]">
      <div className="px-6">

        {/* HEADER */}
        <div className="max-w-[760px]">
          <p className="text-[18px] md:text-[20px] font-bold text-[#20254d] flex items-center gap-4">
            <span className="h-px w-10 bg-[#20254d]" />
            Core Leadership Team
            <span className="h-px w-10 bg-[#20254d]" />
          </p>

          {/* 🔥 FIXED HEADING */}
          <h2
            className="
            mt-4
            text-[28px]
            sm:text-[34px]
            md:text-[44px]
            lg:text-[50px]

            leading-tight

            /* 🔥 SINGLE LINE FROM TABLET */
            md:whitespace-nowrap
          "
          >
            Research Partners & Principal Analysts
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-14">
          <div
            className="
            mx-auto
            max-w-[1100px]
            md:max-w-[1300px]
            xl:max-w-[1500px]
            2xl:max-w-[2400px]

            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-10
            md:gap-14
            xl:gap-20
            2xl:gap-40
          "
          >
            {partnerCards.map((member) => (
              <article
                key={member.name}
                className="
                flex flex-col items-center text-center
                bg-white border rounded-xl shadow-md

                px-6 py-6

                min-h-[300px]
                md:min-h-[320px]
                xl:min-h-[360px]
                2xl:min-h-[750px]

                2xl:px-12 2xl:py-12
              "
              >
                {/* IMAGE */}
                <div
                  className="
                  rounded-full overflow-hidden mb-6

                  w-24 h-24
                  md:w-28 md:h-28
                  xl:w-32 xl:h-32
                  2xl:w-72 2xl:h-72
                "
                  style={{
                    backgroundImage: `url(${circleBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* NAME */}
                <h3
                  className="
                  text-[16px]
                  md:text-[18px]
                  xl:text-[19px]
                  2xl:!text-[13px]

                  font-medium
                  text-[#17204c]
                  leading-snug
                  break-words
                "
                >
                  {member.name}
                </h3>

                {/* SUBTITLE */}
                <p
                  className="
                  mt-4
                  text-[14px]
                  md:text-[15px]
                  xl:text-[15px]
                  2xl:text-[15px]

                  text-[#1E4E8C]
                  leading-snug
                "
                >
                  {member.subtitle}
                </p>

                {/* DIVIDER */}
                <div className="mt-auto w-full h-px bg-[#c8ccd5]" />

                {/* ICONS */}
                <div className="mt-8 flex gap-8">
                  <img
                    src={linkedInLogo}
                    className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-20 2xl:w-20"
                  />
                  <img
                    src={gmailLogo}
                    className="h-8 w-8 xl:h-9 xl:w-9 2xl:h-20 2xl:w-20"
                  />
                </div>

              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalystTeamTierOne;