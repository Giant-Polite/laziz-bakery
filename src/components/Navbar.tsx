import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Basir Azizi Cookies", to: "/cookies" },
    { label: "Asal Cakes", to: "/cakes" },
    { label: "Afghan Bread", to: "/breads" },
    { label: "Afghan Fruits & Nuts", to: "/afghans" },
    { label: "About", to: "/about" },
    { label: "Catering", to: "/catering" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8DCC8]">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* ================= LEFT GROUP: BRAND + NAV ================= */}
          <div className="flex items-center gap-10 lg:gap-16">
            <Link to="/" className="group cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0">
              <div className="flex flex-col leading-none select-none">
                <span
                  className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold tracking-[0.14em] text-[#330E09]"
                  style={{ fontFamily: "'Didot', 'Libre Didot', serif" }}
                >
                  LAZIZ BAKERY
                </span>
                <span className="w-full h-[1px] bg-[#D4A574]/70 my-1" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B6A3E]">
                  Bread - Cookies - Cakes
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV - Now positioned near the logo */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="relative text-[11px] lg:text-[12px] xl:text-[13px] uppercase tracking-[0.15em] text-[#5D4E37] transition-colors hover:text-[#8B4513] py-2 whitespace-nowrap"
                  >
                    {item.label}
                    {/* ULTRA LUXURY ORB */}
                    {isActive && (
                      <span 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D4A574] rounded-full shadow-[0_0_10px_#D4A574] animate-pulse" 
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* ================= RIGHT GROUP: MOBILE TOGGLE ================= */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#5D4E37] hover:text-[#8B4513] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ================= FLOATING CALL BUTTON (DESKTOP) ================= */}
        {/* Positioned right and hangs just below the navbar border */}
        <div className="hidden md:block absolute right-4 lg:right-8 top-[80px]">
          <a
            href="tel:+17036515000"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#800000] text-white rounded-b-2xl shadow-lg hover:bg-[#600000] transition-all duration-300 hover:pt-4 group"
          >
            <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-medium tracking-widest">+1 (703) 651-5000</span>
          </a>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-4 border-t border-[#E8DCC8] mt-2">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm tracking-widest transition-colors ${
                    location.pathname === item.to ? "text-[#8B4513] font-semibold" : "text-[#5D4E37]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+17036515000"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#800000] text-white rounded-xl shadow-md mt-4"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm tracking-wide">+1 (703) 651-5000</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;