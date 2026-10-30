import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  PosterCornerOrnament, 
  SideRosette, 
  FloralFiligreeDivider, 
  FloralSectionDivider, 
  BracketPill, 
  GoldDivider 
} from './OrnamentalMotifs';
import { ScrollReveal } from './ScrollReveal';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

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

  const triggerShowerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.55 },
      colors: ['#D4AF37', '#E6D3A3', '#8C6A16', '#FAF4E6', '#F5E6C8']
    });
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

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore, Tamil Nadu 641042'
  )}`;

  return (
    <section className="relative overflow-hidden pt-4 pb-10 px-2.5 xs:px-3 sm:px-6 text-center">
      {/* Dynamic Background Warm Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[460px] h-80 sm:h-[460px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Main Luxury Frame Card with Classic Gold Filigree Corners (Soft Upward Fade & Gentle Scale-In) */}
      <ScrollReveal
        animation="scale-up"
        duration={1.3}
        yOffset={18}
        className="luxury-card relative max-w-xl mx-auto bg-[#FFFFFF] border-2 border-[#D4AF37] rounded-3xl p-5 sm:p-11 shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden"
      >
        {/* Four Classic Victorian Filigree Corner Flourishes */}
        <PosterCornerOrnament position="top-left" />
        <PosterCornerOrnament position="top-right" />
        <PosterCornerOrnament position="bottom-left" />
        <PosterCornerOrnament position="bottom-right" />

        {/* Side Mandala Rosettes */}
        <SideRosette position="left" />
        <SideRosette position="right" />

        {/* Inner Border Hairline */}
        <div className="absolute inset-2 sm:inset-3 border border-[#E6D3A3] rounded-2xl pointer-events-none" />

        {/* 1. Header Cleanup: Clean, arched tracked styling + delicate filigree divider */}
        <ScrollReveal animation="fade-up" duration={1.2} yOffset={15} className="pt-2 sm:pt-4 pb-1">
          <span className="font-cinzel text-xs sm:text-sm text-[#8C6A16] tracking-[0.28em] sm:tracking-[0.35em] uppercase font-bold block">
            WITH THE BLESSINGS OF ALMIGHTY
          </span>
          <FloralFiligreeDivider className="mt-2.5 mb-4" />
        </ScrollReveal>

        {/* Headline with comfortable vertical breathing room */}
        <ScrollReveal animation="fade-up" delay={0.1} duration={1.2} yOffset={15}>
          <h2 className="font-playfair text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.25em] text-[#1F1F1F] uppercase font-bold mt-2 mb-4">
            WE’RE GETTING MARRIED!
          </h2>
        </ScrollReveal>

        {/* 2. Couple Names: GUHAN & HARSHINI in Rich Antique Gold with Sharp Edges (Scale-in & Soft Upward Fade) */}
        <ScrollReveal animation="scale-up" delay={0.15} duration={1.3} yOffset={16}>
          <div 
            onClick={triggerShowerConfetti}
            title="Tap to shower blessings!"
            className="my-4 cursor-pointer select-none group transition-transform active:scale-98"
          >
            <h1 className="font-cinzel text-3xl xs:text-4xl sm:text-5xl font-bold tracking-wider text-[#8C6A16] gold-shimmer-text leading-tight group-hover:scale-[1.01] transition-transform">
              GUHAN
            </h1>
            <div className="flex items-center justify-center space-x-3 my-2">
              <span className="font-cormorant italic text-2xl sm:text-3xl text-[#9E7719] font-medium px-2">
                weds
              </span>
            </div>
            <h1 className="font-cinzel text-3xl xs:text-4xl sm:text-5xl font-bold tracking-wider text-[#8C6A16] gold-shimmer-text leading-tight group-hover:scale-[1.01] transition-transform">
              HARSHINI
            </h1>
            <span className="inline-flex items-center space-x-1 text-[11px] sm:text-xs text-[#8C6A16] font-inter font-medium mt-1.5 opacity-75 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Tap names for golden blessings ✨</span>
            </span>
          </div>
        </ScrollReveal>

        {/* Tagline in Crisp Deep Charcoal (#1F1F1F) */}
        <ScrollReveal animation="fade-up" delay={0.2} duration={1.2} yOffset={15}>
          <p className="font-cormorant italic text-lg sm:text-2xl text-[#1F1F1F] max-w-md mx-auto leading-relaxed mt-4 mb-5 font-normal px-2">
            &ldquo;Together with our families, we invite you to celebrate our new beginning.&rdquo;
          </p>

          {/* Wedding Reception Gold Ribbon Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#9E7719] via-[#D4AF37] to-[#9E7719] text-[#FFFFFF] px-7 py-2 rounded-full shadow-sm mb-4 border border-[#8C6A16]">
            <span className="text-white text-xs">♥</span>
            <span className="font-cinzel text-xs sm:text-sm tracking-widest font-bold uppercase drop-shadow-sm">
              WEDDING RECEPTION
            </span>
            <span className="text-white text-xs">♥</span>
          </div>
        </ScrollReveal>

        {/* 3. SAVE THE DATE: Tracked uppercase lettering directly above the 3 info cards */}
        <ScrollReveal animation="fade-up" delay={0.1} duration={1.2} yOffset={15} className="pt-2 pb-1 text-center">
          <span className="font-cinzel text-sm sm:text-base tracking-[0.3em] sm:tracking-[0.35em] text-[#8C6A16] font-bold uppercase inline-block">
            ✦ SAVE THE DATE ✦
          </span>
        </ScrollReveal>

        {/* 4. Compact Centered Luxury Royal Badges: Staggered entry from bottom to top (stagger interval: 0.22s) */}
        <div className="flex flex-col gap-2.5 max-w-[280px] mx-auto mt-4 mb-6">
          <ScrollReveal animation="fade-up" delay={0.15} duration={1.2} yOffset={16}>
            <BracketPill 
              label="DATE"
              icon={<Calendar className="w-4 h-4 text-[#7A5813]" />} 
              text="Nov 16, 2026" 
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.37} duration={1.2} yOffset={16}>
            <BracketPill 
              label="TIME"
              icon={<Clock className="w-4 h-4 text-[#7A5813]" />} 
              text="6:00 PM IST" 
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.59} duration={1.2} yOffset={16}>
            <BracketPill 
              label="PLACE"
              icon={<MapPin className="w-4 h-4 text-[#7A5813]" />} 
              text="Coimbatore" 
              href={mapsUrl}
            />
          </ScrollReveal>
        </div>

        {/* Decorative Floral Divider */}
        <FloralSectionDivider className="my-6" />

        {/* 5. EVENT SCHEDULE Section: Elegant slide-up as it enters viewport */}
        <ScrollReveal animation="fade-up" duration={1.3} yOffset={18} className="text-center space-y-1.5 max-w-md mx-auto">
          <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#8C6A16] tracking-[0.2em] uppercase">
            EVENT SCHEDULE
          </h3>
          <p className="font-playfair text-base sm:text-lg font-semibold tracking-wider text-[#8C6A16]">
            Monday, November 16, 2026
          </p>
          <div className="space-y-1 pt-1 text-sm sm:text-base font-inter text-[#1F1F1F]">
            <p>
              <span className="font-semibold text-[#8C6A16]">6:00 PM</span> — Reception &amp; Stage Greetings
            </p>
            <p>
              <span className="font-semibold text-[#8C6A16]">7:30 PM</span> — Dinner to follow
            </p>
          </div>
        </ScrollReveal>

        {/* Decorative Floral Divider directly leading into Final Blessings Note */}
        <FloralSectionDivider className="my-5" />

        {/* Final Blessings Note: Smooth fade-in */}
        <ScrollReveal animation="fade-up" duration={1.3} yOffset={16} className="text-center space-y-2 max-w-md mx-auto mb-2">
          <p className="font-cormorant italic text-lg sm:text-xl text-[#1F1F1F] leading-relaxed">
            Your presence and blessings are our greatest gift.
          </p>
          <p className="font-cormorant italic text-lg sm:text-xl text-[#1F1F1F] leading-relaxed">
            Looking forward to seeing you all on the stage!
          </p>
        </ScrollReveal>

        {/* 8. Live Countdown to the Auspicious Moment: Fade-in with a subtle golden glow flash on reveal */}
        <ScrollReveal animation="glow-reveal" duration={1.3} yOffset={18} className="mt-8 pt-6 border-t border-[#E6D3A3]">
          <p className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8C6A16] mb-4 font-bold">
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
              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-2.5 sm:p-3 shadow-sm hover:border-[#D4AF37] transition-all flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16]">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#555555] font-semibold uppercase tracking-wider mt-1">
                  Days
                </span>
              </div>

              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-2.5 sm:p-3 shadow-sm hover:border-[#D4AF37] transition-all flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16]">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#555555] font-semibold uppercase tracking-wider mt-1">
                  Hours
                </span>
              </div>

              <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-2.5 sm:p-3 shadow-sm hover:border-[#D4AF37] transition-all flex flex-col items-center">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6A16]">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="font-inter text-xs sm:text-sm text-[#555555] font-semibold uppercase tracking-wider mt-1">
                  Mins
                </span>
              </div>

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
        </ScrollReveal>

      </ScrollReveal>
    </section>
  );
};
