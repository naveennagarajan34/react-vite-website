import React, { useState, useRef, useEffect } from 'react';
import bgmAudio from './bgm.mp3';
import { HeroSection } from './components/HeroSection';
import { InvitationNote } from './components/InvitationNote';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ThoranamHeader } from './components/OrnamentalMotifs';
import { FallingPetalsCanvas } from './components/FallingPetalsCanvas';
import { LandingCurtain } from './components/LandingCurtain';
import { Volume2, VolumeX } from 'lucide-react';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(typeof Audio !== 'undefined' ? new Audio(bgmAudio) : null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.muted = false;
      audioRef.current.volume = 0.5;

      const handlePlay = () => setIsPlayingMusic(true);
      const handlePause = () => setIsPlayingMusic(false);

      audioRef.current.addEventListener('play', handlePlay);
      audioRef.current.addEventListener('pause', handlePause);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('play', handlePlay);
          audioRef.current.removeEventListener('pause', handlePause);
          audioRef.current.pause();
        }
      };
    }
  }, []);

  const playBgm = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.warn('Audio playback was prevented:', err);
      });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      playBgm();
    }
  };

  return (
    <div className="min-h-screen bg-royal-bg-pattern text-[#333333] flex flex-col relative selection:bg-[#D4AF37] selection:text-[#1A1A1A] font-inter">
      {/* Interactive Welcome Landing Screen Overlay with Ring Exchange */}
      <LandingCurtain playBgm={playBgm} onOpen={playBgm} />

      {/* Dynamic Golden Flower Petals Background System */}
      <FallingPetalsCanvas />

      {/* Top Auspicious Zari Ribbon & Thoranam */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6D3A3]">
        <div className="zari-border-top" />
        <ThoranamHeader />
        <div className="zari-border-bottom" />
      </div>

      {/* Floating Circular Sound Button in Top-Right Corner */}
      <div className="fixed top-5 right-4 sm:top-6 sm:right-6 z-40">
        <button
          onClick={toggleMusic}
          type="button"
          aria-label={isPlayingMusic ? "Pause background music" : "Play background music"}
          className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-300 active:scale-95 ${
            isPlayingMusic 
              ? 'bg-[#D4AF37] text-[#1A1A1A] ring-2 ring-[#FAF4E6] shadow-[0_0_20px_rgba(212,175,55,0.45)] animate-pulse'
              : 'bg-[#FFFFFF]/90 text-[#8C6A16] border border-[#E6D3A3] hover:bg-[#F9F6F0] shadow-md'
          }`}
        >
          {isPlayingMusic ? (
            <Volume2 className="w-5 h-5 text-[#1A1A1A]" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#8C6A16]" />
          )}
        </button>
      </div>

      {/* Main Content Flow */}
      <main className="flex-1 max-w-2xl mx-auto w-full pt-3 pb-24 px-1 xs:px-2 sm:px-0">
        {/* 1. Master Wedding Invitation Card (Faithful to latest poster design) */}
        <HeroSection />

        {/* 2. The Personal Invitation Note Card */}
        <InvitationNote />
      </main>

      {/* 5. Sticky Mobile Quick Action Bar (with Directions button) */}
      <MobileQuickBar />
    </div>
  );
}
