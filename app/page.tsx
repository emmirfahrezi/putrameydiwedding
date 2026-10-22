"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SaveTheDate from "@/components/SaveTheDate";
import Profiles from "@/components/Profiles";
import EventDetails from "@/components/EventDetails";
import LoveStory from "@/components/LoveStory";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import WeddingGift from "@/components/WeddingGift";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import BottomBar from "@/components/BottomBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      <Hero isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      <div className="section-optimize"><SaveTheDate isOpened={isOpen} /></div>
      <div className="section-optimize"><Profiles /></div>
      <div className="section-optimize"><EventDetails /></div>
      <div className="section-optimize"><LoveStory /></div>
      <div className="section-optimize"><Countdown /></div>
      <div className="section-optimize"><Gallery /></div>
      <div className="section-optimize"><WeddingGift /></div>
      <div className="section-optimize"><RSVP /></div>
      <div className="section-optimize"><Footer /></div>
      <MusicPlayer />
      <BottomBar isOpen={isOpen} />
    </main>
  );
}
