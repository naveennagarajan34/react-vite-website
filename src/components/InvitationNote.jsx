import React from 'react';
import { CornerOrnament } from './OrnamentalMotifs';

export const InvitationNote = () => {
  return (
    <section className="py-8 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Warm Mulberry Card Canvas with Polished Rose Gold Accents */}
        <div className="relative bg-[#37173B] text-[#FAF4F8] rounded-2xl px-4 py-7 sm:p-10 shadow-gold-glow border border-[#E8B4A2]/50 overflow-hidden">
          {/* Subtle rose gold pattern watermark & corner flourishes */}
          <div className="absolute inset-0 bg-[radial-gradient(#E8B4A2_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
          
          <CornerOrnament className="absolute top-2 left-2 w-7 h-7 text-gold-400" position="top-left" />
          <CornerOrnament className="absolute top-2 right-2 w-7 h-7 text-gold-400" position="top-right" />
          <CornerOrnament className="absolute bottom-2 left-2 w-7 h-7 text-gold-400" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2 right-2 w-7 h-7 text-gold-400" position="bottom-right" />

          {/* Traditional Royal Stamp / Monogram */}
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 rounded-full border-2 border-gold-400/80 bg-[#240D26]/90 flex items-center justify-center shadow-inner">
              <span className="font-cinzel text-lg font-bold text-gold-200 tracking-tight">
                G <span className="text-gold-400 text-sm">✦</span> H
              </span>
            </div>
          </div>

          <div className="text-center mb-3">
            <span className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-gold-300 font-bold uppercase">
              Cordially Invited
            </span>
            <div className="w-20 h-0.5 bg-gold-500 mx-auto mt-1.5" />
          </div>

          {/* Quotation Icon Decorator */}
          <div className="text-center font-playfair text-4xl sm:text-5xl text-gold-400/50 leading-none select-none">
            “
          </div>

          {/* The Exact Invitation Note */}
          <p className="font-cormorant text-xl sm:text-2xl text-[#FAF4F8] leading-relaxed sm:leading-loose text-center px-1.5 sm:px-4 font-medium italic -mt-2">
            The best part of life&apos;s biggest moments is sharing them with the people who matter most. We are thrilled to invite our friends to join us for an evening of celebration, warm wishes, and great memories.
          </p>

          <div className="text-center font-playfair text-4xl sm:text-5xl text-gold-400/50 leading-none select-none -mt-1">
            ”
          </div>

          {/* Signoff */}
          <div className="mt-5 pt-4 border-t border-gold-400/30 text-center">
            <p className="font-cormorant italic text-lg sm:text-xl text-gold-300 leading-relaxed">
              With love, excitement & heartfelt gratitude,
            </p>
            <p className="font-playfair text-2xl sm:text-3xl font-bold gold-text-gradient mt-1.5">
              Guhan &amp; Harshini
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
