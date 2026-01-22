import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalaProps {
  isOpen: boolean;
  closeModala: () => void;
  afghanName: string;
  description: string;
  imageUrl: string;
}

const Modala: React.FC<ModalaProps> = ({ isOpen, closeModala, afghanName, description, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center backdrop-blur-md"
    >
      <motion.div
        className="relative max-w-3xl mx-auto bg-[#F9F4F1] rounded-3xl p-10 overflow-hidden"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModala}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#D4A574] text-white hover:bg-[#C4956A] transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modala Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Afghan Image */}
          <div className="flex-shrink-0 w-72 h-72 lg:w-96 lg:h-96 overflow-hidden rounded-lg shadow-xl">
            <motion.img
              src={imageUrl}
              alt={afghanName}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Afghan Information */}
          <div className="space-y-4 text-center lg:text-left">
            <motion.h3
              className="text-4xl sm:text-5xl font-serif font-extrabold text-[#330E09] tracking-wider"
              style={{ fontFamily: "'Didot', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {afghanName}
            </motion.h3>

            <motion.p
              className="text-lg sm:text-xl text-[#8B7355] leading-relaxed font-light max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: "'Didot', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Decorative Border Animation */}
        <motion.div
          className="absolute inset-0 border-2 border-[#D4A574] rounded-3xl pointer-events-none"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Modala;
