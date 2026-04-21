import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/LandingPage/research-fabric-footer.png";
import { MenuIcon } from "@/components/ui/Icons";

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
      <div
        className="
        mx-auto flex items-center justify-between
        max-w-[1600px]
        px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 2xl:px-6
        py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4"
      >
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
            className="
            relative z-10 block overflow-hidden -ml-1 sm:ml-0 lg:-ml-2
            h-14 w-[180px]
            sm:h-16 sm:w-[220px]
            lg:h-20 lg:w-[250px]
            xl:h-20 xl:w-[250px]
            2xl:h-20 2xl:w-[250px]"
          >
            <img
              src={logo}
              alt="Research Fabric"
              className="h-full w-full origin-left scale-[2.05] object-contain object-left -translate-x-2"
            />
          </Link>
        </div>

        <nav
          className="
          hidden lg:flex items-center
          gap-5 lg:gap-6 xl:gap-8 2xl:gap-10
          text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium"
        >
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
          <span
            className="
            text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px]
            text-[#0B1F3A] cursor-pointer hover:text-[#0B1F3A] transition-colors"
          >
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
