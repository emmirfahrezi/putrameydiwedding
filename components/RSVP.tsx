"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Send, CheckCircle2, Users, Calendar, MessageSquareHeart, HeartHandshake } from "lucide-react";

interface RSVPItem {
  id: string;
  name: string;
  status: "hadir" | "tidak" | "ragu";
  pax: number;
  session: string;
  message: string;
  time: string;
}

export default function RSVP() {

  // Initial guest list
  const [rsvps, setRsvps] = useState<RSVPItem[]>([
    {
      id: "1",
      name: "Budi & Sarah",
      status: "hadir",
      pax: 2,
      session: "Akad & Resepsi",
      message: "Selamat menempuh hidup baru Riky & Meydi! Semoga menjadi keluarga sakinah, mawaddah, warahmah.",
      time: "2 jam yang lalu",
    },
    {
      id: "2",
      name: "Rizky Pratama",
      status: "hadir",
      pax: 1,
      session: "Resepsi",
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fii khoir. Lancar sampai hari H ya brader!",
      time: "5 jam yang lalu",
    },
    {
      id: "3",
      name: "Maya Anggraini",
      status: "tidak",
      pax: 0,
      session: "-",
      message: "Selamat yaa Meydi sayang! Maaf belum bisa hadir langsung, doa terbaik dari jauh untuk kalian berdua.",
      time: "1 hari yang lalu",
    },
    {
      id: "4",
      name: "Dimas & Keluarga",
      status: "hadir",
      pax: 2,
      session: "Resepsi",
      message: "Selamat menempuh babak baru kawan, semoga bahagia selalu sampai maut memisahkan.",
      time: "2 hari yang lalu",
    }
  ]);

  // Form states
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"hadir" | "tidak" | "ragu">("hadir");
  const [pax, setPax] = useState(2);
  const [sessionChoice, setSessionChoice] = useState("Akad & Resepsi");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill name from URL query parameter ?to= / ?nama= / ?guest=
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const guest = params.get("to") || params.get("nama") || params.get("guest");
      if (guest) {
        setName(guest);
      }
    }
  }, []);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newRSVP: RSVPItem = {
      id: Date.now().toString(),
      name: name.trim(),
      status,
      pax: status === "hadir" ? pax : 0,
      session: status === "hadir" ? sessionChoice : "-",
      message: message.trim() || (status === "hadir" ? "Turut berbahagia untuk Riky & Meydi!" : "Doa terbaik untuk kedua mempelai."),
      time: "Baru saja",
    };

    setRsvps([newRSVP, ...rsvps]);
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const handleWhatsAppRSVP = () => {
    const statusText = status === "hadir" ? `Hadir (${pax} Orang - ${sessionChoice})` : status === "tidak" ? "Berhalangan Hadir" : "Masih Ragu";
    const text = `Halo Riky & Meydi, saya *${name || "Tamu Undangan"}* ingin mengonfirmasi kehadiran untuk pernikahan kalian:%0A%0A*Status Kehadiran:* ${statusText}%0A*Pesan & Doa:* ${message || "-"}`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section 
      id="rsvp" 
      className="relative w-full py-20 bg-transparent flex flex-col items-center px-4 overflow-hidden"
    >
      {/* VINTAGE WATERMARK JOGLO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bunga/vintage_trees_joglo_bg.webp"
            alt="Vintage Trees Watermark"
            fill
            sizes="(max-width: 480px) 100vw, 430px"
            loading="lazy"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* BOTANICAL ACCENTS */}
      <div className="absolute top-28 -left-10 w-28 h-28 pointer-events-none opacity-70 z-0">
        <Image src="/bunga/1.webp" alt="Floral Left" width={140} height={140} className="w-full h-full object-contain filter drop-shadow-md" />
      </div>
      <div className="absolute bottom-32 -right-10 w-28 h-28 pointer-events-none opacity-70 z-0">
        <Image src="/bunga/2.webp" alt="Floral Right" width={140} height={140} className="w-full h-full object-contain filter drop-shadow-md" />
      </div>

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 max-w-sm mx-auto relative z-10"
      >
        <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#5E1920] to-[#3B0D12] text-[#F3E5AB] flex items-center justify-center mx-auto mb-3 border-2 border-[#D4AF37] ring-2 ring-[#C5A059]/30 shadow-md">
          <HeartHandshake size={24} className="text-[#F3E5AB]" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="text-[#C5A059] text-[8px]">✦</span>
          <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#8C6D37] font-bold">
            Reservasi Kehadiran
          </p>
          <span className="text-[#C5A059] text-[8px]">✦</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-[#2C352E] font-bold mb-2">
          RSVP Online
        </h2>

        <p className="text-xs text-gray-600 leading-relaxed px-2">
          Mohon konfirmasi kehadiran Anda demi kenyamanan dan kelancaran acara pernikahan kami.
        </p>
      </motion.div>

      {/* ROYAL RSVP FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[390px] rounded-[2.8rem] p-[3px] bg-gradient-to-b from-[#8C1D24] via-[#5E1920] to-[#8C1D24] border border-[#E5C158] shadow-[0_20px_50px_rgba(94,25,32,0.35)] mb-10 z-10"
      >
        {/* Inner Card Parchment Canvas */}
        <div className="relative w-full h-full rounded-[2.6rem] bg-[#FDFBF7] px-6 py-8 flex flex-col overflow-hidden">
          
          {/* Double Recessed Hairline Borders */}
          <div className="absolute inset-2.5 rounded-[2.4rem] border border-[#78232B]/20 pointer-events-none" />
          <div className="absolute inset-3.5 rounded-[2.2rem] border border-[#C5A059]/30 pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
            
            {/* Field 1: Nama Lengkap */}
            <div>
              <label htmlFor="rsvp-name" className="block font-cinzel text-[11px] font-bold text-[#78232B] tracking-wider mb-1">
                Nama Tamu Undangan
              </label>
              <input
                type="text"
                id="rsvp-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A059]/40 text-xs text-gray-800 bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all shadow-xs"
                placeholder="Masukkan nama lengkap Anda..."
              />
            </div>

            {/* Field 2: Konfirmasi Kehadiran (Pill Radio Selector) */}
            <div>
              <label className="block font-cinzel text-[11px] font-bold text-[#78232B] tracking-wider mb-1.5">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => setStatus("hadir")}
                  className={`py-2 px-1 text-[11px] font-bold rounded-xl border transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                    status === "hadir"
                      ? "bg-gradient-to-br from-[#5E1920] to-[#78232B] text-[#FFFDF8] border-[#E5C158] shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#C5A059]"
                  }`}
                >
                  <span>✓ Hadir</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("tidak")}
                  className={`py-2 px-1 text-[11px] font-bold rounded-xl border transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                    status === "tidak"
                      ? "bg-gradient-to-br from-[#5E1920] to-[#78232B] text-[#FFFDF8] border-[#E5C158] shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#C5A059]"
                  }`}
                >
                  <span>✗ Berhalangan</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("ragu")}
                  className={`py-2 px-1 text-[11px] font-bold rounded-xl border transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                    status === "ragu"
                      ? "bg-gradient-to-br from-[#5E1920] to-[#78232B] text-[#FFFDF8] border-[#E5C158] shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#C5A059]"
                  }`}
                >
                  <span>? Belum Pasti</span>
                </button>
              </div>
            </div>

            {/* Conditional Fields if "Hadir" */}
            <AnimatePresence>
              {status === "hadir" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col gap-3.5 overflow-hidden"
                >
                  {/* Jumlah Tamu (Pax) */}
                  <div>
                    <label className="block font-cinzel text-[11px] font-bold text-[#78232B] tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Users size={12} className="text-[#8C6D37]" />
                      <span>Jumlah Orang yang Hadir</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPax(1)}
                        className={`py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                          pax === 1
                            ? "bg-[#5E1920] text-[#FFFDF8] border-[#E5C158]"
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#C5A059]"
                        }`}
                      >
                        1 Orang
                      </button>
                      <button
                        type="button"
                        onClick={() => setPax(2)}
                        className={`py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                          pax === 2
                            ? "bg-[#5E1920] text-[#FFFDF8] border-[#E5C158]"
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#C5A059]"
                        }`}
                      >
                        2 Orang
                      </button>
                    </div>
                  </div>

                  {/* Sesi Acara */}
                  <div>
                    <label className="block font-cinzel text-[11px] font-bold text-[#78232B] tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#8C6D37]" />
                      <span>Sesi yang Dihadiri</span>
                    </label>
                    <select
                      value={sessionChoice}
                      onChange={(e) => setSessionChoice(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#C5A059]/40 text-xs bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    >
                      <option value="Akad & Resepsi">Akad Nikah &amp; Resepsi (Kedua Sesi)</option>
                      <option value="Akad Nikah Saja">Akad Nikah Saja (09:00 WIB)</option>
                      <option value="Resepsi Saja">Resepsi Saja (13:00 WIB)</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Field: Ucapan & Doa Restu */}
            <div>
              <label htmlFor="rsvp-message" className="block font-cinzel text-[11px] font-bold text-[#78232B] tracking-wider mb-1 flex items-center gap-1.5">
                <MessageSquareHeart size={12} className="text-[#8C6D37]" />
                <span>Pesan &amp; Doa Restu</span>
              </label>
              <textarea
                id="rsvp-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A059]/40 text-xs bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all resize-none shadow-xs"
                placeholder="Tuliskan ucapan dan doa tulus untuk Riky & Meydi..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative group overflow-hidden inline-flex items-center justify-center gap-2 mt-2 w-full py-2.5 bg-gradient-to-r from-[#5E1920] via-[#78232B] to-[#5E1920] border border-[#E5C158]/80 text-[#FFFDF8] rounded-xl text-xs font-semibold tracking-wider transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
              <Send size={14} className="text-[#F3E5AB] relative z-10" />
              <span className="font-cinzel text-[11px] font-bold tracking-wider relative z-10 uppercase">
                Kirim Konfirmasi RSVP
              </span>
            </button>

            {/* WhatsApp Alternative */}
            <button
              type="button"
              onClick={handleWhatsAppRSVP}
              className="inline-flex items-center justify-center gap-2 w-full py-2 bg-emerald-700/10 hover:bg-emerald-700/20 border border-emerald-600/40 text-emerald-800 rounded-xl text-[11px] font-semibold tracking-wide transition-all cursor-pointer"
            >
              <span>Konfirmasi via WhatsApp</span>
            </button>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 py-2.5 px-3 rounded-xl font-medium border border-emerald-200 text-center"
                >
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Terima kasih! Konfirmasi RSVP Anda telah berhasil disimpan.</span>
                </motion.div>
              )}
            </AnimatePresence>

          </form>
        </div>
      </motion.div>

      {/* FEED UCAPAN & KONFIRMASI TAMU */}
      <div className="w-full max-w-[390px] flex flex-col gap-3 z-10">
        <div className="flex items-center justify-between px-1 mb-1">
          <p className="font-cinzel text-xs font-bold text-[#8C6D37] uppercase tracking-wider">
            Konfirmasi &amp; Ucapan ({rsvps.length})
          </p>
          <span className="text-[10px] text-gray-500 font-cinzel">Terbaru</span>
        </div>

        <div className="max-h-[340px] overflow-y-auto pr-1 flex flex-col gap-2.5 scrollbar-thin">
          {rsvps.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#C5A059]/40 shadow-xs text-left"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif font-bold text-xs text-[#2C352E]">{item.name}</span>
                <span
                  className={`text-[9.5px] font-cinzel px-2.5 py-0.5 rounded-full font-bold uppercase ${
                    item.status === "hadir"
                      ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                      : item.status === "tidak"
                      ? "bg-rose-100 text-rose-800 border border-rose-300"
                      : "bg-amber-100 text-amber-800 border border-amber-300"
                  }`}
                >
                  {item.status === "hadir"
                    ? `Hadir (${item.pax} Tamu)`
                    : item.status === "tidak"
                    ? "Berhalangan"
                    : "Belum Pasti"}
                </span>
              </div>
              
              {item.status === "hadir" && item.session !== "-" && (
                <p className="text-[10px] text-[#78232B] font-cinzel font-semibold mb-1">
                  Sesi: {item.session}
                </p>
              )}

              <p className="text-xs text-gray-700 leading-relaxed mb-1.5">{item.message}</p>
              <span className="text-[9.5px] text-[#8C6D37]/75 font-cinzel">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
