import React, { useState, useEffect } from 'react';
import { KalasamIcon, CornerOrnament, GoldDivider } from './OrnamentalMotifs';
import { Calendar, Clock, MapPin, Heart } from 'lucide-react';

export const HeroSection = () => {
  // Target: November 16, 2026, 6:00 PM IST (Coimbatore)
  const targetDate = new Date('2026-11-16T18:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isExpired: false
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative overflow-hidden pt-6 pb-12 px-3 xs:px-4 sm:px-6 text-center">
      {/* Decorative Aura / Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Luxury Frame Card (Card Canvas: #37173B Warm Mulberry) */}
      <div className="relative max-w-xl mx-auto bg-gradient-to-b from-[#37173B]/95 via-[#401B45]/90 to-[#37173B]/95 border border-[#E8B4A2]/40 rounded-2xl px-4 py-7 sm:p-10 shadow-gold-glow backdrop-blur-sm">
        {/* Four Corner Ornaments */}
        <CornerOrnament className="absolute top-2 left-2 w-7 h-7 sm:w-8 sm:h-8" position="top-left" />
        <CornerOrnament className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8" position="top-right" />
        <CornerOrnament className="absolute bottom-2 left-2 w-7 h-7 sm:w-8 sm:h-8" position="bottom-left" />
        <CornerOrnament className="absolute bottom-2 right-2 w-7 h-7 sm:w-8 sm:h-8" position="bottom-right" />

        {/* Minimalist Auspicious Invocation Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center space-x-2.5 mb-2">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#E8B4A2]/70" />
            <span className="text-[#E8B4A2] text-xs sm:text-sm">✦</span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#E8B4A2]/70" />
          </div>
          <span className="font-cinzel text-xs sm:text-sm text-[#F5C7B8] tracking-[0.22em] sm:tracking-[0.28em] uppercase font-semibold block">
            WITH THE BLESSINGS OF ALMIGHTY
          </span>
        </div>

        {/* Central Kalasam Icon */}
        <div className="my-3 flex justify-center">
          <div className="p-3.5 bg-[#240D26]/80 border border-[#E8B4A2]/30 rounded-full shadow-inner animate-float">
            <KalasamIcon className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="font-playfair text-xl sm:text-2xl tracking-widest text-[#F5C7B8] uppercase font-semibold mt-3">
          We’re Getting Married!
        </h2>

        {/* Gold Divider */}
        <GoldDivider className="my-3" />

        {/* Couple Names - scaled to 2rem–2.5rem on mobile with Rose Gold Gradient */}
        <div className="my-5">
          <h1 className="font-cinzel text-[2rem] xs:text-[2.25rem] sm:text-5xl font-bold tracking-wider gold-text-gradient leading-tight">
            S. Guhan
          </h1>
          <div className="flex items-center justify-center space-x-3 my-2.5">
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#E8B4A2]" />
            <span className="font-cormorant italic text-2xl sm:text-3xl text-[#F5C7B8] font-medium px-2">
              weds
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#E8B4A2]" />
          </div>
          <h1 className="font-cinzel text-[2rem] xs:text-[2.25rem] sm:text-5xl font-bold tracking-wider gold-text-gradient leading-tight">
            J. Harshini
          </h1>
        </div>

        {/* Tagline */}
        <p className="font-cormorant text-lg sm:text-2xl text-[#FAF4F8]/95 italic max-w-md mx-auto leading-relaxed mt-4 font-normal">
          &ldquo;Together with our families, we invite you to celebrate our new beginning.&rdquo;
        </p>

        {/* Event Highlight Badge */}
        <div className="mt-6 mb-8 inline-flex items-center space-x-2 bg-gradient-to-r from-[#240D26]/90 via-[#401B45]/50 to-[#240D26]/90 border border-[#E8B4A2]/50 px-6 py-2.5 rounded-full shadow-md">
          <Heart className="w-4 h-4 text-[#E8B4A2] fill-[#E8B4A2] animate-pulse" />
          <span className="font-cinzel text-sm sm:text-base tracking-widest text-[#F5C7B8] font-semibold uppercase">
            Wedding Reception
          </span>
          <Heart className="w-4 h-4 text-[#E8B4A2] fill-[#E8B4A2] animate-pulse" />
        </div>

        {/* Key Event Badges: Date, Time & City */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center space-x-2.5 bg-[#240D26]/80 border border-[#E8B4A2]/30 rounded-xl p-3 sm:p-3.5 shadow-sm">
            <Calendar className="w-5 h-5 text-[#E8B4A2] flex-shrink-0" />
            <span className="font-inter text-base font-semibold text-[#FAF4F8]">Nov 16, 2026</span>
          </div>
          <div className="flex items-center justify-center space-x-2.5 bg-[#240D26]/80 border border-[#E8B4A2]/30 rounded-xl p-3 sm:p-3.5 shadow-sm">
            <Clock className="w-5 h-5 text-[#E8B4A2] flex-shrink-0" />
            <span className="font-inter text-base font-semibold text-[#FAF4F8]">6:00 PM IST</span>
          </div>
          <div className="flex items-center justify-center space-x-2.5 bg-[#240D26]/80 border border-[#E8B4A2]/30 rounded-xl p-3 sm:p-3.5 shadow-sm">
            <MapPin className="w-5 h-5 text-[#E8B4A2] flex-shrink-0" />
            <span className="font-inter text-base font-semibold text-[#FAF4F8]">Coimbatore</span>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="mt-2 pt-6 border-t border-[#E8B4A2]/30">
          <p className="font-cinzel text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#F5C7B8] mb-4 font-semibold">
            Counting Down To The Auspicious Moment
          </p>

          {timeLeft.isExpired ? (
            <div className="bg-[#E8B4A2]/20 border border-[#E8B4A2] p-4 rounded-xl">
              <span className="font-playfair text-xl text-[#F5C7B8] font-semibold">
                The Celebration Is Underway! ✨
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {/* Days */}
              <div className="bg-gradient-to-b from-[#240D26] to-[#1A081C] border border-[#E8B4A2]/40 rounded-xl p-2.5 sm:p-3 shadow-md flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold gold-text-gradient">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#F5C7B8] font-semibold uppercase tracking-wider mt-1">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-b from-[#240D26] to-[#1A081C] border border-[#E8B4A2]/40 rounded-xl p-2.5 sm:p-3 shadow-md flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold gold-text-gradient">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#F5C7B8] font-semibold uppercase tracking-wider mt-1">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="bg-gradient-to-b from-[#240D26] to-[#1A081C] border border-[#E8B4A2]/40 rounded-xl p-2.5 sm:p-3 shadow-md flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold gold-text-gradient">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#F5C7B8] font-semibold uppercase tracking-wider mt-1">
                  Mins
                </span>
              </div>

              {/* Seconds */}
              <div className="bg-gradient-to-b from-[#240D26] to-[#1A081C] border border-[#E8B4A2]/40 rounded-xl p-2.5 sm:p-3 shadow-md flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F5C7B8] animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#E8B4A2] font-semibold uppercase tracking-wider mt-1">
                  Secs
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
