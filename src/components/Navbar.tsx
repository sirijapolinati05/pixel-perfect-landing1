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

const getMobileItemClassName = (isActive: boolean) =>
  `relative overflow-hidden rounded-xl border px-4 py-3 pl-5 text-left transition-all duration-200 ${
    isActive
      ? "border-[#63d3c5]/50 bg-[#63d3c5]/12 text-[#0B1F3A] shadow-[inset_3px_0_0_0_#63d3c5]"
      : "border-transparent text-[#0B1F3A] hover:border-slate-200 hover:bg-slate-100"
  }`;

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

  const mobileMenuIconColor = mobileHeaderActive ? "#0B1F3A" : "#FFFFFF";

  const darkLogoClass =
    `${logoImageClass} ${showLightLogo ? "opacity-0" : "opacity-100"}`;
  const lightLogoClass =
    `${logoImageClass} ${showLightLogo ? "opacity-100" : "opacity-0"}`;

  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_HEIGHT;

    window.scrollTo({ top: targetTop, behavior: "smooth" });

    setActiveSection(hash);
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  const handleLogoClick = () => {
    setMobileOpen(false);
    setActiveSection("");

    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

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

  useEffect(() => {
    if (!isHomePage && !isAnalystTeamPage) return;

    const updateActiveSection = () => {
      const scrollY = window.scrollY + NAVBAR_HEIGHT + 20;

      let current = "";

      currentNavItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
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

  const getTextClass = (isActive: boolean) => `
    relative pb-2
    text-[clamp(1.125rem,1.1vw,1.25rem)]
    transition-all duration-300
    whitespace-nowrap
    after:absolute after:bottom-0 after:left-0
    after:h-[3px] after:w-full after:rounded-full
    after:bg-[#63d3c5]
    after:transition-transform after:duration-300
    ${isActive ? "after:scale-x-100 font-bold" : "after:scale-x-0 hover:after:scale-x-50"}
    ${showLightNavbar ? "text-[#0B1F3A]" : "text-white"}
  `;

  return (
    <div>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          mobileHeaderActive
            ? "border-b border-slate-200 bg-white/85 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* 🔥 MOBILE PADDING FIX */}
        <div className="w-full relative flex items-center py-4 px-3 sm:px-10 lg:px-20 xl:px-28 2xl:px-36">

          {/* DESKTOP (UNCHANGED) */}
          <div className="hidden lg:flex w-full items-center">
            <div className="w-[45%] flex items-center justify-between pr-8 xl:pr-12 2xl:pr-16">
              <button onClick={handleLogoClick} className={`relative ${logoShellClass}`}>
                <img src={logo} className={darkLogoClass} />
                <img src={lightLogo} className={lightLogoClass} />
              </button>

              {currentNavItems.length > 0 && (
                <a
                  href={currentNavItems[0].href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(currentNavItems[0].href);
                  }}
                  className={getTextClass(activeSection === currentNavItems[0].href)}
                >
                  {currentNavItems[0].label}
                </a>
              )}
            </div>

            <div className="w-[55%] flex items-center justify-between">
              <div className="flex gap-8 xl:gap-12 2xl:gap-16">
                {currentNavItems.slice(1).map((item) => {
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

              <span className={`text-[14px] sm:text-[16px] font-semibold ${
                mobileHeaderActive ? "text-black" : "text-white"
              }`}>
                Subscribe
              </span>
            </div>
          </div>

          {/* 🔥 MOBILE FIX */}
          <div className="lg:hidden flex w-full items-center justify-between">
            <div className="flex items-center">

              <button
                onClick={toggleMobileMenu}
                className="flex h-11 w-11 items-center justify-center -ml-2"
              >
                <MenuIcon size={25} color={mobileMenuIconColor} />
              </button>

              <button
                onClick={handleLogoClick}
                className={`relative ${logoShellClass} -ml-3`}
              >
                <img src={logo} className={darkLogoClass} />
                <img src={lightLogo} className={lightLogoClass} />
              </button>

            </div>

            <span className={`text-[14px] sm:text-[16px] font-semibold ${
              mobileHeaderActive ? "text-black" : "text-white"
            }`}>
              Subscribe
            </span>
          </div>

        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-md lg:hidden">
            <div className="flex flex-col gap-2 text-[16px] font-semibold text-[#0B1F3A]">
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
                    className={getMobileItemClassName(isActive)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;