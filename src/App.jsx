import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationNote } from './components/InvitationNote';
import { EventSchedule } from './components/EventSchedule';
import { VenueNavigation } from './components/VenueNavigation';
import { FooterBlessings } from './components/FooterBlessings';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ThoranamHeader } from './components/OrnamentalMotifs';
import { weddingAudio } from './utils/audioPlayer';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleMusic = () => {
    const isPlaying = weddingAudio.toggle();
    setIsPlayingMusic(isPlaying);
  };

  return (
    <div className="min-h-screen bg-royal-bg-pattern text-ivory-100 flex flex-col relative selection:bg-gold-500 selection:text-maroon-950 font-inter">
      {/* Top Auspicious Zari Ribbon & Thoranam */}
      <div className="sticky top-0 z-40 bg-maroon-950/90 backdrop-blur-sm border-b border-gold-500/30">
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
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center space-x-2 px-3.5 py-2 rounded-full text-sm font-semibold backdrop-blur-md shadow-lg transition-all ${
            isPlayingMusic 
              ? 'bg-gold-500 text-maroon-950 ring-2 ring-gold-300 shadow-gold-glow animate-pulse'
              : 'bg-maroon-900/90 text-gold-300 border border-gold-500/40 hover:bg-gold-500/20'
          }`}
        >
          {isPlayingMusic ? (
            <>
              <Volume2 className="w-4 h-4 text-maroon-950" />
              <span className="hidden sm:inline font-cinzel text-xs">Nadaswaram Playing</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-gold-400" />
              <span className="hidden sm:inline font-cinzel text-xs">Play Shehnai</span>
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
