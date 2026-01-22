import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Phone, MapPin, Sparkles, Clock, Mail } from 'lucide-react';

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

  const titleWords = ['Artisan', 'Afghan', 'Bread' ,'Baked','With', 'Care'];
  const subtitle = 'An ancient tradition, meticulously crafted for the modern palate.';

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity }}
      className="relative min-h-[65vh] flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE7] to-[#E8DDD0]"
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
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#D4C4B0]/10 rounded-full"
      />

      {/* Golden sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          className="absolute"
          style={{ left: `${15 + i * 12}%`, top: `${25 + (i % 2) * 50}%` }}
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

// --- COMING SOON SECTION ---
function ComingSoonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Countdown timer (set to 30 days from now as placeholder)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const breadTypes = [
    { name: 'Naan-e-Afghani', desc: 'Traditional oval flatbread with distinctive char marks' },
    { name: 'Roht', desc: 'Sweet bread infused with cardamom and rose water' },
    { name: 'Bolani', desc: 'Stuffed flatbread with savory fillings' },
    { name: 'Lavash', desc: 'Paper-thin artisanal bread, baked to perfection' },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 bg-gradient-to-br from-[#FAF8F5] to-[#E8DDD0] overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A875] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B7355] rounded-full blur-3xl"
      />

      {/* Floating geometric shapes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={
            isVisible
              ? {
                  opacity: [0, 0.2, 0],
                  y: [-50, 50, -50],
                  rotate: [0, 180, 360],
                }
              : {}
          }
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
          className="absolute"
          style={{
            left: `${10 + (i * 80) / 10}%`,
            top: `${15 + (i % 4) * 25}%`,
          }}
        >
          <div className="w-2 h-2 border border-[#C9A875]/30" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        </motion.div>
      ))}

      <div className="max-w-6xl w-full relative z-10">
        {/* Top decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#C9A875] to-transparent mx-auto mb-16"
        />

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-3 border-2 border-[#C9A875] relative">
            <span className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#C9A875]" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#C9A875]" />
            <Clock className="w-5 h-5 text-[#C9A875]" />
            <span
              className="text-sm tracking-[0.3em] uppercase text-[#8B7355]"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
            >
              Coming Soon
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl lg:text-7xl mb-8 text-[#3D3027] text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: '1.3',
          }}
        >
          A Heritage of Flavor,<br />Baked with Reverence
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl text-[#8B7355] mb-16 text-center max-w-3xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
          }}
        >
          From the clay ovens of Afghanistan to your table, we are preparing to unveil an extraordinary collection of handcrafted breads. Each loaf tells a story of tradition, passion, and uncompromising quality.
        </motion.p>

        {/* Luxury Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mb-20 relative"
        >
          {/* Decorative frame elements */}
          <div className="relative max-w-4xl mx-auto">
            {/* Corner decorations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[#C9A875] z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#C9A875] z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="absolute -top-6 -right-6 w-16 h-16 border-r-2 border-t-2 border-[#C9A875]/40 z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 border-l-2 border-b-2 border-[#C9A875]/40 z-10"
            />

            {/* Floating sparkles around image */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`img-sparkle-${i}`}
                initial={{ opacity: 0 }}
                animate={
                  isVisible
                    ? {
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5 + i * 0.5,
                }}
                className="absolute z-10"
                style={{
                  top: i % 2 === 0 ? '10%' : '90%',
                  left: i < 2 ? '5%' : '95%',
                }}
              >
                <Sparkles className="w-5 h-5 text-[#C9A875]" />
              </motion.div>
            ))}

            {/* Main image container with luxury styling */}
            <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm p-4 shadow-2xl">
              {/* Inner decorative border */}
              <div className="relative border-4 border-[#E8DDD0]/50">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 1.3 }}
                  className="relative aspect-[16/9] overflow-hidden"
                >
                  <img
                    src="/afghan_bread.jpg"
                    alt="Afghan Bread"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D3027]/10 to-transparent" />
                </motion.div>

                {/* Decorative center lines on image border */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#C9A875]" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#C9A875]" />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-16 bg-[#C9A875]" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-16 bg-[#C9A875]" />
              </div>

              {/* Corner ornaments on white padding */}
              <span className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#C9A875]" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#C9A875]" />
            </div>

            {/* Caption below image */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 1, delay: 1.9 }}
              className="text-center mt-6 text-sm tracking-[0.25em] uppercase text-[#8B7355]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Handcrafted Perfection
            </motion.p>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/50 backdrop-blur-sm border border-[#E8DDD0] min-w-[100px]">
                  <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#C9A875]" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#C9A875]" />
                  <motion.span
                    key={value}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-5xl text-[#3D3027]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    {String(value).padStart(2, '0')}
                  </motion.span>
                  <span
                    className="text-xs tracking-[0.2em] uppercase text-[#8B7355]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1, delay: 1.6, ease: [0.65, 0, 0.35, 1] }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="w-24 h-[1px] bg-[#C9A875]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-2 h-2 bg-[#C9A875]"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
          <div className="w-24 h-[1px] bg-[#C9A875]" />
        </motion.div>

        {/* Bread Types Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mb-20"
        >
          <h3
            className="text-2xl md:text-3xl text-[#3D3027] text-center mb-12 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            What Awaits You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {breadTypes.map((bread, index) => (
              <motion.div
                key={bread.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 2 + index * 0.15 }}
                className="relative group"
              >
                <div className="p-6 bg-white/30 backdrop-blur-sm border border-[#E8DDD0] transition-all duration-500 hover:bg-white/50 hover:border-[#C9A875] h-full">
                  <span className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#C9A875]/30 group-hover:border-[#C9A875] transition-colors" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#C9A875]/30 group-hover:border-[#C9A875] transition-colors" />
                  
                  <h4
                    className="text-xl text-[#3D3027] mb-3 italic"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    {bread.name}
                  </h4>
                  <p
                    className="text-sm text-[#8B7355] leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {bread.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center"
        >
          <h4
            className="text-xl md:text-2xl text-[#3D3027] mb-8 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Be the First to Experience Our Afghan Breads
          </h4>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <motion.a
              href="tel:+17036515000"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#C9A875] to-[#B8935E] text-[#3D3027] overflow-hidden group"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#D4B886] to-[#C9A875]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#3D3027]/30" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#3D3027]/30" />
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10 text-sm tracking-[0.15em] uppercase">
                Call +1 (703) 651-5000
              </span>
            </motion.a>
          </div>

          <p
            className="text-sm tracking-[0.2em] uppercase text-[#8B7355]/70 mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Questions? We're here to assist
          </p>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, delay: 2.8, ease: [0.65, 0, 0.35, 1] }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A875] to-transparent mx-auto mt-16"
        />
      </div>

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </motion.section>
  );
}

// --- HERITAGE STORY SECTION ---
function HeritageSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 bg-gradient-to-br from-[#3D3027] via-[#5C4A3A] to-[#3D3027] overflow-hidden"
    >
      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 right-20 w-96 h-96 border-2 border-[#C9A875]/20 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 left-20 w-[500px] h-[500px] border border-[#C9A875]/20 rounded-full"
      />

      {/* Floating sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={
            isVisible
              ? {
                  opacity: [0, 1, 0],
                  y: [-100, 0, 100],
                  x: [0, Math.random() * 100 - 50, 0],
                }
              : {}
          }
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
          className="absolute"
          style={{
            left: `${5 + (i * 90) / 15}%`,
            top: `${15 + (i % 3) * 30}%`,
          }}
        >
          <Sparkles className="w-3 h-3 text-[#C9A875]" />
        </motion.div>
      ))}

      <div className="max-w-5xl text-center relative z-10">
        {/* Top decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#C9A875] to-transparent mx-auto mb-16"
        />

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <span
            className="text-sm md:text-base tracking-[0.3em] uppercase text-[#C9A875]"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 400 }}
          >
            Our Heritage
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl lg:text-7xl mb-12 text-[#FAF8F5]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: '1.2',
          }}
        >
          Centuries of Tradition,<br />Perfected for Today
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1, delay: 1, ease: [0.65, 0, 0.35, 1] }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="w-16 h-[1px] bg-[#C9A875]" />
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="w-2 h-2 bg-[#C9A875]"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
          <div className="w-16 h-[1px] bg-[#C9A875]" />
        </motion.div>

        {/* Story content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-8 mb-16"
        >
          <p
            className="text-lg md:text-2xl text-[#E8DDD0] leading-relaxed max-w-3xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            For generations, Afghan bakers have mastered the delicate art of bread-making, transforming simple ingredients into culinary masterpieces that nourish both body and soul.
          </p>
          <p
            className="text-base md:text-lg text-[#C4B5A0] leading-relaxed max-w-3xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
            }}
          >
            At Laziz Bakery, we honor this heritage by combining time-honored techniques with the finest ingredients, creating breads that carry the warmth of tradition and the excellence of modern craftsmanship.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { title: 'Authentic Methods', desc: 'Traditional clay oven baking' },
            { title: 'Premium Ingredients', desc: 'Sourced with uncompromising standards' },
            { title: 'Artisan Craft', desc: 'Hand-shaped by master bakers' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.7 + index * 0.2 }}
              className="relative group"
            >
              <div className="p-6 border border-[#C9A875]/30 backdrop-blur-sm bg-white/5 transition-all duration-500 hover:border-[#C9A875] hover:bg-white/10">
                <span className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#C9A875]" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#C9A875]" />
                <h3
                  className="text-xl text-[#C9A875] mb-3"
                  style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm text-[#E8DDD0]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, delay: 2.2, ease: [0.65, 0, 0.35, 1] }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A875] to-transparent mx-auto"
        />
      </div>

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </motion.section>
  );
}

// --- MAIN COMPONENT ---
const AfghanBread = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Hero />
      <ComingSoonSection />
      <HeritageSection />
    </div>
  );
};

export default AfghanBread;