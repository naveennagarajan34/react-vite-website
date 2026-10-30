import React from 'react';

// Classic Victorian / Royal Filigree Corner Flourish (Matching the latest poster design)
export const PosterCornerOrnament = ({ className = "w-16 h-16 sm:w-20 sm:h-20 text-[#9E7719]", position = "top-left" }) => {
  const transform = {
    'top-left': 'scale(1, 1)',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)'
  }[position] || 'scale(1, 1)';

  return (
    <div 
      className={`pointer-events-none select-none absolute z-10 ${className}`}
      style={{
        top: position.includes('top') ? '0px' : 'auto',
        bottom: position.includes('bottom') ? '0px' : 'auto',
        left: position.includes('left') ? '0px' : 'auto',
        right: position.includes('right') ? '0px' : 'auto',
        transform,
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer and Inner Corner Hairlines */}
        <path d="M 6 45 L 6 6 L 45 6" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.85" />
        <path d="M 12 40 L 12 12 L 40 12" stroke="#9E7719" strokeWidth="0.8" fill="none" opacity="0.6" />
        
        {/* Intricate Filigree Scrollwork */}
        <path d="M 18 18 C 24 10, 36 10, 42 16 C 36 20, 28 20, 22 28 C 20 34, 20 42, 16 42 C 10 36, 10 24, 18 18 Z" 
              fill="#D4AF37" fillOpacity="0.25" stroke="#9E7719" strokeWidth="1" />
        <path d="M 12 12 C 18 4, 32 4, 38 10" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 12 12 C 4 18, 4 32, 10 38" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Acanthus Leaf Swirls */}
        <path d="M 24 24 C 32 16, 44 20, 46 28 C 42 32, 34 30, 28 36 C 24 42, 26 48, 20 48" 
              stroke="#9E7719" strokeWidth="1" strokeLinecap="round" />
        <path d="M 28 28 C 22 36, 16 44, 28 46" stroke="#D4AF37" strokeWidth="0.9" />

        {/* Corner Heart/Rosette Accent */}
        <circle cx="12" cy="12" r="3" fill="#D4AF37" />
        <circle cx="12" cy="12" r="1.5" fill="#FAF6F0" />
        <circle cx="28" cy="14" r="1.5" fill="#9E7719" />
        <circle cx="14" cy="28" r="1.5" fill="#9E7719" />
      </svg>
    </div>
  );
};

