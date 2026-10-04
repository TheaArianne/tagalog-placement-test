import { LevelInfo, PracticeArea, LessonSlide, FreeResource, FAQItem, Testimonial, QuizQuestion } from '../types';

export const LEVELS: LevelInfo[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    tagalogName: 'Simula (Beginning)',
    badge: 'A1 – A2 Foundations',
    description:
      'For learners starting from zero or with scattered vocabulary. Build practical confidence with everyday greetings, ordering food, basic questions, and simple sentence structures without being overwhelmed by grammar tables.',
    typicalStudent: 'First-time learners, travelers, partners of Filipinos learning their first phrases.',
    focusTopics: [
      'Everyday greetings and polite expressions (po / opo)',
      'Basic conversational questions (Sino, Ano, Saan, Magkano)',
      'Numbers, time, ordering at restaurants, and getting around',
      'Simple "Ang" and "Ng" sentences to talk about yourself'
    ]
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    tagalogName: 'Pagsulong (Stepping Forward)',
    badge: 'B1 Conversational',
    description:
      'For learners who understand basic sentences but freeze up when speaking. Master Tagalog verb aspects (completed, ongoing, contemplated) and transition from word-by-word translating to flowing thoughts.',
    typicalStudent: 'Heritage learners who grew up hearing Tagalog at home, returning travelers, and expat residents.',
    focusTopics: [
      'Tagalog verb system (-UM-, MAG-, -IN-, -AN) made intuitive',
      'Sharing stories, past experiences, and future plans',
      'Conversational particles that make you sound natural (pala, naman, nga, kaya)',
      'Navigating extended family gatherings and colloquial humor'
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced',
    tagalogName: 'Lalim at Hubog (Depth & Polish)',
    badge: 'B2+ Nuanced Fluency',
    description:
      'Refine your natural rhythm, express complex opinions, understand Filipino idiomatic expressions (sawikain), and speak with cultural ease across casual banter and formal settings.',
    typicalStudent: 'Learners seeking bilingual fluency, community leaders, and heritage speakers wanting total polish.',
    focusTopics: [
      'Subtle focus shifts and indirect politeness strategies',
      'Current affairs, storytelling, and cultural humor nuance',
      'Slang, Taglish balance, and regional expressions',
      'Deep listening comprehension with fast-paced native speakers'
    ]
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'conversations',
    title: 'Practical Conversations',
    tagalogTitle: 'Tunay na Usapan',
    description:
      'Step away from dry textbook scripts. You will practice dialogues you actually encounter when greeting relatives, ordering at a carinderia, or chatting with friends.',
    situation: 'Meeting Filipino in-laws or friends for Sunday lunch',
    samplePhrase: {
      tagalog: 'Magandang araw po! Salamat po sa pag-imbita sa akin.',
      english: 'Good day! Thank you so much for inviting me.',
      literal: 'Beautiful day [polite]! Thanks [polite] for inviting me.',
      context: 'Polite, warm, and immediately disarms the room with respect.'
    }
  },
  {
    id: 'vocabulary',
    title: 'Useful Vocabulary & Expressions',
    tagalogTitle: 'Mga Karaniwang Salita',
    description:
      'Learn the expressive words that native speakers use every day—including versatile conversation boosters like "talaga," "naman," and "pala" that give your speech warmth.',
    situation: 'Expressing pleasant surprise when something turns out great',
    samplePhrase: {
      tagalog: 'Ang sarap naman pala ng luto mo!',
      english: 'Oh, your cooking is genuinely so delicious!',
      literal: 'How delicious [expressive particle] [realization] of cooking your!',
      context: 'Uses "naman" (affectionate emphasis) and "pala" (new discovery).'
    }
  },
  {
    id: 'grammar',
    title: 'Grammar in Context',
    tagalogTitle: 'Balarila sa Konteksto',
    description:
      'Tagalog grammar is famous for its verb focus system. Instead of endless rote charts, we break it down through memorable situational patterns you can put together like puzzle pieces.',
    situation: 'Explaining what you did yesterday vs. what you are doing now',
    samplePhrase: {
      tagalog: 'Kumain ako ng mangga kanina, pero nagugutom na naman ako.',
      english: 'I ate a mango earlier, but I am hungry again already.',
      literal: 'Ate I [object] mango earlier, but being-hungry already again I.',
      context: 'Contrasting completed action (kumain) with an ongoing state.'
    }
  },
  {
    id: 'listening',
    title: 'Listening & Pronunciation',
    tagalogTitle: 'Pakikinig at Pagbigkas',
    description:
      'Train your ear for natural Philippine cadence, vowel rhythms, and subtle glottal stops so you feel confident both understanding fast speech and being understood.',
    situation: 'Catching words spoken quickly in casual conversation',
    samplePhrase: {
      tagalog: 'Ano po ang ibig sabihin noon?',
      english: 'What does that mean, please?',
      literal: 'What [polite] the want meaning of-that?',
      context: 'Your go-to polite survival phrase when listening to native speakers.'
    }
  },
  {
    id: 'culture',
    title: 'Filipino Culture & Etiquette',
    tagalogTitle: 'Kultura at Kagandahang-Asal',
    description:
      'Language and culture are inseparable in the Philippines. Learn respect terms (po/opo, Ate, Kuya, Tita), dining etiquette, and how to express pakikisama (camaraderie).',
    situation: 'Addressing someone slightly older with affectionate respect',
    samplePhrase: {
      tagalog: 'Ate, paki-abot naman po ng tubig. Salamat!',
      english: 'Ate (elder sister), could you please pass the water? Thank you!',
      literal: 'Elder sister, please-reach [gentle particle] [polite] of water. Thanks!',
      context: 'Blends warmth, honorific kinship terms, and courteous request markers.'
    }
  }
];

