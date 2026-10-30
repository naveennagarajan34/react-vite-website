import React from 'react';
import { PosterCornerOrnament } from './OrnamentalMotifs';
import { ScrollReveal } from './ScrollReveal';

export const InvitationNote = () => {
  return (
    <section className="py-6 px-2.5 xs:px-3 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Pure Clean White Card with Refined Gold Border & Ambient Shadow */}
        <ScrollReveal
          animation="scale-up"
          duration={0.8}
          yOffset={24}
          className="luxury-card relative bg-[#FFFFFF] text-[#1F1F1F] rounded-3xl p-5 sm:p-9 shadow-[0_16px_40px_rgba(0,0,0,0.06)] border-2 border-[#D4AF37] overflow-hidden"
        >
          {/* Subtle warm ivory pattern watermark */}
          <div className="absolute inset-0 bg-[radial-gradient(#E6D3A3_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
          
          <PosterCornerOrnament position="top-left" />
          <PosterCornerOrnament position="top-right" />
          <PosterCornerOrnament position="bottom-left" />
          <PosterCornerOrnament position="bottom-right" />

          {/* Inner Border Hairline */}
          <div className="absolute inset-2 sm:inset-3 border border-[#E6D3A3] rounded-2xl pointer-events-none" />

          {/* Traditional Royal Stamp / Monogram */}
          <div className="flex justify-center mb-3 pt-2">
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

          {/* The Exact Invitation Note in Crisp Deep Charcoal (#1F1F1F) */}
          <p className="font-cormorant text-xl sm:text-2xl text-[#1F1F1F] leading-relaxed sm:leading-loose text-center px-1.5 sm:px-4 font-normal italic -mt-2">
            The best part of life&apos;s biggest moments is sharing them with the people who matter most. We are thrilled to invite our friends to join us for an evening of celebration, warm wishes, and great memories.
          </p>

          <div className="text-center font-playfair text-4xl sm:text-5xl text-[#D4AF37]/50 leading-none select-none -mt-1">
            ”
          </div>

          {/* Signoff */}
          <div className="mt-5 pt-4 border-t border-[#E6D3A3] text-center">
            <p className="font-cormorant italic text-lg sm:text-xl text-[#A88127] leading-relaxed font-semibold">
              With love, excitement &amp; heartfelt gratitude,
            </p>
            <p className="font-playfair text-2xl sm:text-3xl font-bold text-[#8C6A16] mt-1.5">
              Guhan &amp; Harshini
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
