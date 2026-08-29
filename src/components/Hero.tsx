import React from 'react';
import { ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { LogoMark } from './Logo';
import { WhatsAppIcon } from './WhatsAppWidget';

interface HeroProps {
  lang: Language;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuoteModal }) => {
  return (
    <section className="relative py-12 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Glorified Digital Business Card Frame */}
        <div className="aj-floating-card p-6 sm:p-12 relative overflow-hidden bg-white border border-[#D2C19D] shadow-xl rounded-2xl">
          
          {/* Accent Gold Stripe Header */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#B89355] via-[#D2C19D] to-[#B89355]"></div>

          {/* Top Card Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pt-2 pb-4 border-b border-[#E8E2D9]">
            <div className="flex items-center space-x-2">
               <span className="w-2.5 h-2.5 rounded-full bg-[#B89355] animate-pulse"></span>
              <span className="text-xs font-serif-header font-bold text-[#B89355] uppercase tracking-widest">
                [ {lang === 'de' ? 'GASTRONOMIE-BÜROSERVICE' : 'GASTRONOMY OFFICE SERVICE'} ]
              </span>
            </div>
            
            <span className="text-xs font-serif-header text-[#B89355] font-semibold bg-[#F7F3EB] px-3 py-1 rounded-full border border-[#D2C19D]">
              mygastrobooks.de
            </span>
          </div>

          {/* Business Name & Headline */}
          <div className="grid md:grid-cols-12 gap-8 items-center mb-10">
            
            <div className="md:col-span-8 space-y-4">
              <span className="inline-block bg-[#F7F3EB] text-[#2C2A29] px-3.5 py-1 rounded-full text-xs font-serif-header font-bold border border-[#D2C19D] uppercase">
                {lang === 'de'
                  ? 'Gastro-Büroservice in Berlin — Gastro Books'
                  : 'Gastronomy Payroll & Backoffice — Gastro Books'}
              </span>

              <h1 className="text-3xl sm:text-5xl font-serif-header font-bold text-[#2C2A29] tracking-tight leading-tight">
                {lang === 'de'
                  ? 'Lohnabrechnung & Buchhaltung für Gastronomie'
                  : 'Gastronomy Payroll & Bookkeeping'}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-serif-header italic">
                {lang === 'de'
                  ? 'Komplette Lohnabrechnung und vorbereitende Buchhaltung für Restaurants, Cafés und Bars in Berlin und Deutschland. Einfach, transparent und mit direktem Ansprechpartner.'
                  : 'End-to-end payroll processing and receipt preparation for restaurants, cafes, and bars across Berlin and Germany. Simple, transparent, with a dedicated contact person.'}
              </p>
            </div>

            {/* Emblem / Quick Contact Box */}
            <div className="md:col-span-4 bg-[#1C1B1A] text-white p-6 rounded-xl border border-[#B89355]/40 text-center space-y-3.5 shadow-lg flex flex-col items-center">
              <LogoMark size={64} theme="dark" className="mx-auto" />
              
              <div>
                <div className="text-[11px] font-serif-header italic text-[#D2C19D] uppercase tracking-wider">
                  {lang === 'de' ? 'DIREKTER ANSPRECHPARTNER' : 'DIRECT CONTACT'}
                </div>
                <a
                  href="tel:+491776265692"
                  className="text-base font-bold text-white mt-0.5 hover:text-[#D2C19D] transition block"
                >
                  +49 177 6265692
                </a>
                <a
                  href="mailto:hallo@mygastrobooks.de"
                  className="text-xs text-slate-300 hover:text-white transition font-medium block"
                >
                  hallo@mygastrobooks.de
                </a>
              </div>

              <div className="w-full space-y-2 pt-1">
                <a
                  href="https://wa.me/491776265692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg shadow-md transition"
                >
                  <WhatsAppIcon size={16} />
                  <span>{lang === 'de' ? 'WhatsApp Chat' : 'WhatsApp Chat'}</span>
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="w-full btn-aj-gold text-xs uppercase tracking-wider cursor-pointer font-bold py-2.5"
                >
                  {lang === 'de' ? 'Nachricht senden' : 'Send Message'}
                </button>
              </div>
            </div>

          </div>

          {/* 3 Strong Advantages Ribbon */}
          <div className="grid md:grid-cols-3 gap-4 pt-8 border-t border-[#E8E2D9]">
            
            {/* Pillar 1: Affordable */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D9] space-y-2 hover:border-[#B89355] transition-colors">
              <div className="flex items-center gap-2 text-[#B89355] font-serif-header font-bold text-sm">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>
                  {lang === 'de' ? '1. Günstig & Faire Preise' : '1. Affordable & Fair Rates'}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'de'
                  ? 'Transparente, faire Monatspauschalen ohne versteckte Gebühren oder lange Vertragsbindungen.'
                  : 'Transparent, flat monthly fees per employee without hidden charges.'}
              </p>
            </div>

            {/* Pillar 2: Direct Contact */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D9] space-y-2 hover:border-[#B89355] transition-colors">
              <div className="flex items-center gap-2 text-[#B89355] font-serif-header font-bold text-sm">
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>
                  {lang === 'de' ? '2. Direkter Ansprechpartner' : '2. Direct Personal Contact'}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'de'
                  ? 'Persönliche Betreuung auf Deutsch per Telefon, WhatsApp oder E-Mail — schnell und ohne Callcenter.'
                  : 'Speak directly with your personal accountant in German or English via phone, email, or WhatsApp.'}
              </p>
            </div>

            {/* Pillar 3: Gastronomy Specialization */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D9] space-y-2 hover:border-[#B89355] transition-colors">
              <div className="flex items-center gap-2 text-[#B89355] font-serif-header font-bold text-sm">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>
                  {lang === 'de' ? '3. Spezialisiert auf Gastro' : '3. Gastronomy Focus'}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'de'
                  ? 'Erfahrung mit SFN-Zuschlägen (§ 3b EStG), Kassenbuch-Prüfung, Sofortmeldungen & DATEV.'
                  : 'Expert handling of §3b EStG shift bonuses, POS cashbooks, instant Sofortmeldung, and DATEV.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
