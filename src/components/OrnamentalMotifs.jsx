import React from 'react';

// South Indian Kalasam / Mangala Kumbham (Rich Champagne Gold)
export const KalasamIcon = ({ className = "w-12 h-12 text-[#8C6A16]" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="champagneGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E6D3A3" />
        <stop offset="45%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8C6A16" />
      </linearGradient>
    </defs>
    {/* Flame on top of coconut */}
    <path d="M50 8 C48 14, 44 20, 50 25 C56 20, 52 14, 50 8 Z" fill="url(#champagneGoldGrad)" />
    {/* Coconut */}
    <circle cx="50" cy="32" r="14" stroke="url(#champagneGoldGrad)" strokeWidth="2.5" fill="#FDFBF7" />
    <path d="M44 30 Q50 36 56 30" stroke="url(#champagneGoldGrad)" strokeWidth="1.5" />
    <circle cx="47" cy="28" r="1" fill="#8C6A16" />
    <circle cx="53" cy="28" r="1" fill="#8C6A16" />
    <circle cx="50" cy="33" r="1" fill="#8C6A16" />
    {/* Mango Leaves */}
    <path d="M38 34 C30 25, 20 28, 22 36 C28 36, 36 36, 38 34 Z" fill="url(#champagneGoldGrad)" />
    <path d="M62 34 C70 25, 80 28, 78 36 C72 36, 64 36, 62 34 Z" fill="url(#champagneGoldGrad)" />
    <path d="M34 40 C22 36, 16 46, 26 48 C30 46, 34 42, 34 40 Z" fill="url(#champagneGoldGrad)" />
    <path d="M66 40 C78 36, 84 46, 74 48 C70 46, 66 42, 66 40 Z" fill="url(#champagneGoldGrad)" />
    {/* Kumbham Pot Rim */}
    <ellipse cx="50" cy="46" rx="20" ry="4" stroke="url(#champagneGoldGrad)" strokeWidth="2.5" fill="#F9F6F0" />
    {/* Pot Body */}
    <path d="M32 48 C22 60, 22 78, 36 86 C42 89, 58 89, 64 86 C78 78, 78 60, 68 48 Z" 
          stroke="url(#champagneGoldGrad)" strokeWidth="2.5" fill="#FFFFFF" />
    {/* Sacred Lines on Pot */}
    <path d="M50 56 V76 M40 66 H60" stroke="url(#champagneGoldGrad)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M50 56 H56 M50 76 H44 M40 66 V60 M60 66 V72" stroke="url(#champagneGoldGrad)" strokeWidth="1.8" strokeLinecap="round" />
    {/* Pot Base */}
    <path d="M38 88 H62 C62 92, 38 92, 38 88 Z" fill="url(#champagneGoldGrad)" />
  </svg>
);

// Intricate Corner Ornament in Refined Gold
export const CornerOrnament = ({ className = "w-8 h-8 text-[#D4AF37]", position = "top-left" }) => {
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
        <path d="M6 6 L6 18 C6 18 10 10 18 8" stroke="#E6D3A3" strokeWidth="1" strokeLinecap="round" />
        <circle cx="10" cy="10" r="2.5" fill="#D4AF37" />
        <circle cx="2" cy="2" r="2.5" fill="#E6D3A3" />
        <circle cx="26" cy="6" r="1.5" fill="#D4AF37" />
      </svg>
    </div>
  );
};

// South Indian Kolam / Rangoli Motif in Rich Champagne Gold
export const KolamMotif = ({ className = "w-24 h-24 text-[#8C6A16]" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="currentColor" strokeWidth="1.5" opacity="0.85">
      {/* Central Petals */}
      <circle cx="50" cy="50" r="6" fill="#D4AF37" fillOpacity="0.3" />
      <circle cx="50" cy="50" r="16" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="32" strokeDasharray="2 4" />
      {/* 8-fold lotus loops */}
      <path d="M50 34 C44 20, 56 20, 50 34 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M50 66 C44 80, 56 80, 50 66 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M34 50 C20 44, 20 56, 34 50 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M66 50 C80 44, 80 56, 66 50 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M39 39 C29 29, 38 20, 39 39 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M61 61 C71 71, 62 80, 61 61 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M39 61 C29 71, 20 62, 39 61 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M61 39 C71 29, 80 38, 61 39 Z" fill="currentColor" fillOpacity="0.12" />
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
  <div className="w-full flex items-center justify-center overflow-hidden py-2 opacity-95 select-none px-4">
    <div className="flex items-center space-x-2 sm:space-x-3 text-[#A88127] max-w-sm w-full justify-center">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
      <span className="text-[#8C6A16] text-xs sm:text-sm">✿</span>
      <span className="text-[#D4AF37] text-xs">◆</span>
      <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] inline-block mx-0.5" />
      <span className="text-[#D4AF37] text-xs">◆</span>
      <span className="text-[#8C6A16] text-xs sm:text-sm">✿</span>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
    </div>
  </div>
);

// Gold Divider with ornamental diamond
export const GoldDivider = ({ className = "my-4" }) => (
  <div className={`flex items-center justify-center space-x-3 w-full max-w-xs mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
    <div className="flex items-center space-x-1">
      <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
      <div className="w-2.5 h-2.5 rotate-45 border border-[#8C6A16] bg-[#F9F6F0]" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
  </div>
);
