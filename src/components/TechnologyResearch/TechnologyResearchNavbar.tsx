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
      "after:absolute after:bottom-[1px] after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[#63d3c5] after:transition-transform after:duration-300";

    return `relative pb-1 text-[16px] md:text-[18px] transition-colors ${activeLineClass} ${
      showLightNavbar
        ? isActive
          ? "text-[#0B1F3A] font-semibold after:scale-x-100"
          : "text-[#0B1F3A]/90 hover:text-[#0B1F3A] after:scale-x-0"
        : isActive
          ? "text-white font-semibold after:scale-x-100"
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
      <div className="page-shell flex items-center justify-between py-4 sm:py-5">
        <div className="flex items-center gap-0">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="technology-research-mobile-nav"
            className={`relative z-20 -mr-1 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden ${
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

        <nav className="hidden items-center gap-4 lg:ml-28 lg:flex lg:translate-y-[6px] xl:ml-32 xl:gap-6">
          <Link
            to="/technology-research"
            className={getNavLinkClassName(isTechnologyResearch)}
          >
            Technology Research
          </Link>

          <Link
            to="/micro-market-research"
            className={getNavLinkClassName(isMicroMarketResearch)}
          >
            Micro-Market Research
          </Link>

          <a href="#cta" className={getNavLinkClassName(isCtaVisible)}>
            Download Approach Note
          </a>
        </nav>

        <div className="flex items-center">
          <span
            className={`cursor-pointer text-[14px] transition-colors sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] ${
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