export const SAMPLE_LESSON_SLIDES: LessonSlide[] = [
  {
    id: 1,
    title: 'Warm Welcome & Situational Context',
    tagalogTitle: 'Aralin 1: Pagbati at Magalang na Pananalita',
    subtitle: 'Connecting with warmth in the first 30 seconds of an encounter',
    content: {
      dialogue: [
        {
          speaker: 'Thea',
          tagalog: 'Magandang umaga po! Kamusta po kayo?',
          english: 'Good morning! How are you doing? (Polite / Plural respect)',
          audioTip: 'Note the gentle rising intonation on "kayo?"'
        },
        {
          speaker: 'Mag-aaral (Student)',
          tagalog: 'Mabuti naman po ako. Kayo po, kamusta?',
          english: 'I am doing well, thank you. And how about you?',
          audioTip: 'Adding "naman" softens your response and adds friendly warmth.'
        }
      ],
      culturalTip:
        'In Filipino culture, asking "Kamusta ka?" is not just a greeting; it is an open invitation to connect. When speaking to someone older or in formal settings, always include "po" and address them with "kayo".'
    }
  },
  {
    id: 2,
    title: 'Breaking Down the Key Phrases',
    tagalogTitle: 'Pagsusuri ng mga Salita',
    subtitle: 'Understanding the building blocks behind polite Tagalog',
    content: {
      keyGrammar: {
        rule: 'The Power of "Po" and "Opo"',
        explanation:
          '"Po" is the universal respect particle inserted after verbs or key words. "Opo" is the polite form of "Oo" (Yes). Using them shows honor and immediately creates a positive, respectful connection with Filipinos.'
      },
      dialogue: [
        {
          speaker: 'Phrase 1',
          tagalog: 'Salamat po nang marami!',
          english: 'Thank you very much! (Lit: Thanks [polite] of plenty!)'
        },
        {
          speaker: 'Phrase 2',
          tagalog: 'Walang anuman po.',
          english: "You're welcome. (Lit: Nothing whatever [polite].)"
        },
        {
          speaker: 'Phrase 3',
          tagalog: 'Ingat po kayo palagi.',
          english: 'Take care always. (A very common heartfelt sign-off)'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Interactive Practice: Polite Response',
    tagalogTitle: 'Pagsasanay sa Pag-uusap',
    subtitle: 'Test what you just learned with a real-life prompt',
    content: {
      exercise: {
        question:
          'Your partner’s mother offers you a warm plate of pancit and says: "Kain ka muna!" (Eat first!). How do you politely accept and express gratitude?',
        options: [
          'Salamat po, Tita! Ang bango naman po.',
          'Oo, gusto ko niyan ngayon.',
          'Ayoko po kumain.',
          'Sige, bigyan mo ako.'
        ],
        answer: 0,
        explanation:
          'Option 1 uses "po", addresses her warmly as "Tita", and compliments the aroma ("Ang bango naman po")! This is culturally natural and deeply appreciated.'
      }
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Placeholder: Heritage Learner (e.g., Mark R.)',
    learnerType: 'Heritage Speaker · Reconnecting with Roots',
    goal: 'Goal: Conversing with grandparents and family in Batangas',
    quote:
      '[Testimonial Placeholder: Real student quote will be placed here. e.g., "Teacher Thea gave me the courage to finally speak Tagalog with my Lola without feeling embarrassed about my accent. Her screen presentations and patient explanations made all the difference."]',
    isPlaceholder: true,
    location: 'California, USA'
  },
  {
    id: 't2',
    name: 'Placeholder: Partner of a Filipino (e.g., Sarah M.)',
    learnerType: 'Partner & Family Learner · Cultural Connection',
    goal: 'Goal: Surprise my fiancé’s family at our wedding',
    quote:
      '[Testimonial Placeholder: Real student quote will be placed here. e.g., "The live 1-on-1 lessons are so welcoming. Thea doesn’t just teach grammar rules; she explains what phrases mean culturally so I can understand the inside jokes at dinner."]',
    isPlaceholder: true,
    location: 'Melbourne, Australia'
  },
  {
    id: 't3',
    name: 'Placeholder: Travel & Living in the Philippines (e.g., David K.)',
    learnerType: 'Beginner Adult Learner · Travel & Community',
    goal: 'Goal: Everyday conversations for island travels and living in Manila',
    quote:
      '[Testimonial Placeholder: Real student quote will be placed here. e.g., "I started with zero Tagalog knowledge. The recorded modules allowed me to review on my own schedule, while the live conversation lessons gave me real speaking practice."]',
    isPlaceholder: true,
    location: 'London, UK'
  }
];

export const FREE_RESOURCES: FreeResource[] = [
  {
    id: 'expressions',
    title: 'Everyday Tagalog Expressions Cheat Sheet',
    tagalogTitle: 'Mga Pang-araw-araw na Pahayag',
    type: 'cheat-sheet',
    readTime: '5 min read',
    description:
      'A curated reference sheet of 20 high-frequency expressions that native speakers use constantly, with literal translations and cultural usage notes.',
    previewSnippet: 'Includes: "Tara!", "Ano ba yan?", "Bahala na", "Sandali lang po", and more.',
    content: {
      items: [
        {
          term: 'Tara!',
          meaning: "Let's go! / Come on!",
          usage: 'Short, casual invitation used constantly with friends and colleagues.'
        },
        {
          term: 'Sandali lang po.',
          meaning: 'Just a moment, please.',
          usage: 'Polite way to ask someone to wait while you grab something.'
        },
        {
          term: 'Ano po ang maipaglilingkod ko?',
          meaning: 'How can I assist you?',
          usage: 'Formal, polite service greeting.'
        },
        {
          term: 'Kahit ano na lang.',
          meaning: 'Whatever is fine / Anything is fine.',
          usage: 'Common casual reply when choosing where to eat.'
        },
        {
          term: 'Busog na busog ako!',
          meaning: 'I am completely full!',
          usage: 'Best compliment you can say after a hearty Filipino meal.'
        }
      ],
      notes: 'Print or save this cheat sheet on your phone for quick reference during travel or family dinners.'
    }
  },
  {
    id: 'confused-words',
    title: 'Commonly Confused Words Guide',
    tagalogTitle: 'Mga Salitang Madalas Mapagpalit',
    type: 'grammar-guide',
    readTime: '7 min read',
    description:
      'Never confuse "Ng" vs. "Nang", "May" vs. "Mayroon", or "Pahiram" vs. "Pahiram" again. Clear examples and simple decision rules you can remember.',
    previewSnippet: 'Learn the exact rules for NG vs. NANG with easy memory triggers.',
    content: {
      items: [
        {
          term: 'NG vs. NANG',
          meaning: 'NG marks objects ("kumain ng saging") or ownership ("kotse ng tatay"). NANG answers "how", "when", or repeats verbs ("tumakbo nang mabilis", "nang dumating siya").',
          usage: 'Easy test: If you can replace it with "nang" answering "how", use N-A-N-G!'
        },
        {
          term: 'MAY vs. MAYROON',
          meaning: 'Both indicate existence/possession. Use MAY if immediately followed by a noun or verb. Use MAYROON if followed by a pronoun or in short answers.',
          usage: 'Example: "May kape ka ba?" vs. "Mayroon akong kape."'
        },
        {
          term: 'DITO vs. RITO',
          meaning: 'Both mean "here". Use DITO after a consonant sound. Use RITO after a vowel sound for smooth phonetic flow.',
          usage: 'Example: "Pumunta ka rito" (ends in vowel -a) vs. "Dito sa bahay".'
        }
      ],
      notes: 'Clear explanations without academic jargon so you can write and speak with precision.'
    }
  },
  {
    id: 'listening-exercise',
    title: 'Short Listening Activity: At the Panaderia',
    tagalogTitle: 'Maikling Pagsasanay sa Pakikinig: Sa Panaderya',
    type: 'listening-audio',
    readTime: '3 min audio',
    description:
      'Listen to a short realistic dialogue between a customer and a baker ordering fresh pandesal in the morning. Test your comprehension with a quick transcript toggle.',
    previewSnippet: 'Real conversational speed with natural Philippine intonation.',
    content: {
      items: [
        {
          term: 'Customer: "Pabili po ng mainit na pandesal."',
          meaning: 'I would like to buy some hot pandesal, please.',
          usage: '"Pabili po" is the quintessential Filipino bakery and sari-sari store opener.'
        },
        {
          term: 'Baker: "Magkano po ang bibilhin ninyo?"',
          meaning: 'How much worth would you like to buy?',
          usage: 'Bakers in the Philippines sell bread by the peso amount (e.g., 50 pesos worth).'
        },
        {
          term: 'Customer: "Limampung piso po. Pakilagay sa supot."',
          meaning: 'Fifty pesos worth, please. Please put it in a bag.',
          usage: 'Polite instruction using "paki-" (please).'
        }
      ],
      notes: 'Features pronunciation playback for each line so you can practice shadow-reading.'
    }
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'getting-started',
    question: 'I have never spoken a single word of Tagalog. Can I still start?',
    answer:
      'Yes, absolutely! Many of my students start with zero background. In our first session, we start with simple, high-frequency phrases and clear pronunciation. You will speak actual Tagalog sentences from day one in a supportive, zero-pressure atmosphere.'
  },
  {
    id: 'faq-2',
    category: 'getting-started',
    question: 'How do I choose between Live Lessons and Recorded Courses?',
    answer:
      'If you learn best with immediate feedback, real-time conversation practice, and accountability, Live One-on-One Lessons are ideal. If you have an irregular schedule, prefer to study at your own pace, or want a structured reference you can review repeatedly, the Recorded Courses are a great fit. Many students also combine both!'
  },
  {
    id: 'faq-3',
    category: 'lessons',
    question: 'What happens during a live 1-on-1 lesson?',
    answer:
      'Each live session is interactive and tailored to your goals. I share custom visual presentation slides on screen, we role-play real life scenarios (ordering food, talking with in-laws, asking directions), practice pronunciation together, and take notes you can keep after class.'
  },
  {
    id: 'faq-4',
    category: 'courses',
    question: 'How do recorded courses and materials work?',
    answer:
      'Recorded courses are organized into bite-sized, logical video modules. Each module comes with downloadable reference summaries, dialogue transcripts, and practice exercises so you can reinforce what you watch.'
  },
  {
    id: 'faq-5',
    category: 'policies',
    question: 'What are your booking policies, schedule availability, and rates?',
    answer:
      '[Editable Policy Placeholder: Detailed hourly lesson rates, bundle packages, timezone availability (e.g., Asia / North America / Europe-friendly slots), and 24-hour rescheduling policy can be customized here by Teacher Thea].'
  }
];

export const PLACEMENT_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is your background with the Tagalog language?',
    tagalogSubtext: 'Ano ang karanasan mo sa wikang Tagalog?',
    options: [
      { text: 'Complete beginner: I know a few greetings like "Salamat" or "Mabuhay", but nothing more.', score: 0 },
      { text: 'Heritage listener: I grew up hearing my parents or relatives speak it, but I struggle to speak back.', score: 1 },
      { text: 'Intermediate: I can form simple sentences, but I get stuck with verb conjugations and speed.', score: 2 },
      { text: 'Conversational: I can express my thoughts, but I want to sound more natural and nuanced.', score: 3 }
    ]
  },
  {
    id: 2,
    question: 'When a native speaker talks to you in casual Tagalog, how much do you catch?',
    tagalogSubtext: 'Gaano karami ang naiintindihan mo kapag may nagtatagalog?',
    options: [
      { text: 'Almost none—it sounds very fast and unfamiliar.', score: 0 },
      { text: 'I catch occasional key words or the overall topic, but miss the details.', score: 1 },
      { text: 'I understand roughly 50–70% if they speak at a moderate pace.', score: 2 },
      { text: 'I understand almost everything, including humor and common slang.', score: 3 }
    ]
  },
  {
    id: 3,
    question: 'Which of these sentence structures feels most natural for you to say right now?',
    tagalogSubtext: 'Alin sa mga pangungusap na ito ang komportable mong gamitin?',
    options: [
      { text: '"Kamusta ka? Ako si [Name]."', score: 0 },
      { text: '"Gusto ko ng kape at kanin, paki-abot po."', score: 1 },
      { text: '"Pumunta ako sa palengke kahapon dahil kailangan kong bumili ng ulam."', score: 2 },
      { text: '"Kung hindi sana umulan nang malakas, nakapasyal sana tayo sa tabing-dagat."', score: 3 }
    ]
  },
  {
    id: 4,
    question: 'What is your primary learning goal right now?',
    tagalogSubtext: 'Ano ang pangunahing layunin mo sa pag-aaral?',
    options: [
      { text: 'Learn survival phrases for an upcoming trip or visit to the Philippines.', score: 0 },
      { text: 'Talk comfortably with my Filipino partner, spouse, or family members.', score: 1 },
      { text: 'Break through the speaking barrier so I can carry on an uninterrupted conversation.', score: 2 },
      { text: 'Achieve near-native fluency, cultural polish, and master Filipino idioms.', score: 3 }
    ]
  }
];
