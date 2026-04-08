import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/LandingPage/research-fabric.png";
import lightLogo from "../assets/LandingPage/research-fabric-footer.png";

const navItems = [
  { label: "Our Practices", href: "#practices" },
  { label: "CXO AI Research", href: "#cxo" },
  { label: "Analysts", href: "#analysts" },
  { label: "Latest Research", href: "#latest-research" },
  { label: "Process", href: "#process" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0].href);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const isHomePage = pathname === "/";
  const showLightNavbar = isScrolled || !isHomePage;

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
    if (!showLightNavbar) return "text-white";
    return isActive ? "text-black" : "text-black/80 hover:text-[#2F80ED]";
  };

  const logoFrameClass =
    "relative h-14 w-[180px] sm:h-16 sm:w-[220px] md:h-20 md:w-[250px]";

  const darkLogoClass =
    "absolute left-0 -top-2 h-[125%] w-auto object-contain transition-all duration-500 " +
    (showLightNavbar ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0");

  // ✅ FIXED LIGHT LOGO (DOWN + SMOOTH)
  const lightLogoClass =
    "absolute -left-8 sm:-left-10 h-[190%] sm:h-[200%] w-auto object-contain transition-all duration-500 " +
    (showLightNavbar
      ? "opacity-100 translate-y-2"
      : "opacity-0 translate-y-0");

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showLightNavbar
          ? "bg-white shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 flex items-center justify-between">

        {/* MOBILE */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-1 ${
              showLightNavbar ? "text-black" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/" className={`flex items-center ${logoFrameClass}`}>
            <img src={logo} alt="logo" className={darkLogoClass} />
            <img src={lightLogo} alt="logo" className={lightLogoClass} />
          </Link>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <Link
            to="/"
            className={`ml-2 md:ml-5 flex items-center ${logoFrameClass}`}
          >
            <img src={logo} alt="logo" className={darkLogoClass} />
            <img src={lightLogo} alt="logo" className={lightLogoClass} />
          </Link>
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
                className={`relative pb-2 text-sm md:text-base transition-colors ${getTextClass(
                  isActive
                )}`}
              >
                {item.label}

                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-[#63d3c5] transition-all duration-300 ${
                    isScrolled && isActive
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
            className={`hidden sm:inline text-xs sm:text-sm ${
              showLightNavbar ? "text-black/70" : "text-white/70"
            }`}
          >
            Subscribe
          </span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className={`lg:hidden px-4 sm:px-6 pb-4 ${
            showLightNavbar ? "bg-white" : "bg-[#081A34]/95"
          }`}
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
                className={`block py-2 text-sm ${
                  !showLightNavbar
                    ? "text-white"
                    : isActive
                    ? "text-black border-b border-[#63d3c5]"
                    : "text-black/80 hover:text-[#2F80ED]"
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
