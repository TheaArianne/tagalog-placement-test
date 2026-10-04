import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { PhilippineSunIcon } from './CulturalMotifs';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF8F5] border border-[#0F4C5C]/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#0F4C5C]/60 hover:text-[#0F4C5C] hover:bg-[#F3EFEA] rounded-full transition-colors"
          aria-label="Close legal modal"
        >
          <X size={20} />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] uppercase tracking-wider">
              <ShieldCheck size={18} className="text-[#0F4C5C]" />
              <span>Privacy Policy</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0F4C5C]">
              Privacy & Learner Data Protection
            </h3>
            <div className="text-xs sm:text-sm text-[#134E5E]/85 space-y-3 leading-relaxed max-h-[360px] overflow-y-auto pr-1">
              <p>
                At <strong>Tagalog with Thea</strong>, we respect your personal privacy. When you book a lesson, take the placement quiz, or request resources, your contact details (name and email) are used solely to communicate regarding your learning schedule and course materials.
              </p>
              <p>
                <strong>No Sharing or Sale of Information:</strong> Your information is never sold, rented, or shared with third-party marketers.
              </p>
              <p>
                <strong>Lesson Screen Recordings:</strong> For live 1-on-1 sessions, recordings are only made with your explicit consent for personal review, and remain strictly private to you and Teacher Thea.
              </p>
              <div className="p-3 bg-[#F3EFEA] rounded-xl text-xs text-[#134E5E]/70 italic">
                [Editable Legal Placeholder: Specific regional jurisdiction clauses such as GDPR or CCPA terms can be customized here].
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] uppercase tracking-wider">
              <FileText size={18} className="text-[#0F4C5C]" />
              <span>Terms of Learning</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0F4C5C]">
              Terms of Learning & Policies
            </h3>
            <div className="text-xs sm:text-sm text-[#134E5E]/85 space-y-3 leading-relaxed max-h-[360px] overflow-y-auto pr-1">
              <p>
                Welcome to <strong>Tagalog with Thea</strong>. By booking a live lesson or accessing recorded course materials, you agree to foster a respectful, encouraging learning environment.
              </p>
              <p>
                <strong>Scheduling & Rescheduling:</strong> We understand adult schedules change. We kindly request at least 24 hours advance notice to reschedule a booked live session.
              </p>
              <p>
                <strong>Course Materials & Copyright:</strong> All custom visual slides, dialogue sheets, and audio recordings provided by Teacher Thea are for your individual personal study and may not be redistributed without permission.
              </p>
              <div className="p-3 bg-[#F3EFEA] rounded-xl text-xs text-[#134E5E]/70 italic">
                [Editable Policy Placeholder: Detailed cancellation windows, refund conditions, and bundle expiration terms can be adjusted by Teacher Thea].
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#0F4C5C]/10 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0F4C5C] rounded-xl"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
