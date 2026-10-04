import React, { useState } from 'react';
import { Heart, CheckCircle2, Edit3, Save, RotateCcw, Volume2 } from 'lucide-react';
import { PhilippineSunIcon, SampaguitaIcon } from './CulturalMotifs';
import { speakTagalog } from '../utils/speech';

interface MeetTheaProps {
  onOpenBooking: () => void;
}

export const MeetThea: React.FC<MeetTheaProps> = ({ onOpenBooking }) => {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Default honest biography without invented credentials or fake years
  const initialBio = {
    greeting: 'Kamusta! My name is Thea Arianne.',
    tagline: 'I teach Tagalog to adult learners who want to speak with confidence and heart.',
    paragraph1:
      'My students include travelers preparing for journeys across the Philippine islands, heritage learners reconnecting with their family roots, and people who want to communicate with their Filipino partners, in-laws, and friends.',
    paragraph2:
      'My teaching approach focuses on three core pillars: supportive, zero-judgment guidance; clear, structured explanations of Tagalog patterns without academic overwhelm; and plenty of meaningful conversation practice so words roll off your tongue naturally.',
    editableNote:
      '[Teacher Thea’s Editable Space: Add your personal story, background, and specific teaching certifications here when ready].'
  };

  const [bio, setBio] = useState(initialBio);
  const [draftBio, setDraftBio] = useState(initialBio);

  const handleSave = () => {
    setBio(draftBio);
    setIsEditingBio(false);
  };

  const handleReset = () => {
    setDraftBio(initialBio);
    setBio(initialBio);
    setIsEditingBio(false);
  };

  const handlePlayVoice = () => {
    setIsPlayingAudio(true);
    speakTagalog('Nandito ako para tulungan kang magsalita ng Tagalog nang may tiwala sa sarili.', () => {
      setIsPlayingAudio(false);
    });
  };

  return (
    <section id="meet-thea" className="py-16 md:py-24 bg-[#F3EFEA]/45 border-y border-[#0F4C5C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FCFBF9] border border-[#0F4C5C]/12 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait & Audio Greeting */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative">
                {/* Woven background aura */}
                <div className="absolute -inset-2 rounded-3xl bg-[#E9C46A]/20 blur-sm -z-10" />
                
                {/* Portrait Placeholder Container */}
                <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl bg-gradient-to-b from-[#F3EFEA] to-[#EAE3D9] border-2 border-[#0F4C5C]/15 flex flex-col items-center justify-center p-6 relative overflow-hidden shadow-xs">
                  {/* Subtle Philippine Sun Watermark */}
                  <div className="absolute -top-8 -right-8 opacity-20 pointer-events-none">
                    <PhilippineSunIcon size={160} className="text-[#0F4C5C]" />
                  </div>

                  <div className="relative z-10 w-24 h-24 rounded-full bg-[#FAF8F5] border-2 border-[#E9C46A] flex items-center justify-center shadow-xs mb-3">
                    <div className="w-20 h-20 rounded-full bg-[#0F4C5C] text-[#FAF8F5] flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold">TA</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-2xs">
                      <SampaguitaIcon size={18} className="text-[#E26D5C]" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="font-serif font-bold text-lg text-[#0F4C5C]">
                      Thea Arianne
                    </div>
                    <div className="text-xs text-[#134E5E]/80">
                      Founder & Lead Teacher
                    </div>
                  </div>

                  {/* Photo Space Notice */}
                  <div className="relative z-10 mt-3 pt-2 border-t border-[#0F4C5C]/10 text-[11px] text-[#134E5E]/60 italic">
                    [Photo space for Teacher Thea]
                  </div>
                </div>
              </div>

              {/* Tagalog Voice Button */}
              <button
                onClick={handlePlayVoice}
                disabled={isPlayingAudio}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0F4C5C] bg-[#FAF8F5] hover:bg-[#F3EFEA] rounded-xl border border-[#0F4C5C]/12 transition-all shadow-2xs"
              >
                <Volume2 size={16} className={isPlayingAudio ? 'animate-pulse text-[#E26D5C]' : 'text-[#0F4C5C]'} />
                <span>Hear a message in Tagalog</span>
              </button>
              <div className="text-[11px] text-[#134E5E]/60 mt-1">
                “Nandito ako para tulungan kang magsalita nang may tiwala sa sarili.”
              </div>
            </div>

            {/* Right Column: Personable Introduction & Approach */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] tracking-wider uppercase">
                  <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
                  <span>Meet Teacher Thea</span>
                </div>

                {/* Edit Bio Button for Teacher Thea */}
                <button
                  onClick={() => setIsEditingBio(!isEditingBio)}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#134E5E]/80 hover:text-[#0F4C5C] hover:bg-[#F3EFEA] rounded-lg transition-colors border border-dashed border-[#0F4C5C]/20"
                >
                  <Edit3 size={13} />
                  <span>{isEditingBio ? 'Cancel Editing' : 'Edit Bio Text'}</span>
                </button>
              </div>

              {isEditingBio ? (
                /* Editable Mode */
                <div className="space-y-4 p-4 bg-[#FAF8F5] rounded-2xl border border-[#0F4C5C]/20">
                  <div className="text-xs font-semibold text-[#0F4C5C]">
                    Customize your homepage biography and teaching message:
                  </div>
                  <div>
                    <label className="text-xs text-[#134E5E]/70 block mb-1">Tagline</label>
                    <input
                      type="text"
                      value={draftBio.tagline}
                      onChange={(e) => setDraftBio({ ...draftBio, tagline: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#0F4C5C]/20 rounded-lg text-[#0F4C5C]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#134E5E]/70 block mb-1">Paragraph 1 (Students)</label>
                    <textarea
                      rows={3}
                      value={draftBio.paragraph1}
                      onChange={(e) => setDraftBio({ ...draftBio, paragraph1: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#0F4C5C]/20 rounded-lg text-[#0F4C5C]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#134E5E]/70 block mb-1">Paragraph 2 (Approach)</label>
                    <textarea
                      rows={3}
                      value={draftBio.paragraph2}
                      onChange={(e) => setDraftBio({ ...draftBio, paragraph2: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#0F4C5C]/20 rounded-lg text-[#0F4C5C]"
                    />
                  </div>
                  <div className="flex gap-2 justify-end pt-2">
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs text-[#134E5E] bg-white border border-[#0F4C5C]/15 rounded-lg"
                    >
                      <RotateCcw size={13} />
                      <span>Reset</span>
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-white bg-[#0F4C5C] rounded-lg"
                    >
                      <Save size={13} />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Display Mode */
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-bold text-[#0F4C5C] tracking-tight">
                    {bio.greeting}
                  </h3>
                  <p className="text-lg font-medium text-[#E26D5C] leading-snug">
                    {bio.tagline}
                  </p>
                  <p className="text-base text-[#134E5E]/85 leading-relaxed">
                    {bio.paragraph1}
                  </p>
                  <p className="text-base text-[#134E5E]/85 leading-relaxed">
                    {bio.paragraph2}
                  </p>
                  <div className="p-3.5 bg-[#F3EFEA] rounded-xl text-xs text-[#134E5E]/75 italic border-l-2 border-[#E9C46A]">
                    {bio.editableNote}
                  </div>
                </div>
              )}

              {/* 3 Core Approach Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#0F4C5C]/8">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0F4C5C]">
                    <Heart size={14} className="text-[#E26D5C]" />
                    <span>Supportive</span>
                  </div>
                  <p className="text-xs text-[#134E5E]/75 mt-1">
                    Zero shame for mistakes or accents. A warm space to practice freely.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#0F4C5C]/8">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0F4C5C]">
                    <CheckCircle2 size={14} className="text-[#0F4C5C]" />
                    <span>Clear</span>
                  </div>
                  <p className="text-xs text-[#134E5E]/75 mt-1">
                    Grammar made logical and intuitive without textbook jargon.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#0F4C5C]/8">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0F4C5C]">
                    <PhilippineSunIcon size={14} className="text-[#DDAA33]" />
                    <span>Meaningful</span>
                  </div>
                  <p className="text-xs text-[#134E5E]/75 mt-1">
                    Real Filipino conversations you will actually use every single week.
                  </p>
                </div>
              </div>

              {/* Book with Thea Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] active:scale-[0.98] rounded-xl shadow-xs transition-all duration-200"
                >
                  Book a Live Lesson with Thea
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
