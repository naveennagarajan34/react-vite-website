import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationNote } from './components/InvitationNote';
import { EventSchedule } from './components/EventSchedule';
import { VenueNavigation } from './components/VenueNavigation';
import { FooterBlessings } from './components/FooterBlessings';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ThoranamHeader } from './components/OrnamentalMotifs';
import { weddingAudio } from './utils/audioPlayer';
import { Volume2, VolumeX } from 'lucide-react';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleMusic = () => {
    const isPlaying = weddingAudio.toggle();
    setIsPlayingMusic(isPlaying);
  };

  return (
    <div className="min-h-screen bg-royal-bg-pattern text-[#333333] flex flex-col relative selection:bg-[#D4AF37] selection:text-[#1A1A1A] font-inter">
      {/* Top Auspicious Zari Ribbon & Thoranam */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6D3A3]">
        <div className="zari-border-top" />
        <ThoranamHeader />
        <div className="zari-border-bottom" />
      </div>

      {/* Floating Ambient Music Audio Button (Accessible touch target >= 44px) */}
      <div className="fixed top-12 right-3 sm:right-5 z-40">
        <button
          onClick={toggleMusic}
          type="button"
          aria-label={isPlayingMusic ? "Mute traditional wedding music" : "Play traditional wedding music"}
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center space-x-2 px-3.5 py-2 rounded-full text-sm font-semibold backdrop-blur-md shadow-md transition-all ${
            isPlayingMusic 
              ? 'bg-[#D4AF37] text-[#1A1A1A] ring-2 ring-[#E6D3A3] animate-pulse'
              : 'bg-[#F9F6F0]/95 text-[#8C6A16] border border-[#E6D3A3] hover:bg-[#F3EDE2]'
          }`}
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-4 h-4 text-[#1A1A1A]" />
              <span className="hidden sm:inline font-cinzel text-xs font-bold">Nadaswaram Playing</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-[#8C6A16]" />
              <span className="hidden sm:inline font-cinzel text-xs font-bold">Play Shehnai</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content Flow */}
      <main className="flex-1 max-w-2xl mx-auto w-full pt-3 pb-24 px-1 xs:px-2 sm:px-0">
        {/* 1. Hero Section with Live Countdown */}
        <HeroSection />

        {/* 2. The Invitation Note Card */}
        <InvitationNote />

        {/* 3. Event Schedule & Timeline */}
        <EventSchedule />

        {/* 4. Venue & Directions */}
        <VenueNavigation />

        {/* 5. Footer & Blessings */}
        <FooterBlessings />
      </main>

      {/* 6. Sticky Mobile Quick Action Bar */}
      <MobileQuickBar />
    </div>
  );
}
