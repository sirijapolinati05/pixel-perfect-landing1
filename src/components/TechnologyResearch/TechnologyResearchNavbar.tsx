import { Menu, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/LandingPage/research-fabric-footer.png";

const TechnologyResearchNavbar = () => {
  const { pathname } = useLocation();
  const isTechnologyResearch = pathname === "/technology-research";
  const isMicroMarketResearch = pathname === "/micro-market-research";

  const navLinkClassName =
    "inline-flex items-center pb-1 text-[#13153b] transition-colors hover:text-[#2F80ED]";

  const activeNavLinkClassName =
    "border-b border-[#63d3c5] text-[#13153b]";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white text-[#13153b] shadow-sm">
      
      <div className="
      mx-auto flex items-center justify-between
      max-w-[1440px] xl:max-w-[1400px] 2xl:max-w-[1600px]
      px-3 sm:px-4 md:px-6 lg:px-4 xl:px-8 2xl:px-12
      py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-4">

        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

          {/* MENU BUTTON */}
          <button
            type="button"
            aria-label="Open navigation"
            className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center text-[#1f2348]"
          >
            <Menu size={20} className="sm:hidden" />
            <Menu size={22} className="hidden sm:block" />
          </button>

          {/* LOGO */}
          <Link
            to="/"
            className="
            -ml-1 sm:-ml-2 md:-ml-4 lg:-ml-7
            block overflow-hidden
            h-[38px] w-[150px]
            sm:h-[48px] sm:w-[200px]
            md:h-[52px] md:w-[220px]
            lg:h-[56px] lg:w-[260px]
            xl:h-[60px] xl:w-[280px]
            2xl:h-[64px] 2xl:w-[300px]"
          >
            <img
              src={logo}
              alt="Research Fabric"
              className="h-full w-full max-w-full origin-left scale-[2.1] sm:scale-[2.15] md:scale-[2.16] object-contain object-left"
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
            className="text-[#13153b] transition-colors hover:text-[#2F80ED]"
          >
            Home
          </Link>

          <a
            href="#cta"
            className="text-[#13153b] transition-colors hover:text-[#2F80ED]"
          >
            Download Approach Note
          </a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">

          <span className="
          hidden md:inline
          text-xs sm:text-sm md:text-sm lg:text-[13px] xl:text-sm 2xl:text-base
          text-[#13153b]">
            Sign In | Subscribe
          </span>

          <button
            type="button"
            aria-label="Search"
            className="text-[#13153b]"
          >
            <Search size={18} className="sm:hidden" />
            <Search size={19} className="hidden sm:block" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default TechnologyResearchNavbar;
