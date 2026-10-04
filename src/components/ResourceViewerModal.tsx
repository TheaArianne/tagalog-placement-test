import React, { useState } from 'react';
import { X, Volume2, FileText, CheckCircle2, Download, Printer } from 'lucide-react';
import { FreeResource } from '../types';
import { PhilippineSunIcon } from './CulturalMotifs';
import { speakTagalog } from '../utils/speech';

interface ResourceViewerModalProps {
  resource: FreeResource | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ResourceViewerModal: React.FC<ResourceViewerModalProps> = ({
  resource,
  onClose,
  onOpenBooking
}) => {
  const [playingItemIndex, setPlayingItemIndex] = useState<number | null>(null);

  if (!resource) return null;

  const handlePlay = (text: string, index: number) => {
    setPlayingItemIndex(index);
    speakTagalog(text, () => {
      setPlayingItemIndex(null);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF8F5] border border-[#0F4C5C]/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#0F4C5C]/60 hover:text-[#0F4C5C] hover:bg-[#F3EFEA] rounded-full transition-colors"
          aria-label="Close resource modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-[#0F4C5C]/10">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E26D5C] uppercase tracking-wider mb-1">
            <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
            <span>{resource.tagalogTitle}</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#0F4C5C]">
            {resource.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#134E5E]/80 mt-1">
            {resource.description}
          </p>
        </div>

        {/* Interactive Resource Content List */}
        <div className="space-y-3.5 max-h-[420px] overflow-y-auto pr-1">
          {resource.content.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-[#0F4C5C]/10 space-y-2 hover:border-[#0F4C5C]/25 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="font-serif font-bold text-base sm:text-lg text-[#0F4C5C]">
                    {item.term}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#E26D5C] mt-0.5">
                    {item.meaning}
                  </div>
                </div>

                <button
                  onClick={() => handlePlay(item.term, idx)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0F4C5C] text-white hover:bg-[#1B6577] active:scale-95 transition-all shrink-0"
                  aria-label={`Listen to ${item.term}`}
                >
                  <Volume2 size={15} className={playingItemIndex === idx ? 'animate-pulse text-[#E9C46A]' : ''} />
                </button>
              </div>

              {item.usage && (
                <div className="pt-2 border-t border-[#0F4C5C]/6 text-xs text-[#134E5E]/80">
                  <strong className="text-[#0F4C5C]">Usage Note: </strong>
                  {item.usage}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Resource Notes */}
        {resource.content.notes && (
          <div className="mt-4 p-3 bg-[#F3EFEA] rounded-xl text-xs text-[#134E5E]/80 italic">
            {resource.content.notes}
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-[#0F4C5C]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#0F4C5C] hover:text-[#E26D5C] transition-colors"
          >
            <Printer size={15} />
            <span>Print / Save Study Sheet</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#134E5E] bg-[#F3EFEA] rounded-xl"
            >
              Done
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0F4C5C] hover:bg-[#1B6577] rounded-xl shadow-xs"
            >
              Practice in a Live Lesson
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
