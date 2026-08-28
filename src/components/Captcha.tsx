import React, { useState, useEffect, useCallback } from 'react';
import { ShieldCheck, RefreshCw, Check, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface CaptchaProps {
  lang: Language;
  onVerifyChange: (isVerified: boolean) => void;
  theme?: 'light' | 'dark';
  errorMessage?: string;
}

export const Captcha: React.FC<CaptchaProps> = ({
  lang,
  onVerifyChange,
  theme = 'light',
  errorMessage,
}) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  const generateChallenge = React.useCallback(() => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setUserAnswer('');
    setIsVerified(false);
    setError(false);
    onVerifyChange(false);
  }, [onVerifyChange]);

  useEffect(() => {
    generateChallenge();
  }, [generateChallenge]);

  const handleAnswerChange = (val: string) => {
    setUserAnswer(val);
    const parsed = parseInt(val.trim(), 10);
    if (parsed === num1 + num2) {
      setIsVerified(true);
      setError(false);
      onVerifyChange(true);
    } else {
      setIsVerified(false);
      onVerifyChange(false);
    }
  };

  const handleBlur = () => {
    if (userAnswer.trim() !== '') {
      const parsed = parseInt(userAnswer.trim(), 10);
      if (parsed !== num1 + num2) {
        setError(true);
      }
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`p-3.5 sm:p-4 rounded-xl border text-xs font-serif-header transition-all ${
        isDark
          ? 'bg-slate-900/90 border-slate-700 text-slate-200'
          : 'bg-[#FAF8F5] border-[#E8E2D9] text-[#2C2A29]'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Challenge Header */}
        <div className="flex items-center gap-2.5">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              isVerified
                ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/40'
                : 'bg-[#B89355]/15 text-[#B89355] border border-[#B89355]/30'
            }`}
          >
            {isVerified ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              <ShieldCheck className="w-4 h-4" />
            )}
          </div>
          <div>
            <div className="font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
              <span>{lang === 'de' ? 'SPAM-SCHUTZ CAPTCHA' : 'CAPTCHA VERIFICATION'}</span>
              <span className="text-[#B89355]">*</span>
            </div>
            <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {lang === 'de'
                ? `Sicherheitsfrage: Was ist ${num1} + ${num2}?`
                : `Security check: What is ${num1} + ${num2}?`}
            </p>
          </div>
        </div>

        {/* Challenge Input & Actions */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            onBlur={handleBlur}
            placeholder="?"
            className={`w-20 text-center py-2 px-2 rounded-lg border font-bold text-sm focus:outline-none transition-all ${
              isVerified
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : error
                ? 'border-red-500 bg-red-500/10 text-red-500'
                : isDark
                ? 'bg-slate-800 border-slate-700 text-white focus:border-[#B89355]'
                : 'bg-white border-[#E8E2D9] text-[#2C2A29] focus:border-[#B89355]'
            }`}
          />

          <button
            type="button"
            onClick={generateChallenge}
            title={lang === 'de' ? 'Neue Aufgabe' : 'New puzzle'}
            className={`p-2 rounded-lg border transition cursor-pointer ${
              isDark
                ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'
                : 'bg-white border-[#E8E2D9] text-slate-500 hover:text-[#2C2A29] hover:bg-[#F7F3EB]'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Verification status feedback */}
      {isVerified && (
        <div className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5" />
          <span>{lang === 'de' ? 'Sicherheitsprüfung erfolgreich!' : 'Human verified!'}</span>
        </div>
      )}

      {(error || errorMessage) && !isVerified && (
        <div className="mt-2 text-[11px] text-red-500 font-semibold flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>
            {errorMessage ||
              (lang === 'de'
                ? 'Falsches Ergebnis. Bitte versuchen Sie es erneut.'
                : 'Incorrect answer. Please try again.')}
          </span>
        </div>
      )}
    </div>
  );
};
