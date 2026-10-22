"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from "lucide-react";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [sliderIdx, setSliderIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const [slideDirection, setSlideDirection] = useState(0);

  const images = [
    "/Prewedding/weddingputra/put1.jpeg",
    "/Prewedding/weddingputra/put2.jpeg",
    "/Prewedding/weddingputra/put3.jpeg",
    "/Prewedding/weddingputra/put4.jpeg",
    "/Prewedding/weddingputra/put5.jpeg",
    "/Prewedding/weddingputra/put6.jpeg",
    "/Prewedding/weddingputra/put7.jpeg",
    "/Prewedding/weddingputra/put8.jpeg",
    "/Prewedding/weddingputra/put9.jpeg",
    "/Prewedding/weddingputra/put10.jpeg",
  ];

  // Lightbox navigation
  const nextLightbox = () => {
    if (selectedIdx === null) return;
    setSlideDirection(1);
    setSelectedIdx((prev) => (prev! + 1) % images.length);
  };

  const prevLightbox = () => {
    if (selectedIdx === null) return;
    setSlideDirection(-1);
    setSelectedIdx((prev) => (prev! - 1 + images.length) % images.length);
  };

  // Section Slider navigation
  const nextSlider = () => {
    setSlideDirection(1);
    setSliderIdx((prev) => (prev + 1) % images.length);
  };

  const prevSlider = () => {
    setSlideDirection(-1);
    setSliderIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "Escape") setSelectedIdx(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  return (
    <section 
      id="gallery" 
      className="relative w-full py-20 bg-transparent flex flex-col items-center px-4 overflow-hidden"
    >
      {/* VINTAGE WATERMARK JOGLO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bunga/vintage_trees_joglo_bg.webp"
            alt="Vintage Background Watermark"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      
      {/* FLORAL ACCENTS */}
      <div className="absolute top-20 -left-10 w-28 h-28 pointer-events-none opacity-75 z-0">
        <Image src="/bunga/1.webp" alt="Floral Left" width={140} height={140} className="w-full h-full object-contain filter drop-shadow-md" />
      </div>
      <div className="absolute bottom-28 -right-10 w-28 h-28 pointer-events-none opacity-75 z-0">
        <Image src="/bunga/2.webp" alt="Floral Right" width={140} height={140} className="w-full h-full object-contain filter drop-shadow-md" />
      </div>
      
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-7 relative z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="text-[#C5A059] text-[8px]">✦</span>
          <p className="font-cinzel text-xs tracking-[0.35em] text-[#8C6D37] uppercase font-bold">
            Our Moments
          </p>
          <span className="text-[#C5A059] text-[8px]">✦</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2C352E] font-bold">
          Galeri Foto
        </h2>

        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-[#C5A059] text-[9px]">✦</span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* View Mode Switcher (Swipe Slider vs Grid) */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <button
            onClick={() => setViewMode("slider")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-cinzel font-bold tracking-wider transition-all cursor-pointer ${
              viewMode === "slider"
                ? "bg-gradient-to-r from-[#5E1920] to-[#78232B] text-[#FFFDF8] shadow-md border border-[#E5C158]"
                : "bg-white/80 text-gray-700 border border-[#C5A059]/40 hover:bg-white"
            }`}
          >
            <SlidersHorizontal size={12} />
            <span>Mode Swipe</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-cinzel font-bold tracking-wider transition-all cursor-pointer ${
              viewMode === "grid"
                ? "bg-gradient-to-r from-[#5E1920] to-[#78232B] text-[#FFFDF8] shadow-md border border-[#E5C158]"
                : "bg-white/80 text-gray-700 border border-[#C5A059]/40 hover:bg-white"
            }`}
          >
            <LayoutGrid size={12} />
            <span>Mode Grid</span>
          </button>
        </div>
      </motion.div>

      {/* ================= 1. SWIPE SLIDER MODE (EASY MOBILE SWIPE) ================= */}
      {viewMode === "slider" && (
        <div className="w-full max-w-sm flex flex-col items-center relative z-10 select-none">
          
          {/* Main Swipeable Card with Flush Gold Border (Zero Black Letterboxing) */}
          <div className="relative w-full max-w-[340px] aspect-[2/3] rounded-[2.2rem] p-[3px] bg-gradient-to-b from-[#E5C158] via-[#BF953F] to-[#7A5B28] shadow-[0_20px_45px_rgba(0,0,0,0.35)] overflow-hidden">
            <motion.div
              key={sliderIdx}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_e, info) => {
                if (info.offset.x < -40) nextSlider();
                else if (info.offset.x > 40) prevSlider();
              }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedIdx(sliderIdx)}
              className="relative w-full h-full rounded-[2rem] overflow-hidden bg-stone-900 cursor-grab active:cursor-grabbing"
            >
              <Image
                src={images[sliderIdx]}
                alt={`Prewedding Photo ${sliderIdx + 1}`}
                fill
                sizes="(max-width: 480px) 100vw, 340px"
                loading="lazy"
                className="object-cover pointer-events-none select-none"
              />

              {/* Overlay with Photo Counter & Tap To Zoom hint */}
              <div className="absolute top-3 right-3 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/60 text-[#F3E5AB] font-cinzel text-[10.5px] font-bold tracking-widest shadow-md">
                {sliderIdx + 1} / {images.length}
              </div>

              <div className="absolute bottom-3 left-3 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[#FFFDF8] text-[10px] font-cinzel tracking-wider flex items-center gap-1.5 shadow-sm">
                <ZoomIn size={11} className="text-[#F3E5AB]" />
                <span>Ketuk perbesar</span>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlider();
              }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-[#D4AF37]/70 text-[#F3E5AB] flex items-center justify-center hover:bg-black/70 active:scale-95 transition-all shadow-md cursor-pointer z-10"
              aria-label="Previous Photo"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlider();
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-[#D4AF37]/70 text-[#F3E5AB] flex items-center justify-center hover:bg-black/70 active:scale-95 transition-all shadow-md cursor-pointer z-10"
              aria-label="Next Photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Swipe Hint */}
          <p className="font-cinzel text-[10px] text-[#8C6D37] tracking-widest uppercase mt-3.5 mb-2 font-semibold">
            &larr; Geser kiri / kanan untuk melihat foto &rarr;
          </p>

          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5 mb-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSliderIdx(i)}
                className={`transition-all rounded-full cursor-pointer ${
                  i === sliderIdx
                    ? "w-6 h-1.5 bg-[#8C1D24] border border-[#E5C158]"
                    : "w-1.5 h-1.5 bg-[#C5A059]/40 hover:bg-[#C5A059]"
                }`}
                aria-label={`Jump to photo ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center gap-2 overflow-x-auto w-full py-1.5 px-2 scrollbar-none justify-center">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setSliderIdx(i)}
                className={`relative shrink-0 w-12 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  i === sliderIdx
                    ? "border-[#E5C158] scale-105 shadow-md ring-2 ring-[#78232B]/40"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={src} alt={`Thumbnail ${i + 1}`} fill sizes="48px" loading="lazy" className="object-cover" />
              </button>
            ))}
          </div>

        </div>
      )}

      {/* ================= 2. MASONRY GRID MODE ================= */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-2 gap-3.5 w-full max-w-sm relative z-10">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setSelectedIdx(index)}
              className="group relative w-full h-[200px] sm:h-[230px] rounded-2xl p-[2px] bg-gradient-to-b from-[#E5C158] via-[#BF953F] to-[#7A5B28] shadow-[0_8px_20px_rgba(0,0,0,0.18)] cursor-pointer"
            >
              <div className="relative w-full h-full rounded-[0.9rem] overflow-hidden bg-stone-900">
                <Image
                  src={src}
                  alt={`Galeri Prewedding ${index + 1}`}
                  fill
                  sizes="(max-width: 480px) 50vw, 200px"
                  loading="lazy"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] border border-[#D4AF37] flex items-center justify-center text-[#F3E5AB] shadow-md">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ================= 3. FULLSCREEN LIGHTBOX MODAL WITH TOUCH SWIPE & FLUSH BORDER ================= */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[200] bg-black/94 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer select-none"
          >
            {/* Top Bar with Counter & Close Button */}
            <div 
              className="w-full max-w-[360px] flex items-center justify-between mb-3 px-1"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-[#D4AF37]/50 text-[#F3E5AB] font-cinzel text-xs font-bold tracking-widest shadow-md">
                <span>Foto {selectedIdx + 1} / {images.length}</span>
              </div>
              <button
                onClick={() => setSelectedIdx(null)}
                className="w-10 h-10 rounded-full bg-white/15 text-[#F3E5AB] border border-[#D4AF37]/70 flex items-center justify-center hover:bg-white/25 active:scale-95 transition-all shadow-lg cursor-pointer"
                aria-label="Tutup Galeri"
              >
                <X size={20} />
              </button>
            </div>

            {/* Central Modal Card - Flush Border Exactly Fitting The Photo */}
            <div 
              className="relative w-full max-w-[340px] aspect-[2/3] max-h-[75vh] rounded-[2.2rem] p-[3px] bg-gradient-to-b from-[#E5C158] via-[#BF953F] to-[#7A5B28] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedIdx}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={(_e, info) => {
                  if (info.offset.x < -50) nextLightbox();
                  else if (info.offset.x > 50) prevLightbox();
                }}
                initial={{ opacity: 0, x: slideDirection * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -slideDirection * 60 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full rounded-[2rem] overflow-hidden bg-stone-950 cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={images[selectedIdx]}
                  alt={`Enlarged prewedding photo ${selectedIdx + 1}`}
                  fill
                  priority
                  className="object-cover select-none pointer-events-none"
                />
              </motion.div>

              {/* Prev & Next Floating Buttons Inside / Overlaying Border */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/80 text-[#F3E5AB] flex items-center justify-center hover:bg-black/75 active:scale-95 transition-all shadow-lg cursor-pointer z-20"
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/80 text-[#F3E5AB] flex items-center justify-center hover:bg-black/75 active:scale-95 transition-all shadow-lg cursor-pointer z-20"
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Swipe Guidance & Dots */}
            <div 
              className="flex flex-col items-center mt-3 gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-cinzel text-[10px] text-[#F3E5AB]/85 tracking-widest uppercase font-semibold">
                &larr; Geser layar untuk foto selanjutnya &rarr;
              </p>
              <div className="flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSlideDirection(i > selectedIdx ? 1 : -1);
                      setSelectedIdx(i);
                    }}
                    className={`transition-all rounded-full cursor-pointer ${
                      i === selectedIdx
                        ? "w-6 h-1.5 bg-[#E5C158]"
                        : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
