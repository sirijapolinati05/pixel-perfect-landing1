import logo from "@/assets/LandingPage/research-fabric-footer.png";
import { ArrowRightIcon } from "@/components/ui/Icons";

const menuLinks = [
  "Why RESEARCHFABRIC",
  "Services",
  "Knowledge Area",
  "Featured Insights",
  "Success Stories",
  "Opportunities",
];

const footerLogoShellClass =
  "relative h-9 w-[112px] overflow-visible sm:h-10 sm:w-[118px] lg:h-10 lg:w-[122px]";
const footerLogoImageClass =
  "absolute inset-0 h-full w-full scale-[1.35] origin-left object-contain";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="page-shell mx-auto py-6">
        <div className="grid grid-cols-1 items-start gap-2 sm:gap-4 md:grid-cols-3 md:gap-6 max-[425px]:gap-6">
          
          {/* Logo */}
          <div className="flex items-center justify-start max-[425px]:pl-10">
            <button
              type="button"
              className={`relative z-10 flex items-center border-0 bg-transparent p-0 ${footerLogoShellClass} max-[425px]:translate-x-8`}
            >
              <img
                src={logo}
                alt="Research Fabric"
                className={footerLogoImageClass}
              />
            </button>
          </div>

          {/* Menu */}
          <div className="text-center md:mt-0 md:text-left mt-4 sm:mt-2 max-[425px]:mt-6">
            <h4 className="mb-2 text-[16px] font-bold text-foreground">
              Menu
            </h4>

            <ul className="space-y-1">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="inline-block text-[14px] text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="self-start pt-1 text-center sm:pt-0 md:text-left max-[425px]:pt-0">
            <h4 className="mb-2 text-[16px] font-bold text-foreground">
              Subscribe
            </h4>

            <div className="group mx-auto flex max-w-md md:mx-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-l bg-muted px-3 py-1.5 text-[16px] text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:shadow-lg"
              />

              <button
                className="rounded-r bg-navy px-3 py-1.5 text-primary-foreground transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:bg-navy-light hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)] active:scale-95"
              >
                <ArrowRightIcon size={14} />
              </button>
            </div>

            <p className="mt-1 text-[14px] text-muted-foreground">
              *Send Message
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="page-shell mx-auto flex flex-col items-center justify-between gap-1 py-1.5 text-center md:flex-row md:text-left">
          <p className="text-[14px] text-muted-foreground">
            (c) 2022 DIGITALFABRIC. All Rights Reserved
          </p>

          <p className="text-[14px] text-muted-foreground">
            Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
