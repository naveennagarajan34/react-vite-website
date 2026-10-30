import React from 'react';

// South Indian Kalasam / Mangala Kumbham (Sacred pot with coconut & mango leaves) - Rose Gold & Plum
export const KalasamIcon = ({ className = "w-12 h-12 text-gold-500" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="roseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF8F5" />
        <stop offset="35%" stopColor="#F5C7B8" />
        <stop offset="70%" stopColor="#E8B4A2" />
        <stop offset="100%" stopColor="#BA7E6C" />
      </linearGradient>
    </defs>
    {/* Diya / Flame on top of coconut */}
    <path d="M50 8 C48 14, 44 20, 50 25 C56 20, 52 14, 50 8 Z" fill="url(#roseGoldGrad)" />
    {/* Coconut */}
    <circle cx="50" cy="32" r="14" stroke="url(#roseGoldGrad)" strokeWidth="2.5" fill="#240D26" />
    <path d="M44 30 Q50 36 56 30" stroke="url(#roseGoldGrad)" strokeWidth="1.5" />
    <circle cx="47" cy="28" r="1" fill="#FDF0EB" />
    <circle cx="53" cy="28" r="1" fill="#FDF0EB" />
    <circle cx="50" cy="33" r="1" fill="#FDF0EB" />
    {/* Mango Leaves */}
    <path d="M38 34 C30 25, 20 28, 22 36 C28 36, 36 36, 38 34 Z" fill="url(#roseGoldGrad)" />
    <path d="M62 34 C70 25, 80 28, 78 36 C72 36, 64 36, 62 34 Z" fill="url(#roseGoldGrad)" />
    <path d="M34 40 C22 36, 16 46, 26 48 C30 46, 34 42, 34 40 Z" fill="url(#roseGoldGrad)" />
    <path d="M66 40 C78 36, 84 46, 74 48 C70 46, 66 42, 66 40 Z" fill="url(#roseGoldGrad)" />
    {/* Kumbham Pot Rim */}
    <ellipse cx="50" cy="46" rx="20" ry="4" stroke="url(#roseGoldGrad)" strokeWidth="2.5" fill="#37173B" />
    {/* Pot Body */}
    <path d="M32 48 C22 60, 22 78, 36 86 C42 89, 58 89, 64 86 C78 78, 78 60, 68 48 Z" 
          stroke="url(#roseGoldGrad)" strokeWidth="2.5" fill="#2B102E" />
    {/* Sacred Swastik / Sacred Lines on Pot */}
    <path d="M50 56 V76 M40 66 H60" stroke="url(#roseGoldGrad)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M50 56 H56 M50 76 H44 M40 66 V60 M60 66 V72" stroke="url(#roseGoldGrad)" strokeWidth="1.8" strokeLinecap="round" />
    {/* Pot Base */}
    <path d="M38 88 H62 C62 92, 38 92, 38 88 Z" fill="url(#roseGoldGrad)" />
  </svg>
);

// Intricate Corner Ornament (for card luxury borders in Polished Rose Gold)
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
        <path d="M2 2 L2 24 C2 24 6 12 18 10 C30 8 36 2 48 2" stroke="#E8B4A2" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 6 L6 18 C6 18 10 10 18 8" stroke="#F5C7B8" strokeWidth="1" strokeLinecap="round" />
        <circle cx="10" cy="10" r="2.5" fill="#E8B4A2" />
        <circle cx="2" cy="2" r="2.5" fill="#FDF0EB" />
        <circle cx="26" cy="6" r="1.5" fill="#E8B4A2" />
      </svg>
    </div>
  );
};

// South Indian Kolam / Rangoli Motif
export const KolamMotif = ({ className = "w-24 h-24 text-gold-500" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="currentColor" strokeWidth="1.5" opacity="0.85">
      {/* Central Petals */}
      <circle cx="50" cy="50" r="6" fill="#E8B4A2" fillOpacity="0.4" />
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

// Subtle Rose Gold Geometric Header Divider (clean top bar)
export const ThoranamHeader = () => (
  <div className="w-full flex items-center justify-center overflow-hidden py-2 opacity-90 select-none px-4">
    <div className="flex items-center space-x-2 sm:space-x-3 text-gold-400 max-w-sm w-full justify-center">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/50 to-gold-400" />
      <span className="text-gold-300 text-xs sm:text-sm">✿</span>
      <span className="text-gold-400 text-xs">◆</span>
      <span className="w-1.5 h-1.5 rotate-45 bg-gold-400 inline-block mx-0.5" />
      <span className="text-gold-400 text-xs">◆</span>
      <span className="text-gold-300 text-xs sm:text-sm">✿</span>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/50 to-gold-400" />
    </div>
  </div>
);

// Rose Gold Divider with ornamental diamond
export const GoldDivider = ({ className = "my-4" }) => (
  <div className={`flex items-center justify-center space-x-3 w-full max-w-xs mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/60 to-gold-400" />
    <div className="flex items-center space-x-1">
      <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
      <div className="w-2.5 h-2.5 rotate-45 border border-gold-300 bg-plum-800" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/60 to-gold-400" />
  </div>
);
