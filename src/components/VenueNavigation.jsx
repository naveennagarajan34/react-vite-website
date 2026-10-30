import React, { useState } from 'react';
import { CornerOrnament, GoldDivider } from './OrnamentalMotifs';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass } from 'lucide-react';

export const VenueNavigation = () => {
  const [copied, setCopied] = useState(false);

  const venueName = "Chinnasamy Gounder Kalyanamandapam";
  const venueAddress = "Kulathupalayam, Kovaipudur, Coimbatore – 641 042";
  const landmarkInfo = "Located in Kulathupalayam, easily accessible within Kovaipudur";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Chinnasamy Gounder Kalyanamandapam, Kulathupalayam, Kovaipudur, Coimbatore, Tamil Nadu 641042'
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venueName}, ${venueAddress}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-8 px-3 xs:px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6A16] font-bold block mb-1">
            Where &amp; How To Reach
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1F2421] tracking-wide">
            Venue &amp; Location
          </h2>
          <GoldDivider className="my-2" />
          <p className="font-cormorant text-lg sm:text-xl text-[#555555] italic leading-relaxed">
            We eagerly look forward to welcoming you in Coimbatore
          </p>
        </div>

        {/* Venue Card: Clean White with Refined Gold Border & Ambient Shadow */}
        <div className="relative bg-[#FFFFFF] border border-[#D4AF37] rounded-2xl px-4 py-8 sm:p-8 shadow-[0_12px_32px_rgba(0,0,0,0.06)] overflow-hidden">
          <CornerOrnament className="absolute top-2.5 left-2.5 w-7 h-7 text-[#D4AF37]" position="top-left" />
          <CornerOrnament className="absolute top-2.5 right-2.5 w-7 h-7 text-[#D4AF37]" position="top-right" />
          <CornerOrnament className="absolute bottom-2.5 left-2.5 w-7 h-7 text-[#D4AF37]" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2.5 right-2.5 w-7 h-7 text-[#D4AF37]" position="bottom-right" />

          {/* Hall Name Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-[#F9F6F0] border border-[#E6D3A3] text-[#8C6A16] mb-3 shadow-sm">
              <MapPin className="w-8 h-8 text-[#8C6A16]" />
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#8C6A16] px-1 leading-snug">
              {venueName}
            </h3>
            <p className="font-inter text-sm sm:text-base text-[#555555] font-semibold tracking-wider mt-1.5">
              Coimbatore, Tamil Nadu
            </p>
          </div>

          {/* Address Box in Soft Ivory Cream #F9F6F0 + Champagne Gold Border #E6D3A3 */}
          <div className="bg-[#F9F6F0] border border-[#E6D3A3] rounded-xl p-4 sm:p-5 mb-6 text-center space-y-2.5 shadow-sm">
            <p className="font-inter text-base sm:text-lg text-[#333333] font-medium leading-relaxed">
              {venueAddress}
            </p>
            <div className="pt-2.5 border-t border-[#E6D3A3]">
              <p className="font-cormorant italic text-base sm:text-lg text-[#8C6A16] leading-relaxed">
                <span className="font-semibold text-[#8C6A16] not-italic">Landmark:</span> {landmarkInfo}
              </p>
            </div>
          </div>

          {/* Interactive Actions Grid */}
          <div className="space-y-3.5">
            {/* Primary CTA: Smooth Metallic Gold #D4AF37 with Dark Text #1A1A1A */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] flex items-center justify-center space-x-2.5 py-3.5 px-6 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2e] text-[#1A1A1A] font-inter font-bold text-base shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all"
            >
              <Navigation className="w-5 h-5 text-[#1A1A1A] fill-[#1A1A1A]" />
              <span>Get Directions via Google Maps</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>

            {/* Secondary Action: Copy Address */}
            <button
              onClick={handleCopyAddress}
              type="button"
              className="w-full min-h-[48px] flex items-center justify-center space-x-2 py-3.5 px-5 rounded-xl bg-[#F9F6F0] border border-[#E6D3A3] text-[#8C6A16] font-inter text-base font-semibold hover:bg-[#FAF4E6] active:scale-[0.98] transition-all shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700">Address Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-[#8C6A16]" />
                  <span>Copy Venue Address</span>
                </>
              )}
            </button>
          </div>

          {/* Travel Assistance / Connectivity note */}
          <div className="mt-6 pt-4 border-t border-[#E6D3A3] text-center">
            <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-[#666666] font-inter leading-relaxed">
              <Compass className="w-4 h-4 text-[#8C6A16] flex-shrink-0" />
              <span>Well connected from Coimbatore Junction (~11 km) and Ukkadam Bus Stand (~9 km).</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
