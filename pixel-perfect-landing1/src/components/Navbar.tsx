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

  const getTextClass = (isActive: boolean) => {
    if (showLightNavbar) {
      return isActive
        ? "text-[#0B1F3A] font-semibold"
        : "text-[#0B1F3A]";
    }

    return isActive
      ? "text-white font-semibold"
      : "text-white/80 hover:text-white";
  };

  const logoFrameClass =
    "relative h-16 w-[180px] sm:h-[72px] sm:w-[220px] lg:h-[88px] lg:w-[250px]";

  // ✅ MOVED EVEN MORE RIGHT (left-8)
  const darkLogoClass =
    "absolute left-2 -top-1 h-[110%] w-auto object-contain transition-all duration-500 sm:left-2 sm:top-0 sm:h-[110%] md:left-2 md:-top-1 md:h-[110%] lg:left-8 lg:top-1 lg:h-[118%] " +
    (showLightLogo ? "opacity-0" : "opacity-100");

  const lightLogoClass =
    "absolute -left-6 top-2 h-full w-full origin-left scale-[2.02] object-contain object-left transition-all duration-500 sm:-left-6 sm:top-2 md:-left-6 md:top-2 lg:-left-2 lg:top-4 lg:scale-[2.05] lg:-translate-x-2 " +
    (showLightLogo ? "opacity-100" : "opacity-0");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        mobileHeaderActive ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-6 py-1 flex items-center justify-between [@media_(min-width:2560px)]:max-w-[2304px]">

        <div className="flex items-center gap-0">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="landing-mobile-nav"
            className={`relative z-20 -mr-0.5 flex h-10 w-10 shrink-0 items-center justify-center lg:hidden ${
              mobileOpen || showLightNavbar ? "text-[#0B1F3A]" : "text-white"
            }`}
          >
            <MenuIcon size={24} />
          </button>

          <button
            type="button"
            onClick={handleLogoClick}
            className={`relative z-10 -ml-3 sm:-ml-3 md:-ml-3 lg:-ml-2 flex items-center border-0 bg-transparent p-0 ${logoFrameClass}`}
          >
            <img src={logo} alt="logo" className={darkLogoClass} />
            <img src={lightLogo} alt="logo" className={lightLogoClass} />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.label}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={() => setActiveSection(item.href)}
                className={`relative pb-2 text-[16px] md:text-[18px] ${getTextClass(isActive)}`}
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
