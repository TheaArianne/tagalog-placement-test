import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/mockContent';
import { PhilippineSunIcon } from './CulturalMotifs';

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#F3EFEA]/45 border-y border-[#0F4C5C]/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0F4C5C] tracking-wider uppercase mb-2">
            <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F4C5C] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#134E5E]/80">
            Clear, honest answers about starting out, scheduling, and lesson materials.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FCFBF9] border border-[#0F4C5C]/12 rounded-2xl transition-all duration-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#0F4C5C]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#0F4C5C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E26D5C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#134E5E]/85 leading-relaxed border-t border-[#0F4C5C]/6">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have another question? card */}
        <div className="mt-10 p-6 bg-[#FAF8F5] border border-[#0F4C5C]/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C] shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#0F4C5C]">Have a specific question about your goals?</h4>
              <p className="text-xs text-[#134E5E]/75">Reach out directly to Teacher Thea via email or message.</p>
            </div>
          </div>
          <a
            href="mailto:TheaDeGuzman38@gmail.com?subject=Question%20about%20Tagalog%20Lessons"
            className="px-4 py-2 text-xs font-semibold text-[#0F4C5C] bg-[#F3EFEA] hover:bg-[#EAE3D9] rounded-xl transition-colors whitespace-nowrap"
          >
            Email Teacher Thea
          </a>
        </div>

      </div>
    </section>
  );
};
