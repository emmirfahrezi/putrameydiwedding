"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { CalendarHeart } from "lucide-react";

interface SaveTheDateProps {
  isOpened?: boolean;
}

const treeLeftVariants: Variants = {
  closed: { x: -200, y: -40, opacity: 0, rotate: -15 },
  opened: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }
  }
};

const treeRightVariants: Variants = {
  closed: { x: 200, y: -40, opacity: 0, rotate: 15 },
  opened: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }
  }
};

const flowersLeftVariants: Variants = {
  closed: { x: -120, y: 160, opacity: 0, scale: 0.5, rotate: -12 },
  opened: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }
  }
};

const flowersRightVariants: Variants = {
  closed: { x: 120, y: 160, opacity: 0, scale: 0.5, rotate: 12 },
  opened: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }
  }
};

const cardVariants: Variants = {
  closed: { opacity: 0, scale: 0.88, y: 50 },
  opened: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
  }
};

export default function SaveTheDate({ isOpened: propIsOpened }: SaveTheDateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [internalOpened, setInternalOpened] = useState(false);
  const isOpened = propIsOpened !== undefined ? propIsOpened : internalOpened;

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__invitationOpened) {
      setInternalOpened(true);
    }
    const handleOpen = () => setInternalOpened(true);
    window.addEventListener("invitationOpened", handleOpen);
    return () => window.removeEventListener("invitationOpened", handleOpen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const treeLeftY = useTransform(scrollYProgress, [0, 1], [-20, 35]);
  const treeRightY = useTransform(scrollYProgress, [0, 1], [-20, 35]);
  const flowersLeftY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const flowersRightY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const cardY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center bg-transparent py-14 px-4 overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND WITH PARALLAX & SMOOTH ZOOM TRANSITION */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute -top-[10%] left-0 right-0 w-full h-[120%]"
        >
          <motion.div 
            initial={{ scale: 1.25, opacity: 0.6 }}
            animate={isOpened ? { scale: 1.08, opacity: 1 } : { scale: 1.25, opacity: 0.6 }}
            transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full h-full relative"
          >
            <Image 
              src="/bunga/vintage_trees_joglo_bg.webp" 
              alt="Vintage Trees & Joglo Background" 
              fill 
              sizes="(max-width: 480px) 100vw, 430px"
              loading="lazy"
              className="object-cover object-center scale-105"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 2. POHON / DAHAN HIJAU MASUK DARI KIRI & KANAN DENGAN PARALLAX DEPTH */}
      {/* Left Tree Foliage Sliding In + Parallax */}
      <motion.div
        style={{ y: treeLeftY }}
        className="absolute -top-12 -left-14 w-48 sm:w-56 z-10 pointer-events-none"
      >
        <motion.div
          variants={treeLeftVariants}
          initial="closed"
          animate={isOpened ? "opened" : "closed"}
          className="w-full h-full"
        >
          <div className="w-full h-full animate-sway">
            <Image src="/bunga/1.webp" alt="Tree Left" width={300} height={300} className="w-full h-auto object-contain" />
          </div>
        </motion.div>
      </motion.div>

      {/* Right Tree Foliage Sliding In + Parallax */}
      <motion.div
        style={{ y: treeRightY }}
        className="absolute -top-12 -right-14 w-48 sm:w-56 z-10 pointer-events-none"
      >
        <motion.div
          variants={treeRightVariants}
          initial="closed"
          animate={isOpened ? "opened" : "closed"}
          className="w-full h-full"
        >
          <div className="w-full h-full animate-sway-reverse">
            <Image src="/bunga/2.webp" alt="Tree Right" width={300} height={300} className="w-full h-auto object-contain transform scale-y-[-1]" />
          </div>
        </motion.div>
      </motion.div>

      {/* 3. BUNGA-BUNGA MERAH MASUK DENGAN ELEGAN & PARALLAX COUNTER-MOTION */}
      {/* Left Red Bouquet Blooms and Slides In */}
      <motion.div
        style={{ y: flowersLeftY }}
        className="absolute -bottom-8 -left-8 w-44 sm:w-52 z-20 pointer-events-none"
      >
        <motion.div
          variants={flowersLeftVariants}
          initial="closed"
          animate={isOpened ? "opened" : "closed"}
          className="w-full h-full"
        >
          <div className="w-full h-full animate-sway">
            <Image src="/bunga/bunga_merah_kiri.webp" alt="Red Flowers Left" width={280} height={280} className="w-full h-auto object-contain" />
          </div>
        </motion.div>
      </motion.div>

      {/* Right Red Bouquet Blooms and Slides In */}
      <motion.div
        style={{ y: flowersRightY }}
        className="absolute -bottom-8 -right-8 w-44 sm:w-52 z-20 pointer-events-none"
      >
        <motion.div
          variants={flowersRightVariants}
          initial="closed"
          animate={isOpened ? "opened" : "closed"}
          className="w-full h-full"
        >
          <div className="w-full h-full animate-sway-reverse">
            <Image src="/bunga/bunga_merah_kanan.webp" alt="Red Flowers Right" width={280} height={280} className="w-full h-auto object-contain" />
          </div>
        </motion.div>
      </motion.div>

      {/* 4. ROYAL RED CARTUCHE CARD DENGAN ELEVASI PARALLAX */}
      <motion.div 
        style={{ y: cardY }}
        variants={cardVariants}
        initial="closed"
        animate={isOpened ? "opened" : "closed"}
        className="relative z-10 w-full max-w-[340px] rounded-[2.5rem] p-[3px] bg-gradient-to-b from-[#8C1D24] via-[#5E1920] to-[#8C1D24] border border-[#E5C158]/80 shadow-[0_20px_45px_rgba(94,25,32,0.4)]"
      >
        {/* Inner Card Container with Ivory Parchment & Double Hairline Border */}
        <div className="relative w-full h-full rounded-[2.3rem] bg-[#FDFBF7]/95 backdrop-blur-md p-7 flex flex-col items-center justify-center text-center overflow-hidden">
          
          {/* Recessed Red & Gold Hairline Border */}
          <div className="absolute inset-2 rounded-[2rem] border border-[#78232B]/30 pointer-events-none" />
          <div className="absolute inset-3 rounded-[1.8rem] border border-[#C5A059]/40 pointer-events-none" />

          {/* Golden Gunungan Wayang Royal Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="w-14 h-14 mx-auto mb-2 drop-shadow-[0_4px_10px_rgba(212,175,55,0.4)]"
          >
            <Image
              src="/bunga/gunungan.webp"
              alt="Gunungan Wayang"
              width={70}
              height={70}
              className="w-full h-full object-contain filter drop-shadow"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-[#8C6D37] text-[8px]">✦</span>
            <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-[#78232B] font-bold">
              The Wedding Of
            </p>
            <span className="text-[#8C6D37] text-[8px]">✦</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="font-serif text-3xl sm:text-4xl text-[#3B0D12] font-bold tracking-wider mb-0.5"
          >
            RIKY
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, scale: 0 }}
            animate={isOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="font-serif italic text-2xl text-[#8C6D37] my-0.5"
          >
            &amp;
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isOpened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="font-serif text-3xl sm:text-4xl text-[#3B0D12] font-bold tracking-wider mb-4"
          >
            MEYDI
          </motion.h2>

          {/* Gold Filigree Line */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <span className="w-2 h-2 rotate-45 bg-[#78232B]" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isOpened ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="font-cinzel text-xs tracking-[0.25em] font-bold text-[#6B2E1E] uppercase mb-6"
          >
            Rabu, 25 November 2026
          </motion.p>

          <motion.a 
            href="#events"
            initial={{ opacity: 0, y: 10 }}
            animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="relative group overflow-hidden inline-flex items-center gap-2 px-7 py-2.5 bg-gradient-to-r from-[#5E1920] via-[#78232B] to-[#5E1920] border border-[#E5C158]/80 text-[#FDFBF7] rounded-full text-xs font-semibold tracking-widest shadow-[0_8px_20px_rgba(94,25,32,0.4)] hover:shadow-[0_10px_25px_rgba(94,25,32,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
            <CalendarHeart size={14} className="text-[#F3E5AB] relative z-10" />
            <span className="font-cinzel text-[11px] font-bold tracking-wider relative z-10">
              SAVE THE DATE
            </span>
          </motion.a>
        </div>
      </motion.div>

    </section>
  );
}
