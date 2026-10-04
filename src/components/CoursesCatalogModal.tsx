import React from 'react';
import { X, Video, BookOpen, Check, ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { PhilippineSunIcon } from './CulturalMotifs';

interface CoursesCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CoursesCatalogModal: React.FC<CoursesCatalogModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  const courses = [
    {
      title: 'Tagalog Essentials for Everyday Life & Travel',
      tagalog: 'Pangunahing Tagalog para sa Araw-araw',
      level: 'Beginner (A1–A2)',
      duration: '12 Video Modules · 48 Bite-Sized Lessons',
      description:
        'A comprehensive foundation covering greetings, numbers, dining etiquette, getting around, and building your first conversational sentences.',
      includes: [
        'High-resolution screen-recorded lessons with Teacher Thea',
        'Downloadable dialogue cheat sheets (PDF)',
        'Audio pronunciation clips for all vocabulary',
        'Self-check mini quizzes after each module'
      ]
    },
    {
      title: 'Conversational Bridge: The Intuitive Verb System',
      tagalog: 'Pagsulong: Ang Sistema ng Pandiwa',
      level: 'Intermediate (B1)',
      duration: '8 Video Modules · 32 Lessons',
      description:
        'Demystify Tagalog actor and object focus (-UM-, MAG-, -IN-, -AN) through practical situational patterns, so you can stop translating in your head.',
      includes: [
        'Visual pattern diagrams for past, present, and future forms',
        'Real-life story narration templates',
        'Everyday conversational particles breakdown (pala, naman, nga)',
        'Audio shadowing exercises'
      ]
    },
    {
      title: 'Nuance, Slang & Cultural Fluency',
      tagalog: 'Lalim: Wika, Kultura at Sawikain',
      level: 'Upper Intermediate & Advanced (B2+)',
      duration: '6 Video Modules · 24 Lessons',
      description:
        'Speak with natural warmth and wit. Understand Philippine pop culture, family humor, regional idioms, and indirect politeness.',
      includes: [
        'Deep dives into Filipino idiomatic expressions (sawikain)',
        'Taglish balance and casual texting conventions',
        'Fast-paced native speaker dialogue breakdowns',
        'Cultural etiquette and humor analysis'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF8F5] border border-[#0F4C5C]/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#0F4C5C]/60 hover:text-[#0F4C5C] hover:bg-[#F3EFEA] rounded-full transition-colors"
          aria-label="Close courses catalog"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-[#0F4C5C]/10">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#805000] uppercase tracking-wider mb-1">
            <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
            <span>Self-Paced Video Curriculum</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F4C5C]">
            Recorded Tagalog Courses
          </h3>
          <p className="text-xs sm:text-sm text-[#134E5E]/80 mt-1">
            Organized video modules, downloadable worksheets, and audio guides you can study at your own pace.
          </p>
        </div>

        {/* Course Cards */}
        <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#0F4C5C]/12 hover:border-[#0F4C5C]/30 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-[#E26D5C]">{course.level}</span>
                <span className="text-[#134E5E]/60 font-mono">{course.duration}</span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-lg text-[#0F4C5C]">
                  {course.title}
                </h4>
                <div className="text-xs text-[#134E5E]/70 italic mt-0.5">
                  {course.tagalog}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#134E5E]/85 leading-relaxed">
                {course.description}
              </p>

              {/* Course Includes */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#134E5E]/80">
                {course.includes.map((inc, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-1.5">
                    <Check size={14} className="text-[#0F4C5C] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & Enrollment Placeholder Notice */}
        <div className="mt-4 p-3.5 bg-[#F3EFEA] rounded-xl text-xs text-[#134E5E]/80">
          <span className="font-semibold text-[#0F4C5C]">[Editable Enrollment & Pricing Placeholder]: </span>
          Full course curriculum enrollment and bundle pricing with live 1-on-1 coaching can be configured here by Teacher Thea.
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-[#0F4C5C]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#134E5E] bg-[#F3EFEA] rounded-xl"
          >
            Close Catalog
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] rounded-xl shadow-xs"
          >
            Inquire About Course Access or Live Coaching
          </button>
        </div>

      </div>
    </div>
  );
};
