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
          <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-1">
            Where &amp; How To Reach
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-ivory-100 tracking-wide">
            Venue &amp; Location
          </h2>
          <GoldDivider className="my-2" />
          <p className="font-cormorant text-lg sm:text-xl text-ivory-200/90 italic leading-relaxed">
            We eagerly look forward to welcoming you in Coimbatore
          </p>
        </div>

        {/* Venue Card */}
        <div className="relative bg-gradient-to-b from-maroon-900/90 to-maroon-950/95 border border-gold-500/40 rounded-2xl px-4 py-7 sm:p-8 shadow-gold-glow overflow-hidden">
          <CornerOrnament className="absolute top-2 left-2 w-7 h-7" position="top-left" />
          <CornerOrnament className="absolute top-2 right-2 w-7 h-7" position="top-right" />
          <CornerOrnament className="absolute bottom-2 left-2 w-7 h-7" position="bottom-left" />
          <CornerOrnament className="absolute bottom-2 right-2 w-7 h-7" position="bottom-right" />

          {/* Hall Name Badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 mb-3 shadow-inner">
              <MapPin className="w-8 h-8 text-gold-400" />
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold gold-text-gradient px-1 leading-snug">
              {venueName}
            </h3>
            <p className="font-inter text-sm sm:text-base text-gold-300 font-semibold tracking-wider mt-1.5">
              Coimbatore, Tamil Nadu
            </p>
          </div>

          {/* Address Box (Bumped to text-base/text-lg for mobile readability) */}
          <div className="bg-maroon-950/80 border border-gold-500/30 rounded-xl p-4 sm:p-5 mb-6 text-center space-y-2.5">
            <p className="font-inter text-base sm:text-lg text-ivory-100 font-medium leading-relaxed">
              {venueAddress}
            </p>
            <div className="pt-2.5 border-t border-gold-500/20">
              <p className="font-cormorant italic text-base sm:text-lg text-gold-300 leading-relaxed">
                <span className="font-semibold text-gold-400 not-italic">Landmark:</span> {landmarkInfo}
              </p>
            </div>
          </div>

          {/* Interactive Actions Grid (Ensuring min 48px touch targets & 16px font size) */}
          <div className="space-y-3.5">
            {/* Primary CTA: Get Directions via Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] flex items-center justify-center space-x-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-maroon-950 font-inter font-bold text-base shadow-lg shadow-gold-900/40 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Navigation className="w-5 h-5 text-maroon-950 fill-maroon-950" />
              <span>Get Directions via Google Maps</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>

            {/* Secondary Action: Copy Address */}
            <button
              onClick={handleCopyAddress}
              type="button"
              className="w-full min-h-[48px] flex items-center justify-center space-x-2 py-3.5 px-5 rounded-xl bg-maroon-950/80 border border-gold-500/40 text-gold-300 font-inter text-base font-semibold hover:bg-gold-500/10 hover:text-gold-200 active:scale-[0.98] transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400">Address Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-gold-400" />
                  <span>Copy Venue Address</span>
                </>
              )}
            </button>
          </div>

          {/* Travel Assistance / Connectivity note */}
          <div className="mt-6 pt-4 border-t border-gold-500/20 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-ivory-200/90 font-inter leading-relaxed">
              <Compass className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Well connected from Coimbatore Junction (~11 km) and Ukkadam Bus Stand (~9 km).</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
