"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SaveTheDate from "@/components/SaveTheDate";
import Profiles from "@/components/Profiles";
import EventDetails from "@/components/EventDetails";
import LoveStory from "@/components/LoveStory";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      <Hero isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      <SaveTheDate isOpened={isOpen} />
      <Profiles />
      <EventDetails />
      <LoveStory />
      <Countdown />
      <Gallery />
      <RSVP />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
