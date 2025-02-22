'use client';

import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const changeLanguage = () => {
    const locale = t('lang') as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <button
      onClick={changeLanguage}
      className="text-gray-800 text-lg mb-5 lg:mb-0 cursor-pointer"
    >
      {t('lang').toUpperCase()}
    </button>
  );
};

export default LocaleSwitcher;
