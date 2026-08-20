"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full pt-32 pb-16 bg-[#4A171E] text-center px-6 flex flex-col items-center">
      {/* Decorative Floral Background (Optional/Subtle) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      >
        <Image src="/bunga/4.png" alt="Flower Pattern" fill className="object-cover opacity-50" />
      </motion.div>

      {/* Thank You Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center max-w-2xl mx-auto"
      >
        <h2 className="font-serif text-5xl md:text-6xl text-[#C1A073] mb-6 italic tracking-wide" style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
          Terima Kasih
        </h2>
        
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-12 px-4 font-light">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </p>

        <p className="text-[#C1A073] text-sm uppercase tracking-[0.3em] font-semibold mb-4">
          Kami yang berbahagia
        </p>

        <h3 className="font-serif text-4xl md:text-5xl text-white font-bold tracking-widest mb-16" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
          Putra & Intan
        </h3>
      </motion.div>

      {/* Copyright Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full border-t border-white/10 pt-8 mt-8 flex flex-col items-center"
      >
        <p className="text-gray-400 text-[10px] md:text-xs tracking-widest uppercase font-mono mb-2">
          &copy; {new Date().getFullYear()} Putra & Intan Wedding. All rights reserved.
        </p>
        <p className="text-[#C1A073] text-[11px] font-light italic tracking-[0.1em]">
          Designed & Built by <span className="font-bold text-white uppercase not-italic tracking-widest">SubahGroup</span>
        </p>
      </motion.div>
    </footer>
  );
}
