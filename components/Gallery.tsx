"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const containerRef = useRef<HTMLSelectElement | any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const flowerTopY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const flowerBottomY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  const images = [
    "/Prewedding/SEFO6080.JPG",
    "/Prewedding/SEFO6110.JPG",
    "/Prewedding/SEFO6150.JPG",
    "/Prewedding/SEFO6180.JPG",
    "/Prewedding/SEFO6200.JPG",
    "/Prewedding/SEFO6230.JPG",
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-transparent flex flex-col items-center px-6">
      
      {/* Decorative top left floral cluster */}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-30"
      >
        <p className="text-sm tracking-[0.15em] text-[#C1A073] uppercase mb-2">Our Moments</p>
        <h2 className="font-serif text-4xl text-[#324335] font-bold">Galeri Foto</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl relative z-30">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative w-full h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom right floral cluster */}
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
    </section>
  );
}
