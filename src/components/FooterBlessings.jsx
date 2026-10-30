import React from 'react';
import { CornerOrnament, GoldDivider, KolamMotif } from './OrnamentalMotifs';

export const FooterBlessings = () => {
  return (
    <footer className="pt-8 pb-28 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto space-y-8">

        {/* Kolam Blessing Graphic */}
        <div className="flex justify-center my-4">
          <KolamMotif className="w-20 h-20 text-[#8C6A16]/80" />
        </div>

        {/* The Exact Footer Note & Blessings (Clean White Card with Refined Gold Border & Ambient Shadow) */}
        <div className="relative bg-[#FFFFFF] border border-[#D4AF37] rounded-2xl px-4 py-8 sm:p-10 text-center space-y-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          <CornerOrnament className="absolute top-2.5 left-2.5 w-7 h-7 text-[#D4AF37]" position="top-left" />
          <CornerOrnament className="absolute top-2.5 right-2.5 w-7 h-7 text-[#D4AF37]" position="top-right" />
          <CornerOrnament className="absolute bottom-2.5 left-2.5 w-7 h-7 text-[#D4AF37]" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2.5 right-2.5 w-7 h-7 text-[#D4AF37]" position="bottom-right" />

          <p className="font-cormorant text-xl sm:text-2xl text-[#333333] italic leading-relaxed max-w-lg mx-auto font-normal">
            &ldquo;Your presence and blessings are our greatest gift. Looking forward to seeing you all on the stage!&rdquo;
          </p>

          <GoldDivider className="my-3" />

          <div>
            <p className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16] tracking-wide">
              — Guhan &amp; Harshini
            </p>
            <p className="font-cormorant text-base sm:text-lg text-[#A88127] italic mt-1.5 font-semibold">
              #GuhanWedsHarshini • November 16, 2026
            </p>
          </div>

          <div className="pt-4 border-t border-[#E6D3A3]">
            <p className="font-cinzel text-xs sm:text-sm text-[#8C6A16] tracking-[0.22em] uppercase font-bold">
              Warmest Blessings • Forever in Love &amp; Joy
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
