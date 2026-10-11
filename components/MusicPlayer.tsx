"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(e => console.log("Play prevented:", e));
      }
    };

    // Listen for custom event from Buka Undangan button
    window.addEventListener("startMusic", playMusic);
    
    return () => window.removeEventListener("startMusic", playMusic);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/bg-music.mp3" loop preload="none" />
      
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={togglePlay}
        className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-12 h-12 sm:w-13 sm:h-13 bg-gradient-to-br from-[#5E1920] to-[#3B0D12] text-[#F3E5AB] rounded-full shadow-[0_8px_25px_rgba(82,28,32,0.6)] border-2 border-[#D4AF37] ring-2 ring-[#C5A059]/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Toggle music"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {isPlaying ? <Music size={18} className="text-[#F3E5AB]" /> : <Pause size={18} className="text-[#F3E5AB]" />}
        </motion.div>
      </motion.button>
    </>
  );
}
