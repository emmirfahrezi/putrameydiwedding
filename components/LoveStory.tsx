"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function LoveStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const stories = [
    {
      title: "Awal Pertemuan",
      date: "Agustus 2024",
      description:
        "Tidak ada yang kebetulan di dunia ini, semua sudah tersusun sangat rapih, oleh sang maha kuasa. Kita tidak bisa memilih kepada siapa kita akan jatuh cinta. Ternyata tuhan mempertemukan kita di bulan agustus 2024 sebagai rekan kerja dan menjadi awal dari perjalanan panjang kami.",
      image: "/Prewedding/SEFO6080.JPG",
    },
    {
      title: "Menjalin Hubungan",
      date: "Oktober 2024",
      description:
        "Seiring berjalannya waktu, kedekatan kami semakin terjalin. Dari sekadar rekan kerja, kami mulai saling memahami dan berbagi cerita. Perasaan nyaman dan saling melengkapi meyakinkan kami untuk melangkah ke tahap yang lebih serius.",
      image: "/Prewedding/SEFO6160.JPG",
    },
    {
      title: "Lamaran",
      date: "Desember 2025",
      description:
        "Dengan restu dari kedua keluarga, kami mengadakan acara lamaran yang hangat dan penuh makna. Sebuah janji suci diikat sebagai tanda keseriusan untuk membina rumah tangga bersama.",
      image: "/Prewedding/SEFO6230.JPG",
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#4A171E] flex flex-col items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-serif text-2xl italic text-[#C1A073] mb-2 drop-shadow-sm">Kisah Cinta Kami</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white font-bold tracking-widest drop-shadow-md">
          Love Story
        </h2>
      </motion.div>

      <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
        {/* Background Track */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/20 transform md:-translate-x-1/2"></div>
        
        {/* Animated Progress Line */}
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#C1A073] transform md:-translate-x-1/2 origin-top z-0"
        ></motion.div>

        <div className="flex flex-col gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8 pl-14 md:pl-0`}
            >
              {/* Timeline Node (Heart Icon) */}
              <div className="absolute top-8 left-6 md:left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-[3px] border-[#4A171E] z-10">
                <Heart size={18} fill="#4A171E" className="text-[#4A171E]" />
              </div>

              {/* Card */}
              <div className="w-full md:w-[45%] bg-white rounded-2xl p-4 md:p-6 shadow-xl relative">
                {/* Pointer Arrow */}
                <div className={`hidden md:block absolute top-8 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45 ${index % 2 === 0 ? "-left-2" : "-right-2"}`}></div>
                <div className="block md:hidden absolute top-8 transform -translate-y-1/2 -left-2 w-4 h-4 bg-white rotate-45"></div>

                <div className="relative w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#4A171E] mb-1">{story.title}</h3>
                <p className="text-xs text-[#C1A073] font-semibold mb-3 tracking-widest">{story.date}</p>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {story.description}
                </p>
              </div>

              {/* Empty space for desktop alternating layout */}
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
