import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Language } from '../types';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppWidget';

interface NavbarProps {
  lang: Language;
  onSwitchLang: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onSwitchLang, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8E2D9] shadow-xs">
      
      {/* Top Utility Bar */}
      <div className="bg-[#1C1B1A] text-[#D2C19D] py-1.5 text-[11px] font-medium border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href="tel:+491775355900" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-[#B89355]" />
              <span>+49 177 5355900</span>
            </a>
            <a
              href="https://wa.me/491775355900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition"
              title={lang === 'de' ? 'Direkt per WhatsApp schreiben' : 'Chat via WhatsApp'}
            >
              <WhatsAppIcon size={14} className="text-[#25D366]" />
              <span className="text-[#25D366] font-semibold">WhatsApp</span>
            </a>
            <a href="mailto:hallo@mygastrobooks.de" className="flex items-center gap-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-[#B89355]" />
              <span>hallo@mygastrobooks.de</span>
            </a>
            <span className="text-slate-400 font-normal">
              mygastrobooks.de
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="inline-flex">
          <Logo
            size="md"
            subtext={
              lang === 'de'
                ? 'Lohnabrechnung & Büroservice'
                : 'Gastronomy Payroll & Bookkeeping'
            }
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium font-serif-header text-[#2C2A29]">
          <a href="#" className="text-[#B89355] font-semibold hover:text-[#9E7B3E] transition-colors py-1">
            {lang === 'de' ? 'Startseite' : 'Home'}
          </a>
          <a href="#services" className="hover:text-[#B89355] transition-colors py-1">
            {lang === 'de' ? 'Leistungen' : 'Services'}
          </a>
          <a href="#why-us" className="hover:text-[#B89355] transition-colors py-1">
            {lang === 'de' ? 'Vorteile' : 'Why Us'}
          </a>
          <a href="#contact" className="hover:text-[#B89355] transition-colors py-1">
            {lang === 'de' ? 'Kontakt' : 'Contact'}
          </a>
          <a href="#faq" className="hover:text-[#B89355] transition-colors py-1">
            FAQ
          </a>
        </nav>

        {/* Action Buttons & Language Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          
          {/* Language Selector Toggle (DE | EN) */}
          <div className="px-1.5 py-1 rounded-full bg-[#FAF8F5] border border-[#D2C19D] flex items-center text-[11px] font-bold text-[#2C2A29]">
            <button
              onClick={() => onSwitchLang('de')}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                lang === 'de' ? 'bg-[#B89355] text-white' : 'hover:text-[#B89355]'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => onSwitchLang('en')}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                lang === 'en' ? 'bg-[#B89355] text-white' : 'hover:text-[#B89355]'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-block btn-aj-gold text-xs uppercase tracking-wider cursor-pointer"
          >
            {lang === 'de' ? 'Anfragen' : 'Contact'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2C2A29] hover:text-[#B89355]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E2D9] px-6 py-6 space-y-4 font-serif-header text-[#2C2A29] shadow-xl">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base py-2 border-b border-slate-100 text-[#B89355] font-bold"
          >
            {lang === 'de' ? 'Startseite' : 'Home'}
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base py-2 border-b border-slate-100"
          >
            {lang === 'de' ? 'Leistungen' : 'Services'}
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base py-2 border-b border-slate-100"
          >
            {lang === 'de' ? 'Vorteile' : 'Why Us'}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base py-2 border-b border-slate-100"
          >
            {lang === 'de' ? 'Kontakt' : 'Contact'}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base py-2"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <a
              href="https://wa.me/491775355900"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              <WhatsAppIcon size={18} />
              <span>{lang === 'de' ? 'WhatsApp Chat starten' : 'Chat on WhatsApp'}</span>
            </a>

            <a
              href="tel:+491775355900"
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#B89355]" />
              <span>+49 177 5355900</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full btn-aj-gold-filled text-xs uppercase tracking-wider text-center py-3"
            >
              {lang === 'de' ? 'Jetzt Anfragen' : 'Get in Touch'}
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
