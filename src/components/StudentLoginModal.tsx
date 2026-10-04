import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, UserCheck, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import { PhilippineSunIcon } from './CulturalMotifs';

interface StudentLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentLoginModal: React.FC<StudentLoginModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'demo'>('login');
  const [email, setEmail] = useState('');
  const [isSentMagicLink, setIsSentMagicLink] = useState(false);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSentMagicLink(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF8F5] border border-[#0F4C5C]/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#0F4C5C]/60 hover:text-[#0F4C5C] hover:bg-[#F3EFEA] rounded-full transition-colors"
          aria-label="Close login dialog"
        >
          <X size={20} />
        </button>

        {/* Tab switch */}
        <div className="flex items-center gap-2 mb-6 p-1 bg-[#F3EFEA] rounded-xl">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'login'
                ? 'bg-white text-[#0F4C5C] shadow-2xs'
                : 'text-[#134E5E]/70 hover:text-[#0F4C5C]'
            }`}
          >
            Student Sign In
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'demo'
                ? 'bg-white text-[#0F4C5C] shadow-2xs'
                : 'text-[#134E5E]/70 hover:text-[#0F4C5C]'
            }`}
          >
            Learner Portal Preview
          </button>
        </div>

        {activeTab === 'login' ? (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold text-[#0F4C5C]">
                Welcome Back, Mag-aaral!
              </h3>
              <p className="text-xs sm:text-sm text-[#134E5E]/80 mt-1">
                Access your private lesson slides, recorded videos, and homework notes.
              </p>
            </div>

            {isSentMagicLink ? (
              <div className="p-6 text-center bg-white border border-[#0F4C5C]/10 rounded-2xl space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0F4C5C]">
                  Sign-In Link Sent!
                </h4>
                <p className="text-xs text-[#134E5E]/80">
                  We sent a secure passwordless login link to <strong>{email}</strong>. Check your inbox or click the "Learner Portal Preview" tab above to explore now.
                </p>
                <button
                  onClick={() => setIsSentMagicLink(false)}
                  className="text-xs text-[#E26D5C] hover:underline"
                >
                  Use a different email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendLink} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F4C5C] mb-1">
                    Registered Student Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="student@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-white border border-[#0F4C5C]/20 rounded-xl text-[#0F4C5C] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                    />
                    <Mail size={16} className="absolute left-3.5 top-3 text-[#134E5E]/50" />
                  </div>
                </div>

                <div className="p-3 bg-[#F3EFEA] rounded-xl text-[11px] text-[#134E5E]/75">
                  We use secure passwordless sign-in. You will receive an instant link to your student dashboard.
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] rounded-xl shadow-xs transition-colors"
                >
                  <span>Send Student Sign-In Link</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        ) : (
          /* Demo Dashboard Preview */
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="text-xl font-serif font-bold text-[#0F4C5C]">
                Student Portal Preview
              </h3>
              <p className="text-xs text-[#134E5E]/80 mt-0.5">
                Here is how enrolled students access materials between lessons:
              </p>
            </div>

            <div className="bg-white border border-[#0F4C5C]/12 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#0F4C5C]/8 text-xs">
                <span className="font-semibold text-[#0F4C5C]">Upcoming Lesson</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">Confirmed</span>
              </div>
              <div className="flex items-start gap-3 text-xs">
                <Calendar size={18} className="text-[#E26D5C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0F4C5C]">Thursday at 7:00 PM (Your Local Time)</div>
                  <div className="text-[#134E5E]/70">Topic: Ordering Food & Polite Family Etiquette</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#0F4C5C]/12 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#0F4C5C]/8 text-xs">
                <span className="font-semibold text-[#0F4C5C]">Your Recent Lesson Decks</span>
                <span className="text-[#134E5E]/60">3 Decks Available</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5]">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-[#0F4C5C]" />
                    <span>Aralin 01: Warm Greetings & Po/Opo Slides</span>
                  </div>
                  <span className="text-[#0F4C5C] font-semibold">View</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5]">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-[#0F4C5C]" />
                    <span>Aralin 02: Market Numbers & Asking Prices</span>
                  </div>
                  <span className="text-[#0F4C5C] font-semibold">View</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onClose}
                className="text-xs text-[#0F4C5C] font-semibold hover:underline"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
