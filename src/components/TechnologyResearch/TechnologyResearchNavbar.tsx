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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-3 py-2.5 lg:px-4 lg:py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open navigation"
            className="flex h-10 w-10 items-center justify-center text-[#1f2348]"
          >
            <Menu size={22} />
          </button>

          <Link to="/" className="-ml-5 block h-[52px] w-[248px] overflow-hidden lg:-ml-7 lg:h-[56px] lg:w-[260px]">
            <img
              src={logo}
              alt="Research Fabric"
              className="h-full w-full origin-left scale-[2.16] object-contain object-left"
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
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
          <Link to="/" className="text-[#13153b] transition-colors hover:text-[#2F80ED]">
            Home
          </Link>
          <a href="#cta" className="text-[#13153b] transition-colors hover:text-[#2F80ED]">
            Download Approach Note
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <span className="hidden text-[13px] text-[#13153b] md:inline">
            Sign In | Subscribe
          </span>
          <button type="button" aria-label="Search" className="text-[#13153b]">
            <Search size={19} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TechnologyResearchNavbar;
