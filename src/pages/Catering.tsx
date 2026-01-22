import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Star, ShieldCheck, Clock, BadgeCheck } from 'lucide-react';

const Catering = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const services = [
    { title: "Grand Wedding Commissions", desc: "Architectural, custom-designed masterpieces tailored to the soul of your union." },
    { title: "Exquisite Birthdays", desc: "From whimsical wonders to sophisticated tiers that celebrate a life well-lived." },
    { title: "Bespoke Celebrations", desc: "An intimate focus for baby showers, anniversaries, and curated private events." }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* --- LUXURY HERO --- */}
      <motion.section 
        ref={heroRef}
        style={{ opacity }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#3D3027]"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519340333755-50721343aa51?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
        <motion.div style={{ y }} className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#C9A875] tracking-[0.5em] uppercase text-xs mb-4 block"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Laziz Bakery
          </motion.span>
          <h1 className="text-6xl md:text-8xl text-white italic font-serif mb-6">Our Services</h1>
          <p className="text-[#E8DDD0] italic font-serif text-xl max-w-2xl mx-auto">
            Every creation is orchestrated from scratch, utilizing only the world’s most premium ingredients.
          </p>
        </motion.div>
      </motion.section>

      {/* --- SERVICES GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border border-[#E8DDD0] bg-white text-center group hover:border-[#C9A875] transition-colors"
            >
              <div className="w-12 h-[1px] bg-[#C9A875] mx-auto mb-6" />
              <h3 className="text-2xl italic font-serif mb-4 text-[#3D3027]">{service.title}</h3>
              <p className="text-gray-500 font-serif leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- THE FLAVOR COMPOSITION --- */}
      <section className="bg-[#F5EFE7] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl italic font-serif text-[#3D3027]">The Flavor Composition</h2>
            <p className="text-[#8B7355] mt-4 font-serif italic">Curating your palate's signature</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Flavors */}
            <div className="space-y-4">
              <h4 className="text-[#C9A875] tracking-[0.3em] uppercase text-xs mb-8" style={{ fontFamily: "'Cinzel', serif" }}>Artisanal Bases</h4>
              <div className="grid grid-cols-2 gap-y-3 text-[#3D3027] font-serif italic text-lg">
                {["Vanilla Bean", "Velvet Cacao", "Espresso Roast", "Marble Essence", "Tres Leches", "Sicilian Lemon", "Berry Chantilly", "Black Forest", "Mango Nectar", "Pistachio Crème"].map(f => (
                  <span key={f} className="flex items-center gap-2"><Sparkles size={12} className="text-[#C9A875]"/> {f}</span>
                ))}
              </div>
            </div>

            {/* Fillings */}
            <div className="space-y-4">
              <h4 className="text-[#C9A875] tracking-[0.3em] uppercase text-xs mb-8" style={{ fontFamily: "'Cinzel', serif" }}>Signature Infusions</h4>
              <div className="grid grid-cols-2 gap-y-3 text-[#3D3027] font-serif italic text-lg">
                {["Seasonal Fruits", "Wild Berries", "Dulce de Leche", "Swiss Meringue", "Nutella Ganache", "Mascarpone Crème", "Whipped Chantilly", "Velvet Cream Cheese"].map(fill => (
                  <span key={fill} className="flex items-center gap-2"><Star size={12} className="text-[#C9A875]"/> {fill}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-16 text-center text-[#8B7355] font-serif italic">Bespoke flavor requests are welcomed for private commissions.</p>
        </div>
      </section>

      {/* --- TERMS & INVESTMENT --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Pricing */}
          <div className="bg-white p-12 border-l-4 border-[#C9A875] shadow-sm">
            <BadgeCheck className="text-[#C9A875] mb-6" size={32} />
            <h3 className="text-3xl italic font-serif mb-6 text-[#3D3027]">The Investment</h3>
            <ul className="space-y-4 text-gray-600 font-serif text-lg italic">
              <li>• Commissions are valued based on scale and artistic complexity.</li>
              <li>• A personal consultation is followed by a detailed formal quote.</li>
              <li>• A 50% retainer is required to secure your date in our calendar.</li>
            </ul>
          </div>

          {/* Cancellation */}
          <div className="bg-[#3D3027] p-12 text-white shadow-xl">
            <Clock className="text-[#C9A875] mb-6" size={32} />
            <h3 className="text-3xl italic font-serif mb-6">Terms of Engagement</h3>
            <div className="space-y-6 text-[#E8DDD0] font-serif text-lg italic">
              <p><strong className="text-white">7+ Days Notice:</strong> Elegible for a full restoration of funds.</p>
              <p><strong className="text-white">3–6 Days Notice:</strong> 25% refund reflecting prep and sourcing costs.</p>
              <p><strong className="text-white">48 Hours or Less:</strong> Non-refundable due to the artisan nature of our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA (The Maroon Button you liked) --- */}
      <section className="py-24 text-center">
        <h2 className="text-4xl italic font-serif mb-8 text-[#3D3027]">Ready to Begin your Consultation?</h2>
        <motion.a
          href="tel:+17036515000"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#800000] text-white transition-all shadow-2xl"
          style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.2em' }}
        >
          <ShieldCheck className="w-5 h-5" />
          <span>Call Laziz Bakery</span>
        </motion.a>
      </section>
    </div>
  );
};

export default Catering;