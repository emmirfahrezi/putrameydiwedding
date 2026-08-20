"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function SaveTheDate() {
  const containerRef = useRef<HTMLSelectElement | any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const flowerTopY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const flowerBottomY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center bg-transparent py-20 px-6">
      
      {/* Background Pemandangan Parallax */}
      <div 
        className="absolute inset-0 w-full h-full z-0 opacity-80 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
        }}
      >
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute -top-[20%] left-0 right-0 w-full h-[140%]"
        >
          <Image 
            src="/mountain-parallax.jpg" 
            alt="Mountain Parallax Background" 
            fill 
            className="object-cover object-top" 
          />
        </motion.div>
      </div>

      {/* Gold Frame Layer */}
      <div className="relative z-10 w-[90%] max-w-[380px] min-h-[85dvh] border-2 border-[#C1A073] rounded-t-[6rem] rounded-b-xl flex flex-col items-center justify-center text-center p-8 bg-[#FDFBF7]/60 backdrop-blur-sm shadow-xl">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#324335] font-semibold mb-6"
        >
          THE WEDDING OF
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.4 }}
          className="font-script text-6xl md:text-7xl text-[#324335] mb-2"
        >
          Putra
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ type: "spring", delay: 0.6 }}
          className="font-serif text-3xl text-[#C1A073] my-2"
        >
          &amp;
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.8 }}
          className="font-script text-6xl md:text-7xl text-[#324335] mb-12"
        >
          Intan
        </motion.h2>

        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-[#C1A073]" />
          <div className="w-2 h-2 rotate-45 bg-[#C1A073]" />
          <span className="w-12 h-[1px] bg-[#C1A073]" />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-serif text-xl tracking-[0.2em] font-bold text-[#324335] mb-4"
        >
          12 . 12 . 2026
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-[#D37373] text-lg mb-8"
        >
          ♥
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="px-6 py-2 bg-[#521C20] text-white rounded-full text-xs font-semibold tracking-wider hover:bg-[#3d1518] transition-colors shadow-lg"
        >
          SAVE THE DATE
        </motion.button>
      </div>

      {/* FLORAL CLUSTERS FOR THIS SECTION */}
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
    </section>
  );
}
