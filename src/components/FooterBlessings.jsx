import React from 'react';
import { CornerOrnament, GoldDivider, KolamMotif } from './OrnamentalMotifs';

export const FooterBlessings = () => {
  return (
    <footer className="pt-8 pb-28 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto space-y-8">

        {/* Kolam Blessing Graphic */}
        <div className="flex justify-center my-4">
          <KolamMotif className="w-20 h-20 text-gold-500/70" />
        </div>

        {/* The Exact Footer Note & Blessings (Card Canvas: #37173B Warm Mulberry) */}
        <div className="relative bg-gradient-to-b from-[#37173B]/95 via-[#401B45]/90 to-[#37173B]/95 border border-[#E8B4A2]/40 rounded-2xl px-4 py-8 sm:p-10 text-center space-y-4 shadow-gold-glow">
          <CornerOrnament className="absolute top-2 left-2 w-7 h-7" position="top-left" />
          <CornerOrnament className="absolute top-2 right-2 w-7 h-7" position="top-right" />
          <CornerOrnament className="absolute bottom-2 left-2 w-7 h-7" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2 right-2 w-7 h-7" position="bottom-right" />

          <p className="font-cormorant text-xl sm:text-2xl text-[#FAF4F8] italic leading-relaxed max-w-lg mx-auto font-medium">
            &ldquo;Your presence and blessings are our greatest gift. Looking forward to seeing you all on the stage!&rdquo;
          </p>

          <GoldDivider className="my-3" />

          <div>
            <p className="font-cinzel text-2xl sm:text-3xl font-bold gold-text-gradient tracking-wide">
              — Guhan &amp; Harshini
            </p>
            <p className="font-cormorant text-base sm:text-lg text-[#F5C7B8] italic mt-1.5">
              #GuhanWedsHarshini • November 16, 2026
            </p>
          </div>

          <div className="pt-4 border-t border-[#E8B4A2]/25">
            <p className="font-cinzel text-xs sm:text-sm text-[#F5C7B8] tracking-[0.22em] uppercase font-semibold">
              Warmest Blessings • Forever in Love &amp; Joy
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
