"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function LoveStory() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Timeline vertical line progress following scroll (lightweight hardware-accelerated scaleY)
  const { scrollYProgress: lineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end 80%"],
  });

  const stories = [
    {
      roman: "CHAPTER I",
      title: "Awal Pertemuan",
      date: "Agustus 2024",
      description:
        "Tidak ada yang kebetulan di dunia ini, semua sudah tersusun sangat rapi oleh Sang Maha Kuasa. Kita tidak pernah bisa memilih kepada siapa kita akan jatuh cinta. Tuhan mempertemukan kami di bulan Agustus 2024 sebagai rekan kerja, yang menjadi awal mula dari kisah perjalanan indah ini.",
      image: "/Prewedding/weddingputra/PUTRA1.webp",
    },
    {
      roman: "CHAPTER II",
      title: "Menjalin Hubungan",
      date: "Oktober 2024",
      description:
        "Seiring berjalannya waktu, kedekatan kami semakin erat. Dari sekadar rekan kerja, kami mulai saling memahami, berbagi cerita dan saling mendukung satu sama lain. Perasaan nyaman dan keyakinan di hati meyakinkan kami untuk melangkah ke tahap yang lebih serius.",
      image: "/Prewedding/weddingputra/PUTRA5.webp",
    },
    {
      roman: "CHAPTER III",
      title: "Lamaran & Komitmen",
      date: "Desember 2025",
      description:
        "Dengan penuh ketulusan serta doa restu dari kedua keluarga besar, kami melangsungkan acara lamaran yang hangat dan penuh makna. Sebuah janji suci terikat sebagai tanda keseriusan untuk bersama-sama membangun bahtera rumah tangga.",
      image: "/Prewedding/weddingputra/PUTRA6.webp",
    }
  ];

  return (
    <section 
      id="story"
      className="relative w-full bg-[#120F10] overflow-clip"
    >
      
      {/* CINEMATIC STICKY VIEWPORT BACKGROUND */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden pointer-events-none -mb-[100dvh] z-0">
        <div className="relative w-full h-full">
          <Image
            src="/Prewedding/weddingputra/PUTRA7.webp"
            alt="Riky & Meydi Background"
            fill
            sizes="(max-width: 480px) 100vw, 430px"
            loading="lazy"
            className="object-cover object-[center_28%] brightness-[0.88] contrast-[1.02]"
          />
          {/* Subtle Atmospheric Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#120F10]/80 via-black/20 to-[#120F10]/85" />
        </div>
      </div>

      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-10 right-0 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none z-1" />
      <div className="absolute bottom-10 left-0 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none z-1" />

      {/* SECTION CONTENT OVERLAY */}
      <div className="relative z-10 w-full py-20 flex flex-col items-center px-4">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 z-10"
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="text-[#F3E5AB] text-[8px]">✦</span>
            <p className="font-cinzel text-xs tracking-[0.35em] text-[#F3E5AB]/90 font-bold uppercase">
              Kisah Cinta Kami
            </p>
            <span className="text-[#F3E5AB] text-[8px]">✦</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-widest drop-shadow-md">
            Love Story
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* TIMELINE CONTAINER DENGAN PARALLAX PROGRESS LINE */}
        <div ref={timelineRef} className="relative w-full max-w-[390px] mx-auto z-10">
          
          {/* 1. Track Line Latar Belakang */}
          <div className="absolute left-5 sm:left-6 top-8 bottom-12 w-[3px] bg-gradient-to-b from-[#D4AF37]/25 via-white/15 to-[#D4AF37]/25 -translate-x-1/2 rounded-full pointer-events-none" />

          {/* 2. Parallax Animated Golden Progress Line yang Mengikuti Scroll */}
          <motion.div 
            style={{ scaleY: lineProgress }}
            className="absolute left-5 sm:left-6 top-8 bottom-12 w-[3px] bg-gradient-to-b from-[#E5C158] via-[#FFF1C5] to-[#D4AF37] -translate-x-1/2 origin-top rounded-full shadow-[0_0_14px_rgba(229,193,88,0.9)] z-0 pointer-events-none"
          />

          {/* 3. Story Cards List */}
          <div className="flex flex-col gap-9">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative w-full flex items-start pl-12 sm:pl-14"
              >
                {/* Timeline Node (Wax Seal Heart Icon) on the Line */}
                <div className="absolute top-7 left-5 sm:left-6 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] text-[#F3E5AB] border-2 border-[#D4AF37] ring-4 ring-[#120F10] shadow-[0_0_15px_rgba(212,175,55,0.45)] flex items-center justify-center z-10">
                  <Heart size={14} fill="#F3E5AB" className="text-[#F3E5AB]" />
                </div>

                {/* Pointer Arrow Connecting Node to Card */}
                <div className="absolute top-7 left-[2.45rem] sm:left-[2.75rem] transform -translate-y-1/2 w-3.5 h-3.5 bg-[#FDFBF7] border-l-2 border-b-2 border-[#C5A059]/70 rotate-45 z-10 pointer-events-none" />

                {/* Story Card */}
                <div className="relative w-full bg-[#FDFBF7] rounded-3xl p-5 shadow-[0_20px_45px_rgba(0,0,0,0.5)] border-2 border-[#C5A059]/70 flex flex-col items-center">
                  
                  {/* Gold Corner Filigree Accents */}
                  <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
                  <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
                  <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
                  <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />

                  {/* Story Image with Gold Frame */}
                  <div className="relative w-full h-[210px] rounded-2xl overflow-hidden mb-4 shadow-md bg-stone-200 border border-[#C5A059]/40">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-2 rounded-xl border border-white/30 pointer-events-none" />
                    
                    {/* Chapter Ribbon */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-[#5E1920] to-[#3B0D12] text-[#F3E5AB] font-cinzel text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-[#D4AF37]/80 shadow-md">
                      {story.roman}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-center justify-between w-full mb-1 px-1">
                    <h3 className="font-serif text-xl font-bold text-[#2C352E]">
                      {story.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] flex items-center justify-center text-[#F3E5AB] border border-[#D4AF37]/70 shadow-sm">
                      <Heart size={12} fill="#F3E5AB" />
                    </div>
                  </div>

                  <p className="w-full text-[11px] font-cinzel font-bold text-[#8C6D37] uppercase tracking-wider mb-2.5 px-1">
                    {story.date}
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent mb-3" />

                  <p className="text-xs text-gray-700 leading-relaxed text-justify px-1">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
