import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/LandingPage/research-fabric.png";
import lightLogo from "../assets/LandingPage/research-fabric-footer.png";

const navItems = [
  { label: "Our Practices", href: "#practices" },
  { label: "CXO AI Research", href: "#cxo" },
  { label: "Analysts", href: "#analysts" },
  { label: "Process", href: "#process" },
  { label: "Latest Research", href: "#latest-research" },
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

  const toggleMobileMenu = () => {
    setMobileOpen((previousState) => !previousState);
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
      setActiveSection(navItems[0].href);
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = navItems[0].href;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            current = item.href;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const getTextClass = (isActive) => {
    if (showLightNavbar) {
      return isActive
        ? "text-[#0B1F3A] font-semibold"
        : "text-[#0B1F3A] hover:text-[#0B1F3A]";
    }

    return isActive
      ? "text-white font-semibold"
      : "text-white/80 hover:text-white";
  };

  const logoFrameClass =
    "relative h-14 w-[180px] sm:h-16 sm:w-[220px] md:h-20 md:w-[250px]";

  const darkLogoClass =
    "absolute left-0 -top-2 h-[125%] w-auto object-contain transition-all duration-500 " +
    (showLightNavbar ? "opacity-0 translate-y-1" : "opacity-100");

  const lightLogoClass =
    "absolute -left-8 sm:-left-10 h-[190%] sm:h-[200%] w-auto object-contain transition-all duration-500 " +
    (showLightNavbar ? "opacity-100 translate-y-2" : "opacity-0");

  const mobileDarkLogoClass =
    "absolute left-0 -top-2 h-[125%] w-auto object-contain transition-all duration-500 " +
    (mobileHeaderActive ? "opacity-0 translate-y-1" : "opacity-100");

  const mobileLightLogoClass =
    "absolute -left-8 sm:-left-10 h-[190%] sm:h-[200%] w-auto object-contain transition-all duration-500 " +
    (mobileHeaderActive ? "opacity-100 translate-y-2" : "opacity-0");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileHeaderActive
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 flex items-center justify-between">

        {/* MOBILE */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
            className={`relative z-[60] p-1 text-xl ${
              mobileHeaderActive ? "text-[#0B1F3A]" : "text-white"
            }`}
          >
            <Menu size={20} />
          </button>

          <button
            type="button"
            onClick={handleLogoClick}
            className={`flex items-center border-0 bg-transparent p-0 ${logoFrameClass}`}
          >
            <img src={logo} alt="logo" className={mobileDarkLogoClass} />
            <img src={lightLogo} alt="logo" className={mobileLightLogoClass} />
          </button>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <button
            type="button"
            onClick={handleLogoClick}
            className={`ml-2 md:ml-5 flex items-center border-0 bg-transparent p-0 ${logoFrameClass}`}
          >
            <img src={logo} alt="logo" className={darkLogoClass} />
            <img src={lightLogo} alt="logo" className={lightLogoClass} />
          </button>
        </div>

        {/* NAV ITEMS */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.label}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={() => setActiveSection(item.href)}
                className={`relative pb-2 text-[16px] md:text-[18px] transition-colors ${getTextClass(
                  isActive
                )}`}
              >
                {item.label}

                {/* ✅ ACTIVE UNDERLINE COLOR CHANGED */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300 ${
                    "bg-[#5AE0BB]"
                  } ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span
            className={`hidden sm:inline text-[14px] sm:text-[16px] ${
              showLightNavbar ? "text-[#0B1F3A]" : "text-white"
            }`}
          >
            Subscribe
          </span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="bg-white px-4 pb-4 sm:px-6 lg:hidden"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.label}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={() => {
                  setActiveSection(item.href);
                  setMobileOpen(false);
                }}
                className={`block py-2 text-[16px] ${
                  isActive
                    ? "text-[#0B1F3A] border-b border-[#5AE0BB]"
                    : "text-[#0B1F3A] hover:text-[#0B1F3A]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
  
