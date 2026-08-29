import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FAQSection } from './components/FAQSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { Captcha } from './components/Captcha';
import { WhatsAppFloatingButton, WhatsAppIcon } from './components/WhatsAppWidget';
import { Send, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Embedded Contact Form State
  const [embeddedForm, setEmbeddedForm] = useState({
    name: '',
    venue: '',
    email: '',
    phone: '',
    message: ''
  });
  const [embeddedSubmitted, setEmbeddedSubmitted] = useState(false);
  const [embeddedCaptchaVerified, setEmbeddedCaptchaVerified] = useState(false);
  const [embeddedCaptchaError, setEmbeddedCaptchaError] = useState(false);
  const [embeddedSending, setEmbeddedSending] = useState(false);
  const [embeddedSubmitError, setEmbeddedSubmitError] = useState(false);

  const handleSwitchLang = (newLang: Language) => {
    setLang(newLang);
  };

  const handleEmbeddedSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!embeddedCaptchaVerified) {
      setEmbeddedCaptchaError(true);
      return;
    }
    setEmbeddedSending(true);
    setEmbeddedSubmitError(false);
    try {
      const res = await fetch('https://formsubmit.co/ajax/hallo@mygastrobooks.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: embeddedForm.name,
          venue: embeddedForm.venue,
          email: embeddedForm.email,
          phone: embeddedForm.phone || '—',
          message: embeddedForm.message || '—',
          _subject: `Gastro Books contact: ${embeddedForm.name} — ${embeddedForm.venue}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setEmbeddedSubmitted(true);
    } catch {
      setEmbeddedSubmitError(true);
    } finally {
      setEmbeddedSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2A29] flex flex-col font-sans selection:bg-[#B89355] selection:text-white">
      
      {/* 1. Navbar */}
      <Navbar
        lang={lang}
        onSwitchLang={handleSwitchLang}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* 2. Hero - Digital Business Card */}
      <Hero
        lang={lang}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* 3. Core Strong Sides (Why Us) */}
      <WhyUsSection lang={lang} />

      {/* 4. Core Services (Payroll & Bookkeeping) */}
      <ServicesSection
        lang={lang}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* 5. FAQ Section */}
      <FAQSection lang={lang} />

      {/* 6. Embedded Direct Contact Card (#contact) */}
      <section id="contact" className="py-16 sm:py-20 bg-white text-[#2C2A29] relative border-b border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1C1B1A] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-[#B89355]/40">
            
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-[#D2C19D] rounded-full text-xs font-serif-header uppercase tracking-wider mb-3 border border-slate-800">
                [ {lang === 'de' ? 'DIREKTER ANSPRECHPARTNER' : 'DIRECT CONTACT'} ]
              </span>
              <h2 className="text-3xl font-bold font-serif-header text-white mb-2">
                {lang === 'de'
                  ? 'Sprechen Sie direkt mit uns'
                  : 'Contact Gastro Books Directly'}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-serif-header">
                {lang === 'de'
                  ? 'Senden Sie uns eine Nachricht oder rufen Sie uns an. Wir unterstützen Sie bei Lohnabrechnung und Buchhaltung.'
                  : 'Send us a message or call directly for your gastronomy business in Berlin & Germany.'}
              </p>

              {/* Direct Info Pills */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs font-serif-header text-[#D2C19D] mt-6 pt-4 border-t border-slate-800">
                <a href="tel:+491776265692" className="flex items-center gap-1.5 hover:text-white transition bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-700">
                  <Phone className="w-3.5 h-3.5 text-[#B89355]" />
                  <span>+49 177 6265692</span>
                </a>
                <a
                  href="https://wa.me/491776265692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 px-3.5 py-1.5 rounded-full border border-[#25D366]/40 font-bold"
                >
                  <WhatsAppIcon size={15} />
                  <span>WhatsApp Chat</span>
                </a>
                <a href="mailto:hallo@mygastrobooks.de" className="flex items-center gap-1.5 hover:text-white transition bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-700">
                  <Mail className="w-3.5 h-3.5 text-[#B89355]" />
                  <span>hallo@mygastrobooks.de</span>
                </a>
                <span className="text-slate-400 font-normal px-2">
                  mygastrobooks.de
                </span>
              </div>
            </div>

            {!embeddedSubmitted ? (
              <form onSubmit={handleEmbeddedSubmit} className="space-y-4 text-xs font-serif-header">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      {lang === 'de' ? 'NAME' : 'NAME'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={embeddedForm.name}
                      onChange={(e) => setEmbeddedForm({ ...embeddedForm, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#B89355] text-xs"
                      placeholder="Alex Weber"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      {lang === 'de' ? 'BETRIEBSNAME' : 'VENUE NAME'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={embeddedForm.venue}
                      onChange={(e) => setEmbeddedForm({ ...embeddedForm, venue: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#B89355] text-xs"
                      placeholder="Cafe Mitte Berlin"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      {lang === 'de' ? 'E-MAIL-ADRESSE' : 'EMAIL'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={embeddedForm.email}
                      onChange={(e) => setEmbeddedForm({ ...embeddedForm, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#B89355] text-xs"
                      placeholder="kontakt@lokal.de"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      {lang === 'de' ? 'TELEFONNUMMER' : 'PHONE'}
                    </label>
                    <input
                      type="tel"
                      value={embeddedForm.phone}
                      onChange={(e) => setEmbeddedForm({ ...embeddedForm, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#B89355] text-xs"
                      placeholder="+49 170 1234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    {lang === 'de' ? 'NACHRICHT' : 'MESSAGE'}
                  </label>
                  <textarea
                    rows={3}
                    value={embeddedForm.message}
                    onChange={(e) => setEmbeddedForm({ ...embeddedForm, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#B89355] text-xs"
                    placeholder={
                      lang === 'de'
                        ? 'Kurze Beschreibung Ihres Betriebs und Ihrer Fragen...'
                        : 'Brief details about your team and requirements...'
                    }
                  />
                </div>

                {/* Anti-spam Captcha */}
                <Captcha
                  lang={lang}
                  theme="dark"
                  onVerifyChange={(verified) => {
                    setEmbeddedCaptchaVerified(verified);
                    if (verified) setEmbeddedCaptchaError(false);
                  }}
                  errorMessage={
                    embeddedCaptchaError && !embeddedCaptchaVerified
                      ? lang === 'de'
                        ? 'Bitte lösen Sie das Captcha zur Sicherheitsprüfung.'
                        : 'Please solve the captcha verification.'
                      : undefined
                  }
                />

                {embeddedSubmitError && (
                  <p className="text-red-400 text-[11px] font-semibold">
                    {lang === 'de'
                      ? 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an hallo@mygastrobooks.de.'
                      : 'Could not send message. Please try again or email hallo@mygastrobooks.de.'}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={embeddedSending}
                  className="w-full btn-aj-gold-filled text-xs font-bold uppercase tracking-wider py-4 flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-60"
                >
                  <span>
                    {embeddedSending
                      ? lang === 'de'
                        ? 'WIRD GESENDET…'
                        : 'SENDING…'
                      : lang === 'de'
                        ? 'NACHRICHT SENDEN'
                        : 'SEND MESSAGE'}
                  </span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 font-serif-header">
                <CheckCircle2 className="w-12 h-12 text-[#B89355] mx-auto" />
                <h3 className="text-2xl font-bold text-white uppercase">
                  {lang === 'de' ? 'Nachricht gesendet!' : 'Message Sent!'}
                </h3>
                <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                  {lang === 'de'
                    ? `Vielen Dank, ${embeddedForm.name}! Wir haben Ihre Nachricht für ${embeddedForm.venue} erhalten und melden uns in Kürze unter ${embeddedForm.email}.`
                    : `Thank you, ${embeddedForm.name}! We received your message regarding ${embeddedForm.venue} and will reach out shortly.`}
                </p>
                <button
                  onClick={() => setEmbeddedSubmitted(false)}
                  className="mt-4 btn-aj-gold text-xs uppercase px-6 py-2.5 cursor-pointer font-bold"
                >
                  {lang === 'de' ? 'Weitere Nachricht' : 'Send Another'}
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 7. Modal Window */}
      <ContactModal
        isOpen={isQuoteModalOpen}
        lang={lang}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* 8. Footer */}
      <Footer lang={lang} />

      {/* 9. Floating WhatsApp Support Button */}
      <WhatsAppFloatingButton lang={lang} />

    </div>
  );
}
