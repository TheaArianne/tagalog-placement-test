import React, { useState } from 'react';
import { Volume2, MessageSquare, BookOpen, Layers, Headphones, HeartHandshake, Sparkles } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/mockContent';
import { PhilippineSunIcon } from './CulturalMotifs';
import { speakTagalog } from '../utils/speech';

export const WhatYouPractice: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState(PRACTICE_AREAS[0].id);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const activePillar = PRACTICE_AREAS.find((p) => p.id === selectedPillarId) || PRACTICE_AREAS[0];

  const pillarIcons: Record<string, React.ReactNode> = {
    conversations: <MessageSquare size={18} />,
    vocabulary: <BookOpen size={18} />,
    grammar: <Layers size={18} />,
    listening: <Headphones size={18} />,
    culture: <HeartHandshake size={18} />
  };

  const handlePlayAudio = (phraseText: string, id: string) => {
    setPlayingAudioId(id);
    speakTagalog(phraseText, () => {
      setPlayingAudioId(null);
    });
  };

  return (
    <section id="what-you-practice" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0F4C5C] tracking-wider uppercase mb-2">
            <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
            <span>Real Situations & Practical Fluency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F4C5C] tracking-tight">
            What you’ll practice
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#134E5E]/80">
            Language comes alive when you can actually use it. Every lesson connects vocabulary and grammar to real Filipino cultural life and everyday conversations.
          </p>
        </div>

        {/* Interactive Segmented Tabs (Functional interactive tabs with click handlers) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {PRACTICE_AREAS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C] ${
                  isSelected
                    ? 'bg-[#0F4C5C] text-white shadow-xs'
                    : 'bg-[#F3EFEA] text-[#134E5E]/80 hover:bg-[#EAE3D9] hover:text-[#0F4C5C]'
                }`}
              >
                <span className={isSelected ? 'text-[#E9C46A]' : 'text-[#134E5E]/60'}>
                  {pillarIcons[pillar.id]}
                </span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Detail Spotlight (Dynamic Interactive Card) */}
        <div className="bg-[#FCFBF9] border border-[#0F4C5C]/12 rounded-3xl p-6 sm:p-10 shadow-xs max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Concept & Description */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E26D5C] tracking-wide">
                <span>{activePillar.tagalogTitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F4C5C]">
                {activePillar.title}
              </h3>
              <p className="text-base text-[#134E5E]/85 leading-relaxed">
                {activePillar.description}
              </p>
              
              <div className="pt-2 text-xs text-[#134E5E]/70 flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#E9C46A]" />
                <span><strong className="text-[#0F4C5C]">Real-world scenario:</strong> {activePillar.situation}</span>
              </div>
            </div>

            {/* Right Column: Interactive Pronunciation & Phrase Breakdown */}
            <div className="md:col-span-6">
              <div className="bg-[#FAF8F5] border border-[#0F4C5C]/10 rounded-2xl p-5 sm:p-6 space-y-4">
                
                <div className="flex items-center justify-between text-xs text-[#134E5E]/70 pb-3 border-b border-[#0F4C5C]/8">
                  <span className="font-semibold text-[#0F4C5C]">Interactive Sample Phrase</span>
                  <span>Click to pronounce</span>
                </div>

                {/* Tagalog Phrase with Pronounce Button */}
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => handlePlayAudio(activePillar.samplePhrase.tagalog, activePillar.id)}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0F4C5C] text-white hover:bg-[#1B6577] active:scale-95 transition-all shrink-0 mt-0.5"
                    aria-label={`Listen to phrase: ${activePillar.samplePhrase.tagalog}`}
                  >
                    <Volume2
                      size={18}
                      className={playingAudioId === activePillar.id ? 'animate-pulse text-[#E9C46A]' : ''}
                    />
                  </button>

                  <div>
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#0F4C5C]">
                      “{activePillar.samplePhrase.tagalog}”
                    </div>
                    <div className="text-sm font-medium text-[#134E5E] mt-1">
                      {activePillar.samplePhrase.english}
                    </div>
                  </div>
                </div>

                {/* Literal breakdown & context */}
                <div className="space-y-2 pt-3 border-t border-[#0F4C5C]/8 text-xs text-[#134E5E]/80">
                  {activePillar.samplePhrase.literal && (
                    <div>
                      <span className="font-semibold text-[#0F4C5C]">Literal structure: </span>
                      <span className="italic">{activePillar.samplePhrase.literal}</span>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-[#0F4C5C]">Why it matters: </span>
                    <span>{activePillar.samplePhrase.context}</span>
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
