import React from 'react';
import { CornerOrnament, GoldDivider } from './OrnamentalMotifs';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Utensils, Camera, ChevronRight } from 'lucide-react';

// Dancing / Waving Text Effect for Royal Date Line
const WavyDateText = ({ text = "Monday, November 16, 2026" }) => {
  const words = text.split(" ");
  let charCounter = 0;

  return (
    <span className="font-playfair font-semibold tracking-wider text-[#8C6A16] text-base sm:text-lg inline-flex flex-wrap items-center justify-center gap-x-1.5 select-none">
      {words.map((word, wordIdx) => {
        const letters = word.split("");
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {letters.map((char, charIdx) => {
              const delay = charCounter * 0.06;
              charCounter += 1;
              return (
                <motion.span
                  key={charIdx}
                  className="inline-block"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: delay,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export const EventSchedule = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore, Tamil Nadu 641042'
  )}`;

  return (
    <section className="py-8 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6A16] font-bold block mb-1">
            Program Of The Evening
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1F2421] tracking-wide">
            Event Schedule
          </h2>
          <GoldDivider className="my-2" />
          <p className="font-cormorant text-lg sm:text-xl text-[#555555] italic leading-relaxed">
            Join us for an unforgettable evening of joy, blessings, and feast
          </p>
        </div>

        {/* Schedule Main Card with Dynamic Hover Lift */}
        <motion.div
          initial={{ opacity: 0, y: 45, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="luxury-card relative bg-[#FFFFFF] border border-[#D4AF37] rounded-2xl px-4 py-8 sm:p-8 shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
        >
          <CornerOrnament className="absolute top-2.5 left-2.5 w-7 h-7 text-[#D4AF37]" position="top-left" />
          <CornerOrnament className="absolute top-2.5 right-2.5 w-7 h-7 text-[#D4AF37]" position="top-right" />
          <CornerOrnament className="absolute bottom-2.5 left-2.5 w-7 h-7 text-[#D4AF37]" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2.5 right-2.5 w-7 h-7 text-[#D4AF37]" position="bottom-right" />

          {/* Event Master Info Banner with Venue Hall Name */}
          <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-4 sm:p-6 text-center mb-8 shadow-sm hover:border-[#D4AF37] transition-all">
            <span className="inline-block bg-[#FFFFFF] text-[#8C6A16] font-cinzel text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5 border border-[#E6D3A3]">
              Celebration Highlight
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16] mb-2.5">
              Wedding Reception
            </h3>
            
            {/* Date & Time */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-base sm:text-lg mt-2">
              <div className="flex items-center space-x-2 text-[#8C6A16]">
                <Calendar className="w-5 h-5 text-[#8C6A16] flex-shrink-0" />
                <WavyDateText text="Monday, November 16, 2026" />
              </div>
              <div className="hidden sm:inline text-[#D4AF37]">•</div>
              <div className="flex items-center space-x-2 text-[#8C6A16]">
                <Clock className="w-5 h-5 text-[#8C6A16] flex-shrink-0" />
                <span className="font-playfair font-semibold tracking-wider text-[#5C4314] text-base sm:text-lg">
                  6:00 PM to 9:00 PM IST
                </span>
              </div>
            </div>

            {/* Venue Location Line */}
            <div className="mt-3.5 pt-3 border-t border-[#E6D3A3]/60 flex items-center justify-center">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-sm sm:text-base font-inter font-medium text-[#8C6A16] hover:text-[#5E4409] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Chinnasamy Gounder Kalyanamandapam, Kovaipudur</span>
                <ChevronRight className="w-4 h-4 text-[#8C6A16] opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#D4AF37] before:via-[#E6D3A3] before:to-[#D4AF37]/40">
            
            {/* Timeline Item 1: 6:00 PM */}
            <div className="relative group">
              {/* Bullet Node */}
              <div className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-6 h-6 rounded-full bg-[#FFFFFF] border-2 border-[#D4AF37] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              </div>

              {/* Card Body */}
              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-4 sm:p-5 hover:border-[#D4AF37] hover:shadow-md transition-all shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center space-x-1.5 text-[#8C6A16] font-cinzel text-sm sm:text-base font-bold bg-[#FFFFFF] border border-[#E6D3A3] px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#8C6A16]" />
                    <span>6:00 PM</span>
                  </span>
                  <Camera className="w-5 h-5 text-[#8C6A16]" />
                </div>
                <h4 className="font-playfair text-xl sm:text-2xl font-bold text-[#1F2421] mt-1">
                  Reception &amp; Stage Greetings
                </h4>
                <p className="font-cormorant text-base sm:text-lg text-[#333333] mt-1.5 leading-relaxed font-normal">
                  Join us at the stage to meet Guhan &amp; Harshini, share your warm blessings, and capture memorable photographs together.
                </p>
              </div>
            </div>

            {/* Timeline Item 2: 7:30 PM Onwards */}
            <div className="relative group">
              {/* Bullet Node */}
              <div className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-6 h-6 rounded-full bg-[#FFFFFF] border-2 border-[#D4AF37] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              </div>

              {/* Card Body */}
              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-4 sm:p-5 hover:border-[#D4AF37] hover:shadow-md transition-all shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center space-x-1.5 text-[#8C6A16] font-cinzel text-sm sm:text-base font-bold bg-[#FFFFFF] border border-[#E6D3A3] px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#8C6A16]" />
                    <span>7:30 PM Onwards</span>
                  </span>
                  <Utensils className="w-5 h-5 text-[#8C6A16]" />
                </div>
                <h4 className="font-playfair text-xl sm:text-2xl font-bold text-[#1F2421] mt-1">
                  Dinner to Follow
                </h4>
                <p className="font-cormorant text-base sm:text-lg text-[#333333] mt-1.5 leading-relaxed font-normal">
                  A lavish, traditional South Indian wedding feast (Kalyana Virundhu) prepared with love to celebrate our joyous milestone.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
