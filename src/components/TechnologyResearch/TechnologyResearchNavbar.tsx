import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import darkLogo from "@/assets/LandingPage/research-fabric.png";
import lightLogo from "@/assets/LandingPage/research-fabric-footer.png";
import { MenuIcon } from "@/components/ui/Icons";

const techLogoShellClass =
  "relative h-9 w-[112px] sm:h-10 sm:w-[118px] lg:h-10 lg:w-[122px]";
const techLogoImageClass =
  "absolute inset-0 h-full w-full scale-[1.35] origin-left object-contain transition-all duration-500";

const navItems = [
  { label: "Technology Research", href: "/technology-research" },
  { label: "Micro-Market Research", href: "/micro-market-research" },
  { label: "Download Approach Note", href: "#cta" },
];

const getMobileItemClassName = (isActive: boolean) =>
  `relative overflow-hidden rounded-xl border px-4 py-3 pl-5 text-left transition-all duration-200 ${
    isActive
      ? "border-[#63d3c5]/50 bg-[#63d3c5]/12 text-[#0B1F3A] shadow-[inset_3px_0_0_0_#63d3c5]"
      : "border-transparent text-[#0B1F3A] hover:border-slate-200 hover:bg-slate-100"
  }`;

const TechnologyResearchNavbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  const isTechnologyResearch = pathname === "/technology-research";
  const isMicroMarketResearch = pathname === "/micro-market-research";
  const mobileHeaderActive = mobileOpen || isScrolled;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctaSection = document.getElementById("cta");

    if (!ctaSection) {
      setIsCtaVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCtaVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
        rootMargin: "-30% 0px -50% 0px",
      }
    );

    observer.observe(ctaSection);

    return () => observer.disconnect();
  }, [pathname]);

  const showLightNavbar = isScrolled;
  const showLightLogo = mobileHeaderActive;

  const getNavLinkClassName = (isActive: boolean) => {
    const activeLineClass =
      "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:rounded-full after:bg-[#63d3c5] after:transition-transform after:duration-300";

    return `relative pb-2 text-[clamp(0.9375rem,1.1vw,1.125rem)] transition-all duration-300 ${activeLineClass} ${
      showLightNavbar
        ? isActive
          ? "text-[#0B1F3A] font-bold after:scale-x-100"
          : "text-[#0B1F3A]/90 hover:text-[#0B1F3A] after:scale-x-0 hover:after:scale-x-50"
        : isActive
          ? "text-white font-bold after:scale-x-100"
          : "text-white/80 hover:text-white after:scale-x-0 hover:after:scale-x-50"
    }`;
  };

  const darkLogoClass =
    `${techLogoImageClass} ${showLightLogo ? "opacity-0" : "opacity-100"}`;
  const lightLogoClass =
    `${techLogoImageClass} ${showLightLogo ? "opacity-100" : "opacity-0"}`;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
        mobileHeaderActive
          ? "border-b border-slate-200 bg-white shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 relative flex items-center py-4 sm:py-5">

        {/* 🔥 DESKTOP LAYOUT (45/55 SPLIT) */}
        <div className="hidden lg:flex w-full items-center">
          
          {/* 🔸 LEFT (45%) → Logo & First Item */}
          <div className="w-[45%] flex items-center justify-between pr-8 xl:pr-12 2xl:pr-16">
            <Link to="/" className={`relative z-10 -ml-2 flex items-center p-0 ${techLogoShellClass}`}>
              <img src={darkLogo} alt="Research Fabric" className={darkLogoClass} />
              <img src={lightLogo} alt="Research Fabric" className={lightLogoClass} />
            </Link>

            <Link
              to="/technology-research"
              className={getNavLinkClassName(isTechnologyResearch)}
            >
              Technology Research
            </Link>
          </div>

          {/* 🔸 RIGHT (55%) → Remaining Items & Subscribe */}
          <div className="w-[55%] flex items-center justify-between">
            <div className="flex gap-8 xl:gap-12 2xl:gap-16">
              <Link
                to="/micro-market-research"
                className={getNavLinkClassName(isMicroMarketResearch)}
              >
                Micro-Market Research
              </Link>

              <a href="#cta" className={getNavLinkClassName(isCtaVisible)}>
                Download Approach Note
              </a>
            </div>

            <div className="flex items-center">
              <span
                className={`cursor-pointer font-semibold text-[clamp(0.875rem,1vw,1.125rem)] transition-colors ${
                  mobileHeaderActive ? "text-[#0B1F3A]" : "text-white"
                }`}
              >
                Subscribe
              </span>
            </div>
          </div>
        </div>

        {/* 🔹 MOBILE LAYOUT */}
        <div className="lg:hidden flex w-full items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`relative z-20 -mr-1 flex h-11 w-11 shrink-0 items-center justify-center ${
                mobileHeaderActive ? "text-[#0B1F3A]" : "text-white"
              }`}
            >
              <MenuIcon size={25} />
            </button>

            <Link to="/" className={`relative z-10 -ml-2 flex items-center p-0 ${techLogoShellClass}`}>
              <img src={darkLogo} alt="Research Fabric" className={darkLogoClass} />
              <img src={lightLogo} alt="Research Fabric" className={lightLogoClass} />
            </Link>
          </div>

          <span
            className={`cursor-pointer font-semibold text-[14px] sm:text-[16px] transition-colors ${
              mobileHeaderActive ? "text-[#0B1F3A]" : "text-white"
            }`}
          >
            Subscribe
          </span>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="technology-research-mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-md lg:hidden"
        >
          <nav className="flex flex-col gap-2 text-[16px] font-semibold text-[#0B1F3A]">
            {navItems.map((item) => {
              const isActive =
                item.href === "/technology-research"
                  ? isTechnologyResearch
                  : item.href === "/micro-market-research"
                    ? isMicroMarketResearch
                    : pathname === item.href;

              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={getMobileItemClassName(isActive)}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={getMobileItemClassName(isActive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default TechnologyResearchNavbar;
