import React from 'react';

/**
 * Tasteful, subtle Filipino-inspired motifs.
 * Designed to provide warmth and cultural homage without cluttering or overwhelming.
 */

export const PhilippineSunIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-6 h-6 text-[#E9C46A]',
  size = 24
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central sun disk */}
    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
    {/* 8 Cardinal and Intercardinal Golden Rays */}
    <path d="M12 2V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 19V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M2 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M19 12H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4.93 4.93L7.05 7.05" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16.95 16.95L19.07 19.07" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4.93 19.07L7.05 16.95" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16.95 7.05L19.07 4.93" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const SampaguitaIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5 text-[#E26D5C]',
  size = 20
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* 5 gentle white/coral petals around a warm center */}
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 4C13.2 7 13.2 9 12 10C10.8 9 10.8 7 12 4Z" fill="currentColor" fillOpacity="0.8" />
    <path d="M19.6 9.5C17.2 11.5 15.3 10.9 14 10C15.3 8.7 17.2 8.1 19.6 9.5Z" fill="currentColor" fillOpacity="0.8" />
    <path d="M16.7 18.4C14.7 16.5 13.8 14.6 13.5 13.2C14.9 13.5 16.8 14.4 16.7 18.4Z" fill="currentColor" fillOpacity="0.8" />
    <path d="M7.3 18.4C7.2 14.4 9.1 13.5 10.5 13.2C10.2 14.6 9.3 16.5 7.3 18.4Z" fill="currentColor" fillOpacity="0.8" />
    <path d="M4.4 9.5C6.8 8.1 8.7 8.7 10 10C8.7 10.9 6.8 11.5 4.4 9.5Z" fill="currentColor" fillOpacity="0.8" />
  </svg>
);

export const BanigPatternDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-2 py-4 ${className}`} aria-hidden="true">
    <span className="h-px w-12 bg-[#0F4C5C]/15" />
    <span className="w-1.5 h-1.5 rotate-45 bg-[#E26D5C]" />
    <span className="w-2 h-2 rotate-45 bg-[#E9C46A]" />
    <span className="w-1.5 h-1.5 rotate-45 bg-[#0F4C5C]/40" />
    <span className="h-px w-12 bg-[#0F4C5C]/15" />
  </div>
);
