"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Copy, Check, Gift, CreditCard, MapPin } from "lucide-react";
import Image from "next/image";

export default function WeddingGift() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});
  const containerRef = useRef<HTMLSelectElement | any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const flowerTopY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const flowerBottomY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [key]: true });
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-transparent flex flex-col items-center px-6">
      
      {/* FLORAL CLUSTERS */}
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

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 mb-12 mt-12 md:mt-16 text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#C1A073]/20 flex items-center justify-center text-[#C1A073]">
            <Gift size={24} />
          </div>
        </div>
        <p className="font-serif text-xl italic text-[#C1A073] mb-4" style={{ textShadow: "0 0 8px rgba(253, 251, 247, 0.9)" }}>Wedding Gift</p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#324335] font-bold tracking-widest" style={{ textShadow: "0 0 12px rgba(253, 251, 247, 0.9), 0 2px 4px rgba(255, 255, 255, 1)" }}>
          Kirim Hadiah
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-sm md:text-base text-gray-700 max-w-lg mb-12 leading-relaxed z-30 relative"
      >
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Bapak/Ibu/Saudara/i bermaksud memberikan tanda kasih, dapat melalui fitur di bawah ini:
      </motion.p>

      {/* Gift Cards Container */}
      <div className="w-full max-w-2xl flex flex-col gap-6 z-30 relative">
        
        {/* Bank Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-md border-[2px] border-[#C1A073]/50 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center relative overflow-hidden"
        >
          {/* Decorative faint background icon */}
          <div className="absolute -right-6 -bottom-6 text-[#C1A073] opacity-10 pointer-events-none">
            <CreditCard size={120} />
          </div>
          
          <h3 className="font-serif text-2xl font-bold text-[#324335] mb-1">BCA</h3>
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Bank Central Asia</p>
          
          <p className="font-mono text-2xl md:text-3xl font-semibold text-[#4A171E] mb-2 tracking-[0.1em]">
            1234 5678 90
          </p>
          <p className="text-gray-700 font-medium mb-6">a.n. Putra Muhammad</p>
          
          <button 
            onClick={() => handleCopy("1234567890", "bca")}
            className="flex items-center gap-2 px-6 py-3 bg-[#4A171E] text-white rounded-full text-sm font-semibold hover:bg-[#341015] transition-colors shadow-md"
          >
            <AnimatePresence mode="wait">
              {copiedStates["bca"] ? (
                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Check size={16} />
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Copy size={16} />
                </motion.div>
              )}
            </AnimatePresence>
            {copiedStates["bca"] ? "BERHASIL DISALIN" : "SALIN NO. REKENING"}
          </button>
        </motion.div>

        {/* Bank Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-md border-[2px] border-[#C1A073]/50 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute -right-6 -bottom-6 text-[#C1A073] opacity-10 pointer-events-none">
            <CreditCard size={120} />
          </div>
          
          <h3 className="font-serif text-2xl font-bold text-[#324335] mb-1">MANDIRI</h3>
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Bank Mandiri</p>
          
          <p className="font-mono text-2xl md:text-3xl font-semibold text-[#4A171E] mb-2 tracking-[0.1em]">
            0987 6543 21
          </p>
          <p className="text-gray-700 font-medium mb-6">a.n. Intan Naila</p>
          
          <button 
            onClick={() => handleCopy("0987654321", "mandiri")}
            className="flex items-center gap-2 px-6 py-3 bg-[#4A171E] text-white rounded-full text-sm font-semibold hover:bg-[#341015] transition-colors shadow-md"
          >
            <AnimatePresence mode="wait">
              {copiedStates["mandiri"] ? (
                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Check size={16} />
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Copy size={16} />
                </motion.div>
              )}
            </AnimatePresence>
            {copiedStates["mandiri"] ? "BERHASIL DISALIN" : "SALIN NO. REKENING"}
          </button>
        </motion.div>

        {/* Physical Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#324335] text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center text-center mt-4"
        >
          <MapPin size={32} className="text-[#C1A073] mb-4" />
          <h3 className="font-serif text-2xl font-bold mb-4">Kirim Kado Fisik</h3>
          <p className="text-sm text-gray-200 mb-6 leading-relaxed max-w-sm">
            Bagi yang ingin mengirimkan kado fisik, dapat mengirimkannya ke alamat berikut:
          </p>
          <div className="bg-black/20 p-4 rounded-xl w-full mb-6 text-sm text-gray-100">
            <p className="font-semibold mb-1">Penerima: Putra & Intan</p>
            <p>Perumahan Indah Asri Blok C No. 12,</p>
            <p>Kecamatan Damai, Kota Bahagia, 12345</p>
            <p className="mt-2 text-[#C1A073] font-mono">0812-3456-7890</p>
          </div>
          <button 
            onClick={() => handleCopy("Perumahan Indah Asri Blok C No. 12, Kecamatan Damai, Kota Bahagia, 12345", "alamat")}
            className="flex items-center gap-2 px-6 py-3 bg-[#C1A073] text-[#4A171E] rounded-full text-sm font-bold hover:bg-[#a5865d] transition-colors shadow-md"
          >
            <AnimatePresence mode="wait">
              {copiedStates["alamat"] ? (
                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Check size={16} />
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Copy size={16} />
                </motion.div>
              )}
            </AnimatePresence>
            {copiedStates["alamat"] ? "ALAMAT DISALIN" : "SALIN ALAMAT"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
