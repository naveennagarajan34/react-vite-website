import React from 'react';
import { Calendar, Share2, Navigation, MessageCircle } from 'lucide-react';

export const MobileQuickBar = () => {
  // Google Calendar Event Link:
  // Date: Nov 16, 2026, 18:00 to 21:00 IST
  // In UTC (IST is UTC + 5:30):
  // 18:00 IST = 12:30 UTC -> 20261116T123000Z
  // 21:00 IST = 15:30 UTC -> 20261116T153000Z
  const calendarTitle = encodeURIComponent("Wedding Reception — S. Guhan & J. Harshini");
  const calendarDetails = encodeURIComponent(
    "Together with our families, S. Guhan & J. Harshini invite you to celebrate our Wedding Reception.\n\nSchedule:\n6:00 PM: Reception & Stage Greetings\n7:30 PM Onwards: Dinner to follow\n\nVenue: Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore – 641 042"
  );
  const calendarLocation = encodeURIComponent(
    "Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore – 641 042"
  );
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calendarTitle}&dates=20261116T123000Z/20261116T153000Z&details=${calendarDetails}&location=${calendarLocation}&ctz=Asia/Kolkata`;

  // Venue Directions Link
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore, Tamil Nadu 641042'
  )}`;

  // WhatsApp Share Handler
  const handleWhatsAppShare = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://guhan-harshini.wedding';
    const message = 
      `✨ *Wedding Reception Invitation* ✨\n\n` +
      `Together with our families, *S. Guhan & J. Harshini* warmly invite you to celebrate our Wedding Reception!\n\n` +
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
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#240D26]/95 backdrop-blur-md border-t-2 border-[#E8B4A2]/50 shadow-2xl py-2 px-2.5 xs:px-3 sm:px-6 transition-all"
      style={{ paddingBottom: 'max(0.65rem, env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* 1. Add to Google Calendar */}
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[52px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#37173B]/90 hover:bg-[#E8B4A2]/20 border border-[#E8B4A2]/30 text-[#F5C7B8] hover:text-[#FAF4F8] active:scale-95 transition-all group"
        >
          <Calendar className="w-5 h-5 mb-1 text-[#E8B4A2] group-hover:scale-110 transition-transform" />
          <span className="font-inter text-xs xs:text-sm font-bold tracking-tight text-center leading-tight">
            Calendar
          </span>
        </a>

        {/* 2. Direct WhatsApp Share */}
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="min-h-[52px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-b from-[#F5C7B8] to-[#E8B4A2] text-[#240D26] font-bold active:scale-95 shadow-md shadow-[#1A081C]/60 hover:brightness-105 transition-all group"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-[#240D26] fill-[#240D26] group-hover:scale-110 transition-transform" />
          <span className="font-inter text-xs xs:text-sm font-bold tracking-tight text-center leading-tight">
            WhatsApp
          </span>
        </button>

        {/* 3. Get Directions */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[52px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#37173B]/90 hover:bg-[#E8B4A2]/20 border border-[#E8B4A2]/30 text-[#F5C7B8] hover:text-[#FAF4F8] active:scale-95 transition-all group"
        >
          <Navigation className="w-5 h-5 mb-1 text-[#E8B4A2] fill-[#E8B4A2]/30 group-hover:scale-110 transition-transform" />
          <span className="font-inter text-xs xs:text-sm font-bold tracking-tight text-center leading-tight">
            Directions
          </span>
        </a>
      </div>
    </nav>
  );
};
