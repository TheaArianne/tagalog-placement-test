import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChooseLearning } from './components/ChooseLearning';
import { LevelPlacement } from './components/LevelPlacement';
import { WhatYouPractice } from './components/WhatYouPractice';
import { MeetThea } from './components/MeetThea';
import { LessonPreview } from './components/LessonPreview';
import { Testimonials } from './components/Testimonials';
import { FreeResources } from './components/FreeResources';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Modals
import { BookingModal } from './components/BookingModal';
import { StudentLoginModal } from './components/StudentLoginModal';
import { PlacementQuizModal } from './components/PlacementQuizModal';
import { ResourceViewerModal } from './components/ResourceViewerModal';
import { CoursesCatalogModal } from './components/CoursesCatalogModal';
import { LegalModal } from './components/LegalModal';

import { FreeResource } from './types';
import { FREE_RESOURCES } from './data/mockContent';

export default function App() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingMode, setBookingMode] = useState<'live' | 'recorded'>('live');
  const [bookingLevel, setBookingLevel] = useState('beginner');

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<FreeResource | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    if (id === 'courses-overview') {
      setIsCoursesModalOpen(true);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (mode: 'live' | 'recorded' = 'live', levelId = 'beginner') => {
    setBookingMode(mode);
    setBookingLevel(levelId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#134E5E] flex flex-col font-sans">
      
      {/* 1. Header & Top Bar Navigation */}
      <Header
        onOpenBooking={(mode) => handleOpenBooking(mode || 'live')}
        onOpenLogin={() => setIsLoginOpen(true)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={(mode) => handleOpenBooking(mode || 'live')}
          onExploreCourses={() => setIsCoursesModalOpen(true)}
          onOpenPlacementQuiz={() => setIsQuizOpen(true)}
        />

        {/* 3. Choose How You Learn (Live vs. Recorded) */}
        <ChooseLearning
          onSelectLive={() => handleOpenBooking('live')}
          onSelectRecorded={() => setIsCoursesModalOpen(true)}
        />

        {/* 4. Find Your Starting Point (Levels + Quiz) */}
        <LevelPlacement
          onOpenPlacementQuiz={() => setIsQuizOpen(true)}
          onSelectLevelForBooking={(lvlId) => handleOpenBooking('live', lvlId)}
        />

        {/* 5. What You'll Practice (5 Core Pillars & Audio Dialogues) */}
        <WhatYouPractice />

        {/* 6. Meet Teacher Thea (Personable intro, approach & editable bio) */}
        <MeetThea onOpenBooking={() => handleOpenBooking('live')} />

        {/* 7. Preview a Lesson (Interactive presentation slides & exercises) */}
        <LessonPreview />

        {/* 8. Student Testimonials (Clearly labeled placeholders) */}
        <Testimonials />

        {/* 9. Free Learning Resources (3 cards + interactive study viewer) */}
        <FreeResources
          onOpenResource={(res) => setSelectedResource(res)}
          onBrowseAll={() => setSelectedResource(FREE_RESOURCES[0])}
        />

        {/* 10. Frequently Asked Questions */}
        <FAQSection onOpenBooking={() => handleOpenBooking('live')} />

        {/* 11. Final Invitation Banner */}
        <FinalCTA
          onOpenBooking={() => handleOpenBooking('live')}
          onOpenPlacementQuiz={() => setIsQuizOpen(true)}
        />
      </main>

      {/* 12. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenBooking={() => handleOpenBooking('live')}
      />

      {/* Interactive Modals & Portals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialMode={bookingMode}
        initialLevel={bookingLevel}
      />

      <StudentLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <PlacementQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectLevelToBook={(levelId) => handleOpenBooking('live', levelId)}
      />

      <ResourceViewerModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
        onOpenBooking={() => handleOpenBooking('live')}
      />

      <CoursesCatalogModal
        isOpen={isCoursesModalOpen}
        onClose={() => setIsCoursesModalOpen(false)}
        onOpenBooking={() => handleOpenBooking('recorded')}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
