/**
 * Speech synthesis utility for pronouncing Tagalog words & phrases.
 * Uses browser Web Speech API with fallback to Filipino/Indonesian voice or phonetic pacing.
 */
export function speakTagalog(text: string, onEnd?: () => void) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any pending speech
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Attempt to pick a Tagalog/Filipino voice, or fallback to general regional voices
    const voices = window.speechSynthesis.getVoices();
    const filipinoVoice = voices.find(
      (v) =>
        v.lang === 'tl-PH' ||
        v.lang.startsWith('tl') ||
        v.lang.toLowerCase().includes('filipino') ||
        v.lang.toLowerCase().includes('tagalog')
    );

    if (filipinoVoice) {
      utterance.voice = filipinoVoice;
      utterance.lang = filipinoVoice.lang;
    } else {
      // General natural pacing
      utterance.lang = 'tl-PH';
    }

    utterance.rate = 0.88; // Slightly deliberate for language learners
    utterance.pitch = 1.05;

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.warn('Speech synthesis not available', err);
    if (onEnd) onEnd();
    return false;
  }
}
