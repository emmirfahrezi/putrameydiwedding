"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

export default function EventDetails() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth cinematic vertical parallax translation
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const yGunungan = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [22, -18]);

  return (
    <section 
      ref={sectionRef} 
      id="events" 
      className="relative w-full bg-[#1E060A] overflow-clip"
    >
      
      {/* CINEMATIC STICKY VIEWPORT PHOTO BACKGROUND (MENCEGAH NGEZOOM) */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden pointer-events-none -mb-[100dvh] z-0">
        <motion.div 
          style={{ y: bgY }}
          className="relative w-full h-[120%] -top-[10%]"
        >
          <Image
            src="/Prewedding/weddingputra/PUTRA4.webp"
            alt="Riky & Meydi Wedding Background"
            fill
            sizes="(max-width: 480px) 100vw, 430px"
            loading="lazy"
            className="object-cover object-[center_20%] scale-105 filter blur-[2px] brightness-[0.55]"
          />
          {/* Luxury Royal Wine & Dark Shadow Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E060A]/85 via-[#2E0B11]/70 to-[#1E060A]/90" />
        </motion.div>
      </div>

      {/* SECTION CONTENT OVERLAY */}
      <div className="relative z-10 w-full py-20 flex flex-col items-center text-center px-4">

      {/* Javanese Gunungan Royal Emblem Accent with Parallax Floating */}
      <motion.div
        style={{ y: yGunungan }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-16 h-16 mb-2 drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
      >
        <Image
          src="/bunga/gunungan.webp"
          alt="Gunungan Wayang Jawa"
          width={80}
          height={80}
          className="w-full h-full object-contain filter drop-shadow"
        />
      </motion.div>

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto mb-10 relative z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="text-[#F3E5AB] text-[8px]">✦</span>
          <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#F3E5AB]/90 font-bold">
            Waktu &amp; Lokasi
          </p>
          <span className="text-[#F3E5AB] text-[8px]">✦</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-3 drop-shadow-md">
          Rangkaian Acara
        </h2>
        
        <p className="text-gray-200 max-w-xs mx-auto leading-relaxed text-xs">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada:
        </p>

        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#D4AF37] text-[9px]">✦</span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </motion.div>

      {/* UNIFIED LUXURY ROYAL ARCHED CARTOUCHE (LONJONG BULET NYATU) */}
      <div className="relative w-full max-w-[360px] z-10 mt-2">
        
        {/* Floating Floral Bouquet Hugging Top-Left Curve */}
        <div className="absolute -top-7 -left-7 w-24 h-24 pointer-events-none z-20">
          <img 
            src="/bunga/1.webp" 
            alt="Floral Accent" 
            className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" 
          />
        </div>

        {/* Floating Floral Bouquet Hugging Bottom-Right Curve */}
        <div className="absolute -bottom-7 -right-7 w-24 h-24 pointer-events-none z-20">
          <img 
            src="/bunga/2.webp" 
            alt="Floral Accent" 
            className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" 
          />
        </div>

        {/* Grand Unified Capsule Tablet with Multi-Layer Gold & Royal Burgundy Rim */}
        <motion.div
          style={{ y: yCard1 }}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[3.5rem] p-[3px] bg-gradient-to-b from-[#8C1D24] via-[#5E1920] to-[#8C1D24] border-2 border-[#E5C158] shadow-[0_25px_60px_rgba(40,8,12,0.65)]"
        >
          {/* Inner Ivory Parchment Canvas */}
          <div className="relative w-full h-full rounded-[3.3rem] bg-[#FDFBF7]/96 backdrop-blur-md px-6 py-9 flex flex-col items-center text-center overflow-hidden">
            
            {/* Double Recessed Gold & Royal Burgundy Hairline Borders */}
            <div className="absolute inset-2.5 rounded-[3.1rem] border border-[#78232B]/25 pointer-events-none" />
            <div className="absolute inset-3.5 rounded-[2.9rem] border border-[#C5A059]/40 pointer-events-none" />

            {/* ================= 1. AKAD NIKAH ================= */}
            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Royal Crest Icon */}
              <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] text-[#F3E5AB] flex items-center justify-center mb-3 border-2 border-[#D4AF37] ring-2 ring-[#C5A059]/30 shadow-md">
                <Calendar size={22} className="text-[#F3E5AB]" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-[#2C352E] mb-1 tracking-wide">
                Akad Nikah
              </h3>
              
              <p className="font-cinzel text-xs font-bold tracking-wider text-[#8C6D37] uppercase mb-3.5">
                Rabu, 25 November 2026
              </p>
              
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-3.5" />

              {/* Time Pill Badge */}
              <div className="flex items-center gap-2 text-xs text-gray-700 mb-3 bg-[#F6F2EC] px-4 py-1.5 rounded-full border border-[#C5A059]/35 shadow-xs">
                <Clock size={14} className="text-[#5E1920] flex-shrink-0" />
                <span className="font-semibold text-gray-800">09:00 WIB — Selesai</span>
              </div>
              
              {/* Location Detail */}
              <div className="flex flex-col items-center text-xs text-gray-600 mb-5">
                <div className="flex items-center gap-1.5 font-bold text-gray-800 mb-0.5">
                  <MapPin size={15} className="text-[#5E1920] flex-shrink-0" />
                  <span>Gedung Community Center</span>
                </div>
                <span className="text-[11px] text-gray-500 max-w-[260px] leading-relaxed">
                  Gedung Community Center, Simpang Lagoi, Kota Baru
                </span>
              </div>

              {/* Shimmer Button */}
              <a 
                href="https://maps.google.com/?q=Gedung+Community+Center+Simpang+Lagoi+Kota+Baru"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#5E1920] via-[#78232B] to-[#5E1920] border border-[#E5C158]/80 text-[#FDFBF7] rounded-full text-xs font-semibold tracking-wider shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
                <span className="font-cinzel text-[11px] font-bold tracking-wider relative z-10">LIHAT LOKASI</span>
                <ExternalLink size={12} className="relative z-10 text-[#F3E5AB]" />
              </a>
            </div>

            {/* ================= GRAND ORNAMENTAL CONNECTOR ("NYATU") ================= */}
            <div className="relative z-10 flex items-center justify-center gap-3 w-full my-7">
              <span className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] border-2 border-[#E5C158] flex items-center justify-center shadow-md">
                <span className="font-script text-[#F3E5AB] text-xl -mt-0.5">&amp;</span>
              </div>
              <span className="w-14 h-[1px] bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
            </div>

            {/* ================= 2. RESEPSI PERNIKAHAN ================= */}
            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Royal Crest Icon */}
              <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] text-[#F3E5AB] flex items-center justify-center mb-3 border-2 border-[#D4AF37] ring-2 ring-[#C5A059]/30 shadow-md">
                <Calendar size={22} className="text-[#F3E5AB]" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-[#2C352E] mb-1 tracking-wide">
                Resepsi Pernikahan
              </h3>
              
              <p className="font-cinzel text-xs font-bold tracking-wider text-[#8C6D37] uppercase mb-3.5">
                Rabu, 25 November 2026
              </p>
              
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-3.5" />

              {/* Time Pill Badge */}
              <div className="flex items-center gap-2 text-xs text-gray-700 mb-3 bg-[#F6F2EC] px-4 py-1.5 rounded-full border border-[#C5A059]/35 shadow-xs">
                <Clock size={14} className="text-[#5E1920] flex-shrink-0" />
                <span className="font-semibold text-gray-800">13:00 WIB — Selesai</span>
              </div>
              
              {/* Location Detail */}
              <div className="flex flex-col items-center text-xs text-gray-600 mb-5">
                <div className="flex items-center gap-1.5 font-bold text-gray-800 mb-0.5">
                  <MapPin size={15} className="text-[#5E1920] flex-shrink-0" />
                  <span>Gedung Community Center</span>
                </div>
                <span className="text-[11px] text-gray-500 max-w-[260px] leading-relaxed">
                  Gedung Community Center, Simpang Lagoi, Kota Baru
                </span>
              </div>

              {/* Shimmer Button */}
              <a 
                href="https://maps.google.com/?q=Gedung+Community+Center+Simpang+Lagoi+Kota+Baru"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#5E1920] via-[#78232B] to-[#5E1920] border border-[#E5C158]/80 text-[#FDFBF7] rounded-full text-xs font-semibold tracking-wider shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
                <span className="font-cinzel text-[11px] font-bold tracking-wider relative z-10">LIHAT LOKASI</span>
                <ExternalLink size={12} className="relative z-10 text-[#F3E5AB]" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
