"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Send, MessageSquareHeart, CheckCircle2 } from "lucide-react";

interface Wish {
  name: string;
  attendance: string;
  message: string;
  time: string;
}

export default function WishesForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yFloralLeft = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yFloralRight = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yFormCard = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const yList = useTransform(scrollYProgress, [0, 1], [20, -18]);

  const [wishes, setWishes] = useState<Wish[]>([
    {
      name: "Budi & Sarah",
      attendance: "hadir",
      message: "Selamat menempuh hidup baru Riky & Meydi! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
      time: "2 jam yang lalu",
    },
    {
      name: "Rizky Pratama",
      attendance: "hadir",
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fii khoir. Lancar sampai hari H bro Riky!",
      time: "5 jam yang lalu",
    },
    {
      name: "Maya Anggraini",
      attendance: "tidak",
      message: "Selamat yaa Meydi sayang! Maaf belum bisa hadir langsung, doa terbaik dari jauh untuk kalian berdua.",
      time: "1 hari yang lalu",
    },
  ]);

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("hadir");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      name: name.trim(),
      attendance,
      message: message.trim(),
      time: "Baru saja",
    };

    setWishes([newWish, ...wishes]);
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section 
      ref={sectionRef} 
      id="wishes" 
      className="relative w-full py-16 bg-transparent flex flex-col items-center px-4 overflow-hidden"
    >
      {/* VINTAGE JOGLO WATERMARK BACKGROUND WITH PARALLAX */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          style={{ y: bgY }}
          className="absolute -top-[10%] left-0 right-0 w-full h-[120%]"
        >
          <Image
            src="/bunga/vintage_trees_joglo_bg.webp"
            alt="Vintage Background Watermark"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* FLOATING PARALLAX FLORAL ACCENTS */}
      <motion.div
        style={{ y: yFloralLeft }}
        className="absolute top-24 -left-10 w-28 h-28 pointer-events-none opacity-75 z-0"
      >
        <img src="/bunga/1.webp" alt="Floral Parallax Left" className="w-full h-full object-contain filter drop-shadow-md" />
      </motion.div>
      <motion.div
        style={{ y: yFloralRight }}
        className="absolute bottom-32 -right-10 w-28 h-28 pointer-events-none opacity-75 z-0"
      >
        <img src="/bunga/2.webp" alt="Floral Parallax Right" className="w-full h-full object-contain filter drop-shadow-md" />
      </motion.div>
      
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 max-w-sm mx-auto relative z-10"
      >
        <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] text-[#F3E5AB] flex items-center justify-center mx-auto mb-3 border-2 border-[#D4AF37] ring-2 ring-[#C5A059]/30 shadow-md">
          <MessageSquareHeart size={22} className="text-[#F3E5AB]" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="text-[#C5A059] text-[8px]">✦</span>
          <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#8C6D37] font-bold">
            Ucapan &amp; Doa
          </p>
          <span className="text-[#C5A059] text-[8px]">✦</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2C352E] font-bold mb-2">
          Kirim Ucapan
        </h2>

        <p className="text-xs text-gray-600 leading-relaxed">
          Tuliskan doa restu dan harapan terbaik Anda untuk kedua mempelai.
        </p>

        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-[#C5A059] text-[9px]">✦</span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
      </motion.div>

      {/* ROYAL FORM CARD */}
      <motion.div
        style={{ y: yFormCard }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-sm bg-[#FDFBF7]/90 backdrop-blur-md p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-[#C5A059]/50 mb-8 z-10"
      >
        {/* Corner Accents */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block font-cinzel text-[11px] font-bold text-[#8C6D37] tracking-wider mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A059]/30 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all shadow-sm"
              placeholder="Contoh: Budi Santoso"
            />
          </div>
          
          <div>
            <label htmlFor="attendance" className="block font-cinzel text-[11px] font-bold text-[#8C6D37] tracking-wider mb-1">
              Konfirmasi Kehadiran
            </label>
            <select
              id="attendance"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A059]/30 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all shadow-sm"
            >
              <option value="hadir">✓ Hadir</option>
              <option value="tidak">✗ Berhalangan Hadir</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-cinzel text-[11px] font-bold text-[#8C6D37] tracking-wider mb-1">
              Pesan &amp; Doa Restu
            </label>
            <textarea
              id="message"
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A059]/30 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all resize-none shadow-sm"
              placeholder="Tulis ucapan dan doa terbaik..."
            />
          </div>

          <button
            type="submit"
            className="relative group overflow-hidden inline-flex items-center justify-center gap-2 mt-1 w-full py-2.5 bg-gradient-to-r from-[#5E1920] via-[#78232B] to-[#5E1920] border border-[#E5C158]/80 text-[#FDFBF7] rounded-xl text-xs font-semibold tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
            <Send size={14} className="text-[#F3E5AB] relative z-10" />
            <span className="font-cinzel text-[11px] font-bold tracking-wider relative z-10">KIRIM UCAPAN</span>
          </button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 py-2 rounded-lg font-medium border border-emerald-200"
              >
                <CheckCircle2 size={15} />
                <span>Terima kasih! Ucapan Anda telah terkirim.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>

      {/* WISHES STREAM LIST WITH PARALLAX DEPTH */}
      <motion.div 
        style={{ y: yList }}
        className="w-full max-w-sm flex flex-col gap-3 z-10"
      >
        <p className="font-cinzel text-xs font-bold text-[#8C6D37] uppercase tracking-wider px-1">
          Ucapan Sahabat &amp; Keluarga ({wishes.length})
        </p>

        <div className="max-h-[300px] overflow-y-auto pr-1 flex flex-col gap-2.5 scrollbar-thin">
          {wishes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FDFBF7]/90 backdrop-blur-sm p-4 rounded-2xl border border-[#C5A059]/30 shadow-sm text-left"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif font-bold text-xs text-[#2C352E]">{item.name}</span>
                <span className={`text-[9px] font-cinzel px-2.5 py-0.5 rounded-full font-bold uppercase ${item.attendance === "hadir" ? "bg-emerald-100 text-emerald-900 border border-emerald-300" : "bg-stone-100 text-stone-700 border border-stone-300"}`}>
                  {item.attendance === "hadir" ? "Hadir" : "Berhalangan"}
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed mb-1">{item.message}</p>
              <span className="text-[10px] text-[#8C6D37]/70 font-cinzel">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
