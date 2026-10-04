import React, { useState } from 'react';
import { MessageSquareQuote, Plus, Star, Check } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockContent';
import { PhilippineSunIcon } from './CulturalMotifs';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    learnerType: 'Heritage Learner',
    quote: ''
  });

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackForm.name || !feedbackForm.quote) return;

    const newTestimonial: Testimonial = {
      id: `t-${Date.now()}`,
      name: feedbackForm.name,
      learnerType: feedbackForm.learnerType,
      goal: 'Recent Student Submission',
      quote: `“${feedbackForm.quote}”`,
      isPlaceholder: false
    };

    setReviews([newTestimonial, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowFeedbackModal(false);
      setFeedbackForm({ name: '', learnerType: 'Heritage Learner', quote: '' });
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F3EFEA]/45 border-y border-[#0F4C5C]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] tracking-wider uppercase mb-2">
              <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
              <span>Learner Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F4C5C] tracking-tight">
              Student stories & feedback
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#134E5E]/80">
              Hear how adult learners build confidence, connect with family members, and prepare for travel.
            </p>
          </div>

          <button
            onClick={() => setShowFeedbackModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0F4C5C] bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#0F4C5C]/15 rounded-xl transition-all self-start md:self-auto"
          >
            <Plus size={16} className="text-[#E26D5C]" />
            <span>Submit Student Feedback</span>
          </button>
        </div>

        {/* Notice on Testimonials (Explicit honesty requirement) */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#FCFBF9] border border-dashed border-[#0F4C5C]/20 text-xs text-[#134E5E]/75 flex items-center justify-between">
          <span>
            <strong className="text-[#0F4C5C]">Editorial Notice:</strong> The cards below are labeled placeholders awaiting real feedback from Thea’s current students. No testimonials or reviews have been fabricated.
          </span>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#FCFBF9] border border-[#0F4C5C]/12 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs relative"
            >
              <div>
                {/* Quote Icon & Learner Type */}
                <div className="flex items-center justify-between text-xs text-[#134E5E]/70 mb-4 pb-3 border-b border-[#0F4C5C]/8">
                  <span className="font-semibold text-[#0F4C5C]">{item.learnerType}</span>
                  <MessageSquareQuote size={18} className="text-[#E9C46A]" />
                </div>

                {/* Quote Content */}
                <p className="text-sm text-[#134E5E]/85 italic leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-[#0F4C5C]/8">
                <div className="font-serif font-bold text-sm text-[#0F4C5C]">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#134E5E]/60 mt-0.5">
                  {item.goal}
                </div>
                {item.isPlaceholder && (
                  <span className="inline-block mt-2 text-[10px] uppercase font-mono tracking-wider text-[#E26D5C] bg-[#E26D5C]/10 px-2 py-0.5 rounded">
                    Placeholder Card
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Feedback Submission Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] border border-[#0F4C5C]/15 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-xl">
            <h3 className="font-serif text-xl font-bold text-[#0F4C5C]">
              Share Your Learning Experience
            </h3>
            <p className="text-xs text-[#134E5E]/80 mt-1 mb-4">
              Current students can submit feedback for Teacher Thea's review.
            </p>

            {submittedMessage ? (
              <div className="p-6 text-center text-emerald-800 bg-emerald-50 rounded-2xl flex flex-col items-center">
                <Check size={32} className="mb-2 text-emerald-600" />
                <span className="font-bold">Maraming salamat!</span>
                <span className="text-xs mt-1">Your feedback placeholder has been added to the page.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria S."
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">Learner Background</label>
                  <select
                    value={feedbackForm.learnerType}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, learnerType: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl"
                  >
                    <option value="Heritage Learner">Heritage Learner</option>
                    <option value="Partner of a Filipino">Partner of a Filipino</option>
                    <option value="Traveler & Expat">Traveler & Expat</option>
                    <option value="Adult Beginner">Adult Beginner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">Your Thoughts / Review</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Share how lessons with Thea have helped your speaking confidence..."
                    value={feedbackForm.quote}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, quote: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl"
                  />
                </div>
                <div className="flex gap-2 justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setShowFeedbackModal(false)}
                    className="px-4 py-2 text-xs font-medium text-[#134E5E] bg-[#F3EFEA] rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#0F4C5C] rounded-xl"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
