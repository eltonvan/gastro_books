import React from 'react';
import { Tag, PhoneCall, Utensils, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface WhyUsSectionProps {
  lang: Language;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ lang }) => {
  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-serif-header italic text-[#B89355] uppercase tracking-widest block mb-2">
            [ {lang === 'de' ? 'UNSERE VORTEILE' : 'WHY CHOOSE US'} ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-header font-bold text-[#2C2A29] mb-3">
            {lang === 'de'
              ? 'Warum Gastro Books?'
              : 'Why Work With Gastro Books?'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-serif-header">
            {lang === 'de'
              ? 'Drei starke Vorteile für Ihren Gastronomiebetrieb.'
              : 'Three core advantages for your gastronomy business in Germany.'}
          </p>
        </div>

        {/* 3 Strong Sides Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 1. Affordable */}
          <div className="aj-floating-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-[#E8E2D9] rounded-xl hover:border-[#B89355] transition-all">
            <div>
              <div className="w-12 h-12 rounded-full border-2 border-[#B89355] bg-[#FAF8F5] text-[#B89355] flex items-center justify-center font-bold mb-6">
                <Tag className="w-6 h-6" />
              </div>
              <span className="text-xs font-serif-header italic text-[#B89355] uppercase tracking-wider block mb-2">
                01 // {lang === 'de' ? 'FAIRE PREISE' : 'FAIR RATES'}
              </span>
              <h3 className="text-xl font-serif-header font-bold text-[#2C2A29] mb-3">
                {lang === 'de' ? 'Günstige & Faire Preise' : 'Affordable & Transparent'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {lang === 'de'
                  ? 'Transparente, faire Monatspauschalen pro Mitarbeiter. Keine versteckten Gebühren oder unerwarteten Zusatzkosten.'
                  : 'Clear, predictable monthly fees scaled to your headcount. No unexpected surprises or hidden line items.'}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8E2D9] flex items-center gap-2 text-xs font-serif-header font-semibold text-[#2C2A29]">
              <CheckCircle2 className="w-4 h-4 text-[#B89355]" />
              <span>{lang === 'de' ? 'Volle Kostenkontrolle' : 'Full cost transparency'}</span>
            </div>
          </div>

          {/* 2. Direct Contact */}
          <div className="aj-floating-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-[#E8E2D9] rounded-xl hover:border-[#B89355] transition-all">
            <div>
              <div className="w-12 h-12 rounded-full border-2 border-[#B89355] bg-[#FAF8F5] text-[#B89355] flex items-center justify-center font-bold mb-6">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-xs font-serif-header italic text-[#B89355] uppercase tracking-wider block mb-2">
                02 // {lang === 'de' ? 'DIREKTER KONTAKT' : 'DIRECT CONTACT'}
              </span>
              <h3 className="text-xl font-serif-header font-bold text-[#2C2A29] mb-3">
                {lang === 'de' ? 'Direkter Ansprechpartner' : 'Direct Personal Contact'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {lang === 'de'
                  ? 'Persönliche Betreuung auf Deutsch. Direkt erreichbar per Telefon, WhatsApp oder E-Mail ohne Callcenter.'
                  : 'Speak directly with your personal accountant in German or English via phone, email, or WhatsApp.'}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8E2D9] flex items-center gap-2 text-xs font-serif-header font-semibold text-[#2C2A29]">
              <CheckCircle2 className="w-4 h-4 text-[#B89355]" />
              <span>{lang === 'de' ? 'Ohne Warteschlangen' : 'No call center waiting'}</span>
            </div>
          </div>

          {/* 3. Specializing in Gastronomy */}
          <div className="aj-floating-card p-6 sm:p-8 flex flex-col justify-between bg-white border border-[#E8E2D9] rounded-xl hover:border-[#B89355] transition-all">
            <div>
              <div className="w-12 h-12 rounded-full border-2 border-[#B89355] bg-[#FAF8F5] text-[#B89355] flex items-center justify-center font-bold mb-6">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="text-xs font-serif-header italic text-[#B89355] uppercase tracking-wider block mb-2">
                03 // {lang === 'de' ? 'GASTRO-FOKUS' : 'GASTRONOMY FOCUS'}
              </span>
              <h3 className="text-xl font-serif-header font-bold text-[#2C2A29] mb-3">
                {lang === 'de' ? 'Spezialisiert auf Gastronomie' : 'Gastronomy Specialization'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {lang === 'de'
                  ? 'Tiefes Verständnis für die Branche: SFN-Zuschläge (§ 3b EStG), Kassenbuch-Prüfung, Sofortmeldungen für den Zoll & DATEV.'
                  : 'Specialized expertise in §3b EStG SFN night/holiday bonuses, POS cashbooks, instant Sofortmeldung, and DATEV.'}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8E2D9] flex items-center gap-2 text-xs font-serif-header font-semibold text-[#2C2A29]">
              <CheckCircle2 className="w-4 h-4 text-[#B89355]" />
              <span>{lang === 'de' ? 'Zoll- & GoBD-sicher' : '100% Gastronomy ready'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
