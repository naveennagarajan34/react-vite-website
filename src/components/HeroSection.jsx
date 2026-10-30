import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { KalasamIcon, CornerOrnament, GoldDivider } from './OrnamentalMotifs';
import { Calendar, Clock, MapPin, Heart, Sparkles } from 'lucide-react';

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

  const [celebrated, setCelebrated] = useState(false);

  const triggerShowerConfetti = () => {
    setCelebrated(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#E6D3A3', '#8C6A16', '#FAF4E6', '#F5E6C8']
    });
    setTimeout(() => setCelebrated(false), 2000);
  };

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
    <section className="relative overflow-hidden pt-6 pb-10 px-3 xs:px-4 sm:px-6 text-center">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[420px] h-80 sm:h-[420px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Main Luxury Frame Card with Dynamic Hover Lift */}
      <div className="luxury-card relative max-w-xl mx-auto bg-[#FFFFFF] border border-[#D4AF37] rounded-2xl px-4 py-8 sm:p-10 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
        {/* Four Corner Ornaments */}
        <CornerOrnament className="absolute top-2.5 left-2.5 w-7 h-7 sm:w-8 sm:h-8" position="top-left" />
        <CornerOrnament className="absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8" position="top-right" />
        <CornerOrnament className="absolute bottom-2.5 left-2.5 w-7 h-7 sm:w-8 sm:h-8" position="bottom-left" />
        <CornerOrnament className="absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8" position="bottom-right" />

        {/* Minimalist Auspicious Invocation Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center space-x-2.5 mb-2">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#8C6A16] text-xs sm:text-sm">✦</span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <span className="font-cinzel text-xs sm:text-sm text-[#8C6A16] tracking-[0.22em] sm:tracking-[0.28em] uppercase font-bold block">
            WITH THE BLESSINGS OF ALMIGHTY
          </span>
        </div>

        {/* Central Kalasam Icon with Floating Animation */}
        <div className="my-3 flex justify-center">
          <div className="p-3.5 bg-[#F9F6F0] border border-[#E6D3A3] rounded-full shadow-sm animate-float">
            <KalasamIcon className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="font-playfair text-xl sm:text-2xl tracking-widest text-[#8C6A16] uppercase font-bold mt-3">
          We’re Getting Married!
        </h2>

        {/* Gold Divider */}
        <GoldDivider className="my-3" />

        {/* Couple Names with Continuous Shimmer Wave & Tap to Shower Confetti */}
        <div 
          onClick={triggerShowerConfetti}
          title="Tap to shower blessings!"
          className="my-5 cursor-pointer group select-none transition-transform active:scale-95"
        >
          <h1 className="font-cinzel text-[2.1rem] xs:text-[2.35rem] sm:text-5xl font-bold tracking-wider gold-shimmer-text leading-tight group-hover:scale-[1.02] transition-transform">
            S. Guhan
          </h1>
          <div className="flex items-center justify-center space-x-3 my-2.5">
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="font-cormorant italic text-2xl sm:text-3xl text-[#A88127] font-semibold px-2">
              weds
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <h1 className="font-cinzel text-[2.1rem] xs:text-[2.35rem] sm:text-5xl font-bold tracking-wider gold-shimmer-text leading-tight group-hover:scale-[1.02] transition-transform">
            J. Harshini
          </h1>
          <span className="inline-flex items-center space-x-1 text-[11px] sm:text-xs text-[#8C6A16] font-inter font-medium mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Tap names to shower blessings ✨</span>
          </span>
        </div>

        {/* Tagline in Charcoal Gray */}
        <p className="font-cormorant text-lg sm:text-2xl text-[#333333] italic max-w-md mx-auto leading-relaxed mt-4 font-normal">
          &ldquo;Together with our families, we invite you to celebrate our new beginning.&rdquo;
        </p>

        {/* Event Highlight Badge */}
        <div className="mt-6 mb-8 inline-flex items-center space-x-2 bg-[#F9F6F0] border border-[#E6D3A3] px-6 py-2.5 rounded-full shadow-sm hover:border-[#D4AF37] transition-all">
          <Heart className="w-4 h-4 text-[#8C6A16] fill-[#8C6A16] animate-pulse" />
          <span className="font-cinzel text-sm sm:text-base tracking-widest text-[#8C6A16] font-bold uppercase">
            Wedding Reception
          </span>
          <Heart className="w-4 h-4 text-[#8C6A16] fill-[#8C6A16] animate-pulse" />
        </div>

        {/* Details Chips: Date, Time & Venue Hall */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center space-x-2.5 bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-3 sm:p-3.5 shadow-sm hover:border-[#D4AF37] transition-all">
            <Calendar className="w-5 h-5 text-[#8C6A16] flex-shrink-0" />
            <span className="font-inter text-base font-semibold text-[#222222]">Nov 16, 2026</span>
          </div>
          <div className="flex items-center justify-center space-x-2.5 bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-3 sm:p-3.5 shadow-sm hover:border-[#D4AF37] transition-all">
            <Clock className="w-5 h-5 text-[#8C6A16] flex-shrink-0" />
            <span className="font-inter text-base font-semibold text-[#222222]">6:00 PM IST</span>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Chinnasamy+Gounder+Kalyanamandapam+Kulathupalayam+Kovaipudur+Coimbatore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2.5 bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-3 sm:p-3.5 shadow-sm hover:border-[#D4AF37] hover:bg-[#FAF5EA] transition-all group"
          >
            <MapPin className="w-5 h-5 text-[#8C6A16] flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-inter text-base font-semibold text-[#222222]">Coimbatore</span>
          </a>
        </div>

        {/* Live Countdown Timer with Glowing Progress feel */}
        <div className="mt-2 pt-6 border-t border-[#E6D3A3]">
          <p className="font-cinzel text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8C6A16] mb-4 font-bold">
            Counting Down To The Auspicious Moment
          </p>

          {timeLeft.isExpired ? (
            <div className="bg-[#F9F6F0] border border-[#D4AF37] p-4 rounded-xl">
              <span className="font-playfair text-xl text-[#8C6A16] font-bold">
                The Celebration Is Underway! ✨
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {/* Days */}
              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-2.5 sm:p-3 shadow-sm hover:border-[#D4AF37] transition-all flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16]">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#555555] font-semibold uppercase tracking-wider mt-1">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-2.5 sm:p-3 shadow-sm hover:border-[#D4AF37] transition-all flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16]">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#555555] font-semibold uppercase tracking-wider mt-1">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-2.5 sm:p-3 shadow-sm hover:border-[#D4AF37] transition-all flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16]">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#555555] font-semibold uppercase tracking-wider mt-1">
                  Mins
                </span>
              </div>

              {/* Seconds */}
              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-2.5 sm:p-3 shadow-sm hover:border-[#D4AF37] transition-all flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#A88127] animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#555555] font-semibold uppercase tracking-wider mt-1">
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
