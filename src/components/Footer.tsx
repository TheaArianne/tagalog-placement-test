import React from 'react';
import { Mail, Instagram, Youtube, Globe, Heart } from 'lucide-react';
import { PhilippineSunIcon, SampaguitaIcon } from './CulturalMotifs';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenBooking
}) => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#0F4C5C]/12 text-[#134E5E]/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#0F4C5C]/10">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E9C46A]/20 flex items-center justify-center text-[#E9C46A]">
                <PhilippineSunIcon size={18} className="text-[#DDAA33]" />
              </div>
              <span className="text-xl font-serif font-bold text-[#0F4C5C] tracking-tight">
                Tagalog with Thea
              </span>
            </div>

            <p className="text-sm text-[#134E5E]/80 max-w-sm leading-relaxed">
              Warm, supportive Tagalog lessons for adult learners—travelers, heritage speakers, and families. Speak with confidence and genuine cultural understanding.
            </p>

            <div className="pt-2 text-xs text-[#134E5E]/70 flex items-center gap-2">
              <SampaguitaIcon size={14} className="text-[#E26D5C]" />
              <span>Maraming salamat sa pagbisita! (Thank you for visiting!)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0F4C5C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#0F4C5C] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('choose-learning')}
                  className="hover:text-[#0F4C5C] transition-colors"
                >
                  Live One-on-One Lessons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses-overview')}
                  className="hover:text-[#0F4C5C] transition-colors"
                >
                  Recorded Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('free-resources')}
                  className="hover:text-[#0F4C5C] transition-colors"
                >
                  Free Learning Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('meet-thea')}
                  className="hover:text-[#0F4C5C] transition-colors"
                >
                  Meet Teacher Thea
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#0F4C5C] transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social Placeholders */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0F4C5C]">
              Direct Contact & Connect
            </h4>
            
            <div className="space-y-2 text-sm">
              <a
                href="mailto:TheaDeGuzman38@gmail.com"
                className="flex items-center gap-2 text-[#0F4C5C] hover:text-[#E26D5C] transition-colors"
              >
                <Mail size={16} />
                <span>TheaDeGuzman38@gmail.com</span>
              </a>
              <p className="text-xs text-[#134E5E]/60">
                Inquiries typically answered within 24–48 hours.
              </p>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <span className="text-xs font-medium text-[#134E5E]/70 block mb-2">
                Social Community:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="#instagram"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Social Link: @tagalogwiththea (Placeholder ready for Teacher Thea’s Instagram link)');
                  }}
                  className="w-8 h-8 rounded-lg bg-[#F3EFEA] hover:bg-[#0F4C5C] hover:text-white text-[#0F4C5C] flex items-center justify-center transition-colors"
                  aria-label="Instagram placeholder"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#youtube"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Social Link: Tagalog with Thea YouTube (Placeholder ready for video lessons channel)');
                  }}
                  className="w-8 h-8 rounded-lg bg-[#F3EFEA] hover:bg-[#0F4C5C] hover:text-white text-[#0F4C5C] flex items-center justify-center transition-colors"
                  aria-label="YouTube placeholder"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="#podcast"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Podcast Placeholder: Audio lessons feed for on-the-go listening');
                  }}
                  className="w-8 h-8 rounded-lg bg-[#F3EFEA] hover:bg-[#0F4C5C] hover:text-white text-[#0F4C5C] flex items-center justify-center transition-colors"
                  aria-label="Podcast placeholder"
                >
                  <Globe size={16} />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom bar with legal & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#134E5E]/60 gap-4">
          <div>
            © {new Date().getFullYear()} Tagalog with Thea. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#0F4C5C] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#0F4C5C] transition-colors"
            >
              Terms of Learning
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenBooking}
              className="text-[#E26D5C] hover:text-[#CF5644] font-medium transition-colors"
            >
              Book a Lesson
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
