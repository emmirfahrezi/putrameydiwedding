"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("December 12, 2026 08:00:00").getTime();

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

  return (
    <section className="relative w-full py-24 bg-[#521C20] text-white flex flex-col items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Menuju Hari Bahagia</h2>
        <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
          Kami tidak sabar untuk merayakan momen spesial ini bersama Anda.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex gap-4 md:gap-8 justify-center items-center z-10"
      >
        {[
          { label: "Hari", value: timeLeft.days },
          { label: "Jam", value: timeLeft.hours },
          { label: "Menit", value: timeLeft.minutes },
          { label: "Detik", value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg mb-2">
              <span className="font-serif text-2xl md:text-3xl font-bold">{item.value}</span>
            </div>
            <span className="text-xs tracking-widest uppercase">{item.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
