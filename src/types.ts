export type LearningMode = 'live' | 'recorded';

export interface LevelInfo {
  id: string;
  name: string;
  tagalogName: string;
  badge: string;
  description: string;
  typicalStudent: string;
  focusTopics: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  tagalogTitle: string;
  description: string;
  situation: string;
  samplePhrase: {
    tagalog: string;
    english: string;
    literal?: string;
    audioPronunciation?: string;
    context: string;
  };
}

export interface LessonSlide {
  id: number;
  title: string;
  tagalogTitle: string;
  subtitle: string;
  content: {
    dialogue?: Array<{ speaker: string; tagalog: string; english: string; audioTip?: string }>;
    culturalTip?: string;
    keyGrammar?: { rule: string; explanation: string };
    exercise?: { question: string; options: string[]; answer: number; explanation: string };
  };
}

export interface FreeResource {
  id: string;
  title: string;
  tagalogTitle: string;
  type: 'cheat-sheet' | 'grammar-guide' | 'listening-audio';
  readTime: string;
  description: string;
  previewSnippet: string;
  content: {
    items: Array<{
      term: string;
      meaning: string;
      usage?: string;
      pronunciation?: string;
    }>;
    notes?: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  tagalogQuestion?: string;
  answer: string;
  category: 'getting-started' | 'lessons' | 'courses' | 'policies';
}

export interface Testimonial {
  id: string;
  learnerType: string;
  goal: string;
  quote: string;
  isPlaceholder: boolean;
  name: string;
  location?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  tagalogSubtext?: string;
  options: {
    text: string;
    score: number; // 0: Beginner, 1: High beginner/heritage, 2: Intermediate, 3: Advanced
  }[];
}
