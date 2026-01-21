import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1C120A] text-[#F4EDE4]">
      {/* Soft top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A574]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
          
          {/* BRAND */}
          <div>
            <h3 className="text-4xl font-serif italic tracking-tight mb-7">
              Laziz Bakery
            </h3>
            <p className="text-sm text-[#E6D8C5]/70 leading-relaxed max-w-sm">
              Artisan cakes, pastries, and desserts crafted with care, 
              where every celebration begins with something beautiful.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#D4A574] mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Our Cakes", path: "/our-cakes" },
                { name: "About", path: "/about" },
                { name: "Catering", path: "/catering" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#D4A574] mb-6">
              Get in Touch
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A574] mt-0.5" />
                <span className="text-[#E6D8C5]/80">
                  7912 Yarnwood Ct<br />
                  Springfield, VA 22153
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A574]" />
                <a
                  href="tel:+17036515000"
                  className="hover:text-white transition-colors"
                >
                  +1 (703) 651-5000
                </a>
              </div>

            </div>

            
          </div>
        </div>
        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-widest uppercase text-white/30">
          <span>© {currentYear} Laziz Bakery</span>
          <span>Freshly Baked • Warmly Made</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
