"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Unlock,
  KeyRound,
  Users,
  Check,
  Copy,
  ExternalLink,
  Plus,
  Trash2,
  Search,
  Send,
  MessageCircle,
  FileSpreadsheet,
  ArrowLeft,
  ListPlus,
  Eye,
  CheckCheck,
  Sparkles,
  Inbox
} from "lucide-react";

interface InvitedGuest {
  id: string;
  name: string;
  prefix: string;
  phone?: string;
  isSent: boolean;
  createdAt: string;
}

interface RSVPItem {
  id: string;
  name: string;
  status: "hadir" | "tidak" | "ragu";
  pax: number;
  session: string;
  message: string;
  time: string;
}

const DEFAULT_INVITED_GUESTS: InvitedGuest[] = [
  {
    id: "g1",
    name: "Bapak Ahmad Fauzi & Istri",
    prefix: "Bapak/Ibu/Saudara/i",
    isSent: true,
    createdAt: "2 jam yang lalu",
  },
  {
    id: "g2",
    name: "Keluarga Besar Bambang Ari Susanto",
    prefix: "Keluarga Besar",
    isSent: true,
    createdAt: "3 jam yang lalu",
  },
  {
    id: "g3",
    name: "Rizky Pratama & Partner",
    prefix: "Sahabat",
    isSent: false,
    createdAt: "1 hari yang lalu",
  },
  {
    id: "g4",
    name: "Maya Anggraini",
    prefix: "Rekan Kerja",
    isSent: false,
    createdAt: "1 hari yang lalu",
  },
  {
    id: "g5",
    name: "Dimas Suryo & Keluarga",
    prefix: "Bapak/Ibu/Saudara/i",
    isSent: false,
    createdAt: "2 hari yang lalu",
  }
];

