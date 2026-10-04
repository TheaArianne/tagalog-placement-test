import React from 'react';
import { ArrowRight, BookOpen, FileText, Headphones, Sparkles, Eye } from 'lucide-react';
import { FREE_RESOURCES } from '../data/mockContent';
import { PhilippineSunIcon } from './CulturalMotifs';
import { FreeResource } from '../types';

interface FreeResourcesProps {
  onOpenResource: (resource: FreeResource) => void;
  onBrowseAll: () => void;
}

export const FreeResources: React.FC<FreeResourcesProps> = ({
  onOpenResource,
  onBrowseAll
}) => {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'cheat-sheet':
        return <FileText size={20} className="text-[#0F4C5C]" />;
      case 'grammar-guide':
        return <BookOpen size={20} className="text-[#E26D5C]" />;
      case 'listening-audio':
        return <Headphones size={20} className="text-[#996500]" />;
      default:
        return <FileText size={20} className="text-[#0F4C5C]" />;
    }
  };

  const getBadgeLabel = (type: string) => {
    switch (type) {
      case 'cheat-sheet':
        return 'Vocabulary Reference';
      case 'grammar-guide':
        return 'Grammar Breakdown';
      case 'listening-audio':
        return 'Audio & Dialogue';
      default:
        return 'Study Guide';
    }
  };

  return (
    <section id="free-resources" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F4C5C] tracking-wider uppercase mb-2">
              <PhilippineSunIcon size={16} className="text-[#DDAA33]" />
              <span>Self-Study Starter Kits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0F4C5C] tracking-tight">
              Free learning resources
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#134E5E]/80">
              Start building your Tagalog vocabulary and listening skills right now with these bite-sized guides.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onBrowseAll}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#0F4C5C] bg-[#F3EFEA] hover:bg-[#EAE3D9] active:scale-[0.98] rounded-xl border border-[#0F4C5C]/12 transition-all"
            >
              <span>Browse Free Resources</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 3 Free Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {FREE_RESOURCES.map((res) => (
            <div
              key={res.id}
              className="bg-[#FCFBF9] border border-[#0F4C5C]/12 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xs hover:border-[#0F4C5C]/25 transition-all duration-200 group"
            >
              <div>
                {/* Header of card: Unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-[#134E5E]/70 mb-4 pb-3 border-b border-[#0F4C5C]/8">
                  <div className="flex items-center gap-1.5 font-medium text-[#0F4C5C]">
                    {getResourceIcon(res.type)}
                    <span>{getBadgeLabel(res.type)}</span>
                  </div>
                  <span className="font-mono tabular-nums">{res.readTime}</span>
                </div>

                <div className="text-xs font-semibold text-[#E26D5C] mb-1">
                  {res.tagalogTitle}
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0F4C5C] group-hover:text-[#1B6577] transition-colors">
                  {res.title}
                </h3>

                <p className="text-sm text-[#134E5E]/85 mt-2.5 leading-relaxed">
                  {res.description}
                </p>

                {/* Preview Snippet */}
                <div className="mt-4 p-3 rounded-xl bg-[#FAF8F5] text-xs text-[#134E5E]/80 border-l-2 border-[#E9C46A]">
                  <span className="font-semibold text-[#0F4C5C]">Preview: </span>
                  {res.previewSnippet}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-5 border-t border-[#0F4C5C]/8">
                <button
                  onClick={() => onOpenResource(res)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#0F4C5C] bg-[#F3EFEA] hover:bg-[#0F4C5C] hover:text-white rounded-xl transition-all duration-200"
                >
                  <Eye size={14} />
                  <span>Open & Study Resource</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
