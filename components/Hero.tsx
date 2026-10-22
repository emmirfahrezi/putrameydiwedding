"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MailOpen } from "lucide-react";

interface HeroProps {
  isOpen?: boolean;
  onOpen?: () => void;
}

export default function Hero({ isOpen: controlledIsOpen, onOpen }: HeroProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const [guestName, setGuestName] = useState("Nama Tamu");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to") || params.get("nama") || params.get("guest");
      if (to) {
        setGuestName(to);
      }
      // Clean up legacy ?open=true if present in URL so it won't linger
      if (params.has("open")) {
        params.delete("open");
        const newSearch = params.toString();
        const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : "") + window.location.hash;
        window.history.replaceState({}, "", newUrl);
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    if (onOpen) {
      onOpen();
    }
    setInternalIsOpen(true);
    if (typeof window !== "undefined") {
      (window as any).__invitationOpened = true;
      window.dispatchEvent(new Event("invitationOpened"));
      window.dispatchEvent(new Event("startMusic"));
    }
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section 
          key="hero-cover"
          exit={{ y: "-100%", opacity: 0, transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] w-full max-w-[430px] mx-auto h-[100dvh] overflow-hidden flex flex-col items-center justify-between pt-[10dvh] pb-[9dvh] px-6 shadow-2xl select-none"
        >
          {/* Majestic Couple Photo Background with Cinematic Contrast Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/Prewedding/weddingputra/put2.webp"
              alt="The Wedding of Riky & Meydi"
              fill
              priority
              className="object-cover object-[center_28%]"
            />
            {/* Cinematic Royal Gradient Overlay (Darker at top & bottom, clear in middle for couple) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#180406]/80 via-black/25 to-[#180406]/90" />
          </div>

          {/* TOP SECTION: Gunungan Wayang, The Wedding Of & Couple Names */}
          <div className="z-10 flex flex-col items-center text-center">
            
            {/* Golden Gunungan Wayang Royal Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-13 h-13 sm:w-15 sm:h-15 drop-shadow-[0_4px_16px_rgba(212,175,55,0.6)] mb-1"
            >
              <Image
                src="/bunga/gunungan.webp"
                alt="Gunungan Wayang"
                width={70}
                height={70}
                className="w-full h-full object-contain filter drop-shadow"
                priority
              />
            </motion.div>

            {/* The Wedding Of Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-2 mb-0.5"
            >
              <span className="text-[#F3E5AB] text-[7px]">✦</span>
              <p className="font-cinzel text-[10px] sm:text-[11px] text-[#F3E5AB] font-bold tracking-[0.35em] uppercase drop-shadow-md">
                The Wedding Of
              </p>
              <span className="text-[#F3E5AB] text-[7px]">✦</span>
            </motion.div>

            {/* Couple Names: Riky & Meydi */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)]"
            >
              Riky <span className="font-serif font-normal text-2xl sm:text-3xl text-[#F3E5AB]">&amp;</span> Meydi
            </motion.h1>

            {/* Subtle Gold Filigree Divider */}
            <div className="flex items-center gap-2 mt-1">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent" />
            </div>
          </div>

          {/* BOTTOM SECTION: Guest Greeting & Buka Undangan Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="z-10 flex flex-col items-center text-center w-full px-2 mt-auto"
          >
            <p className="font-cinzel text-[9.5px] sm:text-[10.5px] text-[#F3E5AB] tracking-[0.25em] font-bold uppercase mb-1 drop-shadow-md">
              Kepada Bapak/Ibu/Saudara/i:
            </p>
            
            <p className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide mb-0.5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              {guestName}
            </p>
            
            <p className="font-serif text-xs italic text-[#F3E5AB]/90 mb-3.5 drop-shadow-md">
              Di Tempat
            </p>

            {/* Royal Button Buka Undangan */}
            <button 
              onClick={handleOpenInvitation}
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-2.5 bg-gradient-to-r from-[#946A36] via-[#B58648] to-[#875D2B] border border-[#F3E5AB]/90 text-[#FFFDF8] rounded-2xl text-xs font-semibold tracking-wider shadow-[0_8px_20px_rgba(148,106,54,0.45)] hover:shadow-[0_12px_28px_rgba(148,106,54,0.65)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {/* Light Sweep Animation */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
              
              <MailOpen className="w-3.5 h-3.5 text-[#FFFDF8] relative z-10" />
              <span className="relative z-10 font-cinzel font-bold tracking-widest uppercase text-[11px]">
                Buka Undangan
              </span>
            </button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