export default function AdminDashboard() {
  // Authentication (PIN: 1234)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);
  const [isSuccessUnlock, setIsSuccessUnlock] = useState(false);

  // Tabs: 'guests' (Daftar Tamu) | 'bulk' (Impor Sekaligus) | 'rsvps' (Kehadiran Tamu)
  const [activeTab, setActiveTab] = useState<"guests" | "bulk" | "rsvps">("guests");

  // Guest Master List
  const [guests, setGuests] = useState<InvitedGuest[]>([]);
  const [singleName, setSingleName] = useState("");
  const [singlePrefix, setSinglePrefix] = useState("Bapak/Ibu/Saudara/i");
  const [singlePhone, setSinglePhone] = useState("");

  // Bulk Add
  const [bulkNames, setBulkNames] = useState("");
  const [bulkPrefix, setBulkPrefix] = useState("Bapak/Ibu/Saudara/i");

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSent, setFilterSent] = useState<"all" | "sent" | "unsent">("all");

  // Copy Feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // RSVP data from site
  const [rsvps, setRsvps] = useState<RSVPItem[]>([]);

  // Base URL
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin);

      const auth = sessionStorage.getItem("admin_authenticated");
      if (auth === "true") {
        setIsAuthenticated(true);
      }

      // Load Guests
      const savedGuests = localStorage.getItem("wedding_invited_guests");
      if (savedGuests) {
        try {
          const parsed = JSON.parse(savedGuests);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setGuests(parsed);
          } else {
            setGuests(DEFAULT_INVITED_GUESTS);
            localStorage.setItem("wedding_invited_guests", JSON.stringify(DEFAULT_INVITED_GUESTS));
          }
        } catch {
          setGuests(DEFAULT_INVITED_GUESTS);
        }
      } else {
        setGuests(DEFAULT_INVITED_GUESTS);
        localStorage.setItem("wedding_invited_guests", JSON.stringify(DEFAULT_INVITED_GUESTS));
      }

      // Load RSVPs
      const savedRSVPs = localStorage.getItem("wedding_rsvps");
      if (savedRSVPs) {
        try {
          setRsvps(JSON.parse(savedRSVPs));
        } catch {
          // ignore
        }
      }
    }
  }, []);

  const updateGuests = (newGuests: InvitedGuest[]) => {
    setGuests(newGuests);
    if (typeof window !== "undefined") {
      localStorage.setItem("wedding_invited_guests", JSON.stringify(newGuests));
    }
  };

  // PIN Access
  const handlePinInput = (digit: string) => {
    if (pin.length < 4) {
      const updated = pin + digit;
      setPin(updated);

      if (updated.length === 4) {
        if (updated === "1234") {
          setIsSuccessUnlock(true);
          setTimeout(() => {
            setIsAuthenticated(true);
            sessionStorage.setItem("admin_authenticated", "true");
            setPin("");
            setIsSuccessUnlock(false);
          }, 400);
        } else {
          setPinError(true);
          setTimeout(() => {
            setPin("");
            setPinError(false);
          }, 650);
        }
      }
    }
  };

  const handleBackspace = () => {
    if (pin.length > 0) setPin(pin.slice(0, -1));
  };

  const handleClearPin = () => setPin("");

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
    setPin("");
  };

  // Physical Keyboard Listener
  useEffect(() => {
    if (isAuthenticated) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) {
        handlePinInput(e.key);
      } else if (e.key === "Backspace") {
        handleBackspace();
      } else if (e.key === "Escape" || e.key === "Delete") {
        handleClearPin();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pin, isAuthenticated]);

  // Stats
  const guestStats = useMemo(() => {
    const total = guests.length;
    const sent = guests.filter((g) => g.isSent).length;
    const unsent = total - sent;
    return { total, sent, unsent };
  }, [guests]);

  // Filtered List
  const filteredGuests = useMemo(() => {
    return guests.filter((g) => {
      const matchSearch =
        g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.prefix.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSent =
        filterSent === "all" ? true : filterSent === "sent" ? g.isSent : !g.isSent;
      return matchSearch && matchSent;
    });
  }, [guests, searchTerm, filterSent]);

  // URL & WA Message
  const getGuestUrl = (guest: InvitedGuest) => {
    const fullName = `${guest.prefix ? `${guest.prefix} ` : ""}${guest.name}`.trim();
    return `${baseUrl || ""}/?to=${encodeURIComponent(fullName)}`;
  };

  const getWhatsAppMessage = (guest: InvitedGuest) => {
    const fullName = `${guest.prefix ? `${guest.prefix} ` : ""}${guest.name}`.trim();
    const link = getGuestUrl(guest);

    return `Kepada Yth.
*${fullName}*

_Assalamu’alaikum Warahmatullahi Wabarakatuh_

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada hari pernikahan kami:

💍 *Riky Saputra & Meidy Purnama Ariyani*
🗓️ Rabu, 25 November 2026
📍 Gedung Community Center, Simpang Lagoi, Bintan

Berikut tautan undangan online resmi untuk detail acara:
${link}

Merupakan suatu kehormatan & kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.

_Wassalamu’alaikum Warahmatullahi Wabarakatuh_
*Riky & Meydi*`;
  };

  // Add Guest Actions
  const handleAddSingleGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!singleName.trim()) return;

    const newGuest: InvitedGuest = {
      id: Date.now().toString(),
      name: singleName.trim(),
      prefix: singlePrefix,
      phone: singlePhone.trim() || undefined,
      isSent: false,
      createdAt: "Baru saja",
    };

    updateGuests([newGuest, ...guests]);
    setSingleName("");
    setSinglePhone("");
  };

  const handleAddBulkGuests = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulkNames.trim()) return;

    const lines = bulkNames
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    if (lines.length === 0) return;

    const newEntries: InvitedGuest[] = lines.map((line, idx) => ({
      id: (Date.now() + idx).toString(),
      name: line,
      prefix: bulkPrefix,
      isSent: false,
      createdAt: "Baru saja",
    }));

    updateGuests([...newEntries, ...guests]);
    setBulkNames("");
    setActiveTab("guests");
  };

  const toggleSentStatus = (id: string) => {
    const updated = guests.map((g) => (g.id === id ? { ...g, isSent: !g.isSent } : g));
    updateGuests(updated);
  };

  const handleSendWhatsApp = (guest: InvitedGuest) => {
    const text = encodeURIComponent(getWhatsAppMessage(guest));
    let url = `https://api.whatsapp.com/send?text=${text}`;
    if (guest.phone) {
      const cleanPhone = guest.phone.replace(/[^0-9]/g, "");
      const formattedPhone = cleanPhone.startsWith("0") ? `62${cleanPhone.slice(1)}` : cleanPhone;
      url = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${text}`;
    }

    if (!guest.isSent) {
      toggleSentStatus(guest.id);
    }
    window.open(url, "_blank");
  };

  const handleCopyGuestLink = (guest: InvitedGuest) => {
    const link = getGuestUrl(guest);
    navigator.clipboard.writeText(link);
    setCopiedId(guest.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleDeleteGuest = (id: string, name: string) => {
    if (confirm(`Hapus "${name}" dari daftar tamu?`)) {
      updateGuests(guests.filter((g) => g.id !== id));
    }
  };

  const handleExportCSV = () => {
    const headers = ["Nama Tamu", "Sapaan", "Status Kirim", "Link Undangan"];
    const rows = guests.map((g) => [
      `"${g.name.replace(/"/g, '""')}"`,
      `"${g.prefix}"`,
      g.isSent ? "Sudah Dikirim" : "Belum Dikirim",
      `"${getGuestUrl(g)}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Daftar_Tamu_Riky_Meydi_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ==========================================
  // VIEW 1: CLEAN CREAM MINIMALIST PIN SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen w-full flex flex-col justify-between items-center px-6 py-10 bg-[#FAF7F2] text-[#2C241E]">
        {/* Top Header */}
        <div className="w-full flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-[#7A6B5D] hover:text-[#2C241E] transition-colors py-1.5 px-3 rounded-full bg-white border border-[#EAE3D2] shadow-xs"
          >
            <ArrowLeft size={13} />
            <span>Ke Undangan</span>
          </Link>
          <span className="text-[10px] tracking-wider text-[#9E7D3B] font-cinzel uppercase bg-[#F3EDE2] px-2.5 py-1 rounded-full border border-[#E5DAC8]">
            Admin Gate
          </span>
        </div>

        {/* PIN Container */}
        <div className="flex flex-col items-center w-full max-w-xs text-center my-auto">
          {/* Aesthetic Emblem */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-sm border ${
              pinError
                ? "bg-rose-50 border-rose-300 text-rose-500"
                : isSuccessUnlock
                ? "bg-emerald-50 border-emerald-300 text-emerald-600"
                : "bg-white border-[#E8DFCF] text-[#9E7D3B]"
            }`}
          >
            {isSuccessUnlock ? (
              <Unlock size={28} className="animate-pulse" />
            ) : (
              <KeyRound size={26} />
            )}
          </motion.div>

          <h1 className="font-serif text-2xl font-bold text-[#2C241E] tracking-tight mb-1">
            Buku Tamu Admin
          </h1>
          <p className="text-xs text-[#7A6B5D] mb-6">
            Pernikahan Riky & Meydi
          </p>

          {/* PIN Dots */}
          <motion.div
            animate={pinError ? { x: [-10, 10, -6, 6, -3, 3, 0] } : {}}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-center gap-3.5 mb-2"
          >
            {[0, 1, 2, 3].map((idx) => {
              const isFilled = pin.length > idx;
              return (
                <div
                  key={idx}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-200 border ${
                    pinError
                      ? "border-rose-400 bg-rose-400 scale-105"
                      : isSuccessUnlock
                      ? "border-emerald-500 bg-emerald-500 scale-105"
                      : isFilled
                      ? "border-[#9E7D3B] bg-[#9E7D3B] scale-110 shadow-xs"
                      : "border-[#D6CCBC] bg-transparent"
                  }`}
                />
              );
            })}
          </motion.div>

          {/* Hint */}
          <div className="h-6 mb-5">
            {pinError ? (
              <p className="text-xs font-semibold text-rose-500">
                PIN salah. Coba lagi!
              </p>
            ) : isSuccessUnlock ? (
              <p className="text-xs font-semibold text-emerald-600 flex items-center justify-center gap-1">
                <Check size={14} /> Membuka Buku Tamu...
              </p>
            ) : (
              <p className="text-[11px] text-[#8C7A68]">
                Masukkan PIN: <span className="font-bold text-[#9E7D3B]">1234</span>
              </p>
            )}
          </div>

          {/* Clean Cream Keypad */}
          <div className="grid grid-cols-3 gap-2.5 w-full max-w-[260px]">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handlePinInput(num)}
                className="h-13 rounded-2xl bg-white hover:bg-[#F3EDE2] active:bg-[#ECE4D4] border border-[#E8DFCF] text-xl font-serif font-bold text-[#2C241E] active:scale-95 transition-all flex items-center justify-center shadow-xs select-none"
              >
                {num}
              </button>
            ))}

            <button
              type="button"
              onClick={handleClearPin}
              className="h-13 rounded-2xl bg-white/60 hover:bg-white active:bg-rose-50 border border-[#E8DFCF] text-xs font-semibold text-rose-600 active:scale-95 transition-all flex items-center justify-center select-none"
            >
              Hapus
            </button>

            <button
              type="button"
              onClick={() => handlePinInput("0")}
              className="h-13 rounded-2xl bg-white hover:bg-[#F3EDE2] active:bg-[#ECE4D4] border border-[#E8DFCF] text-xl font-serif font-bold text-[#2C241E] active:scale-95 transition-all flex items-center justify-center shadow-xs select-none"
            >
              0
            </button>

            <button
              type="button"
              onClick={handleBackspace}
              className="h-13 rounded-2xl bg-white/60 hover:bg-white active:bg-[#F3EDE2] border border-[#E8DFCF] text-base font-semibold text-[#7A6B5D] active:scale-95 transition-all flex items-center justify-center select-none"
            >
              ⌫
            </button>
          </div>
        </div>

        <div className="text-center text-[11px] text-[#A69989]">
          The Wedding of Riky & Meydi
        </div>
      </main>
    );
  }

  // ==========================================
  // VIEW 2: CLEAN AESTHETIC CREAM DASHBOARD
  // ==========================================
  return (
    <main className="min-h-screen w-full pb-24 bg-[#FAF7F2] text-[#2C241E]">
      {/* CLEAN STICKY APP BAR */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE3D2] px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-base font-bold text-[#2C241E] leading-tight">
              Buku Tamu Undangan
            </h1>
            <p className="text-[11px] text-[#8C7A68]">
              Riky Saputra & Meidy Purnama Ariyani
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href="/"
              target="_blank"
              title="Lihat Website Undangan"
              className="w-8 h-8 rounded-xl bg-white hover:bg-[#F3EDE2] border border-[#E2DAC7] flex items-center justify-center text-[#7A6B5D] hover:text-[#2C241E] transition-colors shadow-2xs"
            >
              <ExternalLink size={13} />
            </Link>

            <button
              onClick={handleLogout}
              title="Kunci Dashboard"
              className="w-8 h-8 rounded-xl bg-white hover:bg-rose-50 border border-[#E2DAC7] flex items-center justify-center text-[#7A6B5D] hover:text-rose-600 transition-colors shadow-2xs"
            >
              <Lock size={13} />
            </button>
          </div>
        </div>

        {/* CREAM PILL TABS */}
        <div className="flex gap-1.5 mt-3 bg-[#EFE9DD] p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("guests")}
            className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all text-center ${
              activeTab === "guests"
                ? "bg-white text-[#2C241E] font-bold shadow-xs"
                : "text-[#7A6B5D] hover:text-[#2C241E]"
            }`}
          >
            Daftar Tamu ({guests.length})
          </button>

          <button
            onClick={() => setActiveTab("bulk")}
            className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all text-center ${
              activeTab === "bulk"
                ? "bg-white text-[#2C241E] font-bold shadow-xs"
                : "text-[#7A6B5D] hover:text-[#2C241E]"
            }`}
          >
            + Impor Banyak
          </button>

          <button
            onClick={() => setActiveTab("rsvps")}
            className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all text-center ${
              activeTab === "rsvps"
                ? "bg-white text-[#2C241E] font-bold shadow-xs"
                : "text-[#7A6B5D] hover:text-[#2C241E]"
            }`}
          >
            RSVP ({rsvps.length})
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="px-4 py-4 space-y-3.5">

        {/* ======================================================== */}
        {/* TAB 1: DAFTAR TAMU (MAIN) */}
        {/* ======================================================== */}
        {activeTab === "guests" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3.5"
          >
            {/* MINIMAL STATS BANNER */}
            <div className="grid grid-cols-3 gap-2 bg-white p-3 rounded-2xl border border-[#EAE3D2] shadow-2xs">
              <div className="text-center">
                <span className="text-[10px] text-[#8C7A68] block uppercase tracking-wider font-semibold">
                  Total
                </span>
                <span className="text-lg font-serif font-bold text-[#2C241E]">
                  {guestStats.total}
                </span>
              </div>

              <div
                onClick={() => setFilterSent("sent")}
                className={`text-center cursor-pointer rounded-xl p-0.5 transition-colors ${
                  filterSent === "sent" ? "bg-[#EAF5EE]" : ""
                }`}
              >
                <span className="text-[10px] text-[#2D6A4F] block uppercase tracking-wider font-semibold">
                  Terkirim
                </span>
                <span className="text-lg font-serif font-bold text-[#2D6A4F]">
                  {guestStats.sent}
                </span>
              </div>

              <div
                onClick={() => setFilterSent("unsent")}
                className={`text-center cursor-pointer rounded-xl p-0.5 transition-colors ${
                  filterSent === "unsent" ? "bg-[#FBF2E6]" : ""
                }`}
              >
                <span className="text-[10px] text-[#9E6D38] block uppercase tracking-wider font-semibold">
                  Belum
                </span>
                <span className="text-lg font-serif font-bold text-[#9E6D38]">
                  {guestStats.unsent}
                </span>
              </div>
            </div>

            {/* FORM INPUT TAMU (ESTETIK CREAM & SIMPEL) */}
            <div className="bg-white p-4 rounded-2xl border border-[#EAE3D2] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#2C241E] uppercase tracking-wide">
                  Isi Nama Tamu Baru
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab("bulk")}
                  className="text-[11px] text-[#9E7D3B] hover:underline flex items-center gap-1 font-medium"
                >
                  <ListPlus size={12} />
                  <span>Tempel Banyak Sekaligus</span>
                </button>
              </div>

              <form onSubmit={handleAddSingleGuest} className="space-y-2.5">
                {/* Sapaan Selector (Clean Pill Chips) */}
                <div className="flex flex-wrap gap-1">
                  {[
                    "Bapak/Ibu/Saudara/i",
                    "Keluarga Besar",
                    "Sahabat",
                    "Rekan Kerja"
                  ].map((pfx) => (
                    <button
                      key={pfx}
                      type="button"
                      onClick={() => setSinglePrefix(pfx)}
                      className={`py-1 px-2.5 rounded-full text-[10px] transition-all border ${
                        singlePrefix === pfx
                          ? "bg-[#5A171E] border-[#5A171E] text-white font-semibold"
                          : "bg-[#F7F4EE] border-[#E8DFCF] text-[#7A6B5D] hover:bg-[#EFE9DD]"
                      }`}
                    >
                      {pfx}
                    </button>
                  ))}
                </div>

                {/* Input Nama Tamu */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Nama tamu... (contoh: Bapak Rudi Hartono & Istri)"
                    value={singleName}
                    onChange={(e) => setSingleName(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E2DAC7] rounded-xl px-3.5 py-2.5 text-xs text-[#2C241E] placeholder-[#A69989] focus:outline-none focus:border-[#9E7D3B] focus:bg-white transition-all"
                  />
                </div>

                {/* Input No WA (Optional) */}
                <div>
                  <input
                    type="tel"
                    placeholder="No. WhatsApp (opsional, untuk kirim otomatis)"
                    value={singlePhone}
                    onChange={(e) => setSinglePhone(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E2DAC7] rounded-xl px-3.5 py-2 text-xs text-[#2C241E] placeholder-[#A69989] focus:outline-none focus:border-[#9E7D3B] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#5A171E] hover:bg-[#481218] active:scale-98 text-[#FFFDF8] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all"
                >
                  <Plus size={14} />
                  <span>Tambahkan Tamu</span>
                </button>
              </form>
            </div>

            {/* SEARCH & FILTER CHIPS */}
            <div className="space-y-2">
              <div className="relative">
                <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A69989]" />
                <input
                  type="text"
                  placeholder="Cari nama tamu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-[#E2DAC7] rounded-xl pl-9 pr-3.5 py-2 text-xs text-[#2C241E] placeholder-[#A69989] focus:outline-none focus:border-[#9E7D3B] shadow-2xs"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <button
                    onClick={() => setFilterSent("all")}
                    className={`px-2.5 py-1 rounded-lg text-[10.5px] transition-all border ${
                      filterSent === "all"
                        ? "bg-[#2C241E] text-white border-[#2C241E] font-medium"
                        : "bg-white text-[#7A6B5D] border-[#E2DAC7]"
                    }`}
                  >
                    Semua ({guests.length})
                  </button>

                  <button
                    onClick={() => setFilterSent("unsent")}
                    className={`px-2.5 py-1 rounded-lg text-[10.5px] transition-all border ${
                      filterSent === "unsent"
                        ? "bg-[#9E6D38] text-white border-[#9E6D38] font-medium"
                        : "bg-white text-[#7A6B5D] border-[#E2DAC7]"
                    }`}
                  >
                    Belum ({guestStats.unsent})
                  </button>

                  <button
                    onClick={() => setFilterSent("sent")}
                    className={`px-2.5 py-1 rounded-lg text-[10.5px] transition-all border ${
                      filterSent === "sent"
                        ? "bg-[#2D6A4F] text-white border-[#2D6A4F] font-medium"
                        : "bg-white text-[#7A6B5D] border-[#E2DAC7]"
                    }`}
                  >
                    Terkirim ({guestStats.sent})
                  </button>
                </div>

                <button
                  onClick={handleExportCSV}
                  title="Unduh CSV"
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#E2DAC7] text-[#7A6B5D] hover:text-[#2C241E] text-[10.5px] flex items-center gap-1 shadow-2xs"
                >
                  <FileSpreadsheet size={12} />
                  <span>Excel</span>
                </button>
              </div>
            </div>

            {/* GUEST LIST CARDS (SIMPEL & CLEAN) */}
            <div className="space-y-2">
              {filteredGuests.length === 0 ? (
                <div className="text-center py-10 text-xs text-[#8C7A68] bg-white rounded-2xl border border-[#EAE3D2] space-y-1">
                  <p>Tidak ada tamu yang sesuai.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setFilterSent("all");
                    }}
                    className="text-[#9E7D3B] text-[11px] underline"
                  >
                    Tampilkan Semua
                  </button>
                </div>
              ) : (
                filteredGuests.map((guest) => {
                  const isCopied = copiedId === guest.id;

                  return (
                    <div
                      key={guest.id}
                      className="bg-white p-3.5 rounded-2xl border border-[#EAE3D2] shadow-2xs space-y-2.5"
                    >
                      {/* Name & Sent Tag */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] text-[#9E7D3B] font-medium block">
                            {guest.prefix}
                          </span>
                          <h4 className="font-serif text-sm font-bold text-[#2C241E] leading-snug">
                            {guest.name}
                          </h4>
                          {guest.phone && (
                            <span className="text-[10px] text-[#8C7A68] block mt-0.5">
                              WA: {guest.phone}
                            </span>
                          )}
                        </div>

                        {/* Status Toggle Tag */}
                        <button
                          onClick={() => toggleSentStatus(guest.id)}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-medium flex items-center gap-1 border transition-all active:scale-95 ${
                            guest.isSent
                              ? "bg-[#EAF5EE] text-[#2D6A4F] border-[#CDE5D5]"
                              : "bg-[#FBF2E6] text-[#9E6D38] border-[#EADAC5]"
                          }`}
                        >
                          {guest.isSent ? (
                            <>
                              <CheckCheck size={11} />
                              <span>Terkirim</span>
                            </>
                          ) : (
                            <span>Belum</span>
                          )}
                        </button>
                      </div>

                      {/* Main Action: Kirim WA + Salin Link */}
                      <div className="flex items-center gap-1.5 pt-1 border-t border-[#F3EDE2]">
                        {/* 1. Kirim WA (Primary Button) */}
                        <button
                          type="button"
                          onClick={() => handleSendWhatsApp(guest)}
                          className="flex-1 py-1.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] active:scale-98 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all"
                        >
                          <MessageCircle size={13} />
                          <span>Kirim WA</span>
                        </button>

                        {/* 2. Salin Link */}
                        <button
                          type="button"
                          onClick={() => handleCopyGuestLink(guest)}
                          className="py-1.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E2DAC7] text-[#2C241E] text-xs font-medium flex items-center justify-center gap-1 transition-all"
                          title="Salin Tautan"
                        >
                          {isCopied ? (
                            <Check size={13} className="text-emerald-600" />
                          ) : (
                            <Copy size={13} className="text-[#7A6B5D]" />
                          )}
                          <span>{isCopied ? "Tersalin" : "Salin"}</span>
                        </button>

                        {/* 3. Preview */}
                        <Link
                          href={`/?to=${encodeURIComponent(`${guest.prefix ? `${guest.prefix} ` : ""}${guest.name}`)}`}
                          target="_blank"
                          title="Buka tampilan tamu"
                          className="w-8 h-8 rounded-xl bg-[#FAF7F2] hover:bg-[#F3EDE2] border border-[#E2DAC7] flex items-center justify-center text-[#7A6B5D]"
                        >
                          <Eye size={13} />
                        </Link>

                        {/* 4. Delete */}
                        <button
                          onClick={() => handleDeleteGuest(guest.id, guest.name)}
                          title="Hapus"
                          className="w-8 h-8 rounded-xl bg-[#FAF7F2] hover:bg-rose-50 border border-[#E2DAC7] flex items-center justify-center text-[#A69989] hover:text-rose-500"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: IMPOR BANYAK NAMA SEKALIGUS */}
        {/* ======================================================== */}
        {activeTab === "bulk" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3.5"
          >
            <div className="bg-white p-4 rounded-2xl border border-[#EAE3D2] shadow-xs space-y-3">
              <div>
                <h3 className="font-serif text-sm font-bold text-[#2C241E]">
                  Impor Banyak Nama Tamu
                </h3>
                <p className="text-[11px] text-[#7A6B5D] mt-0.5 leading-relaxed">
                  Tempel daftar nama tamu dari WhatsApp atau Excel. Cukup <strong>1 nama per baris</strong>.
                </p>
              </div>

              <form onSubmit={handleAddBulkGuests} className="space-y-3">
                {/* Prefix */}
                <div>
                  <label className="block text-[10px] font-semibold text-[#8C7A68] uppercase tracking-wider mb-1">
                    Sapaan Seragam
                  </label>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Bapak/Ibu/Saudara/i",
                      "Keluarga Besar",
                      "Sahabat",
                      "Rekan Kerja"
                    ].map((pfx) => (
                      <button
                        key={pfx}
                        type="button"
                        onClick={() => setBulkPrefix(pfx)}
                        className={`py-1 px-2.5 rounded-full text-[10px] transition-all border ${
                          bulkPrefix === pfx
                            ? "bg-[#5A171E] border-[#5A171E] text-white font-semibold"
                            : "bg-[#F7F4EE] border-[#E8DFCF] text-[#7A6B5D]"
                        }`}
                      >
                        {pfx}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label className="block text-[10px] font-semibold text-[#8C7A68] uppercase tracking-wider mb-1">
                    Daftar Nama
                  </label>
                  <textarea
                    rows={8}
                    required
                    placeholder={`Contoh:\nBapak Bambang Ari Susanto\nIbu Yushariyani & Keluarga\nCitra Kirana & Pasangan\nDoni Pratama`}
                    value={bulkNames}
                    onChange={(e) => setBulkNames(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E2DAC7] rounded-xl p-3 text-xs text-[#2C241E] placeholder-[#A69989] font-sans focus:outline-none focus:border-[#9E7D3B] leading-relaxed"
                  />
                  <span className="text-[10px] text-[#8C7A68] block mt-1">
                    {bulkNames.split("\n").filter((l) => l.trim().length > 0).length} nama terdeteksi
                  </span>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("guests")}
                    className="flex-1 py-2 rounded-xl bg-[#FAF7F2] border border-[#E2DAC7] text-[#7A6B5D] text-xs font-semibold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl bg-[#5A171E] text-white text-xs font-semibold shadow-xs"
                  >
                    Impor Semua Nama
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: RSVP KEHADIRAN TAMU */}
        {/* ======================================================== */}
        {activeTab === "rsvps" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            <div className="bg-white p-3 rounded-2xl border border-[#EAE3D2] flex items-center justify-between text-xs">
              <span className="text-[#7A6B5D]">Total Konfirmasi: {rsvps.length}</span>
              <span className="text-[#2D6A4F] font-bold">
                {rsvps.filter((r) => r.status === "hadir").reduce((sum, r) => sum + (r.pax || 1), 0)} Pax Hadir
              </span>
            </div>

            <div className="space-y-2">
              {rsvps.length === 0 ? (
                <div className="text-center py-10 text-xs text-[#8C7A68] bg-white rounded-2xl border border-[#EAE3D2]">
                  Belum ada konfirmasi RSVP dari website.
                </div>
              ) : (
                rsvps.map((rsvp) => (
                  <div
                    key={rsvp.id}
                    className="bg-white p-3.5 rounded-2xl border border-[#EAE3D2] shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#2C241E]">
                          {rsvp.name}
                        </h4>
                        <span className="text-[10px] text-[#8C7A68] block mt-0.5">
                          {rsvp.session} • {rsvp.time}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${
                          rsvp.status === "hadir"
                            ? "bg-[#EAF5EE] text-[#2D6A4F] border-[#CDE5D5]"
                            : rsvp.status === "tidak"
                            ? "bg-rose-50 text-rose-600 border-rose-200"
                            : "bg-[#FBF2E6] text-[#9E6D38] border-[#EADAC5]"
                        }`}
                      >
                        {rsvp.status === "hadir"
                          ? `${rsvp.pax} Pax`
                          : rsvp.status === "tidak"
                          ? "Tidak Hadir"
                          : "Ragu"}
                      </span>
                    </div>

                    {rsvp.message && (
                      <p className="text-xs text-[#5A4E42] italic bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EAE3D2]/60 mt-1">
                        &quot;{rsvp.message}&quot;
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}

      </div>
    </main>
  );
}
