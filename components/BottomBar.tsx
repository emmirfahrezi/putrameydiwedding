"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Users, 
  CalendarHeart, 
  Sparkles, 
  Camera, 
  MessageSquareHeart 
} from "lucide-react";

interface BottomBarProps {
  isOpen: boolean;
}

interface NavItem {
  id: string;
  label: string;
  icon: typeof Heart;
}

const navItems: NavItem[] = [
  { id: "home", label: "Awal", icon: Heart },
  { id: "profiles", label: "Mempelai", icon: Users },
  { id: "events", label: "Acara", icon: CalendarHeart },
  { id: "story", label: "Kisah", icon: Sparkles },
  { id: "gallery", label: "Galeri", icon: Camera },
  { id: "rsvp", label: "RSVP", icon: MessageSquareHeart },
];

export default function BottomBar({ isOpen: propIsOpen }: BottomBarProps) {
  const [internalOpened, setInternalOpened] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isVisible = propIsOpen || internalOpened;

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__invitationOpened) {
      setInternalOpened(true);
    }
    const handleOpen = () => setInternalOpened(true);
    window.addEventListener("invitationOpened", handleOpen);
    return () => window.removeEventListener("invitationOpened", handleOpen);
  }, []);

  // Track active section efficiently using IntersectionObserver (zero scroll lag)
  useEffect(() => {
    if (!isVisible) return;

    const sectionIds = navItems.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isVisible]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25, delay: 0.3 }}
          className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-md w-auto"
          aria-label="Navigasi Undangan"
        >
          <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#160608]/90 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.12)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  aria-label={item.label}
                  className={`relative flex flex-col items-center justify-center px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? "text-[#FDFBF7]"
                      : "text-[#D4AF37]/65 hover:text-[#F3E5AB] active:scale-95"
                  }`}
                >
                  {/* Active highlight pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-b from-[#8C232C]/80 via-[#5E1920]/80 to-[#3B0D12]/80 border border-[#D4AF37]/50 shadow-[0_0_12px_rgba(212,175,55,0.35)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <Icon
                    className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300 ${
                      isActive
                        ? "text-[#F3E5AB] scale-110 drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]"
                        : "group-hover:scale-105"
                    }`}
                  />
                  <span
                    className={`text-[9px] sm:text-[10px] tracking-wider mt-0.5 font-medium transition-colors ${
                      isActive
                        ? "text-[#FDFBF7] font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                        : "text-[#D4AF37]/70"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
