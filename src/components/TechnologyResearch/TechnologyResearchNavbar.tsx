import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/LandingPage/research-fabric-footer.png";

const TechnologyResearchNavbar = () => {
  const { pathname } = useLocation();
  const isTechnologyResearch = pathname === "/technology-research";
  const isMicroMarketResearch = pathname === "/micro-market-research";

  const navLinkClassName =
    "inline-flex items-center pb-1 text-[#0B1F3A] transition-colors hover:text-[#0B1F3A]";

  const activeNavLinkClassName =
    "border-b border-[#63d3c5] text-[#0B1F3A] font-semibold";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white text-[#0B1F3A] shadow-sm">
      
      <div className="
      mx-auto flex items-center justify-between
      max-w-[1440px] xl:max-w-[1400px] 2xl:max-w-[1600px]
      pl-0 pr-3 sm:px-4 md:px-6 lg:px-4 xl:px-8 2xl:px-12
      py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4">

        {/* LEFT */}
        <div className="flex items-center gap-0">

          {/* MENU BUTTON */}
          <button
            type="button"
            aria-label="Open navigation"
            className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center text-[#0B1F3A]"
          >
            <Menu size={20} className="sm:hidden" />
            <Menu size={22} className="hidden sm:block" />
          </button>

          {/* ✅ FINAL LEFT PUSH */}
          <Link
            to="/"
            className="
            -ml-4 sm:-ml-3 md:-ml-5 lg:-ml-7 xl:-ml-9
            block overflow-hidden
            h-[42px] w-[145px]
            sm:h-[53px] sm:w-[190px]
            md:h-[58px] md:w-[220px]
            lg:h-[63px] lg:w-[250px]
            xl:h-[68px] xl:w-[270px]
            2xl:h-[72px] 2xl:w-[290px]"
          >
            <img
              src={logo}
              alt="Research Fabric"
              className="h-full w-full max-w-full origin-left scale-[2.05] sm:scale-[2.1] md:scale-[2.15] object-contain object-left"
            />
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className="
        hidden lg:flex items-center
        gap-5 lg:gap-6 xl:gap-8 2xl:gap-10
        text-sm md:text-[15px] lg:text-[15px] xl:text-base 2xl:text-lg font-medium">

          <Link
            to="/technology-research"
            className={`${navLinkClassName} ${
              isTechnologyResearch ? activeNavLinkClassName : ""
            }`}
          >
            Technology Research
          </Link>

          <Link
            to="/micro-market-research"
            className={`${navLinkClassName} ${
              isMicroMarketResearch ? activeNavLinkClassName : ""
            }`}
          >
            Micro- Market Research
          </Link>

          <Link
            to="/"
            className="text-[#0B1F3A] transition-colors hover:text-[#0B1F3A]"
          >
            Home
          </Link>

          <a
            href="#cta"
            className="text-[#0B1F3A] transition-colors hover:text-[#0B1F3A]"
          >
            Download Approach Note
          </a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center">
          <span className="
          text-xs sm:text-sm md:text-sm lg:text-[13px] xl:text-sm 2xl:text-base
          text-[#0B1F3A] cursor-pointer hover:text-[#0B1F3A] transition-colors">
            Subscribe
          </span>
        </div>

      </div>
    </header>
  );
};

export default TechnologyResearchNavbar;