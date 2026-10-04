import React from 'react';
import { ArrowRight, Compass, CheckCircle2 } from 'lucide-react';
import { LEVELS } from '../data/mockContent';
import { PhilippineSunIcon } from './CulturalMotifs';

interface LevelPlacementProps {
  onOpenPlacementQuiz: () => void;
  onSelectLevelForBooking: (levelId: string) => void;
}

export const LevelPlacement: React.FC<LevelPlacementProps> = ({
  onOpenPlacementQuiz,
  onSelectLevelForBooking
}) => {
  return (
    <section id="levels" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] tracking-wider uppercase mb-2">
              <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
              <span>Tailored Curricula</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F4C5C] tracking-tight">
              Find your starting point
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#134E5E]/80">
              No matter where you are on your Tagalog journey, we meet you right at your current comfort level and build from there.
            </p>
          </div>

          {/* Prominent Level Placement CTA */}
          <div className="shrink-0">
            <button
              onClick={onOpenPlacementQuiz}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] active:scale-[0.98] rounded-xl shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C] whitespace-nowrap"
            >
              <Compass size={19} className="text-[#E9C46A]" />
              <span>Find My Tagalog Level</span>
              <ArrowRight size={17} />
            </button>
            <p className="text-xs text-[#134E5E]/60 text-center mt-1.5">
              Quick 2-minute diagnostic quiz
            </p>
          </div>
        </div>

        {/* 3 Level Cards (Beginner, Intermediate, Advanced) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {LEVELS.map((lvl) => (
            <div
              key={lvl.id}
              className="bg-[#FCFBF9] border border-[#0F4C5C]/12 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xs hover:border-[#0F4C5C]/25 transition-all duration-200"
            >
              <div>
                {/* Level Title & Badge (Unboxed clean metadata) */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-[#134E5E]/70 mb-1">
                    <span className="font-semibold text-[#0F4C5C]">{lvl.badge}</span>
                    <span className="italic">{lvl.tagalogName}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0F4C5C]">
                    {lvl.name}
                  </h3>
                </div>

                {/* Encouraging Description */}
                <p className="text-sm text-[#134E5E]/85 leading-relaxed">
                  {lvl.description}
                </p>

                {/* Typical Learner Profile */}
                <div className="mt-4 p-3 bg-[#F3EFEA]/70 rounded-xl text-xs text-[#134E5E]/80">
                  <span className="font-semibold text-[#0F4C5C]">Best for: </span>
                  {lvl.typicalStudent}
                </div>

                {/* Core Focus Topics */}
                <div className="mt-5 pt-5 border-t border-[#0F4C5C]/8 space-y-2.5">
                  <span className="text-xs font-semibold text-[#0F4C5C] uppercase tracking-wider block">
                    What we focus on:
                  </span>
                  {lvl.focusTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#134E5E]/90">
                      <CheckCircle2 size={14} className="text-[#E26D5C] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-6 pt-5 border-t border-[#0F4C5C]/8">
                <button
                  onClick={() => onSelectLevelForBooking(lvl.id)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#0F4C5C] bg-[#F3EFEA] hover:bg-[#EAE3D9] active:scale-[0.98] rounded-xl transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C]"
                >
                  Start at {lvl.name} Level
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
