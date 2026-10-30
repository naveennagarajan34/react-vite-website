import React from 'react';
import { CornerOrnament, GoldDivider } from './OrnamentalMotifs';
import { Sparkles, HeartHandshake } from 'lucide-react';

export const InvitationNote = () => {
  return (
    <section className="py-8 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Parchment Styled Royal Invitation Card */}
        <div className="relative bg-[#FAF6F0] text-maroon-950 rounded-2xl px-4 py-7 sm:p-10 shadow-2xl border-2 border-gold-500/60 overflow-hidden">
          {/* Subtle parchment watermark texture & corner flourishes */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
          
          <CornerOrnament className="absolute top-2 left-2 w-7 h-7 text-gold-600" position="top-left" />
          <CornerOrnament className="absolute top-2 right-2 w-7 h-7 text-gold-600" position="top-right" />
          <CornerOrnament className="absolute bottom-2 left-2 w-7 h-7 text-gold-600" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2 right-2 w-7 h-7 text-gold-600" position="bottom-right" />

          {/* Traditional Royal Stamp / Monogram */}
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 rounded-full border-2 border-gold-600/70 bg-[#F5EFEB] flex items-center justify-center shadow-inner">
              <span className="font-cinzel text-lg font-bold text-maroon-800 tracking-tight">
                G <span className="text-gold-600 text-sm">✦</span> H
              </span>
            </div>
          </div>

          <div className="text-center mb-3">
            <span className="font-cinzel text-sm sm:text-base tracking-[0.25em] text-maroon-800 font-bold uppercase">
              Cordially Invited
            </span>
            <div className="w-20 h-0.5 bg-gold-600 mx-auto mt-1.5" />
          </div>

          {/* Quotation Icon Decorator */}
          <div className="text-center font-playfair text-4xl sm:text-5xl text-gold-600/50 leading-none select-none">
            “
          </div>

          {/* The Exact Invitation Note (Enhanced readability & line height for mobile) */}
          <p className="font-cormorant text-xl sm:text-2xl text-maroon-950 leading-relaxed sm:leading-loose text-center px-1.5 sm:px-4 font-medium italic -mt-2">
            The best part of life&apos;s biggest moments is sharing them with the people who matter most. We are thrilled to invite our friends to join us for an evening of celebration, warm wishes, and great memories.
          </p>

          <div className="text-center font-playfair text-4xl sm:text-5xl text-gold-600/50 leading-none select-none -mt-1">
            ”
          </div>

          {/* Signoff */}
          <div className="mt-5 pt-4 border-t border-gold-400/40 text-center">
            <p className="font-cormorant italic text-lg sm:text-xl text-maroon-800 leading-relaxed">
              With love, excitement & heartfelt gratitude,
            </p>
            <p className="font-playfair text-2xl sm:text-3xl font-bold text-maroon-950 mt-1.5">
              Guhan &amp; Harshini
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
