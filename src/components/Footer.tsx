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
  "relative h-9 w-[110px] sm:h-10 sm:w-[120px] lg:h-10 lg:w-[125px]";
const footerLogoImageClass =
  "absolute inset-0 h-full w-full scale-[1.25] sm:scale-[1.3] origin-left object-contain";

const Footer = () => {
  return (
    <div> {/* ✅ FULL WRAPPER */}

      <footer className="border-t border-border bg-background">

        {/* TOP */}
        <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 mx-auto py-8 sm:py-12 md:py-16">

          {/* ✅ TOP CONTENT WRAPPER */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 sm:gap-10 text-center md:text-left">

            {/* LOGO */}
            <div className="flex justify-center md:justify-start">
              <button
                type="button"
                className={`flex items-center ${footerLogoShellClass}`}
              >
                <img
                  src={logo}
                  alt="Research Fabric"
                  className={footerLogoImageClass}
                />
              </button>
            </div>

            {/* MENU */}
            <div>
              <h4 className="mb-4 text-[clamp(1rem,1.2vw,1.25rem)] font-bold text-foreground">
                Menu
              </h4>

              <ul className="space-y-2">
                {menuLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-block text-[clamp(0.875rem,1vw,1rem)] text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-foreground whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUBSCRIBE */}
            <div className="w-full max-w-md mx-auto md:mx-0">
              <h4 className="mb-4 text-[clamp(1rem,1.2vw,1.25rem)] font-bold text-foreground">
                Subscribe
              </h4>

              <div className="group flex w-full overflow-hidden rounded border border-border">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full flex-1 bg-muted px-4 py-3 text-[clamp(0.875rem,1vw,1rem)] text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                />

                <button
                  className="flex items-center justify-center bg-navy px-5 text-primary-foreground transition-all duration-300 hover:bg-navy-light hover:shadow-md active:scale-95"
                >
                  <ArrowRightIcon size={18} />
                </button>

              </div>

              <p className="mt-3 text-[clamp(0.75rem,0.9vw,0.875rem)] text-muted-foreground">
                *Send Message
              </p>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-border bg-background">

          {/* ✅ BOTTOM WRAPPER */}
          <div className="w-full px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-36 mx-auto">

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-center sm:text-left">

              <p className="text-[clamp(0.75rem,0.9vw,0.875rem)] text-muted-foreground">
                (c) 2022 DIGITALFABRIC. All Rights Reserved
              </p>

              <p className="text-[clamp(0.75rem,0.9vw,0.875rem)] text-muted-foreground">
                Hyderabad, Telangana, India
              </p>

            </div>

          </div>
        </div>

      </footer>

    </div>
  );
};

export default Footer;