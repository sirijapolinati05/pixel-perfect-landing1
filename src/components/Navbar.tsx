import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/LandingPage/research-fabric.png";
import lightLogo from "@/assets/LandingPage/research-fabric-footer.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Practices", href: "#practices" },
  { label: "CXO AI Research", href: "#cxo" },
  { label: "Analysts", href: "#analysts" },
  { label: "Latest Research", href: "#latest-research" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
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
      setActiveSection("#home");
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "#home";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;

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

  const getTextClass = (isActive: boolean) => {
    if (!showLightNavbar) return "text-white";
    return isActive ? "text-black" : "text-black/80 hover:text-black";
  };

  // STRIP SAME
  const logoFrameClass =
    "relative h-14 w-[200px] overflow-hidden md:h-16 md:w-[240px]";

  // DARK LOGO
  const darkLogoClass =
    "absolute left-0 top-0 h-[115%] w-auto object-contain transition-all duration-500 " +
    (showLightNavbar ? "opacity-0" : "opacity-100");

  // 🔥 FOOTER LOGO (FINAL LEFT TUNE)
  const lightLogoClass =
    "absolute -left-7 -top-7 h-[180%] w-auto object-contain transition-all duration-500 " +
    (showLightNavbar ? "opacity-100" : "opacity-0");

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showLightNavbar ? "bg-white shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={showLightNavbar ? "text-black lg:hidden" : "text-white lg:hidden"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* LOGO */}
        <Link to="/" className={`ml-3 md:ml-5 flex items-center ${logoFrameClass}`}>
          <img src={logo} alt="logo" className={darkLogoClass} />
          <img src={lightLogo} alt="logo" className={lightLogoClass} />
        </Link>

        {/* NAV ITEMS */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.label}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={() => setActiveSection(item.href)}
                className={`relative pb-2 text-sm transition-colors ${getTextClass(
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
                ></span>
              </a>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <span
            className={`hidden md:inline text-sm ${
              showLightNavbar ? "text-black/70" : "text-white/70"
            }`}
          >
            Sign In | Subscribe
          </span>

          <button className={showLightNavbar ? "text-black" : "text-white"}>
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* MOBILE */}
      {mobileOpen && (
        <div
          className={`lg:hidden px-6 pb-4 ${
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
                    : "text-black/80"
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
