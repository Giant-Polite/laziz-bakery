import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ================= BRAND ================= */}
          <div className="flex flex-col leading-none select-none">
            <span
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold tracking-[0.14em] text-[#330E09]"
              style={{ fontFamily: "'Didot', 'Libre Didot', serif" }}
            >
              LAZIZ BAKERY
            </span>

            {/* Gold Divider */}
            <span className="w-60 h-[1px] bg-[#D4A574]/70 my-1" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B6A3E]">
              Bread - Cookies - Cakes
            </span>

          </div>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", href: "#home" },
              { label: "Our Cakes", href: "#cakes" },
              { label: "About", href: "#about" },
              { label: "Catering", href: "#catering" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] uppercase tracking-widest text-[#5D4E37] transition-colors hover:text-[#8B4513]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ================= CALL BUTTON (DESKTOP) ================= */}
          <div className="hidden md:block">
            <a
              href="tel:+17036515000"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A574] text-white rounded-xl hover:bg-[#C4956A] transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm tracking-wide">+1 (703) 651-5000</span>
            </a>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5D4E37] hover:text-[#8B4513] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-4 border-t border-[#E8DCC8] mt-2">
            <nav className="flex flex-col space-y-4">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Cakes", href: "#cakes" },
                { label: "About", href: "#about" },
                { label: "Catering", href: "#catering" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#5D4E37] hover:text-[#8B4513] transition-colors py-2 text-sm tracking-wide"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="tel:+17036515000"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A574] text-white rounded-xl hover:bg-[#C4956A] transition-all shadow-md mt-4"
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
