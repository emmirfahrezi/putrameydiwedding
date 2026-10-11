"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Profiles() {
  return (
    <section 
      id="profiles" 
      className="relative w-full py-16 flex flex-col items-center text-center px-4 overflow-hidden"
    >
      
      {/* VINTAGE BOTANICAL TREES & JOGLO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bunga/vintage_trees_joglo_bg.webp"
            alt="Vintage Botanical Trees Background"
            fill
            sizes="(max-width: 480px) 100vw, 430px"
            loading="lazy"
            className="object-cover object-center opacity-85"
          />
          {/* Soft Warm Parchment Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/75 to-[#FDFBF7]/90" />
        </div>
      </div>

      {/* FLOATING BOTANICAL ACCENTS */}
      <div className="absolute top-28 -left-8 w-24 h-24 pointer-events-none opacity-60 z-10">
        <img src="/bunga/1.webp" alt="Floral Floating Left" className="w-full h-full object-contain filter drop-shadow-md" />
      </div>
      <div className="absolute bottom-36 -right-8 w-24 h-24 pointer-events-none opacity-60 z-10">
        <img src="/bunga/2.webp" alt="Floral Floating Right" className="w-full h-full object-contain filter drop-shadow-md" />
      </div>

      {/* ROYAL SIDE BORDER BANDS (MATCHING LUXURY INVITATION STATIONERY) */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 sm:w-3.5 bg-[#54161C] border-r border-[#C5A059]/70 z-20 pointer-events-none opacity-90">
        <div className="w-full h-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:5px_5px] opacity-30" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-2.5 sm:w-3.5 bg-[#54161C] border-l border-[#C5A059]/70 z-20 pointer-events-none opacity-90">
        <div className="w-full h-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:5px_5px] opacity-30" />
      </div>

      {/* SECTION HEADER: Gunungan, We Are Getting Married, Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto mb-10 px-4 relative z-10"
      >
        {/* Golden Gunungan Wayang Royal Emblem */}
        <div className="w-14 h-14 mx-auto mb-2 drop-shadow-[0_4px_12px_rgba(212,175,55,0.45)]">
          <Image
            src="/bunga/gunungan.webp"
            alt="Gunungan Wayang"
            width={70}
            height={70}
            className="w-full h-full object-contain filter drop-shadow"
          />
        </div>

        {/* Elegant Script Header: We Are Getting Married! */}
        <h2 className="font-script text-4xl sm:text-5xl text-[#8C6D37] mb-3 drop-shadow-sm font-normal">
          We Are Getting Married!
        </h2>
        
        {/* Formal Greeting Text Matching Reference */}
        <p className="font-serif text-xs sm:text-[13px] text-[#4A3B32] leading-relaxed max-w-xs mx-auto italic px-2">
          Merupakan Suatu Kehormatan Dan Kebahagiaan Bagi Kami Apabila Bapak/Ibu/Saudara/I Berkenan Untuk Hadir Dan Memberikan Doa Restu. Atas Kehadiran Dan Doa Restunya Kami Ucapkan Terima Kasih.
        </p>

        {/* Subtle Gold Filigree Line */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#78232B]" />
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
        </div>
      </motion.div>

      {/* PROFILES CONTAINER (UNIFIED GROOM & BRIDE) */}
      <div className="w-full max-w-sm flex flex-col items-center gap-12 z-10">
        
        {/* 1. THE BRIDE (INTAN PERMATASARI) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex flex-col items-center"
        >
          {/* ARCH PHOTO WITH ROYAL RED RIM & FLORAL ACCENTS */}
          <div className="relative w-[215px] h-[315px] mb-4">
            
            {/* Left Floral Accent (Hugging Middle-Left of Arch) */}
            <div 
              style={{ 
                position: "absolute", 
                left: -42, 
                top: "36%", 
                width: 110, 
                height: 110, 
                zIndex: 30, 
                pointerEvents: "none" 
              }}
            >
              <img 
                src="/bunga/1.webp" 
                alt="Rose Floral Accent" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))"
                }}
              />
            </div>

            {/* Right Floral Accent (Hugging Bottom-Right of Arch) */}
            <div 
              style={{ 
                position: "absolute", 
                right: -38, 
                bottom: -14, 
                width: 115, 
                height: 115, 
                zIndex: 30, 
                pointerEvents: "none" 
              }}
            >
              <img 
                src="/bunga/2.webp" 
                alt="Rose Floral Accent" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))"
                }}
              />
            </div>

            {/* Outer Crimson Red Arch Frame with Gold Inset */}
            <div className="relative w-full h-full rounded-[108px] p-[3px] bg-gradient-to-b from-[#7A1D25] via-[#56141A] to-[#7A1D25] shadow-[0_12px_30px_rgba(86,20,26,0.3)]">
              <div className="relative w-full h-full rounded-[105px] overflow-hidden bg-stone-200">
                <Image
                  src="/Prewedding/weddingputra/intan_profile_arch.webp"
                  alt="Intan Permatasari"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Inner Gold Hairline Inset */}
                <div className="absolute inset-1.5 rounded-[100px] border border-[#F3E5AB]/60 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Script Nickname */}
          <h3 className="font-script text-5xl sm:text-6xl text-[#4A141A] mb-1 drop-shadow-sm font-normal">
            Meydi
          </h3>

          {/* Formal Full Name */}
          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#8C6D37] tracking-wider mb-1">
            Meidy Purnama Ariyani
          </h4>

          {/* Parent Details */}
          <p className="font-serif text-xs text-[#52443C] leading-relaxed mb-4">
            Putri tercinta dari <br />
            <span className="font-semibold text-[#2C352E]">Bapak Bambang Ari Susanto</span> &amp; <span className="font-semibold text-[#2C352E]">Ibu Yushariyani</span>
          </p>

          {/* Instagram Button (Golden Bronze Pill) */}
          <a
            href="https://instagram.com/meydipurnaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#A37E58] hover:bg-[#8D6A43] text-white rounded-full shadow-[0_4px_14px_rgba(163,126,88,0.35)] transition-all hover:scale-105 active:scale-95 group"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
            <span className="font-sans text-[11px] font-bold tracking-widest uppercase">
              INSTAGRAM
            </span>
          </a>
        </motion.div>

        {/* ELEGANT ROYAL AMPERSAND DIVIDER */}
        <div className="flex items-center justify-center gap-4 my-1 z-10">
          <span className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <div className="w-10 h-10 rounded-full border border-[#E5C158] bg-gradient-to-br from-[#68181F] to-[#420E13] flex items-center justify-center shadow-[0_4px_12px_rgba(84,22,28,0.4)]">
            <span className="font-script text-2xl text-[#F3E5AB] -mt-0.5">&amp;</span>
          </div>
          <span className="w-14 h-[1px] bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
        </div>

        {/* 2. THE GROOM (PUTRA PRATAMA) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex flex-col items-center"
        >
          {/* ARCH PHOTO WITH ROYAL RED RIM & FLORAL ACCENTS */}
          <div className="relative w-[215px] h-[315px] mb-4">
            
            {/* Floral Accent (Top-Right) */}
            <div 
              style={{ 
                position: "absolute", 
                right: -38, 
                top: "16%", 
                width: 110, 
                height: 110, 
                zIndex: 30, 
                pointerEvents: "none" 
              }}
            >
              <img 
                src="/bunga/2.webp" 
                alt="Rose Floral Accent" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))"
                }}
              />
            </div>

            {/* Floral Accent (Bottom-Left) */}
            <div 
              style={{ 
                position: "absolute", 
                left: -42, 
                bottom: -14, 
                width: 115, 
                height: 115, 
                zIndex: 30, 
                pointerEvents: "none" 
              }}
            >
              <img 
                src="/bunga/1.webp" 
                alt="Rose Floral Accent" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))"
                }}
              />
            </div>

            {/* Outer Crimson Red Arch Frame with Gold Inset */}
            <div className="relative w-full h-full rounded-[108px] p-[3px] bg-gradient-to-b from-[#7A1D25] via-[#56141A] to-[#7A1D25] shadow-[0_12px_30px_rgba(86,20,26,0.3)]">
              <div className="relative w-full h-full rounded-[105px] overflow-hidden bg-stone-200">
                <Image
                  src="/Prewedding/weddingputra/putra_profile_arch.webp"
                  alt="Putra Pratama"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Inner Gold Hairline Inset */}
                <div className="absolute inset-1.5 rounded-[100px] border border-[#F3E5AB]/60 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Script Nickname */}
          <h3 className="font-script text-5xl sm:text-6xl text-[#4A141A] mb-1 drop-shadow-sm font-normal">
            Riky
          </h3>

          {/* Formal Full Name */}
          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#8C6D37] tracking-wider mb-1">
            Riky Saputra
          </h4>

          {/* Parent Details */}
          <p className="font-serif text-xs text-[#52443C] leading-relaxed mb-4">
            Putra tercinta dari <br />
            <span className="font-semibold text-[#2C352E]">Bapak Bakri</span> &amp; <span className="font-semibold text-[#2C352E]">Ibu Sinem</span>
          </p>

          {/* Instagram Button (Golden Bronze Pill) */}
          <a
            href="https://instagram.com/rikysaputraaa_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#A37E58] hover:bg-[#8D6A43] text-white rounded-full shadow-[0_4px_14px_rgba(163,126,88,0.35)] transition-all hover:scale-105 active:scale-95 group"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
            <span className="font-sans text-[11px] font-bold tracking-widest uppercase">
              INSTAGRAM
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
