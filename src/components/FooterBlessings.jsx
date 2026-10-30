import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CornerOrnament, GoldDivider, KolamMotif } from './OrnamentalMotifs';
import { Sparkles, Heart, Send, CheckCircle2, MessageSquareHeart } from 'lucide-react';

export const FooterBlessings = () => {
  const [guestName, setGuestName] = useState('');
  const [selectedWish, setSelectedWish] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [wishesList, setWishesList] = useState([
    {
      name: "Karthik & Family",
      text: "Heartiest congratulations Guhan and Harshini! Wishing you a blessed, joyful, and prosperous journey ahead! ✨",
      time: "A moment ago"
    },
    {
      name: "Pooja & Friends",
      text: "So excited for both of you! Looking forward to rocking the stage in Coimbatore on Nov 16! 🎊",
      time: "Just now"
    }
  ]);
  const [submitted, setSubmitted] = useState(false);

  const quickWishes = [
    "Wishing you a lifetime of endless love & happiness! 💖",
    "May the Almighty bless your sacred union! ✨",
    "Can't wait to celebrate with you on stage! 🎊",
    "Happy married life Guhan & Harshini! ✨",
  ];

  const triggerGoldConfetti = () => {
    // Royal Gold Confetti Burst
    const count = 120;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#F3E5AB', '#AA771C', '#FFDF73', '#FFFFFF', '#E6C687']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleSendWish = (e) => {
    e.preventDefault();
    const finalMessage = customNote.trim() || selectedWish || "Sending our heartfelt blessings and best wishes to Guhan & Harshini!";
    const author = guestName.trim() || "A Dear Friend & Well-Wisher";

    setWishesList(prev => [
      {
        name: author,
        text: finalMessage,
        time: "Just now"
      },
      ...prev
    ]);

    setSubmitted(true);
    triggerGoldConfetti();

    // Reset fields
    setCustomNote('');
    setSelectedWish('');
    setGuestName('');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer className="pt-8 pb-28 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto space-y-10">

        {/* Wishes & RSVP Interactive Card */}
        <div className="relative bg-gradient-to-b from-maroon-900/90 to-maroon-950/95 border border-gold-500/40 rounded-2xl px-4 py-7 sm:p-8 shadow-gold-glow">
          <CornerOrnament className="absolute top-2 left-2 w-7 h-7" position="top-left" />
          <CornerOrnament className="absolute top-2 right-2 w-7 h-7" position="top-right" />
          <CornerOrnament className="absolute bottom-2 left-2 w-7 h-7" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2 right-2 w-7 h-7" position="bottom-right" />

          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 mb-2.5">
              <MessageSquareHeart className="w-8 h-8 text-gold-400" />
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-text-gradient">
              Send Your Warm Wishes
            </h3>
            <p className="font-cormorant text-lg sm:text-xl text-ivory-200/90 italic mt-1 leading-relaxed">
              Shower the bride &amp; groom with your love and blessings
            </p>
          </div>

          <form onSubmit={handleSendWish} className="space-y-4">
            {/* Guest Name Input */}
            <div>
              <label htmlFor="guestName" className="block font-inter text-xs sm:text-sm font-semibold text-gold-300 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                id="guestName"
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g., Sundar &amp; Family, Ananya, College Gang..."
                className="w-full min-h-[48px] bg-maroon-950/90 border border-gold-500/40 rounded-xl px-4 py-3.5 text-ivory-100 placeholder-ivory-300/40 text-base focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition-all font-inter"
              />
            </div>

            {/* Quick Blessing Pills */}
            <div>
              <span className="block font-inter text-xs sm:text-sm font-semibold text-gold-300 uppercase tracking-wider mb-2">
                Choose a Blessing or Write Below
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {quickWishes.map((wish, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setSelectedWish(wish);
                      setCustomNote(wish);
                    }}
                    className={`text-left text-sm sm:text-base p-3 min-h-[44px] rounded-xl border transition-all font-inter leading-relaxed flex items-center ${
                      selectedWish === wish
                        ? 'bg-gold-500/20 border-gold-400 text-gold-200 font-semibold'
                        : 'bg-maroon-950/60 border-gold-500/20 text-ivory-200/90 hover:border-gold-500/40 hover:text-ivory-100'
                    }`}
                  >
                    {wish}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message Area */}
            <div>
              <label htmlFor="customNote" className="block font-inter text-xs sm:text-sm font-semibold text-gold-300 uppercase tracking-wider mb-2">
                Personal Message (Optional)
              </label>
              <textarea
                id="customNote"
                rows={3}
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Write your personal message to Guhan &amp; Harshini..."
                className="w-full min-h-[88px] bg-maroon-950/90 border border-gold-500/40 rounded-xl px-4 py-3.5 text-ivory-100 placeholder-ivory-300/40 text-base focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/50 transition-all font-inter resize-none"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full min-h-[50px] flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-maroon-950 font-inter font-bold text-base shadow-lg shadow-gold-900/40 hover:shadow-gold-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <Sparkles className="w-5 h-5 text-maroon-950" />
              <span>Send Wishes &amp; Shower Confetti ✨</span>
              <Send className="w-4 h-4 ml-1" />
            </button>

            {submitted && (
              <div className="flex items-center justify-center space-x-2 text-emerald-400 text-sm sm:text-base font-inter pt-2 animate-bounce">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you! Your heartfelt blessings have been shared.</span>
              </div>
            )}
          </form>

          {/* Recent Wishes Feed */}
          <div className="mt-7 pt-5 border-t border-gold-500/20">
            <span className="font-cinzel text-xs sm:text-sm text-gold-400 uppercase tracking-wider block mb-3 font-semibold">
              Recent Blessings from Friends &amp; Family:
            </span>
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
              {wishesList.map((item, idx) => (
                <div key={idx} className="bg-maroon-950/70 border border-gold-500/20 rounded-xl p-3.5 text-left">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-cinzel text-sm sm:text-base font-bold text-gold-300">{item.name}</span>
                    <span className="text-xs text-ivory-300/70 font-inter">{item.time}</span>
                  </div>
                  <p className="font-cormorant text-base sm:text-lg text-ivory-100/95 italic leading-relaxed">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kolam Blessing Graphic */}
        <div className="flex justify-center my-6">
          <KolamMotif className="w-20 h-20 text-gold-500/70" />
        </div>

        {/* The Exact Footer Note & Blessings */}
        <div className="relative bg-maroon-900/60 border border-gold-500/30 rounded-2xl px-4 py-7 sm:p-8 text-center space-y-4">
          <p className="font-cormorant text-xl sm:text-2xl text-ivory-100 italic leading-relaxed max-w-lg mx-auto font-medium">
            &ldquo;Your presence and blessings are our greatest gift. Looking forward to seeing you all on the stage!&rdquo;
          </p>

          <GoldDivider className="my-3" />

          <div>
            <p className="font-cinzel text-2xl sm:text-3xl font-bold gold-text-gradient tracking-wide">
              — Guhan &amp; Harshini
            </p>
            <p className="font-cormorant text-base sm:text-lg text-gold-300/90 italic mt-1.5">
              #GuhanWedsHarshini • November 16, 2026
            </p>
          </div>

          <div className="pt-4 border-t border-gold-500/20">
            <p className="font-cinzel text-xs sm:text-sm text-gold-400/90 tracking-[0.22em] uppercase font-semibold">
              Warmest Blessings • Forever in Love &amp; Joy
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
