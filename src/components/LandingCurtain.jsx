import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PosterCornerOrnament, FloralFiligreeDivider } from './OrnamentalMotifs';
import { Sparkles } from 'lucide-react';

export const LandingCurtain = ({ onOpen, playBgm }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  const handleTapOpen = () => {
    if (isAnimating || isOpened) return;
    setIsAnimating(true);

    // 1. Play background wedding audio (unblocked by this user gesture)
    if (typeof playBgm === 'function') {
      playBgm();
    } else if (typeof onOpen === 'function') {
      onOpen();
    }

    // 2. Trigger golden sparkle & confetti burst right when the rings interlock (~400ms)
    setTimeout(() => {
      confetti({
        particleCount: 85,
        spread: 80,
        origin: { y: 0.52 },
        colors: ['#D4AF37', '#E6D3A3', '#8C6A16', '#FAF6EB', '#FFDF73'],
        scalar: 1.1,
      });
    }, 380);

    // 3. Begin smooth curtain glide & fade out (~900ms)
    setTimeout(() => {
      setIsOpened(true);
    }, 950);

    // 4. Completely unmount from DOM so it never intercepts clicks or scrolling (~2000ms)
    setTimeout(() => {
      setIsUnmounted(true);
    }, 2000);
  };

  if (isUnmounted) return null;

  return (
    <div
      onClick={handleTapOpen}
      role="button"
      tabIndex={0}
      aria-label="Tap to open wedding invitation"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center select-none cursor-pointer overflow-hidden bg-[#F9F6F0] transition-all duration-1000 ease-in-out ${
        isOpened 
          ? 'opacity-0 pointer-events-none -translate-y-12' 
          : 'opacity-100 pointer-events-auto translate-y-0'
      }`}
    >
      {/* Warm Alabaster Linen Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E6D3A3_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Floating Golden Dust / Ambient Light Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#E6D3A3]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Luxury Victorian Corner Flourishes */}
      <PosterCornerOrnament position="top-left" className="w-16 h-16 sm:w-24 sm:h-24" />
      <PosterCornerOrnament position="top-right" className="w-16 h-16 sm:w-24 sm:h-24" />
      <PosterCornerOrnament position="bottom-left" className="w-16 h-16 sm:w-24 sm:h-24" />
      <PosterCornerOrnament position="bottom-right" className="w-16 h-16 sm:w-24 sm:h-24" />

      {/* Inner Double Gold Hairline Border Frame */}
      <div className="absolute inset-3 sm:inset-5 border-2 border-[#D4AF37] rounded-3xl pointer-events-none">
        <div className="absolute inset-1.5 border border-[#E6D3A3] rounded-2xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-md w-full px-6 text-center flex flex-col items-center">
        
        {/* Top Blessing Header */}
        <div className="mb-2">
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8C6A16] font-bold block">
            WITH THE BLESSINGS OF ALMIGHTY
          </span>
          <FloralFiligreeDivider className="my-2" />
        </div>

        {/* Luxury Gold Foil Monogram Crest */}
        <div className="my-3 relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#D4AF37] bg-[#FFFFFF] shadow-[0_8px_24px_rgba(212,175,55,0.2)] flex items-center justify-center relative ring-4 ring-[#E6D3A3]/40">
            {/* Spinning subtle gold accent ring */}
            <div className="absolute inset-1 border border-dashed border-[#8C6A16]/40 rounded-full animate-[spin_30s_linear_infinite]" />
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16] tracking-tight">
              G <span className="text-[#D4AF37] text-base">✦</span> H
            </span>
          </div>
        </div>

        {/* Couple Names */}
        <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16] tracking-wider mt-2">
          S. Guhan &amp; J. Harshini
        </h1>
        <p className="font-playfair text-xs sm:text-sm tracking-[0.22em] text-[#1F1F1F] uppercase font-semibold mt-1">
          Wedding Reception
        </p>

        {/* Interactive Wedding Rings Union / Interlocking Animation */}
        <div className="my-6 relative h-20 w-48 flex items-center justify-center">
          {/* Ring 1 (Groom's Classic Gold Band - glides from left to center) */}
          <div
            className={`absolute transition-all duration-700 ease-out transform ${
              isAnimating
                ? 'translate-x-[-12px] rotate-[-15deg] scale-110'
                : 'translate-x-[-32px] rotate-[-25deg] scale-100 hover:scale-105'
            }`}
          >
            <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
              <defs>
                <linearGradient id="ringGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8F5" />
                  <stop offset="30%" stopColor="#E6D3A3" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8C6A16" />
                </linearGradient>
              </defs>
              {/* Outer band */}
              <ellipse cx="35" cy="35" rx="26" ry="18" stroke="url(#ringGoldGrad1)" strokeWidth="6.5" fill="none" />
              {/* Inner highlight sheen */}
              <ellipse cx="35" cy="35" rx="24" ry="16" stroke="#FAF4E6" strokeWidth="1" fill="none" opacity="0.7" />
            </svg>
          </div>

          {/* Ring 2 (Bride's Solitaire Diamond Ring - glides from right to center) */}
          <div
            className={`absolute transition-all duration-700 ease-out transform ${
              isAnimating
                ? 'translate-x-[12px] rotate-[15deg] scale-110'
                : 'translate-x-[32px] rotate-[25deg] scale-100 hover:scale-105'
            }`}
          >
            <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
              <defs>
                <linearGradient id="ringGoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF8F5" />
                  <stop offset="30%" stopColor="#E6D3A3" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8C6A16" />
                </linearGradient>
                <radialGradient id="diamondShine" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="60%" stopColor="#E0F2FE" />
                  <stop offset="100%" stopColor="#BAE6FD" />
                </radialGradient>
              </defs>
              {/* Outer band */}
              <ellipse cx="35" cy="38" rx="26" ry="18" stroke="url(#ringGoldGrad2)" strokeWidth="6.5" fill="none" />
              {/* Crown prongs */}
              <path d="M 31 22 L 35 18 L 39 22" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
              {/* Sparkling Solitaire Diamond */}
              <polygon points="35,11 41,18 35,25 29,18" fill="url(#diamondShine)" stroke="#8C6A16" strokeWidth="0.8" />
              <polygon points="35,11 38,18 35,25 32,18" fill="#FFFFFF" opacity="0.8" />
              {/* Diamond Sparkle Star */}
              <circle cx="35" cy="18" r="1.5" fill="#FFFFFF" className={isAnimating ? 'animate-ping' : ''} />
            </svg>
          </div>

          {/* Central Union Glow */}
          {isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 bg-[#D4AF37]/40 rounded-full blur-md animate-ping" />
            </div>
          )}
        </div>

        {/* Animated Pulsing Call-to-Action Badge */}
        <div className="mt-3">
          <div className="inline-flex items-center space-x-2 bg-[#FFFFFF] border-2 border-[#D4AF37] px-6 py-2.5 rounded-full shadow-[0_4px_16px_rgba(212,175,55,0.25)] hover:scale-105 active:scale-95 transition-all animate-pulse">
            <Sparkles className="w-4 h-4 text-[#8C6A16]" />
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#8C6A16]">
              {isAnimating ? 'Opening Invitation...' : '✦ Tap to Open Invitation ✦'}
            </span>
            <Sparkles className="w-4 h-4 text-[#8C6A16]" />
          </div>
        </div>

      </div>
    </div>
  );
};

