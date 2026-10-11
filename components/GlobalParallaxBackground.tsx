"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function GlobalParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // The background will move slightly upwards (-10% to 10% or similar) over the entire document scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none bg-black">
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute -top-[20%] left-0 right-0 w-full h-[150%] opacity-40"
      >
        <Image 
          src="/mountain-parallax.webp" 
          alt="Global Mountain Parallax Background" 
          fill 
          className="object-cover object-top" 
          priority
        />
      </motion.div>
    </div>
  );
}
