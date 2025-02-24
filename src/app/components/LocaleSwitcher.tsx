'use client';

import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const [, startTransition] = useTransition();

  const changeLanguage = () => {
    const locale = t('lang') as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <button
      onClick={changeLanguage}
      className="text-gray-800 text-lg cursor-pointer"
    >
      {t('lang').toUpperCase()}
    </button>
  );
};

export default LocaleSwitcher;
