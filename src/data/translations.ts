import { FaqItem, ServiceDetail } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'payroll',
    number: '01',
    titleDe: 'Lohnabrechnung für Gastronomie (Lohnbuchhaltung)',
    titleEn: 'Gastronomy Payroll Services (Lohnabrechnung)',
    shortDescDe: 'Zuverlässige Lohnabrechnung für Minijobs, Vollzeit, Werkstudenten und steuerfreie SFN-Zuschläge (§ 3b EStG).',
    shortDescEn: 'Reliable payroll processing for Minijobs, full-time staff, student workers, and tax-free SFN shift bonuses.',
    featuresDe: [
      'Abrechnung von Minijobs, Midijobs & Vollzeitkräften',
      'Berechnung steuerfreier Sonn-, Feiertags- & Nachtzuschläge (SFN § 3b EStG)',
      'Sofortmeldungen vor Schichtbeginn für Zoll-Sicherheit',
      'An- und Abmeldungen bei Krankenkassen & Finanzamt',
      'Monatliche Lohnzettel direkt als PDF'
    ],
    featuresEn: [
      'Payroll for Minijobs, Midijobs & Full-time contracts',
      'Tax-free Sunday, Holiday & Night surcharge calculations (§ 3b EStG)',
      'Instant Sofortmeldung registration before shift start for Zoll compliance',
      'Registrations with German health insurance funds & tax offices',
      'Digital monthly payslips sent directly as PDF'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    figureLabel: '[ 01 // LOHNABRECHNUNG GASTRO ]'
  },
  {
    id: 'bookkeeping',
    number: '02',
    titleDe: 'Buchhaltungsservice & Belegverarbeitung (Büroservice)',
    titleEn: 'Gastronomy Bookkeeping & Backoffice Support',
    shortDescDe: 'Vorbereitende Buchhaltung, Kassenbuchprüfung, Belegsortierung und DATEV-Export für Ihren Steuerberater.',
    shortDescEn: 'Preparatory bookkeeping, cashbook reconciliations, supplier receipt processing, and clean DATEV exports.',
    featuresDe: [
      'Sortierung und digitale Erfassung aller Eingangsrechnungen & Belege',
      'Kassenbuchprüfung & Abstimmung der Tageskassenberichte (GoBD)',
      'Nahtloser DATEV-Export direkt an Ihren Steuerberater (Unternehmen Online)',
      'Zuordnung von Banktransaktionen zu Lieferantenrechnungen',
      'Übersichtliche Monatsübersichten Ihrer Betriebsausgaben'
    ],
    featuresEn: [
      'Digital sorting and logging of supplier invoices & receipts',
      'POS cashbook checks & daily Z-report reconciliations (GoBD compliant)',
      'Seamless DATEV export packages sent directly to your Steuerberater',
      'Bank transaction matching with supplier invoices',
      'Clear monthly summaries of kitchen & operational expenses'
    ],
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
    figureLabel: '[ 02 // BUCHHALTUNG GASTRO ]'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'payroll',
    questionDe: 'Arbeiten Sie auch mit kleinen Cafés und einzelnen Restaurants zusammen?',
    questionEn: 'Do you work with small cafes and individual gastronomy venues?',
    answerDe: 'Ja, absolut! Wir betreuen kleine Specialty Coffee Shops ab 2 Mitarbeitern genauso wie große Restaurants, Bistros und Bar-Ketten.',
    answerEn: 'Yes, absolutely! We support small specialty coffee shops with just 2 staff members as well as large restaurants, bistros, and bars.'
  },
  {
    id: 'faq-2',
    category: 'general',
    questionDe: 'Bieten Sie direkten Kontakt an?',
    questionEn: 'Do you offer direct personal contact?',
    answerDe: 'Ja! Unser Team in Berlin bietet Ihnen einen festen, direkten Ansprechpartner per Telefon, WhatsApp oder E-Mail ohne Callcenter-Wartezeiten.',
    answerEn: 'Yes! Our Berlin team provides a direct, dedicated contact person via phone, WhatsApp, or email with no call center waiting times.'
  },
  {
    id: 'faq-3',
    category: 'payroll',
    questionDe: 'Was ist eine Sofortmeldung und wie schnell wird sie erledigt?',
    questionEn: 'What is Sofortmeldung and how fast can you register new staff?',
    answerDe: 'In der Gastronomie müssen neue Mitarbeiter VOR der ersten Schicht beim Zoll / der Rentenversicherung gemeldet werden. Wir erledigen Sofortmeldungen auf Wunsch innerhalb von Minuten.',
    answerEn: 'In German gastronomy, new staff must be registered with social security BEFORE starting their first shift. We perform instant Sofortmeldungen within minutes.'
  },
  {
    id: 'faq-4',
    category: 'bookkeeping',
    questionDe: 'Ersetzt der Büroservice meinen Steuerberater?',
    questionEn: 'Does your backoffice service replace my tax advisor (Steuerberater)?',
    answerDe: 'Wir übernehmen die laufende Lohnabrechnung und vorbereitende Buchhaltung. Ihr Steuerberater erhält fertige Dateien für den Jahresabschluss.',
    answerEn: 'We handle ongoing payroll and receipt sorting. Your tax advisor (Steuerberater) receives ready-to-import files for annual tax returns.'
  }
];
