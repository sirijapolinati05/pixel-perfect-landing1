import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/LandingPage/research-fabric.png";
import lightLogo from "../assets/LandingPage/research-fabric-footer.png";
import { MenuIcon } from "@/components/ui/Icons";

const navItems = [
  { label: "Our Practices", href: "#practices" },
  { label: "CXO AI Research", href: "#cxo" },
  { label: "Analysts", href: "#analysts" },
  { label: "Process", href: "#process" },
  { label: "Latest Research", href: "#latest-research" },
];

const pageItems = [
  { label: "Technology Research", href: "/technology-research" },
  { label: "Micro-Market Research", href: "/micro-market-research" },
  { label: "Analyst Team", href: "/analyst-team" },
];

const brandLogoShellClass =
  "relative h-9 w-[112px] sm:h-10 sm:w-[118px] lg:h-10 lg:w-[122px]";
const brandLogoImageClass =
  "absolute inset-0 h-full w-full scale-[1.35] origin-left object-contain transition-all duration-500";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].href);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/";
  const showLightNavbar = isScrolled || !isHomePage;
  const mobileHeaderActive = mobileOpen || showLightNavbar;
  const showLightLogo = mobileHeaderActive;

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    setActiveSection(navItems[0].href);

    if (isHomePage) {
      const heroSection = document.querySelector("#hero");
      heroSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/#hero");
      return;
    }

    navigate("/#hero");
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let currentSection = navItems[0].href;

      navItems.forEach((item) => {
        const sectionElement = document.querySelector(item.href);

        if (!sectionElement) {
          return;
        }

        const sectionTop =
          sectionElement.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = item.href;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHomePage]);

  const getTextClass = (isActive: boolean) => {
    const activeLineClass =
      "after:absolute after:bottom-[1px] after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-[#63d3c5] after:transition-transform after:duration-300";

    if (showLightNavbar) {
      return `${activeLineClass} ${
        isActive
          ? "text-[#0B1F3A] font-semibold after:scale-x-100"
          : "text-[#0B1F3A] after:scale-x-0"
      }`;
    }

    return `${activeLineClass} ${
      isActive
        ? "text-white font-semibold after:scale-x-100"
        : "text-white/80 hover:text-white after:scale-x-0"
    }`;
  };

  const darkLogoClass =
    `${brandLogoImageClass} ${showLightLogo ? "opacity-0" : "opacity-100"}`;

  const lightLogoClass =
    `${brandLogoImageClass} ${showLightLogo ? "opacity-100" : "opacity-0"}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        mobileHeaderActive ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-4 [@media_(min-width:2560px)]:max-w-[2304px] sm:px-6 sm:py-5 lg:px-8 xl:px-10 2xl:px-6">
        <div className="flex items-center gap-0">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="landing-mobile-nav"
            className={`relative z-20 -mr-0.5 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden ${
              mobileOpen || showLightNavbar ? "text-[#0B1F3A]" : "text-white"
            }`}
          >
            <MenuIcon size={25} />
          </button>

          <button
            type="button"
            onClick={handleLogoClick}
            className={`relative z-10 -ml-1 flex items-center border-0 bg-transparent p-0 ${brandLogoShellClass}`}
          >
            <img src={logo} alt="logo" className={darkLogoClass} />
            <img src={lightLogo} alt="logo" className={lightLogoClass} />
          </button>
        </div>

        <div className="hidden items-center gap-4 lg:ml-28 lg:flex lg:translate-y-[6px] xl:ml-32 xl:gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.label}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={() => setActiveSection(item.href)}
                className={`relative pb-1 text-[16px] md:text-[18px] ${getTextClass(isActive)}`}
              >
                {item.label}
              </a>
            );
          })}
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
          id="landing-mobile-nav"
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-md lg:hidden"
        >
          <nav className="flex flex-col gap-2 text-[16px] font-semibold text-[#0B1F3A]">
            {pageItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 transition-all duration-200 hover:bg-slate-100 hover:pl-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
