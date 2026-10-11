"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer 
      className="relative w-full pt-16 pb-20 sm:pb-24 bg-gradient-to-b from-[#220509] via-[#35080E] to-[#120204] text-center px-4 flex flex-col items-center overflow-hidden"
    >
      {/* Texture Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-overlay">
        <Image
          src="/bunga/bg-texture.webp"
          alt="Luxury Texture"
          fill
          className="object-cover"
        />
      </div>

      {/* Atmospheric Gold Ambient Glow */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-gradient-radial from-[#D4AF37]/20 via-[#8C1D24]/15 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      {/* Javanese Gunungan Royal Closing Emblem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 mb-5 drop-shadow-[0_4px_18px_rgba(212,175,55,0.5)]"
      >
        <Image
          src="/bunga/gunungan.webp"
          alt="Gunungan Wayang Jawa"
          width={90}
          height={90}
          className="w-full h-full object-contain filter drop-shadow"
        />
      </motion.div>

      {/* GRAND ROYAL CLOSING TABLET */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[390px] rounded-[3.2rem] p-[3px] bg-gradient-to-b from-[#8C1D24] via-[#5E1920] to-[#8C1D24] border-2 border-[#E5C158] shadow-[0_25px_60px_rgba(0,0,0,0.65)] mb-8"
      >
        {/* Inner Ivory Parchment Canvas with Double Hairline Borders */}
        <div className="relative w-full h-full rounded-[3rem] bg-[#FDFBF7] px-6 py-9 flex flex-col items-center text-center overflow-hidden">
          
          {/* Recessed Red & Gold Hairline Borders */}
          <div className="absolute inset-2.5 rounded-[2.8rem] border border-[#78232B]/30 pointer-events-none" />
          <div className="absolute inset-3.5 rounded-[2.6rem] border border-[#C5A059]/40 pointer-events-none" />

          {/* Heart Emblem Badge */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] border-2 border-[#D4AF37] ring-2 ring-[#C5A059]/30 flex items-center justify-center text-[#F3E5AB] mb-3.5 shadow-md">
            <Heart size={20} fill="#F3E5AB" />
          </div>

          <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-[#78232B] font-bold mb-1">
            Ungkapan Doa &amp; Syukur
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#3B0D12] font-bold tracking-wide mb-3 drop-shadow-sm">
            Terima Kasih
          </h2>
          
          <p className="text-gray-700 text-xs leading-relaxed mb-4 font-normal px-2">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
          </p>

          {/* Quranic Blessing Verse */}
          <div className="w-full bg-[#5E1920]/5 rounded-2xl p-3.5 border border-[#C5A059]/30 mb-5">
            <p className="font-serif italic text-xs sm:text-[13px] text-[#5E1920] leading-relaxed mb-1.5">
              &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&rdquo;
            </p>
            <p className="font-cinzel text-[10px] tracking-wider text-[#8C6D37] font-bold uppercase">
              (QS. Ar-Rum: 21)
            </p>
          </div>

          {/* Gold Filigree Line */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <span className="w-2 h-2 rotate-45 bg-[#78232B]" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
          </div>

          <p className="font-cinzel text-[#78232B] text-[10px] uppercase tracking-[0.3em] font-bold mb-1">
            Kami Yang Berbahagia,
          </p>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#3B0D12] font-bold tracking-wider mb-4 drop-shadow-sm">
            Riky <span className="font-serif font-normal text-2xl text-[#9A7228]">&amp;</span> Meydi
          </h3>

          {/* Family Attribution */}
          <div className="w-full pt-3 border-t border-[#C5A059]/30 flex flex-col gap-1 text-[11px] text-gray-700">
            <p className="font-serif">
              Keluarga Bpk. Bakri &amp; Ibu Sinem
            </p>
            <p className="font-serif">
              Keluarga Bpk. Bambang Ari Susanto &amp; Ibu Yushariyani
            </p>
          </div>

        </div>
      </motion.div>

      {/* ROYAL BACK TO TOP BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-8"
      >
        <button
          onClick={scrollToTop}
          className="relative group overflow-hidden inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5E1920] via-[#78232B] to-[#5E1920] border border-[#E5C158]/80 text-[#F3E5AB] font-cinzel text-[11px] font-bold tracking-widest shadow-[0_8px_20px_rgba(94,25,32,0.5)] hover:shadow-[0_12px_28px_rgba(94,25,32,0.7)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
          <ArrowUp size={14} className="text-[#F3E5AB] relative z-10 group-hover:-translate-y-0.5 transition-transform" />
          <span className="relative z-10">Kembali ke Atas</span>
        </button>
      </motion.div>

      {/* COPYRIGHT & BRANDING FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 w-full max-w-[390px] border-t border-white/10 pt-6 flex flex-col items-center"
      >
        <p className="font-cinzel text-gray-400 text-[10px] tracking-widest uppercase mb-2">
          &copy; {new Date().getFullYear()} The Wedding of Riky &amp; Meydi. All Rights Reserved.
        </p>

        {/* Prestigious Creator Seal */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 shadow-inner">
          <span className="text-[#D4AF37] text-[9px]">✦</span>
          <p className="font-cinzel text-[#F3E5AB] text-[9.5px] tracking-widest uppercase font-semibold">
            Crafted with Love &bull; SubahGroup &amp; AksenRaras
          </p>
          <span className="text-[#D4AF37] text-[9px]">✦</span>
        </div>
      </motion.div>
    </footer>
  );
}
