import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Quote, Heart, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Link } from 'react-router-dom';

const About = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-[#FBF8F3] overflow-hidden">
      
      {/* --- EDITORIAL HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1556250438-1ba2507e9edb?auto=format&fit=crop&q=80"
            alt="The Artisan Hand"
            className="w-full h-full object-cover grayscale-[0.3] brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#330E09]/40 to-[#FBF8F3]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, tracking: '0.1em' }}
            animate={{ opacity: 1, tracking: '0.5em' }}
            transition={{ duration: 1 }}
            className="block text-[#D4A574] uppercase text-xs sm:text-sm mb-6 font-light tracking-[0.5em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            The Heritage of Laziz
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl sm:text-8xl md:text-9xl text-white font-serif leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Legacy of <br />
            <span className="italic font-light text-[#F4E4C1]">Pure Devotion.</span>
          </motion.h1>
        </div>
      </section>

      {/* --- THE MANIFESTO (Editorial Text Block) --- */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <h2 className="text-[#330E09] text-4xl sm:text-5xl font-serif mb-8 leading-snug" style={{ fontFamily: "'Didot', serif" }}>
              Where Middle Eastern <br /> Soul Meets <br /> European Finesse.
            </h2>
            <div className="w-20 h-1 bg-[#D4A574] mb-8" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-6 text-xl text-[#8B7355] font-light leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p>
              Founded with a singular vision, <span className="text-[#330E09] font-normal italic">Laziz Bakery</span> is more than an atelier; it is a celebration of time-honored traditions. Our story began with a passion for blending the aromatic, soulful baking of the Middle East with the precise, elegant techniques of European pastry arts.
            </p>
            <p>
              As a family-owned sanctuary in Springfield, VA, we believe that luxury is found in the details—the precise fold of a croissant, the velvet crumb of a custom cake, and the warmth of a greeting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- THE ARTISAN PHILOSOPHY (Visual Spread) --- */}
      <section className="bg-[#330E09] py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative">
              <motion.div 
                style={{ y: yRange }}
                className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80"
                  alt="Quality Ingredients"
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
              {/* Decorative Floating Card */}
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="absolute -right-8 -bottom-8 bg-[#D4A574] p-10 hidden md:block max-w-xs rounded-xl"
              >
                <Quote className="text-white/40 mb-4" size={32} />
                <p className="font-serif italic text-xl">"Every bite tells a story of quality, authenticity, and love."</p>
              </motion.div>
            </div>

            <div className="space-y-12">
              <div className="flex gap-6">
                <Globe className="text-[#D4A574] shrink-0" size={32} />
                <div>
                  <h4 className="text-2xl font-serif mb-2 italic">Global Inspiration</h4>
                  <p className="text-white/60 font-light">Sourcing the finest vanilla from Madagascar and artisanal flours to honor our dual heritage.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Heart className="text-[#D4A574] shrink-0" size={32} />
                <div>
                  <h4 className="text-2xl font-serif mb-2 italic">Handcrafted Daily</h4>
                  <p className="text-white/60 font-light">No shortcuts. No compromises. We rise with the sun to ensure every pastry is at its peak of freshness.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Award className="text-[#D4A574] shrink-0" size={32} />
                <div>
                  <h4 className="text-2xl font-serif mb-2 italic">Family Values</h4>
                  <p className="text-white/60 font-light">We take pride in creating more than just baked goods—we create the centerpieces for your memories.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUES GRID (Modern Editorial) --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-serif text-[#330E09]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Core Intentions</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1px bg-[#D4A574]/20 border border-[#D4A574]/20">
          {[
            { title: 'Fresh Ingredients', desc: 'Locally sourced seasonal fruits and premium imports.' },
            { title: 'Traditional Methods', desc: 'Honoring time-honored techniques passed through generations.' },
            { title: 'Warm Welcome', desc: 'A commitment to every customer who walks through our doors.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#FBF8F3] p-16 text-center hover:bg-white transition-colors group">
              <span className="text-[#D4A574] text-sm tracking-widest block mb-6">0{idx + 1}</span>
              <h3 className="text-2xl font-serif text-[#330E09] mb-4">{item.title}</h3>
              <p className="text-[#8B7355] font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE INVITATION --- */}
      <section className="py-32 bg-[#FAF3EA] border-y border-[#D4A574]/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl sm:text-5xl font-serif text-[#330E09] mb-10 italic">Experience the Laziz Standard.</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/cakes"
              className="px-10 py-5 bg-[#330E09] text-white rounded-full flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Explore the Gallery</span>
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/catering"
              className="px-10 py-5 border border-[#330E09] text-[#330E09] rounded-full flex items-center gap-3 hover:bg-[#330E09] hover:text-white transition-all"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Our Catering Services</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;