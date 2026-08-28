import React, { useState } from 'react';
import { FAQ_DATA } from '../data/translations';
import { Language } from '../types';
import { ChevronDown, Search } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const q = lang === 'de' ? faq.questionDe : faq.questionEn;
    const a = lang === 'de' ? faq.answerDe : faq.answerEn;
    const term = searchTerm.toLowerCase();
    return q.toLowerCase().includes(term) || a.toLowerCase().includes(term);
  });

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-serif-header italic text-[#B89355] uppercase tracking-widest block mb-2">
            [ FAQ ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-header font-bold text-[#2C2A29] mb-3">
            {lang === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-serif-header">
            {lang === 'de'
              ? 'Wichtige Antworten zur Lohnabrechnung, Belegübernahme und Zusammenarbeit.'
              : 'Key answers regarding payroll processing, receipt handoff, and direct collaboration.'}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#B89355]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              lang === 'de'
                ? 'Frage suchen (z. B. SFN, Sofortmeldung, DATEV)...'
                : 'Search questions...'
            }
            className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8E2D9] rounded-lg text-[#2C2A29] placeholder-slate-400 focus:outline-none focus:border-[#B89355] text-xs sm:text-sm font-medium"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const question = lang === 'de' ? faq.questionDe : faq.questionEn;
            const answer = lang === 'de' ? faq.answerDe : faq.answerEn;
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="aj-floating-card overflow-hidden transition-all bg-white border border-[#E8E2D9] rounded-lg"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-serif-header font-bold text-sm sm:text-base text-[#2C2A29] hover:text-[#B89355] transition-colors cursor-pointer"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B89355] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-[#E8E2D9] pt-3.5 bg-[#FAF8F5]">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-xs bg-white rounded-lg border border-[#E8E2D9] font-medium">
              {lang === 'de' ? 'Keine passenden Fragen gefunden.' : 'No matching questions found.'}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
