"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Profiles() {
  const containerRef = useRef<HTMLSelectElement | any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const flowerTopY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const flowerBottomY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <section ref={containerRef} id="profiles" className="relative w-full py-24 bg-transparent flex flex-col items-center justify-center px-4 overflow-hidden">
      
      {/* FLORAL CLUSTERS - USING PARALLAX SCROLL Y + ENTRANCE ANIMATION */}
      
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

      {/* Main Glassmorphism Card */}
      <div className="relative z-30 flex flex-col items-center w-[90%] max-w-md py-12 px-4 rounded-[2rem] border-[2px] border-[#C1A073] bg-[#FDFBF7]/70 backdrop-blur-md shadow-2xl my-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.15em] text-[#324335] uppercase mb-2 font-bold">The Wedding Of</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#324335] font-bold">Putra &amp; Intan</h2>
        </motion.div>

        {/* The Bride */}
        <div className="flex flex-col items-center mb-24 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1 }}
            className="relative mb-8"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[240px] h-[340px] md:w-[280px] md:h-[380px] rounded-t-full rounded-b-2xl border-[3px] border-[#C1A073] overflow-hidden shadow-xl bg-[#E8E2D6]"
            >
              <Image
                src="/Prewedding/SEFO6042.JPG"
                alt="Intan"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-2"
          >
            The Bride
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl text-[#324335] font-bold mb-4"
          >
            Intan
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md text-sm text-gray-600 leading-relaxed italic px-4"
          >
            <p>"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri..."</p>
            <p className="mt-2 text-xs font-semibold not-italic">- QS. Ar-Rum: 21 -</p>
          </motion.div>
        </div>

        {/* The Groom */}
        <div className="flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1 }}
            className="relative mb-8"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="relative w-[240px] h-[340px] md:w-[280px] md:h-[380px] rounded-t-full rounded-b-2xl border-[3px] border-[#C1A073] overflow-hidden shadow-xl bg-[#E8E2D6]"
            >
              <Image
                src="/Prewedding/SEFO6071.JPG"
                alt="Putra Muhammad"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-2"
          >
            The Groom
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl text-[#324335] font-bold mb-4"
          >
            Putra
          </motion.h3>
        </div>
      </div>

    </section>
  );
}
