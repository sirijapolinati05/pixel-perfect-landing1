import fallbackBg from "@/assets/ResearchTeam/ResearchTeam-Background.jpeg";

type AnalystTeamAvatarProps = {
  name: string;
  image?: string;
  fallbackText?: string;
  className?: string;
};

const AnalystTeamAvatar = ({
  name,
  image,
  fallbackText,
  className = "",
}: AnalystTeamAvatarProps) => {
  return (
    <div
      className={`relative mx-auto h-24 w-24 sm:h-[92px] sm:w-[92px] md:h-[94px] md:w-[94px] overflow-hidden rounded-full bg-[#e9eef5] ring-0 transition-all duration-300 group-hover:bg-white/15 group-hover:ring-4 group-hover:ring-white/25 ${className}`}
      style={{
        backgroundImage: `url(${fallbackBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      ) : fallbackText ? (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_35%_30%,rgba(18,28,66,0.18)_0%,rgba(10,17,43,0.68)_100%)] text-[1.75rem] sm:text-[1.9rem] md:text-[2rem] font-semibold text-white">
          {fallbackText}
        </div>
      ) : null}
    </div>
  );
};

export default AnalystTeamAvatar;
