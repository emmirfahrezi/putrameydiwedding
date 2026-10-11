"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CalendarPlus } from "lucide-react";

export default function Countdown() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth cinematic vertical parallax translation
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const yBox = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const yButton = useTransform(scrollYProgress, [0, 1], [20, -18]);
  const yFloat = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("November 25, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Riky+%26+Meydi&dates=20261125T020000Z/20261125T090000Z&details=Pernikahan+Riky+Saputra+dan+Meidy+Purnama+Ariyani&location=Gedung+Community+Center+Simpang+Lagoi+Kota+Baru";

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-20 text-white flex flex-col items-center text-center px-4 overflow-hidden"
    >
      
      {/* CINEMATIC PARALLAX PHOTO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: bgY }}
          className="absolute -top-[15%] left-0 right-0 w-full h-[130%]"
        >
          <Image
            src="/Prewedding/weddingputra/PUTRA2.webp"
            alt="Riky & Meydi"
            fill
            sizes="(max-width: 480px) 100vw, 430px"
            loading="lazy"
            className="object-cover object-[center_20%] scale-105 filter blur-[2px] brightness-[0.55]"
          />
          {/* Royal Burgundy Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B080D]/90 via-[#3B0D12]/75 to-[#25060A]/92" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 z-10 relative"
      >
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="text-[#F3E5AB] text-[8px]">✦</span>
          <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#F3E5AB]/90 font-bold">
            Hitung Mundur
          </p>
          <span className="text-[#F3E5AB] text-[8px]">✦</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">
          Menuju Hari Bahagia
        </h2>
        
        <p className="text-gray-300 max-w-xs mx-auto text-xs leading-relaxed">
          Kami menantikan kehadiran dan doa restu Anda di hari istimewa kami.
        </p>

        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </motion.div>

      {/* COUNTDOWN BOXES WITH DOUBLE GOLD BORDER & PARALLAX ELEVATION */}
      <motion.div
        style={{ y: yBox }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex gap-2.5 sm:gap-4 justify-center items-center z-10 mb-8 relative"
      >
        {[
          { label: "Hari", value: timeLeft.days },
          { label: "Jam", value: timeLeft.hours },
          { label: "Menit", value: timeLeft.minutes },
          { label: "Detik", value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-[#D4AF37] ring-1 ring-[#F3E5AB]/30 shadow-[0_8px_25px_rgba(0,0,0,0.5)] mb-2">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F3E5AB] drop-shadow-sm">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
            <span className="font-cinzel text-[10px] sm:text-xs tracking-widest uppercase text-[#F3E5AB]/90 font-bold">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* METALLIC GOLD CALENDAR BUTTON WITH PARALLAX LIFT */}
      <motion.a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ y: yButton }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative group overflow-hidden z-10 inline-flex items-center gap-2 px-7 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38728] text-[#3B0D12] rounded-full text-xs font-bold tracking-widest shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
      >
        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
        <CalendarPlus size={15} className="text-[#3B0D12] relative z-10" />
        <span className="font-cinzel text-[11px] font-bold tracking-wider relative z-10">
          SIMPAN KE KALENDER
        </span>
      </motion.a>
    </section>
  );
}
