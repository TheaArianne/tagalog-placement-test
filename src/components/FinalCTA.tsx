import React from 'react';
import { Calendar, Compass, ArrowRight, Heart } from 'lucide-react';
import { PhilippineSunIcon, SampaguitaIcon } from './CulturalMotifs';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onOpenPlacementQuiz: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenBooking,
  onOpenPlacementQuiz
}) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0F4C5C] text-white">
      {/* Subtle cultural backdrop patterns */}
      <div className="absolute -top-24 -right-24 opacity-10 pointer-events-none">
        <PhilippineSunIcon size={380} className="text-[#E9C46A]" />
      </div>
      <div className="absolute -bottom-24 -left-24 opacity-10 pointer-events-none">
        <PhilippineSunIcon size={320} className="text-white" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Editorial Subtitle */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E9C46A] tracking-wider uppercase mb-4">
          <SampaguitaIcon size={18} className="text-[#E9C46A]" />
          <span>Tara, Mag-usap Tayo! (Come, Let's Talk!)</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight text-balance">
          Your next Tagalog conversation starts here.
        </h2>

        {/* Encouraging Message */}
        <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          You don’t have to wait until you are “fluent” to start speaking. With patient guidance, practical topics, and real encouragement, you will connect with the people who matter most.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#E26D5C] hover:bg-[#CF5644] active:scale-[0.98] rounded-xl shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
          >
            <Calendar size={19} />
            <span>Book a Lesson</span>
          </button>

          <button
            onClick={onOpenPlacementQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-white bg-white/10 hover:bg-white/15 active:scale-[0.98] rounded-xl border border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
          >
            <Compass size={18} className="text-[#E9C46A]" />
            <span>Find My Tagalog Level</span>
          </button>
        </div>

        {/* Reassurance note */}
        <p className="mt-6 text-xs text-white/60">
          Friendly 1-on-1 pacing · Zero judgment for beginners · Designed for adult learners
        </p>

      </div>
    </section>
  );
};
