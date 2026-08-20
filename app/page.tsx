import Hero from "@/components/Hero";
import SaveTheDate from "@/components/SaveTheDate";
import Profiles from "@/components/Profiles";
import EventDetails from "@/components/EventDetails";
import LoveStory from "@/components/LoveStory";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import WeddingGift from "@/components/WeddingGift";
import WishesForm from "@/components/WishesForm";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <SaveTheDate />
      <Profiles />
      <EventDetails />
      <LoveStory />
      <Countdown />
      <Gallery />
      <WeddingGift />
      <WishesForm />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
