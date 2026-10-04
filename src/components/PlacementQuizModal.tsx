import React, { useState } from 'react';
import { X, Compass, CheckCircle2, ArrowRight, RotateCcw, Volume2, Sparkles } from 'lucide-react';
import { PLACEMENT_QUESTIONS } from '../data/mockContent';
import { PhilippineSunIcon } from './CulturalMotifs';
import { speakTagalog } from '../utils/speech';

interface PlacementQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLevelToBook: (levelName: string) => void;
}

export const PlacementQuizModal: React.FC<PlacementQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectLevelToBook
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const totalQuestions = PLACEMENT_QUESTIONS.length;
  const isCompleted = answers.length === totalQuestions;

  const handleSelectOption = (score: number) => {
    const updated = [...answers, score];
    setAnswers(updated);
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentStep(0);
  };

  // Compute diagnostic level recommendation
  const calculateResult = () => {
    const sum = answers.reduce((a, b) => a + b, 0);
    if (sum <= 2) {
      return {
        level: 'Beginner Foundations (Simula)',
        levelId: 'beginner',
        badge: 'Level A1',
        description:
          'You are taking your first exciting steps! We will start with clear pronunciation, essential survival questions, polite greetings (po / opo), and self-introductions in a warm, zero-stress setting.',
        recommendedStart: 'Lesson 01: Warm Greetings & Introducing Yourself',
        samplePhrase: 'Kamusta ka? Ako si [Name]. Ikaw, taga-saan ka?',
        english: 'How are you? I am [Name]. And you, where are you from?'
      };
    } else if (sum <= 5) {
      return {
        level: 'Heritage Reconnector / High Beginner',
        levelId: 'beginner',
        badge: 'Level A2',
        description:
          'You have a wonderful ear for the language and recognize many words, but you hesitate when speaking back. We will bridge the gap between understanding and vocal fluency with conversational repetition.',
        recommendedStart: 'Lesson 04: Family Dinners & Expressing Daily Needs',
        samplePhrase: 'Kain po tayo! Paki-abot naman po ng kanin.',
        english: "Let's eat! Could you please pass the rice?"
      };
    } else if (sum <= 8) {
      return {
        level: 'Intermediate Conversational (Pagsulong)',
        levelId: 'intermediate',
        badge: 'Level B1',
        description:
          'You have solid vocabulary and basic sentence structure! Now we will master the Tagalog verb system (-UM-, MAG-, -IN-, -AN), conversational particles (pala, naman, nga), and telling stories.',
        recommendedStart: 'Lesson 08: Narrating Past Events & Using Natural Particles',
        samplePhrase: 'Pumunta ako sa palengke kanina, tapos nakita ko si Tita.',
        english: 'I went to the market earlier, and then I saw Tita.'
      };
    } else {
      return {
        level: 'Advanced Polish & Nuance (Lalim at Hubog)',
        levelId: 'advanced',
        badge: 'Level B2+',
        description:
          'You can hold comfortable conversations! Our focus will be cultural humor, idiomatic expressions (sawikain), nuanced indirect requests, and speaking with native-like rhythm.',
        recommendedStart: 'Lesson 14: Cultural Idioms & Deep Conversational Banter',
        samplePhrase: 'Kung tutuusin, mas maganda kung magpaplano tayo nang maaga.',
        english: 'When you think about it, it would be much better if we plan early.'
      };
    }
  };

  const result = isCompleted ? calculateResult() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF8F5] border border-[#0F4C5C]/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#0F4C5C]/60 hover:text-[#0F4C5C] hover:bg-[#F3EFEA] rounded-full transition-colors"
          aria-label="Close quiz"
        >
          <X size={20} />
        </button>

        {!isCompleted ? (
          <div>
            {/* Step indicator */}
            <div className="flex items-center justify-between text-xs text-[#134E5E]/70 mb-4 pb-3 border-b border-[#0F4C5C]/10">
              <div className="flex items-center gap-1.5 font-semibold text-[#0F4C5C]">
                <Compass size={16} className="text-[#E9C46A]" />
                <span>Tagalog Placement Assessment</span>
              </div>
              <span className="font-mono">Question {currentStep + 1} of {totalQuestions}</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#EAE3D9] h-1.5 rounded-full overflow-hidden mb-6">
              <div
                className="bg-[#0F4C5C] h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Current Question */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F4C5C] leading-snug">
                {PLACEMENT_QUESTIONS[currentStep].question}
              </h3>
              {PLACEMENT_QUESTIONS[currentStep].tagalogSubtext && (
                <p className="text-xs text-[#E26D5C] italic">
                  {PLACEMENT_QUESTIONS[currentStep].tagalogSubtext}
                </p>
              )}

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {PLACEMENT_QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 rounded-2xl bg-white hover:bg-[#F3EFEA] border border-[#0F4C5C]/12 hover:border-[#0F4C5C]/30 transition-all text-xs sm:text-sm text-[#134E5E] font-medium flex items-start gap-3 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#F3EFEA] group-hover:bg-[#0F4C5C] group-hover:text-white text-[#0F4C5C] text-xs flex items-center justify-center shrink-0 font-mono mt-0.5 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Result View */
          result && (
            <div className="space-y-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#E9C46A]/20 mx-auto flex items-center justify-center text-[#DDAA33]">
                <PhilippineSunIcon size={32} />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E26D5C]">
                  Your Recommended Starting Level
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F4C5C] mt-1">
                  {result.level}
                </h3>
                <div className="mt-1 inline-block text-xs font-mono font-medium text-[#0F4C5C] bg-[#F3EFEA] px-2.5 py-0.5 rounded-md">
                  {result.badge}
                </div>
              </div>

              <p className="text-sm text-[#134E5E]/85 leading-relaxed text-left p-4 bg-white rounded-2xl border border-[#0F4C5C]/10">
                {result.description}
              </p>

              {/* Suggested First Lesson & Practice Phrase */}
              <div className="text-left p-4 bg-[#F3EFEA]/80 rounded-2xl border border-[#0F4C5C]/10 space-y-2">
                <div className="text-xs font-semibold text-[#0F4C5C]">
                  Suggested First Module: {result.recommendedStart}
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={() => {
                      setIsPlayingAudio(true);
                      speakTagalog(result.samplePhrase, () => setIsPlayingAudio(false));
                    }}
                    className="w-8 h-8 rounded-lg bg-[#0F4C5C] text-white flex items-center justify-center shrink-0"
                    aria-label="Listen to starter phrase"
                  >
                    <Volume2 size={16} className={isPlayingAudio ? 'animate-pulse text-[#E9C46A]' : ''} />
                  </button>
                  <div>
                    <div className="font-serif font-bold text-xs sm:text-sm text-[#0F4C5C]">
                      “{result.samplePhrase}”
                    </div>
                    <div className="text-[11px] text-[#134E5E]/75">
                      {result.english}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-[#134E5E] bg-[#F3EFEA] hover:bg-[#EAE3D9] rounded-xl"
                >
                  <RotateCcw size={14} />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectLevelToBook(result.levelId);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] rounded-xl shadow-xs"
                >
                  <span>Book a Lesson at {result.badge}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
};
