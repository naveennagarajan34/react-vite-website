import React from 'react';
import { Calendar, Navigation, MessageCircle } from 'lucide-react';

export const MobileQuickBar = ({ isOpen = false }) => {
  if (!isOpen) return null;

  const calendarTitle = encodeURIComponent("Wedding Reception — Guhan & Harshini");
  const calendarDetails = encodeURIComponent(
    "Together with our families, Guhan & Harshini invite you to celebrate our Wedding Reception.\n\nSchedule:\n6:00 PM: Reception & Stage Greetings\n7:30 PM Onwards: Dinner to follow\n\nVenue: Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore – 641 042"
  );
  const calendarLocation = encodeURIComponent(
    "Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore – 641 042"
  );
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calendarTitle}&dates=20261116T123000Z/20261116T153000Z&details=${calendarDetails}&location=${calendarLocation}&ctz=Asia/Kolkata`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore, Tamil Nadu 641042'
  )}`;

  const handleWhatsAppShare = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://guhan-harshini.wedding';
    const message = 
      `✨ *Wedding Reception Invitation* ✨\n\n` +
      `Together with our families, *Guhan & Harshini* warmly invite you to celebrate our Wedding Reception!\n\n` +
      `📅 *Date:* Monday, November 16, 2026\n` +
      `⏰ *Time:* 6:00 PM to 9:00 PM IST\n` +
      `📍 *Venue:* Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore\n\n` +
      `Looking forward to seeing you all on the stage!\n` +
      `Tap here for the full interactive invitation & live countdown: \n${currentUrl}`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav 
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E6D3A3] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] py-2 px-2.5 xs:px-3 sm:px-6 transition-all animate-fade-in"
      style={{ paddingBottom: 'max(0.65rem, env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* 1. Add to Google Calendar */}
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[52px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#F9F6F0] hover:bg-[#F3EDE2] border border-[#E6D3A3] text-[#8C6A16] active:scale-95 transition-all group shadow-sm"
        >
          <Calendar className="w-5 h-5 mb-1 text-[#8C6A16] group-hover:scale-110 transition-transform" />
          <span className="font-inter text-xs xs:text-sm font-bold tracking-tight text-center leading-tight">
            Calendar
          </span>
        </a>

        {/* 2. Highlight CTA: WhatsApp Share (Smooth Metallic Gold #D4AF37 with Dark Text #1A1A1A) */}
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="min-h-[52px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#D4AF37] hover:bg-[#C8A22E] text-[#1A1A1A] font-bold active:scale-95 shadow-md hover:brightness-105 transition-all group"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-[#1A1A1A] fill-[#1A1A1A] group-hover:scale-110 transition-transform" />
          <span className="font-inter text-xs xs:text-sm font-bold tracking-tight text-center leading-tight">
            WhatsApp
          </span>
        </button>

        {/* 3. Get Directions */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[52px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#F9F6F0] hover:bg-[#F3EDE2] border border-[#E6D3A3] text-[#8C6A16] active:scale-95 transition-all group shadow-sm"
        >
          <Navigation className="w-5 h-5 mb-1 text-[#8C6A16] fill-[#8C6A16]/20 group-hover:scale-110 transition-transform" />
          <span className="font-inter text-xs xs:text-sm font-bold tracking-tight text-center leading-tight">
            Directions
          </span>
        </a>
      </div>
    </nav>
  );
};
