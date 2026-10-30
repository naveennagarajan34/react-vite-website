import React from 'react';

// South Indian Kalasam / Mangala Kumbham (Sacred pot with coconut & mango leaves)
export const KalasamIcon = ({ className = "w-12 h-12 text-gold-500" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3E5AB" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#AA771C" />
      </linearGradient>
    </defs>
    {/* Diya / Flame on top of coconut */}
    <path d="M50 8 C48 14, 44 20, 50 25 C56 20, 52 14, 50 8 Z" fill="url(#goldGrad)" />
    {/* Coconut */}
    <circle cx="50" cy="32" r="14" stroke="url(#goldGrad)" strokeWidth="2.5" fill="#360810" />
    <path d="M44 30 Q50 36 56 30" stroke="url(#goldGrad)" strokeWidth="1.5" />
    <circle cx="47" cy="28" r="1" fill="#F3E5AB" />
    <circle cx="53" cy="28" r="1" fill="#F3E5AB" />
    <circle cx="50" cy="33" r="1" fill="#F3E5AB" />
    {/* Mango Leaves */}
    <path d="M38 34 C30 25, 20 28, 22 36 C28 36, 36 36, 38 34 Z" fill="url(#goldGrad)" />
    <path d="M62 34 C70 25, 80 28, 78 36 C72 36, 64 36, 62 34 Z" fill="url(#goldGrad)" />
    <path d="M34 40 C22 36, 16 46, 26 48 C30 46, 34 42, 34 40 Z" fill="url(#goldGrad)" />
    <path d="M66 40 C78 36, 84 46, 74 48 C70 46, 66 42, 66 40 Z" fill="url(#goldGrad)" />
    {/* Kumbham Pot Rim */}
    <ellipse cx="50" cy="46" rx="20" ry="4" stroke="url(#goldGrad)" strokeWidth="2.5" fill="#4A0E17" />
    {/* Pot Body */}
    <path d="M32 48 C22 60, 22 78, 36 86 C42 89, 58 89, 64 86 C78 78, 78 60, 68 48 Z" 
          stroke="url(#goldGrad)" strokeWidth="2.5" fill="#360810" />
    {/* Sacred Swastik / Sacred Lines on Pot */}
    <path d="M50 56 V76 M40 66 H60" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M50 56 H56 M50 76 H44 M40 66 V60 M60 66 V72" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
    {/* Pot Base */}
    <path d="M38 88 H62 C62 92, 38 92, 38 88 Z" fill="url(#goldGrad)" />
  </svg>
);

// Traditional South Indian Kuthu Vilakku (Oil Lamp)
export const VilakkuIcon = ({ className = "w-8 h-8 text-gold-500" }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="vilakkuGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2B2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#AA771C" />
      </linearGradient>
      <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF9C4" />
        <stop offset="40%" stopColor="#FFA000" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    {/* Glowing Flame */}
    <circle cx="50" cy="18" r="16" fill="url(#flameGlow)" opacity="0.6" className="animate-pulse" />
    <path d="M50 4 C46 12, 42 18, 50 24 C58 18, 54 12, 50 4 Z" fill="#FFC107" />
    <path d="M50 8 C48 13, 46 17, 50 21 C54 17, 52 13, 50 8 Z" fill="#FFF59D" />
    {/* Lamp Top Spire & Bird/Annam crest */}
    <path d="M46 24 C46 22, 54 22, 54 24 L52 28 H48 Z" fill="url(#vilakkuGold)" />
    {/* Oil Bowl / Thattu */}
    <ellipse cx="50" cy="35" rx="30" ry="7" stroke="url(#vilakkuGold)" strokeWidth="2.5" fill="#4A0E17" />
    <ellipse cx="50" cy="33" rx="24" ry="4" fill="url(#vilakkuGold)" opacity="0.3" />
    {/* Spouts with small flames */}
    <circle cx="21" cy="35" r="2" fill="#FFA000" />
    <circle cx="79" cy="35" r="2" fill="#FFA000" />
    <circle cx="50" cy="40" r="2.5" fill="#FFA000" />
    {/* Central Pillar (Thandu) */}
    <path d="M46 39 H54 V55 H46 Z" fill="url(#vilakkuGold)" />
    <ellipse cx="50" cy="58" rx="10" ry="4" fill="url(#vilakkuGold)" />
    <path d="M47 60 H53 V82 H47 Z" fill="url(#vilakkuGold)" />
    <ellipse cx="50" cy="85" rx="14" ry="5" fill="url(#vilakkuGold)" />
    {/* Base / Peedam */}
    <path d="M32 94 C32 89, 68 89, 68 94 L76 108 C76 112, 24 112, 24 108 Z" 
          stroke="url(#vilakkuGold)" strokeWidth="2.5" fill="#360810" />
    <rect x="22" y="108" width="56" height="4" rx="2" fill="url(#vilakkuGold)" />
  </svg>
);

// Intricate Corner Ornament (for card luxury borders)
export const CornerOrnament = ({ className = "w-8 h-8 text-gold-500", position = "top-left" }) => {
  const rotationClass = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90'
  }[position] || 'rotate-0';

  return (
    <div className={`pointer-events-none select-none ${className} ${rotationClass}`}>
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M2 2 L2 24 C2 24 6 12 18 10 C30 8 36 2 48 2" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 6 L6 18 C6 18 10 10 18 8" stroke="#F3E5AB" strokeWidth="1" strokeLinecap="round" />
        <circle cx="10" cy="10" r="2.5" fill="#D4AF37" />
        <circle cx="2" cy="2" r="2.5" fill="#F3E5AB" />
        <circle cx="26" cy="6" r="1.5" fill="#D4AF37" />
      </svg>
    </div>
  );
};

