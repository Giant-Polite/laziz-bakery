import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Phone, X, MapPin, Sparkles } from 'lucide-react';
import { cakesData } from '../data/cakesData'; 

// --- ULTRA LUXURY HERO SECTION ---
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const titleWords = ['Our', 'Cakes'];
  const subtitle = 'A curated collection of our most refined creations.';

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity }}
      className="relative min-h-[50vh] flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE7] to-[#E8DDD0]"
    >
      {/* Animated background circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-10 w-64 h-64 border border-[#D4C4B0]/20 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 left-10 w-48 h-48 border border-[#D4C4B0]/20 rounded-full"
      />

      {/* Golden sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          className="absolute"
          style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 2) * 40}%` }}
        >
          <Sparkles className="w-4 h-4 text-[#C9A875]" />
        </motion.div>
      ))}

      <motion.div style={{ scale, y }} className="max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A875] to-transparent mx-auto mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-sm md:text-base tracking-[0.3em] uppercase text-[#8B7355]" style={{ fontFamily: "'Cinzel', serif" }}>
            Laziz Bakery
          </span>
        </motion.div>

        <div className="mb-6 overflow-hidden">
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            {titleWords.map((word, wordIndex) => (
              <motion.h1
                key={wordIndex}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + wordIndex * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl md:text-7xl lg:text-8xl text-[#3D3027] font-serif italic font-light"
              >
                {word}
              </motion.h1>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-12 h-[1px] bg-[#C9A875]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-2 h-2 bg-[#C9A875] rounded-full"
          />
          <div className="w-12 h-[1px] bg-[#C9A875]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-[#8B7355] italic font-serif max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </motion.div>

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z' fill='%23000000'/%3E%3C/svg%3E")` }}
      />
    </motion.section>
  );
}

// --- STYLISTIC CATEGORY NAV ---
function CategoryNav({ activeCategory, onCategoryChange }: { activeCategory: string; onCategoryChange: (category: string) => void; }) {
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'Wedding', label: 'Wedding' },
    { key: 'Birthday', label: 'Birthday' },
    { key: 'Baby', label: 'Baby' },
    { key: 'Pastries', label: 'Pastries' },
    { key: 'Custom', label: 'Custom' },
    { key: 'Anniversary', label: 'Anniversary' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-40 bg-white/95 backdrop-blur-xl border-b border-[#E8DDD0]/50 py-5 px-6 md:px-12 shadow-sm"
    >
      <div className="max-w-7xl mx-auto relative">
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[#C9A875]" />
        <div className="flex items-center justify-center gap-1 md:gap-3 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => onCategoryChange(category.key)}
              className="relative group px-4 py-2"
              whileHover={{ scale: 1.02 }}
            >
              {activeCategory === category.key && (
                <motion.div layoutId="navBg" className="absolute inset-0 bg-[#F5EFE7] rounded-md" />
              )}
              <span className={`relative z-10 text-[10px] md:text-xs tracking-[0.2em] uppercase ${activeCategory === category.key ? 'text-[#8B7355]' : 'text-[#C4B5A0]'}`} style={{ fontFamily: "'Cinzel', serif" }}>
                {category.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

// --- ULTRA LUXURY CLOSING CTA ---
function ClosingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.3 });
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => { if (ctaRef.current) observer.unobserve(ctaRef.current); };
  }, []);

  return (
    <motion.section
      ref={ctaRef}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      className="relative min-h-[50vh] flex items-center justify-center py-20 bg-gradient-to-br from-[#3D3027] via-[#5C4A3A] to-[#3D3027] overflow-hidden"
    >
      <div className="max-w-4xl text-center relative z-10 px-6">
        <motion.h2 className="text-5xl md:text-7xl mb-8 text-[#FAF8F5] italic font-serif font-light">Love what you see?</motion.h2>
        <motion.a href="tel:+17036515000" className="inline-flex items-center gap-4 px-12 py-6 bg-[#C9A875] text-[#3D3027] uppercase text-xs tracking-[0.3em] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
          <Phone size={18} /> Call +1 (703) 651-5000
        </motion.a>
      </div>
    </motion.section>
  );
}

// --- MODAL & PAGE ---
const CakeModal = ({ cake, onClose }: any) => {
  if (!cake) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#3D3027]/90 backdrop-blur-sm" />
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-5xl bg-white flex flex-col md:flex-row shadow-2xl overflow-hidden max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-black"><X size={24}/></button>
        <div className="w-full md:w-1/2 h-64 md:h-auto"><img src={cake.image} className="w-full h-full object-cover" /></div>
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.5em] text-[#C9A875] mb-4 font-serif">{cake.category}</span>
          <h2 className="text-4xl italic font-serif mb-6 text-[#3D3027]">{cake.name}</h2>
          <p className="text-gray-500 italic text-xl mb-12 font-serif">{cake.descriptor}</p>
          <div className="pt-8 border-t border-gray-100">
             <motion.a href="tel:+17036515000" className="w-full block py-4 bg-[#3D3027] text-white text-center uppercase text-[10px] tracking-[0.4em] font-serif hover:bg-[#C9A875] transition-colors">Inquire Now</motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Cakes = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCake, setSelectedCake] = useState<any>(null);

  const displayCakes = (activeCategory === 'all' 
    ? cakesData.all 
    : cakesData.all.filter(cake => cake.category === activeCategory)
  ).sort((a, b) => a.id - b.id);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Hero />
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <AnimatePresence mode="popLayout">
          {displayCakes.map((cake) => (
            <motion.div layout key={cake.id} onClick={() => setSelectedCake(cake)} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#F9F6F2]">
                <img src={cake.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <h3 className="text-2xl text-[#3D3027] italic font-serif text-center">{cake.name}</h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <ClosingCTA />
      <AnimatePresence>
        {selectedCake && <CakeModal cake={selectedCake} onClose={() => setSelectedCake(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Cakes;