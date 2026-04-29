import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import darkLogo from "@/assets/LandingPage/research-fabric.png";
import lightLogo from "@/assets/LandingPage/research-fabric-footer.png";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

const techLogoShellClass =
  "relative h-9 w-[112px] sm:h-10 sm:w-[118px] lg:h-10 lg:w-[122px]";
const techLogoImageClass =
  "absolute inset-0 h-full w-full scale-[1.35] origin-left object-contain transition-all duration-500";

/** ✅ COMMON TEXT SIZE */
const navTextSizeClass = "text-[clamp(1.125rem,1.1vw,1.375rem)] font-semibold";

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
  const mobileMenuIconColor = mobileHeaderActive ? "#0B1F3A" : "#FFFFFF";

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

  /** 🔥 FIXED NAV LINK CLASS */
  const getNavLinkClassName = (isActive: boolean) => {
    const activeLineClass =
      "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:rounded-full after:bg-[#63d3c5] after:transition-transform after:duration-300";

    return `relative py-2 flex items-center ${navTextSizeClass} transition-all duration-300 ${activeLineClass} ${
      showLightNavbar
        ? isActive
          ? "text-[#0B1F3A] font-bold after:scale-x-100"
          : "text-[#0B1F3A]/90 hover:text-[#0B1F3A] after:scale-x-0"
        : isActive
          ? "text-white font-bold after:scale-x-100"
          : "text-white/80 hover:text-white after:scale-x-0"
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
      <div className="relative flex w-full items-center px-3 py-4 sm:px-10 lg:px-20 xl:px-28 2xl:px-36">

        {/* DESKTOP */}
        <div className="hidden lg:flex w-full items-center">
          <div className="w-[45%] flex items-center justify-between pr-8 xl:pr-12 2xl:pr-16">
            <Link to="/" className={`relative z-10 -ml-2 flex items-center p-0 ${techLogoShellClass}`}>
              <img src={darkLogo} className={darkLogoClass} />
              <img src={lightLogo} className={lightLogoClass} />
            </Link>

              <Link
                to="/technology-research"
                className={getNavLinkClassName(isTechnologyResearch)}
                style={{ transform: "translateX(20px)" }}
              >
                Technology Research
              </Link>
          </div>

          <div className="w-[55%] flex items-center justify-between gap-6">
            <div className="flex gap-6 xl:gap-8 2xl:gap-10">
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

            {/* ✅ FIXED SUBSCRIBE */}
            <div className="flex items-center">
              <span
                className={`cursor-pointer ${navTextSizeClass} py-2 flex items-center ${
                  mobileHeaderActive ? "text-[#0B1F3A]" : "text-white"
                }`}
              >
                Subscribe
              </span>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex w-full items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-11 w-11 shrink-0 items-center justify-center -ml-2"
            >
              {mobileOpen ? (
                <CloseIcon size={25} color={mobileMenuIconColor} />
              ) : (
                <MenuIcon size={25} color={mobileMenuIconColor} />
              )}
            </button>

            <Link to="/" className={`relative -ml-1 flex items-center p-0 ${techLogoShellClass}`}>
              <img src={darkLogo} className={darkLogoClass} />
              <img src={lightLogo} className={lightLogoClass} />
            </Link>
          </div>

          {/* ✅ MOBILE SUBSCRIBE FIX */}
          <span
            className={`cursor-pointer ${navTextSizeClass} py-2 flex items-center ${
              mobileHeaderActive ? "text-[#0B1F3A]" : "text-white"
            }`}
          >
            Subscribe
          </span>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-md lg:hidden">
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
