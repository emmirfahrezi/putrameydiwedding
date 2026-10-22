"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Copy, Check, Gift, Wifi } from "lucide-react";

export default function WeddingGift() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <section 
      id="gift" 
      className="relative w-full py-16 bg-transparent flex flex-col items-center px-4 overflow-hidden"
    >
      {/* VINTAGE JOGLO WATERMARK BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <Image
          src="/bunga/vintage_trees_joglo_bg.webp"
          alt="Vintage Background Watermark"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* BOTANICAL ACCENTS */}
      <div className="absolute top-24 -left-10 w-28 h-28 pointer-events-none opacity-75 z-0">
        <img src="/bunga/1.webp" alt="Floral Left" className="w-full h-full object-contain filter drop-shadow-md" />
      </div>
      <div className="absolute bottom-32 -right-10 w-28 h-28 pointer-events-none opacity-75 z-0">
        <img src="/bunga/2.webp" alt="Floral Right" className="w-full h-full object-contain filter drop-shadow-md" />
      </div>
      
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 max-w-sm mx-auto"
      >
        <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] text-[#F3E5AB] flex items-center justify-center mx-auto mb-3 border-2 border-[#D4AF37] ring-2 ring-[#C5A059]/30 shadow-md">
          <Gift size={22} className="text-[#F3E5AB]" />
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="text-[#C5A059] text-[8px]">✦</span>
          <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#8C6D37] font-bold">
            Wedding Gift
          </p>
          <span className="text-[#C5A059] text-[8px]">✦</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2C352E] font-bold mb-2">
          Tanda Kasih
        </h2>

        <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika berkenan memberikan tanda kasih, dapat melalui:
        </p>

        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-[#C5A059] text-[9px]">✦</span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
      </motion.div>

      {/* LUXURY VIP GIFT CARDS */}
      <div className="w-full max-w-sm flex flex-col gap-6 z-10">
        
        {/* VIP Bank Card 1: BCA (Royal Burgundy & Gold Edition) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#4A1017] via-[#5E1920] to-[#2B090E] border-2 border-[#D4AF37] p-6 rounded-3xl shadow-[0_15px_35px_rgba(74,16,23,0.35)] flex flex-col overflow-hidden text-white"
        >
          {/* Subtle Metallic Card Background Shine */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Top Row: Bank Name & Contactless Wifi */}
          <div className="flex items-center justify-between w-full mb-6">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-wider text-[#FDFBF7]">BCA</h3>
              <p className="font-cinzel text-[9px] text-[#F3E5AB]/80 uppercase tracking-widest">Bank Central Asia</p>
            </div>
            <div className="flex items-center gap-1.5 text-[#F3E5AB]/70">
              <Wifi size={20} className="rotate-90" />
            </div>
          </div>

          {/* Gold EMV Chip Graphic */}
          <div className="w-10 h-8 rounded-md bg-gradient-to-br from-[#E5C158] via-[#BF953F] to-[#8C6D37] border border-[#F3E5AB] flex flex-col justify-around px-1.5 py-1 mb-5 shadow-sm opacity-90">
            <div className="w-full h-[1px] bg-black/30" />
            <div className="w-full h-[1px] bg-black/30" />
          </div>

          {/* Account Number in Embossed Style */}
          <p className="font-mono text-2xl font-bold text-[#F3E5AB] mb-1 tracking-[0.18em] drop-shadow-md">
            8080 5141 91
          </p>
          <p className="font-cinzel text-xs text-gray-300 uppercase tracking-wider mb-5 font-medium">
            a.n. Riky Saputra
          </p>

          {/* Metallic Gold Copy Button */}
          <button 
            onClick={() => handleCopy("8080514191", "bca")}
            className="relative group overflow-hidden w-full inline-flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38728] text-[#3B0D12] rounded-xl text-xs font-bold tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
            <AnimatePresence mode="wait">
              {copiedStates["bca"] ? (
                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Check size={14} className="text-[#3B0D12]" />
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Copy size={14} className="text-[#3B0D12]" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="font-cinzel text-[11px] font-bold">
              {copiedStates["bca"] ? "BERHASIL DISALIN" : "SALIN NOMOR REKENING"}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
