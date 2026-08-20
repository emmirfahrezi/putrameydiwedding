"use client";

import { motion } from "framer-motion";

export default function WishesForm() {
  return (
    <section className="relative w-full py-24 bg-transparent flex flex-col items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-4xl text-[#324335] font-bold mb-4">Kirim Ucapan</h2>
        <p className="text-gray-600 max-w-md mx-auto text-sm">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-xl bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#E8E1D5]"
      >
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Nama</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C1A073] focus:border-transparent transition-all"
              placeholder="Masukkan nama Anda"
            />
          </div>
          
          <div>
            <label htmlFor="attendance" className="block text-sm text-gray-700 mb-1">Kehadiran</label>
            <select
              id="attendance"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C1A073] focus:border-transparent transition-all"
            >
              <option value="hadir">Ya, saya akan hadir</option>
              <option value="tidak">Maaf, saya tidak bisa hadir</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-700 mb-1">Ucapan & Doa</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C1A073] focus:border-transparent transition-all resize-none"
              placeholder="Berikan ucapan atau doa..."
            ></textarea>
          </div>

          <button
            type="button"
            className="mt-4 w-full py-3 bg-[#521C20] text-white rounded-xl font-semibold tracking-wider hover:bg-[#3d1518] transition-colors"
          >
            KIRIM UCAPAN
          </button>
        </form>
      </motion.div>
    </section>
  );
}
