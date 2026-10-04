import React, { useState } from 'react';
import { X, Calendar, Clock, Check, ArrowRight, User, Mail, MessageSquare } from 'lucide-react';
import { PhilippineSunIcon } from './CulturalMotifs';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'live' | 'recorded';
  initialLevel?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'live',
  initialLevel = 'beginner'
}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    learningMode: initialMode,
    level: initialLevel,
    goal: 'Family & Partner Communication',
    preferredTime: 'Weekday Evenings (Asia / Pacific / Americas friendly)',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF8F5] border border-[#0F4C5C]/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#0F4C5C]/60 hover:text-[#0F4C5C] hover:bg-[#F3EFEA] rounded-full transition-colors"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pb-4 border-b border-[#0F4C5C]/10">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0F4C5C] uppercase tracking-wider mb-1">
                <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
                <span>Start Your Tagalog Journey</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0F4C5C]">
                Book a Live Lesson with Teacher Thea
              </h3>
              <p className="text-xs sm:text-sm text-[#134E5E]/80 mt-1">
                Tell me a little about your background so we can tailor your very first session.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Santos"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl text-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl text-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                  />
                </div>
              </div>

              {/* Learning Goal & Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">
                    Primary Learning Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl text-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                  >
                    <option value="Family & Partner Communication">Talk with Partner & Family</option>
                    <option value="Heritage Reconnection">Heritage Reconnection</option>
                    <option value="Travel & Expat Life">Travel & Daily Life in PH</option>
                    <option value="Conversational Fluency">General Conversational Fluency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">
                    Current Level
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl text-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                  >
                    <option value="beginner">Beginner (Starting from zero)</option>
                    <option value="heritage">Heritage Learner (Understand some)</option>
                    <option value="intermediate">Intermediate (Basic speaking)</option>
                    <option value="advanced">Advanced (Polishing nuance)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Time Window */}
              <div>
                <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">
                  Preferred Time Window & Timezone
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl text-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                >
                  <option value="Weekday Evenings (Asia / Pacific / Americas friendly)">
                    Weekday Evenings (Asia / Pacific / Americas friendly)
                  </option>
                  <option value="Weekday Mornings (Europe / Asia friendly)">
                    Weekday Mornings (Europe / Asia friendly)
                  </option>
                  <option value="Weekend Flexible Hours">
                    Weekend Flexible Hours
                  </option>
                </select>
              </div>

              {/* Note for Thea */}
              <div>
                <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">
                  Anything you’d like Teacher Thea to know? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Visiting Manila in November; want to practice ordering food and greeting elders..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl text-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                />
              </div>

              {/* Policy note */}
              <div className="p-3 bg-[#F3EFEA] rounded-xl text-[11px] text-[#134E5E]/75">
                <span className="font-semibold text-[#0F4C5C]">Notice: </span>
                Teacher Thea will review your request and reply to <strong>{formData.email || 'your email'}</strong> within 24–48 hours with available calendar slots and introductory lesson slides.
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-medium text-[#134E5E] bg-[#F3EFEA] hover:bg-[#EAE3D9] rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#E26D5C] hover:bg-[#CF5644] rounded-xl shadow-xs transition-colors"
                >
                  Submit Booking Request
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check size={32} />
            </div>

            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Booking Request Received!
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F4C5C] mt-1">
                Maraming Salamat, {formData.name || 'there'}!
              </h3>
            </div>

            <p className="text-sm text-[#134E5E]/85 leading-relaxed max-w-md mx-auto">
              I have received your booking details for <strong>{formData.goal}</strong>. I will send a confirmation and custom calendar link to <strong>{formData.email}</strong> shortly.
            </p>

            <div className="p-4 bg-[#FCFBF9] border border-[#0F4C5C]/12 rounded-2xl max-w-sm mx-auto text-xs text-left space-y-1.5">
              <div><strong className="text-[#0F4C5C]">Level:</strong> {formData.level}</div>
              <div><strong className="text-[#0F4C5C]">Timeframe:</strong> {formData.preferredTime}</div>
              <div><strong className="text-[#0F4C5C]">Next Step:</strong> Look out for an email from Thea Arianne with your preparation notes!</div>
            </div>

            <div className="pt-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] rounded-xl transition-colors"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
