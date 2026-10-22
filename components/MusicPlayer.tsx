"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playMusic = () => {
      const audio = audioRef.current;
      if (audio && !isPlaying) {
        audio.volume = 0.5;

        const setTime = () => {
          try {
            if (audio.currentTime < 4) {
              audio.currentTime = 4;
            }
          } catch {
            // ignore
          }
        };

        if (audio.readyState >= 1) {
          setTime();
        } else {
          audio.addEventListener("loadedmetadata", setTime, { once: true });
        }

        audio.play().then(() => {
          setIsPlaying(true);
          setTime();
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
        if (audioRef.current.currentTime < 4) {
          audioRef.current.currentTime = 4;
        }
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/sadewok.mp3#t=4" loop preload="auto" />
      
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
          className="transform-gpu"
          style={{ willChange: "transform" }}
        >
          {isPlaying ? <Music size={18} className="text-[#F3E5AB]" /> : <Pause size={18} className="text-[#F3E5AB]" />}
        </motion.div>
      </motion.button>
    </>
  );
}
