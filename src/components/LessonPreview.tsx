import React, { useState } from 'react';
import { Volume2, Play, ChevronLeft, ChevronRight, CheckCircle2, Monitor, Sparkles } from 'lucide-react';
import { SAMPLE_LESSON_SLIDES } from '../data/mockContent';
import { PhilippineSunIcon } from './CulturalMotifs';
import { speakTagalog } from '../utils/speech';

export const LessonPreview: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [playingLineId, setPlayingLineId] = useState<string | null>(null);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [hasSubmittedQuiz, setHasSubmittedQuiz] = useState(false);

  const currentSlide = SAMPLE_LESSON_SLIDES[currentSlideIndex];

  const handlePlayLine = (text: string, id: string) => {
    setPlayingLineId(id);
    speakTagalog(text, () => {
      setPlayingLineId(null);
    });
  };

  const handleNextSlide = () => {
    if (currentSlideIndex < SAMPLE_LESSON_SLIDES.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setSelectedQuizOption(null);
      setHasSubmittedQuiz(false);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setSelectedQuizOption(null);
      setHasSubmittedQuiz(false);
    }
  };

  return (
    <section id="preview-lesson" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0F4C5C] tracking-wider uppercase mb-2">
            <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
            <span>Interactive On-Screen Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F4C5C] tracking-tight">
            Preview a lesson
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#134E5E]/80">
            See how lessons are structured: custom visual slides shared on screen, bite-sized dialogues, pronunciation practice, and instant conversational feedback.
          </p>
        </div>

        {/* Interactive Lesson Deck Frame */}
        <div className="max-w-4xl mx-auto bg-[#FCFBF9] border border-[#0F4C5C]/15 rounded-3xl shadow-sm overflow-hidden">
          
          {/* Deck Top Bar (Simulating Zoom / Google Meet on-screen slide presentation) */}
          <div className="bg-[#0F4C5C] text-white px-5 sm:px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E26D5C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E9C46A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white/90 truncate max-w-xs sm:max-w-md">
                Screen Share · {currentSlide.tagalogTitle}
              </span>
            </div>

            {/* Slide Tracker */}
            <div className="flex items-center gap-2 text-xs text-white/80 font-mono tabular-nums">
              <span>Slide {currentSlideIndex + 1} of {SAMPLE_LESSON_SLIDES.length}</span>
            </div>
          </div>

          {/* Slide Main Content Area */}
          <div className="p-6 sm:p-10 min-h-[360px] flex flex-col justify-between">
            <div>
              {/* Slide Subtitle & Kicker */}
              <div className="flex items-center justify-between text-xs text-[#134E5E]/70 mb-2">
                <span className="font-semibold text-[#E26D5C]">{currentSlide.tagalogTitle}</span>
                <span className="italic">{currentSlide.subtitle}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0F4C5C] mb-6">
                {currentSlide.title}
              </h3>

              {/* Slide Body: Dialogue Type */}
              {currentSlide.content.dialogue && (
                <div className="space-y-4">
                  {currentSlide.content.dialogue.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#F3EFEA]/80 border border-[#0F4C5C]/8 flex items-start gap-3.5"
                    >
                      <button
                        onClick={() => handlePlayLine(item.tagalog, `line-${idx}`)}
                        className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0F4C5C] text-white hover:bg-[#1B6577] active:scale-95 transition-all shrink-0 mt-0.5"
                        aria-label={`Listen to ${item.speaker}`}
                      >
                        <Volume2
                          size={16}
                          className={playingLineId === `line-${idx}` ? 'animate-pulse text-[#E9C46A]' : ''}
                        />
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs text-[#134E5E]/70 mb-1">
                          <span className="font-semibold text-[#0F4C5C]">{item.speaker}</span>
                          {item.audioTip && <span className="italic text-[11px]">{item.audioTip}</span>}
                        </div>
                        <div className="text-base sm:text-lg font-serif font-bold text-[#0F4C5C]">
                          “{item.tagalog}”
                        </div>
                        <div className="text-xs sm:text-sm text-[#134E5E]/85 mt-0.5">
                          {item.english}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Cultural Tip */}
                  {currentSlide.content.culturalTip && (
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border-l-3 border-[#E9C46A] text-xs sm:text-sm text-[#134E5E]/85">
                      <strong className="text-[#0F4C5C] block mb-1">Cultural Etiquette Note:</strong>
                      {currentSlide.content.culturalTip}
                    </div>
                  )}
                </div>
              )}

              {/* Slide Body: Grammar Breakdown */}
              {currentSlide.content.keyGrammar && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#0F4C5C]/10">
                    <h4 className="font-serif font-bold text-lg text-[#0F4C5C]">
                      {currentSlide.content.keyGrammar.rule}
                    </h4>
                    <p className="text-sm text-[#134E5E]/85 mt-1 leading-relaxed">
                      {currentSlide.content.keyGrammar.explanation}
                    </p>
                  </div>
                </div>
              )}

              {/* Slide Body: Interactive Exercise */}
              {currentSlide.content.exercise && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#0F4C5C]/10">
                    <p className="text-sm sm:text-base font-medium text-[#0F4C5C] mb-4">
                      {currentSlide.content.exercise.question}
                    </p>

                    <div className="space-y-2">
                      {currentSlide.content.exercise.options.map((opt, oIdx) => {
                        const isSelected = selectedQuizOption === oIdx;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setSelectedQuizOption(oIdx);
                              setHasSubmittedQuiz(true);
                            }}
                            className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                              isSelected
                                ? oIdx === currentSlide.content.exercise?.answer
                                  ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                                  : 'bg-rose-50 border-rose-400 text-rose-900'
                                : 'bg-white border-[#0F4C5C]/12 text-[#134E5E] hover:bg-[#FAF8F5]'
                            }`}
                          >
                            <span className="font-mono mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {hasSubmittedQuiz && selectedQuizOption !== null && (
                      <div className="mt-4 p-3 rounded-xl bg-white border border-[#0F4C5C]/10 text-xs sm:text-sm text-[#134E5E]/90">
                        {selectedQuizOption === currentSlide.content.exercise.answer ? (
                          <div className="text-emerald-800 flex items-start gap-2">
                            <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-600" />
                            <div>
                              <strong>Mahusay! (Excellent!)</strong> {currentSlide.content.exercise.explanation}
                            </div>
                          </div>
                        ) : (
                          <div className="text-[#0F4C5C]">
                            <strong>Almost!</strong> Look closely at the polite particle "po" and kinship title "Tita" in option A.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#0F4C5C]/8">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlideIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0F4C5C] bg-[#F3EFEA] hover:bg-[#EAE3D9] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all"
              >
                <ChevronLeft size={16} />
                <span>Previous Slide</span>
              </button>

              <div className="flex gap-1.5">
                {SAMPLE_LESSON_SLIDES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => {
                      setCurrentSlideIndex(dotIdx);
                      setSelectedQuizOption(null);
                      setHasSubmittedQuiz(false);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      dotIdx === currentSlideIndex ? 'w-6 bg-[#0F4C5C]' : 'w-2 bg-[#0F4C5C]/20'
                    }`}
                    aria-label={`Jump to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextSlide}
                disabled={currentSlideIndex === SAMPLE_LESSON_SLIDES.length - 1}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all"
              >
                <span>Next Slide</span>
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </div>

        {/* Short explanation of what visitors learn from this method */}
        <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#0F4C5C]/6">
            <span className="text-xs font-semibold text-[#0F4C5C] block">1. Clear Visuals</span>
            <span className="text-[11px] text-[#134E5E]/70">No flipping blindly through heavy textbooks</span>
          </div>
          <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#0F4C5C]/6">
            <span className="text-xs font-semibold text-[#0F4C5C] block">2. Spoken Repetition</span>
            <span className="text-[11px] text-[#134E5E]/70">Immediate pronunciation coaching in real time</span>
          </div>
          <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#0F4C5C]/6">
            <span className="text-xs font-semibold text-[#0F4C5C] block">3. Cultural Context</span>
            <span className="text-[11px] text-[#134E5E]/70">Know exactly when and why each phrase is used</span>
          </div>
        </div>

      </div>
    </section>
  );
};
