import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Quote, Heart, Award, Globe, Sparkles, Clock, Users } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Link } from 'react-router-dom'; // Import the Link component


const About = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] overflow-hidden">
      
      {/* --- ULTRA LUXURY HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764486601113-a6856cdce5fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWtlcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg4OTg5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Laziz Luxury Bakery Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A]/70 via-[#2D1810]/60 to-[#2D1810]/60" />
          
          {/* Subtle bottom fade to page background */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#FAF7F2]" />
          
          {/* Decorative Gold Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#C9A961]/5 to-transparent opacity-50" />
        </div>

        {/* Decorative Corner Flourishes */}
        <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[#D4AF6A]/30" />
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-[#D4AF6A]/30" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-[#D4AF6A]/30" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[#D4AF6A]/30" />

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-6xl"
        >
          {/* Ornamental Top */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF6A]" />
              <Sparkles className="text-[#D4AF6A]" size={24} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF6A]" />
            </div>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.6em' }}
            transition={{ duration: 1.2 }}
            className="block text-[#D4AF6A] uppercase text-xs sm:text-sm mb-8 font-light tracking-[0.6em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Est. 2020 • Springfield, Virginia
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-7xl sm:text-8xl md:text-9xl text-white font-serif leading-[0.95] mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Legacy of
            <br />
            <span className="italic font-light text-[#E8D4B0] block mt-4">
              Exquisite Artistry
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#800000]/100 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Where the timeless traditions of Middle Eastern baking 
            meet the refined elegance of European patisserie
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs tracking-widest uppercase">Discover Our Story</span>
            <ChevronRight className="text-white/60 rotate-90" size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* --- ELEGANT INTRODUCTION --- */}
      <section className="relative py-40 px-6 bg-gradient-to-b from-[#FAF7F2] to-white">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-7xl mx-auto">
          {/* Center Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-16 -mt-24"
          >
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-[#D4AF6A] flex items-center justify-center bg-[#FAF7F2]">
                <div className="w-24 h-24 rounded-full border border-[#D4AF6A]/50 flex items-center justify-center">
                  <span className="text-[#2D1810] text-4xl font-serif italic">L</span>
                </div>
              </div>
              {/* Radiating Lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 -z-10">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-1/2 h-px w-16 bg-gradient-to-r from-[#D4AF6A]/20 to-transparent"
                    style={{ transform: `rotate(${i * 30}deg) translateX(-50%)`, transformOrigin: 'left center' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <h2 
                className="text-[#2D1810] text-5xl sm:text-6xl md:text-7xl font-serif mb-10 leading-[1.1]" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Where Soul Meets
                <span className="block text-[#C9A961] italic mt-2">Sophistication</span>
              </h2>
              
              {/* Decorative Gold Bar */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-3 h-3 rotate-45 bg-[#D4AF6A]" />
                <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF6A] to-transparent" />
              </div>

              <p className="text-[#6B5D52] text-lg font-light italic mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                "In every creation, we honor the generations before us"
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 text-lg text-[#6B5D52] font-light leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p className="text-xl">
                <span className="text-[#2D1810] font-normal">Laziz Bakery</span> was born from a dream—to create a sanctuary where the aromatic warmth of Middle Eastern tradition intertwines seamlessly with the precision and elegance of European patisserie.
              </p>
              <p>
                Each morning, our master bakers rise before dawn, guided by recipes passed down through generations and refined through years of dedicated craft. We source only the finest ingredients: Madagascar vanilla, French butter, Turkish pistachios, and local organic fruits at their peak.
              </p>
              <p>
                In our family-owned atelier in Springfield, Virginia, we believe that true luxury lies not in excess, but in the perfection of every detail—the exact temperature of rising dough, the precise fold of layered pastry, the artful placement of each garnish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ARTISAN CRAFTSMANSHIP SHOWCASE --- */}
      <section className="bg-[#2D1810] py-40 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Image Side */}
            <div className="relative lg:sticky lg:top-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Main Image */}
                <div className="relative overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649675602217-416a4fafcecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFrZXIlMjBoYW5kcyUyMGRvdWdofGVufDF8fHx8MTc2ODk4MjQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Artisan Craftsmanship"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Gold Border Frame */}
                  <div className="absolute inset-0 border-8 border-[#D4AF6A]/20 pointer-events-none" />
                  <div className="absolute inset-4 border border-[#D4AF6A]/40 pointer-events-none" />
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#D4AF6A]" />
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#D4AF6A]" />
              </motion.div>

              {/* Floating Quote Card */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 bg-gradient-to-br from-[#D4AF6A] to-[#B8935A] p-8 shadow-2xl"
              >
                <Quote className="text-white/30 mb-6" size={40} />
                <p className="font-serif italic text-2xl text-white leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Every creation is a masterpiece, crafted with devotion and precision
                </p>
                <div className="mt-6 h-px bg-white/30" />
                <p className="mt-4 text-white/80 text-sm tracking-wider uppercase">Master Baker's Creed</p>
              </motion.div>
            </div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-5xl font-serif mb-6 text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  The Art of
                  <span className="block text-[#D4AF6A] italic mt-2">Perfection</span>
                </h3>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rotate-45 bg-[#D4AF6A]" />
                  <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF6A] to-transparent" />
                </div>
              </div>

              {/* Values */}
              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-full border-2 border-[#D4AF6A] flex items-center justify-center group-hover:bg-[#D4AF6A] transition-colors duration-300">
                    <Globe className="text-[#D4AF6A] group-hover:text-[#2D1810]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-3 italic text-[#E8D4B0]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Global Excellence
                    </h4>
                    <p className="text-white/70 font-light leading-relaxed">
                      From Madagascar's finest vanilla beans to artisanal French butter and Turkish pistachios—we source only the world's most exceptional ingredients.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-full border-2 border-[#D4AF6A] flex items-center justify-center group-hover:bg-[#D4AF6A] transition-colors duration-300">
                    <Clock className="text-[#D4AF6A] group-hover:text-[#2D1810]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-3 italic text-[#E8D4B0]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Time-Honored Tradition
                    </h4>
                    <p className="text-white/70 font-light leading-relaxed">
                      Our bakers rise before dawn, honoring centuries-old techniques while employing modern precision to ensure every pastry is perfection.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-full border-2 border-[#D4AF6A] flex items-center justify-center group-hover:bg-[#D4AF6A] transition-colors duration-300">
                    <Heart className="text-[#D4AF6A] group-hover:text-[#2D1810]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-3 italic text-[#E8D4B0]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Crafted with Love
                    </h4>
                    <p className="text-white/70 font-light leading-relaxed">
                      Every creation carries the warmth of family tradition—we don't just bake, we create the centerpieces of your most treasured memories.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- LUXURY GALLERY SHOWCASE --- */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF6A]" />
                <div className="w-2 h-2 rotate-45 bg-[#D4AF6A]" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF6A]" />
              </div>
            </div>
            <h2 className="text-6xl font-serif text-[#2D1810] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Philosophy
            </h2>
            <p className="text-[#6B5D52] text-xl font-light max-w-2xl mx-auto">
              Three pillars that define our unwavering commitment to excellence
            </p>
          </motion.div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D4AF6A]/20">
            {[
              { 
                icon: Sparkles,
                number: '01',
                title: 'Premium Ingredients', 
                desc: 'Locally sourced organic fruits, imported European chocolates, and the finest spices from around the world—only the best for our creations.' 
              },
              { 
                icon: Award,
                number: '02',
                title: 'Artisanal Methods', 
                desc: 'Traditional recipes refined over generations, combined with modern precision to achieve the perfect balance of flavor and texture.' 
              },
              { 
                icon: Users,
                number: '03',
                title: 'Personal Touch', 
                desc: 'Every guest is family. We take time to understand your vision and craft bespoke creations that exceed expectations.' 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-[#FAF7F2] p-12 hover:bg-white transition-all duration-500 group relative overflow-hidden"
              >
                {/* Decorative Background on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF6A]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8 w-16 h-16 rounded-full border-2 border-[#D4AF6A]/30 flex items-center justify-center group-hover:border-[#D4AF6A] group-hover:bg-[#D4AF6A] transition-all duration-300">
                    <item.icon className="text-[#D4AF6A] group-hover:text-white transition-colors duration-300" size={28} />
                  </div>

                  {/* Number */}
                  <span className="text-[#D4AF6A] text-sm tracking-[0.3em] block mb-6 font-light">
                    {item.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-serif text-[#2D1810] mb-6 group-hover:text-[#C9A961] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-px bg-[#D4AF6A]/50 mb-6 group-hover:w-24 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-[#6B5D52] font-light leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SIGNATURE SHOWCASE --- */}
      <section className="py-40 bg-gradient-to-b from-white via-[#FAF7F2] to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF6A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="mb-8">
                <span className="text-[#D4AF6A] text-sm tracking-[0.4em] uppercase block mb-4">Signature Collection</span>
                <h2 className="text-5xl sm:text-6xl font-serif text-[#2D1810] leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Where Every Detail
                  <span className="block text-[#C9A961] italic mt-2">Tells a Story</span>
                </h2>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rotate-45 bg-[#D4AF6A]" />
                  <div className="w-24 h-px bg-[#D4AF6A]" />
                </div>
              </div>

             <div className="space-y-6 text-lg text-[#6B5D52] font-light leading-relaxed mb-12">
              <p>
                At Laziz, Perfection knows <span className="text-[#2D1810] font-normal italic"> No Borders </span> . We blend our own 
                <span className="text-[#2D1810] font-normal italic"> Artisanal Craftsmanship </span> 
                with a premier selection of imported delicacies sourced from the world’s finest confectionaries.
              </p>
              <p>
                Whether meticulously baked in-house or flown in from the world's culinary capitals, 
                our inventory represents the absolute zenith of global pastry design.
              </p>
            </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-[#D4AF6A]/20">
                <div>
                  <div className="text-4xl font-serif text-[#C9A961] mb-2">15+</div>
                  <div className="text-sm text-[#6B5D52] uppercase tracking-wider">Signature Pastries</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-[#C9A961] mb-2">100%</div>
                  <div className="text-sm text-[#6B5D52] uppercase tracking-wider">Handcrafted Daily</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-[#C9A961] mb-2">20+</div>
                  <div className="text-sm text-[#6B5D52] uppercase tracking-wider">Years Combined Expertise</div>
                </div>
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Large Image */}
                <div className="col-span-2 relative group overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1764486601089-44f40c4d2b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYXN0cnklMjBkaXNwbGF5fGVufDF8fHx8MTc2ODk4MjQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Luxury Pastry Display"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1810]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Small Image 1 */}
                <div className="relative group overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581745071812-e69f8cf9e898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2FrZSUyMGRlY29yYXRpb258ZW58MXx8fHwxNzY4OTUyMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Elegant Cake"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />
                </div>

                {/* Small Image 2 */}
                <div className="relative group overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80"
                    alt="Artisan Baking"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#D4AF6A] opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#D4AF6A] opacity-50" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- ELEGANT CALL TO ACTION --- */}
      <section className="py-20 bg-gradient-to-br from-[#2D1810] via-[#3D2418] to-[#2D1810] border-y border-[#D4AF6A]/20 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          {/* Ornamental Top */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF6A] to-[#D4AF6A]" />
              <Sparkles className="text-[#D4AF6A]" size={20} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-[#D4AF6A] to-[#D4AF6A]" />
            </div>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif text-white mb-6 leading-tight" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience the
            <span className="block text-[#E8D4B0] italic mt-2">Laziz Difference</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join us in celebrating life's sweetest moments with creations that transcend the ordinary
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            
            <Link
            to="/cakes"
            className="group px-10 py-4 bg-gradient-to-r from-[#D4AF6A] to-[#C9A961] text-[#2D1810] font-medium rounded-full flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#D4AF6A]/50 transition-all duration-300 hover:scale-105 inline-flex"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>Explore Our Cakes</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
            
          </motion.div>

          {/* Bottom Ornament */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF6A]" />
              <div className="w-2 h-2 rotate-45 bg-[#D4AF6A]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF6A]" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;