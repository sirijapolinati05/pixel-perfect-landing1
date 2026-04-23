import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import darkLogo from "@/assets/LandingPage/research-fabric.png";
import lightLogo from "@/assets/LandingPage/research-fabric-footer.png";
import { MenuIcon } from "@/components/ui/Icons";

const logoShellClass =
  "relative h-9 w-[112px] sm:h-10 sm:w-[118px] lg:h-10 lg:w-[122px]";
const logoImageClass =
  "absolute inset-0 h-full w-full scale-[1.35] origin-left object-contain transition-all duration-500";

const navItems = [
  { label: "Technology Research", href: "/technology-research" },
  { label: "Micro-Market Research", href: "/micro-market-research" },
  { label: "Download Approach Note", href: "#cta" },
];

const MicroMarketResearchNavbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  const mobileHeaderActive = mobileOpen || isScrolled;
  const showLightNavbar = isScrolled;
  const showLightLogo = mobileHeaderActive;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

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

  const getLinkClassName = (isActive: boolean) => {
    const activeLineClass =
      "after:absolute after:bottom-[1px] after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[#63d3c5] after:transition-transform after:duration-300";

    return `relative pb-1 text-[16px] md:text-[18px] transition-colors ${activeLineClass} ${
      showLightNavbar
        ? isActive
          ? "text-[#0B1F3A] font-semibold after:scale-x-100"
          : "text-[#0B1F3A] after:scale-x-0"
        : isActive
          ? "text-white font-semibold after:scale-x-100"
          : "text-white/80 hover:text-white after:scale-x-0"
    }`;
  };

  const darkLogoClass =
    `${logoImageClass} ${showLightLogo ? "opacity-0" : "opacity-100"}`;
  const lightLogoClass =
    `${logoImageClass} ${showLightLogo ? "opacity-100" : "opacity-0"}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        mobileHeaderActive ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="page-shell flex items-center justify-between py-4 sm:py-5">
        <div className="flex items-center gap-0">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="micro-market-mobile-nav"
            className={`relative z-20 -mr-0.5 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden ${
              mobileOpen || showLightNavbar ? "text-[#0B1F3A]" : "text-white"
            }`}
          >
            <MenuIcon size={25} />
          </button>

          <Link
            to="/"
            className={`relative z-10 -ml-1 flex items-center p-0 ${logoShellClass}`}
          >
            <img src={darkLogo} alt="Research Fabric" className={darkLogoClass} />
            <img src={lightLogo} alt="Research Fabric" className={lightLogoClass} />
          </Link>
        </div>

        <div className="hidden items-center gap-4 lg:ml-28 lg:flex lg:translate-y-[6px] xl:ml-32 xl:gap-6">
          <Link
            to="/technology-research"
            className={getLinkClassName(pathname === "/technology-research")}
          >
            Technology Research
          </Link>

          <Link
            to="/micro-market-research"
            className={getLinkClassName(pathname === "/micro-market-research")}
          >
            Micro-Market Research
          </Link>

          <a href="#cta" className={getLinkClassName(isCtaVisible)}>
            Download Approach Note
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span
            className={`text-[14px] sm:text-[16px] ${
              mobileHeaderActive
                ? "inline text-[#0B1F3A]"
                : "hidden sm:inline text-white"
            }`}
          >
            Subscribe
          </span>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="micro-market-mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-md lg:hidden"
        >
          <nav className="flex flex-col gap-2 text-[16px] font-semibold text-[#0B1F3A]">
            {navItems.map((item) => {
              const isActive =
                item.href === "/technology-research"
                  ? pathname === "/technology-research"
                  : item.href === "/micro-market-research"
                    ? pathname === "/micro-market-research"
                    : isCtaVisible;

              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-3 transition-all duration-200 hover:bg-slate-100 hover:pl-4"
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
                  className={`rounded-md px-3 py-3 transition-all duration-200 hover:bg-slate-100 hover:pl-4 ${
                    isActive ? "bg-slate-100 font-semibold" : ""
                  }`}
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

export default MicroMarketResearchNavbar;