// South Indian Kolam / Rangoli Motif
export const KolamMotif = ({ className = "w-24 h-24 text-gold-500" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="currentColor" strokeWidth="1.5" opacity="0.85">
      {/* Central Petals */}
      <circle cx="50" cy="50" r="6" fill="#D4AF37" fillOpacity="0.4" />
      <circle cx="50" cy="50" r="16" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="32" strokeDasharray="2 4" />
      {/* 8-fold lotus loops */}
      <path d="M50 34 C44 20, 56 20, 50 34 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M50 66 C44 80, 56 80, 50 66 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M34 50 C20 44, 20 56, 34 50 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M66 50 C80 44, 80 56, 66 50 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M39 39 C29 29, 38 20, 39 39 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M61 61 C71 71, 62 80, 61 61 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M39 61 C29 71, 20 62, 39 61 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M61 39 C71 29, 80 38, 61 39 Z" fill="currentColor" fillOpacity="0.2" />
      {/* Outer dots */}
      <circle cx="50" cy="12" r="1.5" fill="currentColor" />
      <circle cx="50" cy="88" r="1.5" fill="currentColor" />
      <circle cx="12" cy="50" r="1.5" fill="currentColor" />
      <circle cx="88" cy="50" r="1.5" fill="currentColor" />
      <circle cx="23" cy="23" r="1.5" fill="currentColor" />
      <circle cx="77" cy="77" r="1.5" fill="currentColor" />
      <circle cx="23" cy="77" r="1.5" fill="currentColor" />
      <circle cx="77" cy="23" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

// Subtle Gold Geometric Header Divider (clean top bar)
export const ThoranamHeader = () => (
  <div className="w-full flex items-center justify-center overflow-hidden py-2 opacity-90 select-none px-4">
    <div className="flex items-center space-x-2 sm:space-x-3 text-gold-400 max-w-sm w-full justify-center">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/50 to-gold-400" />
      <span className="text-amber-500 text-xs sm:text-sm">✿</span>
      <span className="text-gold-300 text-xs">◆</span>
      <span className="w-1.5 h-1.5 rotate-45 bg-gold-400 inline-block mx-0.5" />
      <span className="text-gold-300 text-xs">◆</span>
      <span className="text-amber-500 text-xs sm:text-sm">✿</span>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/50 to-gold-400" />
    </div>
  </div>
);

// Gold Divider with ornamental diamond
export const GoldDivider = ({ className = "my-4" }) => (
  <div className={`flex items-center justify-center space-x-3 w-full max-w-xs mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/60 to-gold-400" />
    <div className="flex items-center space-x-1">
      <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
      <div className="w-2.5 h-2.5 rotate-45 border border-gold-300 bg-gold-600/80" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/60 to-gold-400" />
  </div>
);