// Side Mandala / Rosette Motif on Left & Right Card Borders
export const SideRosette = ({ position = "left" }) => {
  const isLeft = position === "left";
  return (
    <div 
      className={`pointer-events-none select-none absolute top-1/2 -translate-y-1/2 z-10 w-6 h-14 sm:w-8 sm:h-20 text-[#9E7719] opacity-85 ${
        isLeft ? '-left-[1px]' : '-right-[1px] rotate-180'
      }`}
    >
      <svg viewBox="0 0 30 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M 0 5 C 15 15, 25 25, 25 35 C 25 45, 15 55, 0 65" stroke="#D4AF37" strokeWidth="1.2" fill="#FDFBF7" />
        <path d="M 0 15 C 10 22, 18 28, 18 35 C 18 42, 10 48, 0 55" stroke="#9E7719" strokeWidth="0.8" fill="#F9F6F0" />
        <circle cx="10" cy="35" r="4" fill="#D4AF37" stroke="#9E7719" strokeWidth="0.8" />
        <circle cx="10" cy="35" r="1.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

// Delicate Floral Filigree Divider directly beneath "WITH THE BLESSINGS OF ALMIGHTY"
export const FloralFiligreeDivider = ({ className = "my-3" }) => (
  <div className={`flex items-center justify-center space-x-2 w-full max-w-xs mx-auto ${className}`}>
    <svg viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 sm:w-60 h-6">
      {/* Central Flower */}
      <circle cx="120" cy="12" r="3.5" fill="#D4AF37" stroke="#9E7719" strokeWidth="0.8" />
      <circle cx="120" cy="12" r="1.5" fill="#FFFFFF" />
      {/* Petals */}
      <ellipse cx="120" cy="6.5" rx="1.8" ry="2.5" fill="#D4AF37" opacity="0.8" />
      <ellipse cx="120" cy="17.5" rx="1.8" ry="2.5" fill="#D4AF37" opacity="0.8" />
      <ellipse cx="114.5" cy="12" rx="2.5" ry="1.8" fill="#D4AF37" opacity="0.8" />
      <ellipse cx="125.5" cy="12" rx="2.5" ry="1.8" fill="#D4AF37" opacity="0.8" />
      
      {/* Left Filigree Scroll */}
      <path d="M 112 12 C 102 7, 88 7, 76 13 C 68 17, 56 16, 48 11 C 42 7, 30 9, 24 14" 
            stroke="#9E7719" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 88 10 C 92 5, 100 5, 104 9" stroke="#D4AF37" strokeWidth="0.9" />
      <path d="M 64 15 C 68 18, 74 17, 76 13" stroke="#D4AF37" strokeWidth="0.9" />
      <circle cx="22" cy="14" r="1.5" fill="#9E7719" />
      
      {/* Right Filigree Scroll */}
      <path d="M 128 12 C 138 7, 152 7, 164 13 C 172 17, 184 16, 192 11 C 198 7, 210 9, 216 14" 
            stroke="#9E7719" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 152 10 C 148 5, 140 5, 136 9" stroke="#D4AF37" strokeWidth="0.9" />
      <path d="M 176 15 C 172 18, 166 17, 164 13" stroke="#D4AF37" strokeWidth="0.9" />
      <circle cx="218" cy="14" r="1.5" fill="#9E7719" />
    </svg>
  </div>
);

// Subtle Decorative Floral Rosette Divider between sections (Schedule, Venue, Footer)
export const FloralSectionDivider = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center space-x-3 w-full max-w-sm mx-auto select-none ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#E6D3A3] to-[#9E7719]" />
    <div className="flex items-center space-x-1.5 text-[#9E7719]">
      <span className="text-[10px]">✦</span>
      <div className="w-2 h-2 rotate-45 bg-[#D4AF37] border border-[#9E7719]" />
      <span className="text-xs sm:text-sm text-[#8C6A16]">✿</span>
      <div className="w-2 h-2 rotate-45 bg-[#D4AF37] border border-[#9E7719]" />
      <span className="text-[10px]">✦</span>
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#E6D3A3] to-[#9E7719]" />
  </div>
);

// Gold Divider with ornamental diamond
export const GoldDivider = FloralSectionDivider;

// Luxury Royal Event Badge with Architectural Bracket Frame, Embossed Emblem & Golden Glow
export const BracketPill = ({ label, icon, text, subtext, href, onClick, className = '' }) => {
  const content = (
    <div className={`relative group p-3 sm:py-3.5 sm:px-2 bg-gradient-to-b from-[#FFFFFF] to-[#FAF5ED] border border-[#E6D3A3] rounded-2xl shadow-[0_4px_16px_rgba(184,134,11,0.08)] hover:shadow-[0_8px_24px_rgba(184,134,11,0.18)] hover:border-[#D4AF37] transition-all duration-300 ease-out transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] overflow-hidden flex flex-col justify-center ${className}`}>
      
      {/* Subtle Golden Border Shimmer Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 via-[#FAF4E6]/25 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Inner Metallic Gold Hairline Frame (#D4AF37) */}
      <div className="absolute inset-1 sm:inset-1.5 border border-[#D4AF37]/50 rounded-xl pointer-events-none transition-colors duration-300 group-hover:border-[#D4AF37]" />

      {/* Small Corner Diamond Florets */}
      <span className="absolute top-1 left-1 w-1.5 h-1.5 rotate-45 bg-[#D4AF37] border border-[#8C6A16]/25 pointer-events-none group-hover:scale-110 transition-transform" />
      <span className="absolute top-1 right-1 w-1.5 h-1.5 rotate-45 bg-[#D4AF37] border border-[#8C6A16]/25 pointer-events-none group-hover:scale-110 transition-transform" />
      <span className="absolute bottom-1 left-1 w-1.5 h-1.5 rotate-45 bg-[#D4AF37] border border-[#8C6A16]/25 pointer-events-none group-hover:scale-110 transition-transform" />
      <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rotate-45 bg-[#D4AF37] border border-[#8C6A16]/25 pointer-events-none group-hover:scale-110 transition-transform" />

      {/* Moroccan / Temple Arch Bracket Notches */}
      <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-sm pointer-events-none" />
      <div className="absolute top-0.5 right-0.5 w-2 h-2 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b-2 border-r-2 border-[#D4AF37] rounded-br-sm pointer-events-none" />

      {/* Card Content Layout */}
      <div className="relative z-10 flex items-center space-x-3 sm:flex-col sm:space-x-0 sm:space-y-1.5 text-left sm:text-center w-full px-1">
        
        {/* Embossed Circular Gold Foil Emblem */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#F8F1E1] to-[#EAD29A] border border-[#D4AF37] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(140,106,22,0.18)] flex items-center justify-center text-[#7A5813] flex-shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.35)] transition-all">
          {icon}
        </div>

        {/* Text Container */}
        <div className="min-w-0 flex-1 sm:w-full">
          {/* Top Label: Tiny elegant gold uppercase tag */}
          {label && (
            <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#9E7719] uppercase block leading-none mb-1">
              {label}
            </span>
          )}

          {/* Main Value: Deep antique bronze (#7A5813) */}
          <span className="font-cinzel sm:font-inter font-bold text-sm sm:text-[13.5px] text-[#7A5813] tracking-wide block leading-snug">
            {text}
          </span>

          {subtext && (
            <span className="font-inter text-xs text-[#555555] block mt-0.5">
              {subtext}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-2xl">
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="w-full text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-2xl">
        {content}
      </button>
    );
  }

  return content;
};

export const LuxuryEventBadge = BracketPill;

// Subtle Geometric Header Divider for the sticky ribbon
export const ThoranamHeader = () => (
  <div className="w-full flex items-center justify-center overflow-hidden py-1.5 opacity-90 select-none px-4">
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
