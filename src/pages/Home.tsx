import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import the Link component
import Navbar from "@/components/Navbar";
import Modal from '@/components/Modal'; // Import the modal component


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal open/close
  const [selectedCake, setSelectedCake] = useState({ name: '', description: '', imageUrl: ''  }); // Store cake details for modal
  
  const rotatingWords = ['Fresh', 'Artisan', 'Handcrafted', 'Delicious', 'Premium'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const cakes = [
    {
      name: 'Cascading Greenery & Roses',
      image: '/images/wedding/wedding-5tier-greenery-roses.jpg',
      description: 'Grand 5-tier white wedding cake with fresh white roses',
    },
    {
      name: 'Pink Butterfly Dreams',
      image: 'images/birthday/birthday-butterfly-pink.jpg',
      description: 'Two-tier white cake with pink butterflies and iridescent bubbles',
    },
    {
      name: 'Cascading Pink Roses',
      image: '/images/wedding/wedding-cascading-roses.jpg',
      description: 'Four-tier blush wedding cake with cascading pink and cream roses',
    },
    
  ];

  const openModal = (name: string, description: string, imageUrl: string) => {
    setSelectedCake({ name, description, imageUrl });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="min-h-screen bg-[#FBF8F3]">

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
        {/* Layered Background Treatment */}
        <div className="absolute inset-0">
          {/* Base Image */}
          <ImageWithFallback
            src="/images/Bakery_Hero.png"
            alt="Laziz Bakery Signature Creations"
            className="w-full h-full object-cover object-left md:object-center scale-105"
          />
          
          {/* Multi-layer Sophisticated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/80 via-[#1a0f0a]/70 to-[#0a0605]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          
          {/* Subtle Warm Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-[#D4A574]/10 via-transparent to-transparent opacity-40" />
          
          {/* Glass Diffusion Effect */}
          <div className="absolute inset-0 backdrop-blur-[0.5px]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A574]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A574]/20 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Animated Rotating Words - Above Main Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 text-[#D4A574] text-lg sm:text-xl tracking-[0.3em] uppercase">
              <div className="w-8 h-px bg-[#D4A574]/50" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
              <div className="w-8 h-px bg-[#D4A574]/50" />
            </div>
          </motion.div>

          {/* Luxury Typography with Custom Fonts */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12 space-y-4"
          >
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block mb-3 sm:mb-4 font-normal"
              >
                Freshly Baked.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="block mb-3 sm:mb-4 font-normal"
              >
                Warmly Made.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="block text-[#F4E4C1] italic font-medium tracking-wider"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Always Laziz.
              </motion.span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-14 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Artisan Cakes and Pastries, Handcrafted Daily with Precision and Care.
          </motion.p>

          {/* Luxury CTA Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            {/* Primary CTA - Glass Morphism */}
          <Link
            to="/cakes" // This will point to the Cakes page
            className="group relative w-full sm:w-auto overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A574] to-[#C4956A] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
            
            {/* Button */}
            <div 
              className="relative px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white text-lg font-light tracking-wide hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>View Our Cakes</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>

            {/* Secondary CTA - Minimal Elegant */}
            <a
              href="tel:+17036515000"
              className="group w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 rounded-2xl text-white text-lg font-light tracking-wide hover:bg-white/5 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <Phone className="w-5 h-5" />
              <span>Call to Order</span>
            </a>
          </motion.div>

          {/* Subtle Brand Mark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-3 text-white/40 text-sm font-light tracking-widest"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <div className="w-12 h-px bg-white/20" />
          <span className="text-center md:text-left">SPRINGFIELD, VA</span>
          <div className="w-12 h-px bg-white/20" />
        </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Bakes Section */}
<section id="cakes" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3]">
  <div className="max-w-7xl mx-auto">
    <div className="max-w-7xl mb-20 text-center lg:text-left">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start"
      >
        <motion.h3 
          className="text-6xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#330E09] mb-8 lg:mb-0 leading-tight tracking-wider"
          style={{ fontFamily: "'Didot', serif" }}
        >
          Signature Creations
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl sm:text-2xl text-[#330E09] leading-relaxed font-light mx-auto lg:mx-0 max-w-3xl lg:w-2/3"
          style={{ fontFamily: "'Didot', serif" }}
        >
          A curated selection of our most loved cakes and baked goods, handcrafted daily with care.
        </motion.p>
      </motion.div>
      <div className="w-20 h-1 mx-auto lg:mx-0 mt-8 mb-8 bg-gradient-to-r from-[#D4A574] to-[#F4E4C1] rounded-full"></div>
    </div>

    {/* Editorial Layout */}
    <div className="space-y-8 lg:space-y-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* Large Feature - Left (Hero Cake) */}
        <div className="lg:col-span-7 group cursor-pointer" onClick={() => openModal(cakes[0].name, cakes[0].description, cakes[0].image)}>
          <div className="relative overflow-hidden rounded-3xl shadow-xl h-[500px] lg:h-[700px]">
            <ImageWithFallback
              src={cakes[0].image}
              alt={cakes[0].name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h4 className="text-3xl sm:text-4xl mb-2 text-[#C49E6C]">{cakes[0].name}</h4>
              <p className="text-lg text-white/90">{cakes[0].description}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Stacked Items */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {cakes.slice(1).map((cake, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => openModal(cake.name, cake.description, cake.image)}>
              <div className="relative overflow-hidden rounded-3xl shadow-lg h-[400px] lg:h-[340px]">
                <ImageWithFallback
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl mb-1 text-[#F7E7CE]">{cake.name}</h4>
                  <p className="text-white/90">{cake.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

          {/* Bottom Row - Wide Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 lg:col-start-3 group cursor-pointer" onClick={() => openModal("Laziz Cream Roll", "Daily Pastry Selection, Fresh from our ovens to your table", "/images/Pastries/laziz-cream-roll.jpeg")}>
              <div className="relative overflow-hidden rounded-3xl shadow-lg h-[400px] lg:h-[450px]">
                <ImageWithFallback
                  src="/images/Pastries/laziz-cream-roll.jpeg" 
                  alt="Fresh Pastries Selection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                  <h4 className="text-3xl sm:text-4xl mb-2 text-[#C49E6C]">
                    Laziz Cream Roll
                  </h4>
                  <p className="text-lg text-white/90">
                    Daily Pastry Selection, Fresh from our ovens to your table
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/cakes" // This will point to the Cakes page
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#5D4E37] text-white text-lg rounded-full hover:bg-[#4A3D2A] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Our Cakes
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* Modal Component */}
      <Modal 
        isOpen={modalOpen} 
        closeModal={closeModal} 
        cakeName={selectedCake.name} 
        description={selectedCake.description} 
        imageUrl={selectedCake.imageUrl} 
      />

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556250438-1ba2507e9edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjaGVmJTIwaGFuZHN8ZW58MXx8fHwxNzY4OTIwMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Baking with care"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl sm:text-5xl text-[#5D4E37] mb-6">
                About Laziz Bakery
              </h3>
              <div className="space-y-4 text-lg text-[#8B7355] mb-8">
                <p>
                  Founded with passion and dedication, Laziz Bakery brings together the finest traditions of Middle Eastern and European baking. Every item is crafted by hand using time-honored techniques and premium ingredients.
                </p>
                <p>
                  As a family-owned bakery, we take pride in creating more than just baked goods — we create memories. From our signature breads to our decadent desserts, every bite tells a story of quality, authenticity, and love.
                </p>
                <p>
                  Our commitment is simple: fresh ingredients, traditional methods, and a warm welcome to every customer who walks through our doors.
                </p>
              </div>
              <Link
                to="/about" // This will point to the About page
                className="inline-flex items-center gap-2 text-[#D4A574] hover:text-[#C4956A] transition-colors text-lg"
              >
                Learn More About Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Catering Section */}
      <section id="catering" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0605]">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680342627018-1cfc75d0597a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMGV2ZW50fGVufDF8fHx8MTc2ODkyNDI1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Catering"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f0a] via-[#2C1810]/95 to-[#0a0605]" />
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-[#D4A574]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#C4956A]/10 rounded-full blur-3xl"
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              {/* Premium Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-sm border border-[#D4A574]/30 rounded-full"
              >
                <div className="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse" />
                <span 
                  className="text-[#F4E4C1] text-sm tracking-[0.3em] uppercase font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Premium Catering
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="block mb-3">Elevate Your</span>
                <span className="block text-[#D4A574] italic">Special Moments</span>
              </motion.h3>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl text-white/70 leading-relaxed max-w-xl"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                From intimate gatherings to grand celebrations, we craft unforgettable experiences with our artisan baked creations. Every detail perfected, every bite memorable.
              </motion.p>

              {/* Feature List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { label: 'Custom Designs', icon: '✦' },
                  { label: 'Any Event Size', icon: '✦' },
                  { label: 'Fresh Daily', icon: '✦' },
                  { label: 'Expert Service', icon: '✦' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="text-[#D4A574] text-xl">{feature.icon}</span>
                    <span 
                      className="text-base font-light tracking-wide"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-5 pt-4"
              >
                {/* Primary CTA */}
                <a
                  href="tel:+17036515000"
                  className="group relative overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A574] via-[#E6B887] to-[#C4956A] rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
                  <div 
                    className="relative px-8 py-5 bg-gradient-to-r from-[#D4A574] to-[#C4956A] rounded-2xl text-white flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-lg font-light tracking-wide">Call to Order</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {/* Stat Card 1 */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-5xl mb-4"
                  >
                    🎂
                  </motion.div>
                  <h4 
                    className="text-4xl text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    500+
                  </h4>
                  <p 
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Events Catered
                  </p>
                </div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4956A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-5xl mb-4"
                  >
                    ⭐
                  </motion.div>
                  <h4 
                    className="text-4xl text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    5.0
                  </h4>
                  <p 
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Client Rating
                  </p>
                </div>
              </motion.div>

              {/* Stat Card 3 */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E6B887]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-5xl mb-4"
                  >
                    🍰
                  </motion.div>
                  <h4 
                    className="text-4xl text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    100%
                  </h4>
                  <p 
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Fresh Daily
                  </p>
                </div>
              </motion.div>

              {/* Stat Card 4 */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-5xl mb-4"
                  >
                    👨‍🍳
                  </motion.div>
                  <h4 
                    className="text-4xl text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    15+
                  </h4>
                  <p 
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Years Experience
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Accent - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#D4A574]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-[#D4A574]/30">
                  <Phone className="w-8 h-8 text-[#D4A574]" />
                </div>
                <div>
                  <p 
                    className="text-white/50 text-sm font-light mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Call us directly
                  </p>
                  <a
                    href="tel:+17036515000"
                    className="text-2xl text-white hover:text-[#D4A574] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    +1 (703) 651-5000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/40 text-sm font-light tracking-widest">
                <div className="w-12 h-px bg-white/20" />
                <span style={{ fontFamily: "'Montserrat', sans-serif" }}>AVAILABLE 7 DAYS A WEEK</span>
                <div className="w-12 h-px bg-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl text-[#5D4E37] mb-4">
              Visit Us
            </h3>
            <p className="text-lg text-[#8B7355]">
              We'd love to welcome you to our bakery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F4E4C1] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#8B4513]" />
                </div>
                <div>
                  <h4 className="text-xl text-[#5D4E37] mb-2">
                    Address
                  </h4>
                  <p className="text-lg text-[#8B7355]">
                    7912 Yarnwood Ct<br />
                    Springfield, VA 22153
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F4E4C1] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#8B4513]" />
                </div>
                <div>
                  <h4 className="text-xl text-[#5D4E37] mb-2">
                    Phone
                  </h4>
                  <a
                    href="tel:+17036515000"
                    className="text-lg text-[#D4A574] hover:text-[#C4956A] transition-colors"
                  >
                    +1 (703) 651-5000
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-xl text-[#5D4E37] mb-4">
                  Hours
                </h4>
                <div className="space-y-2 text-lg text-[#8B7355]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#E8DCC8] h-[400px] lg:h-full min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-[#8B7355]">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">
                    7912 Yarnwood Ct, Springfield, VA 22153
                  </p>
                  <a
                    href="https://maps.google.com/?q=7912+Yarnwood+Ct+Springfield+VA+22153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[#D4A574] hover:text-[#C4956A] transition-colors underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}