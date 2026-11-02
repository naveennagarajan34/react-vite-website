import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { PosterCornerOrnament } from './OrnamentalMotifs';

export const LandingCurtain = ({ onOpen, playBgm }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    // Lock scrolling while curtain is active and guarantee top position
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpened]);

  const handleTapOpen = () => {
    if (isAnimating || isOpened) return;
    setIsAnimating(true);

    // Guarantee the page is at the very top when opening
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // 1. Play background wedding audio immediately via user gesture
    if (typeof playBgm === 'function') {
      playBgm();
    }

    // 2. Trigger golden sparkle & confetti burst right when the rings have fully met (~1300ms)
    // Delaying confetti until the glide completes keeps mobile 60fps/120fps butter-smooth
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.50 },
        colors: ['#D4AF37', '#E6D3A3', '#8C6A16', '#FAF6EB', '#FFDF73'],
        scalar: 1.05,
        disableForReducedMotion: true,
      });
    }, 1300);

    // 3. Initiate the graceful 1-second curtain glide and reveal after rings are fully admired (~2150ms)
    setTimeout(() => {
      setIsOpened(true);
      if (typeof onOpen === 'function') {
        onOpen();
      }
    }, 2150);

    // 4. Completely unmount from DOM after the full sequence completes (~3350ms)
    setTimeout(() => {
      setIsUnmounted(true);
    }, 3350);
  };

  if (isUnmounted) return null;

  return (
    <div
      onClick={handleTapOpen}
      role="button"
      tabIndex={0}
      aria-label="Tap to open wedding invitation"
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center select-none cursor-pointer overflow-hidden bg-[#F9F6F0] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpened 
          ? 'opacity-0 pointer-events-none -translate-y-20' 
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
        
        {/* Luxury Gold Foil Monogram Crest */}
        <div className="mb-3 relative">
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
          Guhan &amp; Harshini
        </h1>
        <p className="font-playfair text-xs sm:text-sm tracking-[0.25em] text-[#1F1F1F] uppercase font-semibold mt-1.5">
          Wedding Invitation
        </p>

        {/* Interactive Wedding Rings Union / Interlocking Animation */}
        <div className="my-6 relative h-20 w-48 flex items-center justify-center overflow-visible">
          {/* Ring 1 (Groom's Classic Gold Band - glides smoothly from left to center) */}
          <motion.div
            className="absolute cursor-pointer"
            initial={false}
            animate={{
              x: isAnimating ? -10 : -42,
              rotate: isAnimating ? -15 : -25,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          >
            <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
              <defs>
                <linearGradient id="ringGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFBF0" />
                  <stop offset="30%" stopColor="#E6D3A3" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8C6A16" />
                </linearGradient>
              </defs>
              {/* Embedded Vector Shadow (Zero CPU/GPU Gaussian blur overhead on mobile) */}
              <ellipse cx="35" cy="38" rx="26" ry="18" stroke="rgba(70,45,10,0.18)" strokeWidth="6" fill="none" />
              {/* Outer band */}
              <ellipse cx="35" cy="35" rx="26" ry="18" stroke="url(#ringGoldGrad1)" strokeWidth="6.5" fill="none" />
              {/* Inner highlight sheen */}
              <ellipse cx="35" cy="35" rx="24" ry="16" stroke="#FAF4E6" strokeWidth="1" fill="none" opacity="0.75" />
            </svg>
          </motion.div>

          {/* Ring 2 (Bride's Solitaire Diamond Ring - glides smoothly from right to center) */}
          <motion.div
            className="absolute cursor-pointer"
            initial={false}
            animate={{
              x: isAnimating ? 10 : 42,
              rotate: isAnimating ? 15 : 25,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          >
            <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
              <defs>
                <linearGradient id="ringGoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFBF0" />
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
              {/* Embedded Vector Shadow (Zero CPU/GPU Gaussian blur overhead on mobile) */}
              <ellipse cx="35" cy="40" rx="26" ry="18" stroke="rgba(70,45,10,0.18)" strokeWidth="6" fill="none" />
              {/* Outer band */}
              <ellipse cx="35" cy="37" rx="26" ry="18" stroke="url(#ringGoldGrad2)" strokeWidth="6.5" fill="none" />
              {/* Crown prongs */}
              <path d="M 31 21 L 35 17 L 39 21" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
              {/* Sparkling Solitaire Diamond */}
              <polygon points="35,10 41,17 35,24 29,17" fill="url(#diamondShine)" stroke="#8C6A16" strokeWidth="0.8" />
              <polygon points="35,10 38,17 35,24 32,17" fill="#FFFFFF" opacity="0.85" />
              {/* Diamond Sparkle Point (Static crisp highlight, no laggy ping redraw) */}
              <circle cx="35" cy="17" r="1.5" fill="#FFFFFF" opacity="0.9" />
            </svg>
          </motion.div>

          {/* Central Union Golden Halo Glow (Pure GPU Radial Gradient, no CPU blur filter) */}
          {isAnimating && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.85, scale: 1.15 }}
              transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div 
                className="w-16 h-16 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(230,211,163,0.18) 50%, transparent 70%)',
                }}
              />
            </motion.div>
          )}
        </div>

        {/* Royal Gold Wax Seal Button Centered Beneath the Rings */}
        <div className="mt-3 flex flex-col items-center">
          <div
            className={`relative cursor-pointer transition-all duration-500 ease-out ${
              isAnimating 
                ? 'scale-125 opacity-0 pointer-events-none' 
                : 'hover:scale-105 active:scale-95 animate-seal-breathe'
            }`}
          >
            {/* Scalloped / Wavy Gold Wax Seal SVG with Deep Drop Shadow */}
            <svg
              viewBox="0 0 120 120"
              className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_16px_28px_rgba(74,44,10,0.45)]"
            >
              <defs>
                {/* Metallic Gold Base Gradient */}
                <radialGradient id="waxBaseGrad" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FFFBF0" />
                  <stop offset="20%" stopColor="#F5D880" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="80%" stopColor="#8C6A16" />
                  <stop offset="100%" stopColor="#4A3208" />
                </radialGradient>
                {/* Recessed Center Seal Bed Radial Gradient */}
                <radialGradient id="waxCenterGrad" cx="38%" cy="32%" r="62%">
                  <stop offset="0%" stopColor="#FFFDF7" />
                  <stop offset="25%" stopColor="#F9DF92" />
                  <stop offset="65%" stopColor="#B8861B" />
                  <stop offset="90%" stopColor="#7A520E" />
                  <stop offset="100%" stopColor="#4D3307" />
                </radialGradient>
              </defs>

              {/* 1. Scalloped / Wavy Wax Seal Outer Silhouette */}
              <path
                d="M 115.80 60.00 L 111.75 65.10 L 107.27 69.40 L 109.76 75.09 L 111.55 81.35 L 105.86 84.51 L 100.08 86.78 L 100.20 92.99 L 99.46 99.46 L 92.99 100.20 L 86.78 100.08 L 84.51 105.86 L 81.35 111.55 L 75.09 109.76 L 69.40 107.27 L 65.10 111.75 L 60.00 115.80 L 54.90 111.75 L 50.60 107.27 L 44.91 109.76 L 38.65 111.55 L 35.49 105.86 L 33.22 100.08 L 27.01 100.20 L 20.54 99.46 L 19.80 92.99 L 19.92 86.78 L 14.14 84.51 L 8.45 81.35 L 10.24 75.09 L 12.73 69.40 L 8.25 65.10 L 4.20 60.00 L 8.25 54.90 L 12.73 50.60 L 10.24 44.91 L 8.45 38.65 L 14.14 35.49 L 19.92 33.22 L 19.80 27.01 L 20.54 20.54 L 27.01 19.80 L 33.22 19.92 L 35.49 14.14 L 38.65 8.45 L 44.91 10.24 L 50.60 12.73 L 54.90 8.25 L 60.00 4.20 L 65.10 8.25 L 69.40 12.73 L 75.09 10.24 L 81.35 8.45 L 84.51 14.14 L 86.78 19.92 L 92.99 19.80 L 99.46 20.54 L 100.20 27.01 L 100.08 33.22 L 105.86 35.49 L 111.55 38.65 L 109.76 44.91 L 107.27 50.60 L 111.75 54.90 L 115.80 60.00 Z"
                fill="url(#waxBaseGrad)"
                stroke="#5A410D"
                strokeWidth="1.2"
              />

              {/* 2. Ornate Concentric Rim (Raised Beveled Borders) */}
              <circle cx="60" cy="60" r="45" stroke="#FFF7DE" strokeWidth="1.6" fill="none" opacity="0.8" />
              <circle cx="60" cy="60" r="43" stroke="#68460A" strokeWidth="1.8" fill="none" opacity="0.65" />
              <circle cx="60" cy="60" r="40" stroke="#FFE79A" strokeWidth="1" strokeDasharray="2 3" fill="none" opacity="0.9" />

              {/* 3. Recessed Center Wax Bed */}
              <circle cx="60" cy="60" r="36" fill="url(#waxCenterGrad)" stroke="#4A3006" strokeWidth="1.5" />
              <circle cx="60" cy="60" r="34" stroke="#FFF8E0" strokeWidth="0.8" fill="none" opacity="0.6" />

              {/* 4. Embossed Serif Monogram "G & H" */}
              <text
                x="60"
                y="66"
                textAnchor="middle"
                fontFamily="'Cinzel', serif"
                fontWeight="900"
                fontSize="20"
                fill="#FFFBF2"
                style={{
                  filter: 'drop-shadow(0 1.5px 2px rgba(60, 35, 5, 0.75))',
                }}
              >
                G &amp; H
              </text>
            </svg>
          </div>

          {/* Bottom Helper Text Prompt */}
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8C6A16] uppercase mt-3.5 block animate-pulse select-none">
            {isAnimating ? '✦ Opening Invitation... ✦' : '✦ Tap Seal to Open ✦'}
          </span>
        </div>

      </div>
    </div>
  );
};

