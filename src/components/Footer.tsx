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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 gap-2 items-start sm:gap-4 md:grid-cols-3 md:gap-6">

          {/* 🔥 Logo (Moved LEFT) */}
          <div className="flex justify-start self-start -mt-6 sm:-mt-8 md:-mt-12 -ml-2 md:-ml-4">
            <img 
              src={logo} 
              alt="Research Fabric" 
              className="h-32 sm:h-36 md:h-44 object-contain"
            />
          </div>

          {/* Menu */}
          <div className="-mt-6 text-center sm:-mt-4 md:mt-0 md:text-left">
            <h4 className="text-[16px] font-bold text-foreground mb-2">
              Menu
            </h4>

            <ul className="space-y-1">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground text-[14px] transition-all duration-300 
                    hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="self-start pt-1 text-center sm:pt-0 md:text-left">
            <h4 className="text-[16px] font-bold text-foreground mb-2">
              Subscribe
            </h4>

            <div className="flex group max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-muted rounded-l px-3 py-1.5 text-[16px] text-foreground 
                placeholder:text-muted-foreground outline-none 
                transition-all duration-300
                focus:ring-2 focus:ring-primary focus:shadow-lg"
              />

              <button 
                className="bg-navy text-primary-foreground px-3 py-1.5 rounded-r
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:-translate-y-0.5
                hover:bg-navy-light
                hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)] 
                active:scale-95"
              >
                <ArrowRight size={14} />
              </button>
            </div>

            <p className="text-muted-foreground text-[14px] mt-1">
              *Send Message
            </p>
          </div>

        </div>
      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 
        flex flex-col gap-1 md:flex-row justify-between items-center text-center md:text-left">
          
          <p className="text-muted-foreground text-[14px]">
            © 2022 DIGITALFABRIC®. All Rights Reserved
          </p>

          <p className="text-muted-foreground text-[14px]">
            Hyderabad, Telangana, India
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;