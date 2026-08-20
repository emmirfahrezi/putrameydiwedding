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

    // Try to auto-play when component mounts
    playMusic();

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
      <audio ref={audioRef} src="/music/bg-music.mp3" loop />
      
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#521C20] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#3d1518] transition-colors"
        aria-label="Toggle music"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {isPlaying ? <Music size={20} /> : <Pause size={20} />}
        </motion.div>
      </motion.button>
    </>
  );
}
