import React from 'react';
import { CornerOrnament } from './OrnamentalMotifs';

export const InvitationNote = () => {
  return (
    <section className="py-8 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Pure Clean White Card with Refined Gold Border & Ambient Shadow */}
        <div className="relative bg-[#FFFFFF] text-[#333333] rounded-2xl px-4 py-8 sm:p-10 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#D4AF37] overflow-hidden">
          {/* Subtle warm ivory pattern watermark */}
          <div className="absolute inset-0 bg-[radial-gradient(#E6D3A3_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
          
          <CornerOrnament className="absolute top-2.5 left-2.5 w-7 h-7 text-[#D4AF37]" position="top-left" />
          <CornerOrnament className="absolute top-2.5 right-2.5 w-7 h-7 text-[#D4AF37]" position="top-right" />
          <CornerOrnament className="absolute bottom-2.5 left-2.5 w-7 h-7 text-[#D4AF37]" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2.5 right-2.5 w-7 h-7 text-[#D4AF37]" position="bottom-right" />

          {/* Traditional Royal Stamp / Monogram */}
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 rounded-full border border-[#D4AF37] bg-[#F9F6F0] flex items-center justify-center shadow-sm">
              <span className="font-cinzel text-lg font-bold text-[#8C6A16] tracking-tight">
                G <span className="text-[#D4AF37] text-sm">✦</span> H
              </span>
            </div>
          </div>

          <div className="text-center mb-3">
            <span className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-[#8C6A16] font-bold uppercase">
              Cordially Invited
            </span>
            <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto mt-1.5" />
          </div>

          {/* Quotation Icon Decorator in Soft Champagne */}
          <div className="text-center font-playfair text-4xl sm:text-5xl text-[#D4AF37]/50 leading-none select-none">
            “
          </div>

          {/* The Exact Invitation Note in Charcoal Gray (#333333) for Effortless Readability */}
          <p className="font-cormorant text-xl sm:text-2xl text-[#333333] leading-relaxed sm:leading-loose text-center px-1.5 sm:px-4 font-normal italic -mt-2">
            The best part of life&apos;s biggest moments is sharing them with the people who matter most. We are thrilled to invite our friends to join us for an evening of celebration, warm wishes, and great memories.
          </p>

          <div className="text-center font-playfair text-4xl sm:text-5xl text-[#D4AF37]/50 leading-none select-none -mt-1">
            ”
          </div>

          {/* Signoff */}
          <div className="mt-5 pt-4 border-t border-[#E6D3A3] text-center">
            <p className="font-cormorant italic text-lg sm:text-xl text-[#A88127] leading-relaxed font-semibold">
              With love, excitement & heartfelt gratitude,
            </p>
            <p className="font-playfair text-2xl sm:text-3xl font-bold text-[#8C6A16] mt-1.5">
              Guhan &amp; Harshini
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
