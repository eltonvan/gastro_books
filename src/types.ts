export type Language = 'de' | 'en';

export interface ServiceDetail {
  id: string;
  number: string;
  titleDe: string;
  titleEn: string;
  shortDescDe: string;
  shortDescEn: string;
  featuresDe: string[];
  featuresEn: string[];
  image: string;
  figureLabel: string;
}

export interface FaqItem {
  id: string;
  category: 'payroll' | 'bookkeeping' | 'general';
  questionDe: string;
  questionEn: string;
  answerDe: string;
  answerEn: string;
}

export interface QuoteFormData {
  fullName: string;
  venueName: string;
  email: string;
  phone: string;
  message: string;
}
