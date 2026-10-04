import React, { useState } from 'react';
import { Menu, X, UserCheck } from 'lucide-react';
import { PhilippineSunIcon } from './CulturalMotifs';

interface HeaderProps {
  onOpenBooking: (mode?: 'live' | 'recorded') => void;
  onOpenLogin: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenLogin,
  onNavigate,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'choose-learning', label: 'Live Lessons' },
    { id: 'courses-overview', label: 'Recorded Courses' },
    { id: 'free-resources', label: 'Free Resources' },
    { id: 'meet-thea', label: 'About' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#0F4C5C]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark (Single primary line) */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('hero')}
              className="group flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C] rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-full bg-[#E9C46A]/20 flex items-center justify-center text-[#E9C46A] group-hover:scale-105 transition-transform duration-200">
                <PhilippineSunIcon size={20} className="text-[#DDAA33]" />
              </div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#0F4C5C] tracking-tight whitespace-nowrap">
                Tagalog with Thea
              </span>
            </button>
          </div>

          {/* Zone 2: Clean Text Navigation Links (Strictly no pill capsules) */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#134E5E]/80">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 relative hover:text-[#0F4C5C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C] rounded ${
                  activeSection === link.id
                    ? 'text-[#0F4C5C] font-semibold'
                    : 'text-[#134E5E]/75'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E26D5C] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#0F4C5C] hover:text-[#E26D5C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C5C] rounded-lg"
            >
              <UserCheck size={16} />
              <span>Student Login</span>
            </button>

            <button
              onClick={() => onOpenBooking('live')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#E26D5C] hover:bg-[#CF5644] active:scale-[0.98] rounded-xl shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26D5C] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              Book a Lesson
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking('live')}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#E26D5C] rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F4C5C] hover:bg-[#0F4C5C]/5 rounded-lg focus-visible:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#0F4C5C]/10 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-3 py-2 text-base font-medium text-[#134E5E] hover:bg-[#F3EFEA] rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[#0F4C5C]/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full text-center py-2.5 text-sm font-medium text-[#0F4C5C] bg-[#F3EFEA] rounded-xl"
            >
              Student Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('live');
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#E26D5C] rounded-xl"
            >
              Book a Live Lesson
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
