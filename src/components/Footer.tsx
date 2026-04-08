import { ArrowRight } from "lucide-react";
import logo from "@/assets/LandingPage/research-fabric-footer.png";

const menuLinks = [
  "Why RESEARCHFABRIC®",
  "Services",
  "Knowledge Area",
  "Featured Insights",
  "Success Stories",
  "Opportunities"
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      
      {/* 🔥 MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={logo} 
              alt="Research Fabric" 
              className="h-20 sm:h-24 object-contain"
            />
          </div>

          {/* Menu */}
          <div className="text-center md:text-left">
            <h4 className="text-sm sm:text-base font-bold text-foreground mb-3">
              Menu
            </h4>

            <ul className="space-y-1.5">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground text-xs sm:text-sm transition-all duration-300 
                    hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="text-center md:text-left">
            <h4 className="text-sm sm:text-base font-bold text-foreground mb-3">
              Subscribe
            </h4>

            <div className="flex group max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-muted rounded-l px-3 py-2 text-xs sm:text-sm text-foreground 
                placeholder:text-muted-foreground outline-none 
                transition-all duration-300
                focus:ring-2 focus:ring-primary focus:shadow-lg"
              />

              {/* BUTTON */}
              <button 
                className="bg-navy text-primary-foreground px-3 py-2 rounded-r
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:-translate-y-1
                hover:bg-navy-light
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] 
                active:scale-95"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">
              *Send Message
            </p>
          </div>

        </div>
      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 
        flex flex-col gap-1 sm:gap-2 md:flex-row justify-between items-center text-center md:text-left">
          
          <p className="text-muted-foreground text-[10px] sm:text-xs">
            © 2022 DIGITALFABRIC®. All Rights Reserved
          </p>

          <p className="text-muted-foreground text-[10px] sm:text-xs">
            Hyderabad, Telangana, India
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;