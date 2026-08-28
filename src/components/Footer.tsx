import React, { useState } from 'react';
import { Language } from '../types';
import { X, ShieldCheck } from 'lucide-react';
import { LogoMark } from './Logo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [modalType, setModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <footer className="bg-[#1C1B1A] text-slate-300 py-12 border-t border-slate-800 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-3">
            <LogoMark size={38} theme="dark" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-serif-header font-bold text-white tracking-wide">
                GASTRO BOOKS
              </span>
              <span className="text-[11px] font-serif-header text-[#D2C19D] italic">
                {lang === 'de'
                  ? 'Gastronomie Lohn & Buchhaltung'
                  : 'Gastronomy Payroll & Bookkeeping'}
              </span>
            </div>
          </div>
          <div className="mt-2 text-slate-400 text-xs font-serif-header italic flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span>mygastrobooks.de</span>
            <span>//</span>
            <a href="tel:+491775355900" className="hover:text-white transition">
              +49 177 5355900
            </a>
            <span>//</span>
            <a
              href="https://wa.me/491775355900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-emerald-400 font-semibold transition"
            >
              WhatsApp
            </a>
            <span>//</span>
            <a href="mailto:hallo@mygastrobooks.de" className="hover:text-white transition">
              hallo@mygastrobooks.de
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-serif-header uppercase">
          <button
            onClick={() => setModalType('impressum')}
            className="hover:text-[#B89355] transition cursor-pointer"
          >
            Impressum
          </button>
          <button
            onClick={() => setModalType('datenschutz')}
            className="hover:text-[#B89355] transition cursor-pointer"
          >
            Datenschutz
          </button>
          <a href="#services" className="hover:text-[#B89355] transition">
            {lang === 'de' ? 'Leistungen' : 'Services'}
          </a>
          <a href="#why-us" className="hover:text-[#B89355] transition">
            {lang === 'de' ? 'Über uns' : 'About'}
          </a>
          <a href="#contact" className="hover:text-[#B89355] transition">
            {lang === 'de' ? 'Kontakt' : 'Contact'}
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-400 font-serif-header">
          © 2026 Gastro Books (mygastrobooks.de).
        </div>

      </div>

      {/* Impressum / Datenschutz Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1B1A]/85 backdrop-blur-xs">
          <div className="bg-white text-[#2C2A29] rounded-2xl max-w-xl w-full relative border border-[#D2C19D] max-h-[80vh] overflow-y-auto shadow-2xl">
            
            <div className="bg-[#1C1B1A] text-white p-4 sm:p-6 rounded-t-2xl flex items-center justify-between border-b border-slate-800">
              <span className="text-xs font-serif-header italic text-[#D2C19D] uppercase tracking-wider">
                {modalType === 'impressum' ? 'IMPRESSUM' : 'DATENSCHUTZERKLÄRUNG'}
              </span>
              <button
                onClick={() => setModalType(null)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              {modalType === 'impressum' ? (
                <div className="space-y-4 text-xs leading-relaxed text-slate-700">
                  <h3 className="text-lg font-serif-header font-bold text-[#2C2A29] border-b border-[#E8E2D9] pb-2">
                    Angaben gemäß § 5 TMG
                  </h3>
                  <div>
                    <strong>Gastro Books</strong><br />
                    Joanna Malkin<br />
                    Lasdehnerstr 30 10243 Berlin
                  </div>
                  <div>
                    <strong>Kontakt:</strong><br />
                    Webseite: mygastrobooks.de<br />
                    E-Mail: hallo@mygastrobooks.de<br />
                    Telefon: +49 177 5355900<br />
                    WhatsApp: +49 177 5355900
                  </div>
                  <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#D2C19D] text-xs text-slate-800 leading-normal flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#B89355] shrink-0 mt-0.5" />
                    <span>Dienstleistungen gemäß § 6 Nr. 3 & 4 StBerG (Buchen laufender Geschäftsvorfälle sowie laufende Lohnabrechnung). Keine Steuerberatung im Sinne des StBerG.</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-xs leading-relaxed text-slate-700">
                  <h3 className="text-lg font-serif-header font-bold text-[#2C2A29] border-b border-[#E8E2D9] pb-2">
                    Datenschutzerklärung (DSGVO)
                  </h3>
                  <p>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.
                  </p>
                  <p>
                    Ihre Daten (z. B. Name, E-Mail-Adresse, Betriebsdaten) werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur Erbringung unserer Dienstleistungen verarbeitet. Es erfolgt keine Weitergabe an unbefugte Dritte.
                  </p>
                  <p>
                    Sie haben jederzeit das Recht auf kostenfreie Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung und ein Recht auf Berichtigung oder Löschung dieser Daten.
                  </p>
                </div>
              )}

              <div className="pt-6 mt-6 border-t border-[#E8E2D9] flex justify-end">
                <button
                  onClick={() => setModalType(null)}
                  className="btn-aj-gold-filled text-xs uppercase cursor-pointer px-6 py-2"
                >
                  {lang === 'de' ? 'SCHLIESSEN' : 'CLOSE'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
};
