import React from 'react';
import { CornerOrnament, GoldDivider } from './OrnamentalMotifs';
import { Calendar, Clock, Sparkles, Utensils, Camera, Heart } from 'lucide-react';

export const EventSchedule = () => {
  return (
    <section className="py-8 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
            Program Of The Evening
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-ivory-100 tracking-wide">
            Event Schedule
          </h2>
          <GoldDivider className="my-2" />
          <p className="font-cormorant text-lg sm:text-xl text-ivory-200/90 italic leading-relaxed">
            Join us for an unforgettable evening of joy, blessings, and feast
          </p>
        </div>

        {/* Schedule Main Card */}
        <div className="relative bg-gradient-to-b from-maroon-900/90 to-maroon-950/95 border border-gold-500/40 rounded-2xl px-4 py-7 sm:p-8 shadow-gold-glow">
          <CornerOrnament className="absolute top-2 left-2 w-7 h-7" position="top-left" />
          <CornerOrnament className="absolute top-2 right-2 w-7 h-7" position="top-right" />
          <CornerOrnament className="absolute bottom-2 left-2 w-7 h-7" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2 right-2 w-7 h-7" position="bottom-right" />

          {/* Event Master Info Banner (Bumped to text-base/text-lg for high readability) */}
          <div className="bg-maroon-950/80 border border-gold-500/30 rounded-xl p-4 sm:p-6 text-center mb-8">
            <span className="inline-block bg-gold-500/20 text-gold-300 font-cinzel text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5 border border-gold-500/30">
              Celebration Highlight
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold gold-text-gradient mb-2.5">
              Wedding Reception
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-base sm:text-lg text-ivory-100 mt-2 font-semibold">
              <div className="flex items-center space-x-2 text-gold-300">
                <Calendar className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="font-inter text-ivory-100">Monday, November 16, 2026</span>
              </div>
              <div className="hidden sm:inline text-gold-500">•</div>
              <div className="flex items-center space-x-2 text-gold-300">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="font-inter text-ivory-100">6:00 PM to 9:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-gold-400 before:via-gold-500 before:to-gold-600/30">
            
            {/* Timeline Item 1: 6:00 PM */}
            <div className="relative">
              {/* Bullet Node */}
              <div className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-6 h-6 rounded-full bg-maroon-950 border-2 border-gold-400 flex items-center justify-center shadow-gold-glow">
                <div className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
              </div>

              {/* Card Body */}
              <div className="bg-gradient-to-r from-maroon-950/90 to-maroon-900/60 border border-gold-500/30 rounded-xl p-4 sm:p-5 hover:border-gold-400/60 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center space-x-1.5 text-amber-300 font-cinzel text-sm sm:text-base font-bold bg-maroon-900/90 border border-gold-500/30 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>6:00 PM</span>
                  </span>
                  <Camera className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="font-playfair text-xl sm:text-2xl font-bold text-ivory-100 mt-1">
                  Reception &amp; Stage Greetings
                </h4>
                <p className="font-cormorant text-base sm:text-lg text-ivory-100/95 mt-1.5 leading-relaxed font-normal">
                  Join us at the stage to meet Guhan &amp; Harshini, share your warm blessings, and capture memorable photographs together.
                </p>
              </div>
            </div>

            {/* Timeline Item 2: 7:30 PM Onwards */}
            <div className="relative">
              {/* Bullet Node */}
              <div className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-6 h-6 rounded-full bg-maroon-950 border-2 border-gold-400 flex items-center justify-center shadow-gold-glow">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
              </div>

              {/* Card Body */}
              <div className="bg-gradient-to-r from-maroon-950/90 to-maroon-900/60 border border-gold-500/30 rounded-xl p-4 sm:p-5 hover:border-gold-400/60 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center space-x-1.5 text-amber-300 font-cinzel text-sm sm:text-base font-bold bg-maroon-900/90 border border-gold-500/30 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>7:30 PM Onwards</span>
                  </span>
                  <Utensils className="w-5 h-5 text-gold-400" />
                </div>
                <h4 className="font-playfair text-xl sm:text-2xl font-bold text-ivory-100 mt-1">
                  Dinner to Follow
                </h4>
                <p className="font-cormorant text-base sm:text-lg text-ivory-100/95 mt-1.5 leading-relaxed font-normal">
                  A lavish, traditional South Indian wedding feast (Kalyana Virundhu) prepared with love to celebrate our joyous milestone.
                </p>
              </div>
            </div>

          </div>

          {/* Auspicious Dress Code / Welcome note */}
          <div className="mt-8 pt-4 border-t border-gold-500/20 flex items-center justify-center space-x-2 text-sm sm:text-base text-gold-200 font-cormorant italic text-center font-medium">
            <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Dress Code: Grand Traditional / Festive Ethnic Attire</span>
            <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
