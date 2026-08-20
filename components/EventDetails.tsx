"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function EventDetails() {
  const containerRef = useRef<HTMLSelectElement | any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const flowerTopY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const flowerBottomY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <section ref={containerRef} className="relative w-full pt-12 pb-24 bg-transparent flex flex-col items-center text-center px-6">
      
      {/* FLORAL CLUSTERS */}
      {/* TOP LEFT */}
      <motion.div
        style={{ y: flowerTopY }}
        className="absolute -top-12 -left-12 w-56 md:w-64 z-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: -30, y: -30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full animate-sway"
        >
          <Image src="/bunga/bunga_merah_kiri.png" alt="Flower" width={300} height={300} className="w-full h-auto object-contain" />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: flowerTopY }}
        className="absolute top-0 -left-16 w-48 z-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: -20, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="w-full h-full animate-sway-reverse"
        >
          <Image src="/bunga/1.png" alt="Flower" width={300} height={300} className="w-full h-auto object-contain" />
        </motion.div>
      </motion.div>

      {/* TOP RIGHT */}
      <motion.div
        style={{ y: flowerTopY }}
        className="absolute -top-12 -right-12 w-56 md:w-64 z-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: 30, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          className="w-full h-full animate-sway-reverse"
        >
          <Image src="/bunga/bunga_merah_kanan.png" alt="Flower" width={300} height={300} className="w-full h-auto object-contain transform scale-y-[-1]" />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: flowerTopY }}
        className="absolute top-0 -right-16 w-48 z-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-full h-full animate-sway"
        >
          <Image src="/bunga/2.png" alt="Flower" width={300} height={300} className="w-full h-auto object-contain transform scale-y-[-1]" />
        </motion.div>
      </motion.div>

      {/* BOTTOM RIGHT */}
      <motion.div
        style={{ y: flowerBottomY }}
        className="absolute -bottom-12 -right-12 w-64 md:w-72 z-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: 30, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="w-full h-full animate-sway"
        >
          <Image src="/bunga/bunga_merah_kanan.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain" />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: flowerBottomY }}
        className="absolute -bottom-4 -right-20 w-56 md:w-64 z-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="w-full h-full animate-sway-reverse"
        >
          <Image src="/bunga/3.png" alt="Flower" width={300} height={300} className="w-full h-auto object-contain transform -scale-x-100" />
        </motion.div>
      </motion.div>

      {/* BOTTOM LEFT */}
      <motion.div
        style={{ y: flowerBottomY }}
        className="absolute -bottom-12 -left-12 w-64 md:w-72 z-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: -30, y: -30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-full h-full animate-sway-reverse"
        >
          <Image src="/bunga/bunga_merah_kiri.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain transform scale-y-[-1]" />
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: flowerBottomY }}
        className="absolute -bottom-4 -left-20 w-56 md:w-64 z-20 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, x: -20, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full h-full animate-sway"
        >
          <Image src="/bunga/4.png" alt="Flower" width={300} height={300} className="w-full h-auto object-contain" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 mb-16 mt-8 md:mt-12"
      >
        <p className="font-serif text-xl italic text-[#C1A073] mb-4" style={{ textShadow: "0 0 8px rgba(253, 251, 247, 0.9)" }}>Save The Date</p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#324335] font-bold tracking-widest" style={{ textShadow: "0 0 12px rgba(253, 251, 247, 0.9), 0 2px 4px rgba(255, 255, 255, 1)" }}>
          12 . 12 . 2026
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl z-30 relative">
        
        {/* Akad Nikah */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 bg-white/85 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-[#E8E1D5] flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-[#F6F2EC] rounded-full flex items-center justify-center text-[#C1A073] mb-6">
            <Calendar size={24} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#324335] mb-2">Akad Nikah</h3>
          <p className="text-gray-600 text-sm mb-6">Sabtu, 12 Desember 2026</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
            <Clock size={16} className="text-[#C1A073]" />
            <span>08:00 WIB - Selesai</span>
          </div>
          
          <div className="flex items-start gap-2 text-sm text-gray-700 text-center mb-8">
            <MapPin size={16} className="text-[#C1A073] mt-1 flex-shrink-0" />
            <span>Masjid Raya Al-Bantani<br/><span className="text-xs text-gray-500">Jl. Raya Serang - Pandeglang</span></span>
          </div>

          <a href="#" className="mt-auto px-6 py-2 bg-[#521C20] text-white rounded-full text-xs font-semibold tracking-wider hover:bg-[#3d1518] transition-colors">
            LIHAT LOKASI
          </a>
        </motion.div>

        {/* Resepsi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 bg-white/85 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-[#E8E1D5] flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-[#F6F2EC] rounded-full flex items-center justify-center text-[#C1A073] mb-6">
            <Calendar size={24} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#324335] mb-2">Resepsi</h3>
          <p className="text-gray-600 text-sm mb-6">Sabtu, 12 Desember 2026</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
            <Clock size={16} className="text-[#C1A073]" />
            <span>11:00 WIB - 15:00 WIB</span>
          </div>
          
          <div className="flex items-start gap-2 text-sm text-gray-700 text-center mb-8">
            <MapPin size={16} className="text-[#C1A073] mt-1 flex-shrink-0" />
            <span>Gedung Smesco Convention Hall<br/><span className="text-xs text-gray-500">Jl. Gatot Subroto Kav. 94</span></span>
          </div>

          <a href="#" className="mt-auto px-6 py-2 bg-[#521C20] text-white rounded-full text-xs font-semibold tracking-wider hover:bg-[#3d1518] transition-colors">
            LIHAT LOKASI
          </a>
        </motion.div>
        
      </div>

    </section>
  );
}
