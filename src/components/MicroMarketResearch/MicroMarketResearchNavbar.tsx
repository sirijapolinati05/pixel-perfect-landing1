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

const getMobileItemClassName = (isActive: boolean) =>
  `relative overflow-hidden rounded-xl border px-4 py-3 pl-5 text-left transition-all duration-200 ${
    isActive
      ? "border-[#63d3c5]/50 bg-[#63d3c5]/12 text-[#0B1F3A] shadow-[inset_3px_0_0_0_#63d3c5]"
      : "border-transparent text-[#0B1F3A] hover:border-slate-200 hover:bg-slate-100"
  }`;

const MicroMarketResearchNavbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  const mobileHeaderActive = mobileOpen || isScrolled;
  const showLightNavbar = isScrolled;
  const showLightLogo = mobileHeaderActive;
  const mobileMenuIconColor = mobileHeaderActive ? "#0B1F3A" : "#FFFFFF";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // 🔥 SCROLL FIX
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // smoother trigger
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
      "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:rounded-full after:bg-[#63d3c5] after:transition-transform after:duration-300";

    return `relative pb-2 text-[clamp(1.125rem,1.1vw,1.375rem)] transition-all duration-300 ${activeLineClass} ${
      showLightNavbar
        ? isActive
          ? "text-[#0B1F3A] font-bold after:scale-x-100"
          : "text-[#0B1F3A] after:scale-x-0 hover:after:scale-x-50"
        : isActive
          ? "text-white font-bold after:scale-x-100"
          : "text-white/80 hover:text-white after:scale-x-0 hover:after:scale-x-50"
    }`;
  };

  const darkLogoClass =
    `${logoImageClass} ${showLightLogo ? "opacity-0" : "opacity-100"}`;
  const lightLogoClass =
    `${logoImageClass} ${showLightLogo ? "opacity-100" : "opacity-0"}`;

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 w-full

      transition-all duration-500 ease-in-out

      ${
        mobileHeaderActive
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }
    `}
    >
      <div className="relative flex w-full items-center px-3 py-4 sm:px-10 lg:px-20 xl:px-28 2xl:px-36">

        {/* 🔥 DESKTOP LAYOUT (45/55 SPLIT) */}
        <div className="hidden lg:flex w-full items-center">
          
          {/* 🔸 LEFT (45%) → Logo & First Item */}
          <div className="w-[45%] flex items-center justify-between pr-8 xl:pr-12 2xl:pr-16">
            <Link to="/" className={`relative z-10 -ml-2 flex items-center ${logoShellClass}`}>
              <img src={darkLogo} className={darkLogoClass} />
              <img src={lightLogo} className={lightLogoClass} />
            </Link>

            <Link
              to="/technology-research"
              className={getLinkClassName(pathname === "/technology-research")}
            >
              Technology Research
            </Link>
          </div>

          {/* 🔸 RIGHT (55%) → Remaining Items & Subscribe */}
          <div className="w-[55%] flex items-center justify-between">
            <div className="flex gap-8 xl:gap-12 2xl:gap-16">
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
              className="flex h-11 w-11 shrink-0 items-center justify-center -ml-2"
            >
              <MenuIcon size={25} color={mobileMenuIconColor} />
            </button>

            <Link to="/" className={`relative flex items-center -ml-3 ${logoShellClass}`}>
              <img src={darkLogo} className={darkLogoClass} />
              <img src={lightLogo} className={lightLogoClass} />
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

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-md lg:hidden">
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

export default MicroMarketResearchNavbar;
