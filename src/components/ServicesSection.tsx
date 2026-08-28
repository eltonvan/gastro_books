import React from 'react';
import { SERVICES_DATA } from '../data/translations';
import { Language } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenQuoteModal }) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-[#E8E2D9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-serif-header italic text-[#B89355] uppercase tracking-widest block mb-2">
            [ {lang === 'de' ? 'UNSERE LEISTUNGEN' : 'SERVICES OFFERED'} ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-header font-bold text-[#2C2A29] mb-3">
            {lang === 'de'
              ? 'Lohnabrechnung & Vorbereitende Buchhaltung'
              : 'Gastronomy Payroll & Bookkeeping Services'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-serif-header">
            {lang === 'de'
              ? 'Zwei Kernleistungen für Ihren Gastronomiebetrieb in Deutschland.'
              : 'Two essential pillars for managing gastronomy operations in Germany.'}
          </p>
        </div>

        {/* 2 Main Services Side by Side */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => {
            const title = lang === 'de' ? service.titleDe : service.titleEn;
            const desc = lang === 'de' ? service.shortDescDe : service.shortDescEn;
            const features = lang === 'de' ? service.featuresDe : service.featuresEn;

            return (
              <div
                key={service.id}
                className="aj-floating-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[#B89355] transition-all bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl"
              >
                <div>
                  
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E2D9]">
                    <div className="w-10 h-10 rounded-full bg-[#B89355] text-white flex items-center justify-center font-bold text-sm font-serif-header">
                      {service.number}
                    </div>
                    <span className="text-xs font-serif-header italic text-[#B89355] bg-white px-3 py-1 rounded-full border border-[#D2C19D]">
                      {service.figureLabel}
                    </span>
                  </div>

                  {/* Service Image */}
                  <div className="relative h-48 rounded-lg overflow-hidden mb-6 border border-[#E8E2D9]">
                    <img
                      src={service.image}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl sm:text-2xl font-serif-header font-bold mb-3 text-[#2C2A29] group-hover:text-[#B89355] transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-xs sm:text-sm leading-relaxed">
                    {desc}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-3 text-xs text-slate-700 mb-8 border-t border-[#E8E2D9] pt-6 font-medium">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-[#B89355] mr-2.5 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Bottom Call to Action */}
                <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                  <span className="text-xs font-serif-header font-semibold text-slate-500 uppercase">
                    {lang === 'de' ? 'Schnelle Anfrage' : 'Quick Quote'}
                  </span>
                  <button
                    onClick={onOpenQuoteModal}
                    className="btn-aj-gold-filled text-xs uppercase tracking-wider py-2.5 px-6 cursor-pointer flex items-center gap-2"
                  >
                    <span>{lang === 'de' ? 'Anfragen' : 'Inquire'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
