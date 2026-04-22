import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/LandingPage/research-fabric-footer.png";
import { MenuIcon } from "@/components/ui/Icons";

const techLogoShellClass =
  "relative z-10 block -ml-1 h-9 w-[112px] overflow-hidden sm:ml-0 sm:h-10 sm:w-[118px] lg:-ml-1 lg:h-10 lg:w-[122px]";
const techLogoImageClass = "h-full w-full scale-[1.35] origin-left object-contain";

const TechnologyResearchNavbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isTechnologyResearch = pathname === "/technology-research";
  const isMicroMarketResearch = pathname === "/micro-market-research";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinkClassName =
    "inline-flex items-center pb-1 text-[#0B1F3A] transition-colors hover:text-[#0B1F3A]";

  const activeNavLinkClassName =
    "border-b border-[#63d3c5] text-[#0B1F3A] font-semibold";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white text-[#0B1F3A] shadow-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-1 [@media_(min-width:2560px)]:max-w-[2304px] sm:px-6 md:px-6 lg:px-8 xl:px-10 2xl:px-6">
        <div className="flex items-center gap-0">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="technology-research-mobile-nav"
            className="relative z-20 -mr-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-[#0B1F3A] lg:hidden sm:h-10 sm:w-10 md:h-11 md:w-11"
          >
            <MenuIcon size={22} />
          </button>

          <Link
            to="/"
            className={techLogoShellClass}
          >
            <img
              src={logo}
              alt="Research Fabric"
              className={techLogoImageClass}
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-5 text-[16px] font-medium md:text-[17px] lg:flex lg:gap-6 lg:text-[18px] xl:gap-8 xl:text-[18px] 2xl:gap-10 2xl:text-[20px]">
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

        <div className="flex items-center">
          <span className="cursor-pointer text-[14px] text-[#0B1F3A] transition-colors hover:text-[#0B1F3A] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px]">
            Subscribe
          </span>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="technology-research-mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-3 shadow-sm lg:hidden"
        >
          <nav className="flex flex-col gap-1 text-[16px] font-medium text-[#0B1F3A]">
            <Link
              to="/technology-research"
              onClick={() => setMobileOpen(false)}
              className={`rounded-md px-2 py-2 transition-colors hover:bg-slate-100 ${
                isTechnologyResearch ? "bg-slate-100 font-semibold" : ""
              }`}
            >
              Technology Research
            </Link>

            <Link
              to="/micro-market-research"
              onClick={() => setMobileOpen(false)}
              className={`rounded-md px-2 py-2 transition-colors hover:bg-slate-100 ${
                isMicroMarketResearch ? "bg-slate-100 font-semibold" : ""
              }`}
            >
              Micro- Market Research
            </Link>

            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-2 py-2 transition-colors hover:bg-slate-100"
            >
              Home
            </Link>

            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-2 py-2 transition-colors hover:bg-slate-100"
            >
              Download Approach Note
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TechnologyResearchNavbar;
