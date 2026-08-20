"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section 
          key="hero-cover"
          exit={{ y: "-100%", opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] w-full max-w-[430px] mx-auto h-[100dvh] overflow-hidden flex flex-col items-center justify-center bg-texture shadow-xl"
        >
          {/* Floral Background Textures / Parallax */}
      {/* TOP LEFT CLUSTER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-12 -left-12 w-56 md:w-72 z-0 pointer-events-none"
      >
        <div className="w-full h-full animate-sway">
          <Image src="/bunga/bunga_merah_kiri.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-4 -left-20 w-48 md:w-64 z-0 pointer-events-none"
      >
        <div className="w-full h-full animate-sway-reverse">
          <Image src="/bunga/1.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain" />
        </div>
      </motion.div>

      {/* TOP RIGHT CLUSTER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
        className="absolute -top-12 -right-12 w-56 md:w-72 z-0 pointer-events-none"
      >
        <div className="w-full h-full animate-sway-reverse">
          <Image src="/bunga/bunga_merah_kanan.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain transform scale-y-[-1]" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute top-4 -right-20 w-48 md:w-64 z-0 pointer-events-none"
      >
        <div className="w-full h-full animate-sway">
          <Image src="/bunga/2.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain transform scale-y-[-1]" />
        </div>
      </motion.div>

      {/* BOTTOM RIGHT CLUSTER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute -bottom-12 -right-12 w-64 md:w-80 z-0 pointer-events-none"
      >
        <div className="w-full h-full animate-sway">
          <Image src="/bunga/bunga_merah_kanan.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        className="absolute -bottom-4 -right-20 w-56 md:w-72 z-0 pointer-events-none"
      >
        <div className="w-full h-full animate-sway-reverse">
          <Image src="/bunga/3.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain transform -scale-x-100" />
        </div>
      </motion.div>

      {/* BOTTOM LEFT CLUSTER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute -bottom-12 -left-12 w-64 md:w-80 z-0 pointer-events-none"
      >
        <div className="w-full h-full animate-sway-reverse">
          <Image src="/bunga/bunga_merah_kiri.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain transform scale-y-[-1]" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute -bottom-4 -left-20 w-56 md:w-72 z-0 pointer-events-none"
      >
        <div className="w-full h-full animate-sway">
          <Image src="/bunga/4.png" alt="Flower" width={400} height={400} className="w-full h-auto object-contain" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#521C20] text-white flex items-center justify-center mb-6"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-widest font-bold">HA</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm md:text-base text-gray-700 tracking-[0.2em] mb-4 uppercase"
        >
          Undangan Pernikahan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif text-5xl md:text-7xl font-bold text-[#324335] mb-8"
        >
          Putra <span className="text-[#C1A073] font-script font-normal mx-2">&amp;</span> Intan
        </motion.h1>

        {/* Prewedding Photo Cover Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="relative w-[280px] h-[460px] md:w-[320px] md:h-[540px] rounded-[3rem] p-2 bg-[#C1A073] border-none mb-12 shadow-xl"
        >
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
            <Image
              src="/Prewedding/SEFO6237.JPG"
              alt="Putra & Intan"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for bottom text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A201A] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-6 w-full flex flex-col items-center text-white z-20">
              <p className="text-xs tracking-[0.2em] mb-1 uppercase">The Wedding of</p>
              <h2 className="font-serif text-3xl mb-4">Putra &amp; Intan</h2>
              
              <div className="flex flex-col items-center gap-1 mb-4">
                <span className="w-8 h-[1px] bg-[#C1A073]" />
                <p className="text-sm text-gray-300">Dear,</p>
                <p className="font-bold text-lg">Nama Tamu</p>
              </div>

              <button 
                onClick={() => {
                  setIsOpen(true);
                  window.dispatchEvent(new Event("startMusic"));
                }}
                className="px-8 py-3 bg-[#521C20] text-white rounded-full text-sm font-semibold tracking-wide shadow-[0_8px_30px_rgb(82,28,32,0.4)] hover:shadow-[0_8px_30px_rgb(82,28,32,0.6)] hover:-translate-y-1 active:translate-y-1 active:scale-95 active:shadow-inner transition-all duration-300"
              >
                BUKA UNDANGAN
              </button>
            </div>
          </div>
        </motion.div>
      </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
