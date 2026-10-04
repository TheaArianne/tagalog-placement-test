import React from 'react';
import { Video, Users, Check, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { PhilippineSunIcon } from './CulturalMotifs';

interface ChooseLearningProps {
  onSelectLive: () => void;
  onSelectRecorded: () => void;
}

export const ChooseLearning: React.FC<ChooseLearningProps> = ({
  onSelectLive,
  onSelectRecorded
}) => {
  return (
    <section id="choose-learning" className="py-16 md:py-24 bg-[#F3EFEA]/45 border-y border-[#0F4C5C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0F4C5C] tracking-wider uppercase mb-2">
            <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
            <span>Learning Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F4C5C] tracking-tight">
            Choose how you learn
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#134E5E]/80">
            Whether you thrive with live conversation coaching or prefer learning in your own quiet time, there is a path designed for you.
          </p>
        </div>

        {/* Two Clear Primary Cards (Single-elevation, high contrast, clean typography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: Live One-on-One Lessons */}
          <div className="relative bg-[#FCFBF9] border-2 border-[#0F4C5C]/15 rounded-3xl p-7 sm:p-9 shadow-xs hover:border-[#0F4C5C]/35 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0F4C5C]/8 text-[#0F4C5C] flex items-center justify-center">
                  <Users size={24} />
                </div>
                <span className="text-xs font-semibold text-[#0F4C5C] tracking-wide bg-[#F3EFEA] px-3 py-1 rounded-full">
                  Interactive & Real-Time
                </span>
              </div>

              <h3 className="text-2xl sm:text-[1.75rem] font-serif font-bold text-[#0F4C5C] tracking-tight">
                Live One-on-One Lessons
              </h3>
              
              <p className="mt-3 text-base text-[#134E5E]/85 leading-relaxed">
                Personalized guidance, conversation practice, and feedback. We meet live online with tailored presentation slides and interactive activities designed around your life.
              </p>

              {/* What makes it special list */}
              <div className="mt-6 pt-6 border-t border-[#0F4C5C]/8 space-y-3.5">
                <div className="flex items-start gap-3 text-sm text-[#134E5E]/90">
                  <Check size={18} className="text-[#E26D5C] shrink-0 mt-0.5" />
                  <span>Real-time pronunciation feedback and natural cadence coaching</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#134E5E]/90">
                  <Check size={18} className="text-[#E26D5C] shrink-0 mt-0.5" />
                  <span>Custom on-screen lesson presentations and dialogue role-plays</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#134E5E]/90">
                  <Check size={18} className="text-[#E26D5C] shrink-0 mt-0.5" />
                  <span>Personalized lesson notes and vocabulary recap after every session</span>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="mt-8 pt-6 border-t border-[#0F4C5C]/8">
              <button
                onClick={onSelectLive}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] active:scale-[0.99] rounded-xl shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C]"
              >
                <Calendar size={18} />
                <span>Book a Live Lesson</span>
                <ArrowRight size={16} />
              </button>
              <p className="text-center text-xs text-[#134E5E]/60 mt-2.5">
                Flexible scheduling across global timezones · Adult-friendly
              </p>
            </div>
          </div>

          {/* Card 2: Recorded Courses */}
          <div className="relative bg-[#FCFBF9] border-2 border-[#0F4C5C]/15 rounded-3xl p-7 sm:p-9 shadow-xs hover:border-[#0F4C5C]/35 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#E9C46A]/25 text-[#996500] flex items-center justify-center">
                  <Video size={24} />
                </div>
                <span className="text-xs font-semibold text-[#805000] tracking-wide bg-[#FBF5E5] px-3 py-1 rounded-full">
                  Self-Paced & Flexible
                </span>
              </div>

              <h3 className="text-2xl sm:text-[1.75rem] font-serif font-bold text-[#0F4C5C] tracking-tight">
                Recorded Courses
              </h3>
              
              <p className="mt-3 text-base text-[#134E5E]/85 leading-relaxed">
                Structured video lessons you can study at your own pace. Step-by-step curriculum organized with video modules, downloadable dialogue cheat sheets, and practical exercises.
              </p>

              {/* What makes it special list */}
              <div className="mt-6 pt-6 border-t border-[#0F4C5C]/8 space-y-3.5">
                <div className="flex items-start gap-3 text-sm text-[#134E5E]/90">
                  <Check size={18} className="text-[#E26D5C] shrink-0 mt-0.5" />
                  <span>Bite-sized video lessons organized from foundational to conversational</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#134E5E]/90">
                  <Check size={18} className="text-[#E26D5C] shrink-0 mt-0.5" />
                  <span>Downloadable phrase summaries, transcripts, and study guides</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#134E5E]/90">
                  <Check size={18} className="text-[#E26D5C] shrink-0 mt-0.5" />
                  <span>Review lessons anytime from your phone, tablet, or laptop</span>
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div className="mt-8 pt-6 border-t border-[#0F4C5C]/8">
              <button
                onClick={onSelectRecorded}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#0F4C5C] bg-[#F3EFEA] hover:bg-[#EAE3D9] active:scale-[0.99] rounded-xl border border-[#0F4C5C]/15 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C]"
              >
                <Sparkles size={18} className="text-[#DDAA33]" />
                <span>Explore Course Curriculum</span>
                <ArrowRight size={16} />
              </button>
              <p className="text-center text-xs text-[#134E5E]/60 mt-2.5">
                Lifetime access to lesson materials & future video updates
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
