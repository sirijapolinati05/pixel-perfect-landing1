import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/LandingPage/research-fabric.png";
import lightLogo from "../assets/LandingPage/research-fabric-footer.png";
import { MenuIcon } from "@/components/ui/Icons";

const NAVBAR_HEIGHT = 92;
const logoShellClass =
  "relative h-9 w-[112px] sm:h-10 sm:w-[118px] lg:h-10 lg:w-[122px]";
const logoImageClass =
  "absolute inset-0 h-full w-full scale-[1.35] origin-left object-contain transition-all duration-500";

const navItems = [
  { label: "Our Practices", href: "#practices" },
  { label: "CXO AI Research", href: "#cxo" },
  { label: "Analysts", href: "#analysts" },
  { label: "Process", href: "#process" },
  { label: "Latest Research", href: "#latest-research" },
];

const analystTeamNavItems = [
  { label: "Leadership", href: "#leadership" },
  { label: "Analysts", href: "#analysts" },
  { label: "Research Team", href: "#research-team" },
  { label: "Download Approach Note", href: "#cta" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/";
  const isAnalystTeamPage = pathname === "/analyst-team";
  const currentNavItems = isAnalystTeamPage ? analystTeamNavItems : navItems;

  const showLightNavbar = isScrolled;
  const mobileHeaderActive = mobileOpen || showLightNavbar;
  const showLightLogo = mobileHeaderActive;

  const menuIconColor = showLightNavbar ? "#0B1F3A" : "#FFFFFF";
  const darkLogoClass =
    `${logoImageClass} ${showLightLogo ? "opacity-0" : "opacity-100"}`;
  const lightLogoClass =
    `${logoImageClass} ${showLightLogo ? "opacity-100" : "opacity-0"}`;

  // ✅ SCROLL FUNCTION
  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    setActiveSection(hash);
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    setActiveSection("");

    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

  // ✅ SCROLL STYLE
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (isHomePage || isAnalystTeamPage) {
        setIsScrolled(scrollY > 10);
      } else {
        setIsScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, isAnalystTeamPage]);

  // ✅ ACTIVE SECTION TRACKING
  useEffect(() => {
    if (!isHomePage && !isAnalystTeamPage) return;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const scrollPosition = scrollY + window.innerHeight * 0.35;

      let current = "";

      currentNavItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          current = item.href;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    return () =>
      window.removeEventListener("scroll", updateActiveSection);
  }, [currentNavItems, isHomePage, isAnalystTeamPage]);

  const getTextClass = (isActive: boolean) => {
    return `
      relative pb-1
      after:absolute after:bottom-[1px] after:left-0
      after:h-[2px] after:w-full
      after:bg-[#63d3c5]
      after:transition-transform after:duration-300
      ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
      ${
        showLightNavbar
          ? "text-[#0B1F3A]"
          : "text-white"
      }
    `;
  };

  const desktopNavClassName = isHomePage
    ? "hidden gap-6 lg:absolute lg:left-[37.5%] lg:top-1/2 lg:flex lg:-translate-y-1/2 xl:gap-7"
    : "hidden gap-6 lg:flex";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        mobileHeaderActive
          ? "border-b border-slate-200 bg-white/85 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
      }`}
    >
      <div className="page-shell relative flex items-center justify-between py-4">

        <div className="flex items-center gap-2">
          <button onClick={toggleMobileMenu} className="lg:hidden">
            <MenuIcon size={25} color={menuIconColor} />
          </button>

          <button onClick={handleLogoClick} className={`relative ${logoShellClass}`}>
            <img src={logo} alt="Research Fabric" className={darkLogoClass} />
            <img src={lightLogo} alt="Research Fabric" className={lightLogoClass} />
          </button>
        </div>

        <div className={desktopNavClassName}>
          {currentNavItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={getTextClass(isActive)}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <span className={`${mobileHeaderActive ? "text-black" : "text-white"}`}>
          Subscribe
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
