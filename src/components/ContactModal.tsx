import React, { useState } from 'react';
import { X, CheckCircle2, Send, Building, Mail, User, Phone } from 'lucide-react';
import { Language, QuoteFormData } from '../types';
import { Captcha } from './Captcha';
import { WhatsAppIcon } from './WhatsAppWidget';

interface ContactModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  lang,
  onClose,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    venueName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      setCaptchaError(true);
      return;
    }
    const randomRef = 'GB-' + Math.floor(100000 + Math.random() * 900000);
    setSending(true);
    setSubmitError(false);
    try {
      const res = await fetch('https://formsubmit.co/ajax/hallo@mygastrobooks.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          venue: formData.venueName,
          email: formData.email,
          phone: formData.phone || '—',
          message: formData.message || '—',
          reference: randomRef,
          _subject: `Gastro Books inquiry: ${formData.fullName} — ${formData.venueName} (${randomRef})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setTicketRef(randomRef);
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1B1A]/85 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white text-[#2C2A29] max-w-xl w-full relative rounded-2xl border border-[#D2C19D] shadow-2xl my-8">
        
        {/* Header Ribbon */}
        <div className="bg-[#1C1B1A] text-white p-6 sm:p-8 rounded-t-2xl text-center relative border-b border-[#B89355]/40">
          <span className="text-xs font-serif-header italic text-[#D2C19D] uppercase tracking-wider block mb-1">
            [ {lang === 'de' ? 'DIREKTER ANSPRECHPARTNER' : 'DIRECT CONSULTATION'} ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-header font-bold tracking-wide">
            {lang === 'de' ? 'Kontaktieren Sie uns — Gastro Books' : 'Get in Touch — Gastro Books'}
          </h2>
          <p className="text-xs text-slate-300 mt-1 font-serif-header">
            {lang === 'de'
              ? 'Schreiben Sie uns eine Nachricht. Wir melden uns umgehend bei Ihnen.'
              : 'Send us a message or call directly.'}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-serif-header text-[#D2C19D] mt-3 pt-3 border-t border-slate-800">
            <a href="tel:+491776265692" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-[#B89355]" />
              <span>+49 177 6265692</span>
            </a>
            <a
              href="https://wa.me/491776265692"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-white transition font-bold"
            >
              <WhatsAppIcon size={14} />
              <span>WhatsApp Chat</span>
            </a>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-serif-header font-bold text-[#2C2A29] uppercase mb-1">
                    {lang === 'de' ? 'NAME' : 'NAME'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B89355]" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Alex Weber"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-[#2C2A29] placeholder-slate-400 focus:outline-none focus:border-[#B89355] font-medium text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-serif-header font-bold text-[#2C2A29] uppercase mb-1">
                    {lang === 'de' ? 'BETRIEBSNAME' : 'BUSINESS NAME'} *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B89355]" />
                    <input
                      type="text"
                      required
                      value={formData.venueName}
                      onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                      placeholder="Cafe Mitte Berlin"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-[#2C2A29] placeholder-slate-400 focus:outline-none focus:border-[#B89355] font-medium text-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-serif-header font-bold text-[#2C2A29] uppercase mb-1">
                    {lang === 'de' ? 'E-MAIL' : 'EMAIL'} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B89355]" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="info@gastro.de"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-[#2C2A29] placeholder-slate-400 focus:outline-none focus:border-[#B89355] font-medium text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-serif-header font-bold text-[#2C2A29] uppercase mb-1">
                    {lang === 'de' ? 'TELEFON' : 'PHONE'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B89355]" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+49 170 1234567"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-[#2C2A29] placeholder-slate-400 focus:outline-none focus:border-[#B89355] font-medium text-xs"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-serif-header font-bold text-[#2C2A29] uppercase mb-1">
                  {lang === 'de' ? 'NACHRICHT' : 'MESSAGE'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    lang === 'de'
                      ? 'Erzählen Sie uns kurz über Ihr Team, Lohnabrechnung oder Buchhaltung...'
                      : 'Tell us briefly about your team, payroll, or bookkeeping requirements...'
                  }
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-[#2C2A29] placeholder-slate-400 focus:outline-none focus:border-[#B89355] font-medium text-xs"
                />
              </div>

              {/* Captcha Verification */}
              <Captcha
                lang={lang}
                theme="light"
                onVerifyChange={(verified) => {
                  setIsCaptchaVerified(verified);
                  if (verified) setCaptchaError(false);
                }}
                errorMessage={
                  captchaError && !isCaptchaVerified
                    ? lang === 'de'
                      ? 'Bitte lösen Sie das Captcha zur Sicherheitsprüfung.'
                      : 'Please solve the captcha verification.'
                    : undefined
                }
              />

              {submitError && (
                <p className="text-red-500 text-[11px] font-semibold">
                  {lang === 'de'
                    ? 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an hallo@mygastrobooks.de.'
                    : 'Could not send message. Please try again or email hallo@mygastrobooks.de.'}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full btn-aj-gold-filled text-xs uppercase tracking-wider py-3.5 flex items-center justify-center gap-2 cursor-pointer mt-2 font-bold disabled:opacity-60"
              >
                <span>
                  {sending
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
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-[#F7F3EB] text-[#B89355] rounded-full flex items-center justify-center mx-auto border border-[#D2C19D]">
                <CheckCircle2 className="w-10 h-10 text-[#B89355]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-serif-header font-bold text-[#B89355] bg-[#F7F3EB] px-3 py-1 rounded-full border border-[#D2C19D] uppercase">
                  REF: {ticketRef}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-header font-bold text-[#2C2A29]">
                  {lang === 'de' ? 'VIELEN DANK!' : 'THANK YOU!'}
                </h3>
                <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed">
                  {lang === 'de'
                    ? `Vielen Dank, ${formData.fullName}! Wir melden uns bezüglich ${formData.venueName} unter ${formData.email} innerhalb von 24 Stunden.`
                    : `Thank you, ${formData.fullName}! We received your inquiry regarding ${formData.venueName} and will respond shortly.`}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="https://wa.me/491776265692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow hover:bg-[#20bd5a] transition"
                >
                  <WhatsAppIcon size={16} />
                  <span>{lang === 'de' ? 'Dringend? WhatsApp Chat' : 'Urgent? WhatsApp Us'}</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="btn-aj-gold text-xs uppercase px-8 py-3 cursor-pointer font-bold"
                >
                  {lang === 'de' ? 'SCHLIESSEN' : 'CLOSE'}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
