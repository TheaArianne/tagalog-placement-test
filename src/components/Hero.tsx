import React, { useState } from 'react';
import { Volume2, Sparkles, ArrowRight, Video, Calendar } from 'lucide-react';
import { PhilippineSunIcon, SampaguitaIcon } from './CulturalMotifs';
import { speakTagalog } from '../utils/speech';

interface HeroProps {
  onOpenBooking: (mode?: 'live' | 'recorded') => void;
  onExploreCourses: () => void;
  onOpenPlacementQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExploreCourses,
  onOpenPlacementQuiz
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlePlayGreeting = () => {
    setIsPlayingAudio(true);
    speakTagalog('Magandang araw! Ako si Teacher Thea. Tara, mag-usap tayo!', () => {
      setIsPlayingAudio(false);
    });
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Subtle warm background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E9C46A]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E26D5C]/8 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Editorial Kicker (Zero-pill: pure unboxed text with subtle separator) */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#134E5E]/80 tracking-wide">
              <span className="flex items-center gap-1.5 text-[#0F4C5C] font-semibold">
                <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
                Mabuhay at Maligayang Pagdating
              </span>
              <span aria-hidden="true" className="text-[#134E5E]/40">·</span>
              <span>Tagalog with Thea Arianne</span>
            </div>

            {/* Main Headline (Balanced, no orphan words) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#0F4C5C] tracking-tight leading-[1.15] text-balance">
              Speak Tagalog with confidence. Connect through conversation.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#134E5E]/85 leading-relaxed max-w-2xl">
              Learn practical Tagalog for everyday life, travel, and meaningful connections—with lessons designed around your goals.
            </p>

            {/* Audio Greeting Card (Interactive Filipino touch) */}
            <div className="flex flex-wrap items-center gap-3 p-3.5 sm:p-4 bg-[#F3EFEA]/80 border border-[#0F4C5C]/10 rounded-2xl max-w-xl">
              <button
                onClick={handlePlayGreeting}
                disabled={isPlayingAudio}
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#0F4C5C] text-white hover:bg-[#1B6577] active:scale-95 transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C] shrink-0"
                aria-label="Listen to Teacher Thea's greeting in Tagalog"
              >
                <Volume2 size={20} className={isPlayingAudio ? 'animate-pulse text-[#E9C46A]' : ''} />
              </button>
              <div className="text-sm">
                <div className="font-serif italic font-medium text-[#0F4C5C]">
                  “Magandang araw! Ako si Teacher Thea.”
                </div>
                <div className="text-xs text-[#134E5E]/70 mt-0.5">
                  (Good day! I am Teacher Thea.) Click the icon to hear pronunciation.
                </div>
              </div>
            </div>

            {/* CTAs (Prominent Primary + Secondary) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenBooking('live')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#E26D5C] hover:bg-[#CF5644] active:scale-[0.98] rounded-xl shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26D5C] focus-visible:ring-offset-2 whitespace-nowrap"
              >
                <Calendar size={18} />
                <span>Book a Live Lesson</span>
              </button>

              <button
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-[#0F4C5C] bg-[#F3EFEA] hover:bg-[#EAE3D9] active:scale-[0.98] rounded-xl border border-[#0F4C5C]/12 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C] whitespace-nowrap"
              >
                <Video size={18} className="text-[#134E5E]/75" />
                <span>Explore Recorded Courses</span>
              </button>
            </div>

            {/* Proof & Target Learners (Strict unboxed metadata with separators) */}
            <div className="pt-2 text-xs sm:text-sm text-[#134E5E]/75 flex flex-wrap items-center gap-y-1 gap-x-2.5">
              <span className="font-semibold text-[#0F4C5C]">Tailored for:</span>
              <span>Heritage Reconnectors</span>
              <span aria-hidden="true" className="text-[#134E5E]/30">·</span>
              <span>Adult Beginners</span>
              <span aria-hidden="true" className="text-[#134E5E]/30">·</span>
              <span>Travelers & Expats</span>
              <span aria-hidden="true" className="text-[#134E5E]/30">·</span>
              <span>Partners of Filipinos</span>
            </div>

          </div>

          {/* Right Column: Welcoming Teacher Portrait Frame (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Warm Backing Plate with Woven Geometry */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full rounded-3xl bg-[#E9C46A]/25 -z-10 rotate-1 transition-transform" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full rounded-3xl bg-[#0F4C5C]/8 -z-10 -rotate-1" />

              {/* Main Portrait Card */}
              <div className="bg-[#FCFBF9] border border-[#0F4C5C]/12 rounded-3xl p-5 sm:p-6 shadow-sm overflow-hidden">
                
                {/* Welcoming Teacher Visual Frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F3EFEA] via-[#EAE3D9] to-[#F5ECE1] flex flex-col items-center justify-center p-6 text-center border border-[#0F4C5C]/8">
                  {/* Subtle sun rays in background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                    <PhilippineSunIcon size={220} className="text-[#0F4C5C]" />
                  </div>

                  {/* Stylized Portrait Visual */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-[#FAF8F5] border-2 border-[#E9C46A] shadow-md flex items-center justify-center mb-3">
                    {/* Teacher Thea's warm illustrative avatar */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#134E5E] to-[#0F4C5C] text-[#FAF8F5] flex flex-col items-center justify-center">
                      <span className="font-serif text-2xl font-bold tracking-tight">TA</span>
                    </div>
                    {/* Flower badge */}
                    <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-xs">
                      <SampaguitaIcon size={18} className="text-[#E26D5C]" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-serif text-lg font-bold text-[#0F4C5C]">
                      Thea Arianne
                    </h3>
                    <p className="text-xs font-medium text-[#134E5E]/80 mt-0.5">
                      Tagalog Teacher for Adult Learners
                    </p>
                    <div className="mt-2 text-[11px] text-[#134E5E]/60 italic">
                      “Supporting you from your very first word to flowing, natural conversations.”
                    </div>
                  </div>

                  {/* Interactive Placement Badge inside portrait */}
                  <button
                    onClick={onOpenPlacementQuiz}
                    className="relative z-10 mt-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F4C5C] bg-white/90 hover:bg-white rounded-lg shadow-2xs border border-[#0F4C5C]/10 transition-all hover:scale-[1.02]"
                  >
                    <Sparkles size={13} className="text-[#DDAA33]" />
                    <span>Not sure where to begin? Take the Level Quiz</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

                {/* Teacher Highlights Strip */}
                <div className="mt-4 pt-3 border-t border-[#0F4C5C]/8 grid grid-cols-2 gap-3 text-center">
                  <div className="p-2 rounded-xl bg-[#FAF8F5]">
                    <div className="text-xs font-semibold text-[#0F4C5C]">1-on-1 Mentorship</div>
                    <div className="text-[11px] text-[#134E5E]/70 mt-0.5">Custom slides & exercises</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FAF8F5]">
                    <div className="text-xs font-semibold text-[#0F4C5C]">Self-Paced Courses</div>
                    <div className="text-[11px] text-[#134E5E]/70 mt-0.5">Bite-sized video lessons</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
