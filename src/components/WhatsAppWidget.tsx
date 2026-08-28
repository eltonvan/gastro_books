import React from 'react';
import { Language } from '../types';

interface WhatsAppWidgetProps {
  lang: Language;
}

export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.497-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.519l-.578-.01c-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.23 3.111c.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.897.119.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2 22l4.981-1.393A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.572 0-3.05-.445-4.312-1.218l-.31-.189-2.964.829.843-2.887-.207-.329A8.143 8.143 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818c4.511 0 8.182 3.67 8.182 8.182 0 4.511-3.671 8.182-8.182 8.182z"
    />
  </svg>
);

export const WhatsAppFloatingButton: React.FC<WhatsAppWidgetProps> = ({ lang }) => {
  const whatsappUrl = `https://wa.me/491775355900?text=${encodeURIComponent(
    lang === 'de'
      ? 'Hallo Gastro Books, ich interessiere mich für Lohnabrechnung und Buchhaltung.'
      : 'Hello Gastro Books, I would like to inquire about payroll and bookkeeping.'
  )}`;

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed bottom-5 right-5 z-40 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 border border-white/20"
        title={lang === 'de' ? 'WhatsApp Chat starten' : 'Start WhatsApp Chat'}
      >
        <WhatsAppIcon size={22} className="shrink-0" />
        <span className="text-xs font-serif-header font-bold tracking-wide hidden sm:inline whitespace-nowrap">
          {lang === 'de' ? 'WhatsApp Chat' : 'Chat on WhatsApp'}
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </a>
    </aside>
  );
};
