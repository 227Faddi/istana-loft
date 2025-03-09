'use client';

import sendContactForm from '@/actions/sendContactForm';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

const ContactForm = () => {
  const router = useRouter();
  const t = useTranslations('ContactPage.form');
  const [state, sendForm, isPending] = useActionState(sendContactForm, null);

  useEffect(() => {
    if (state?.error) {
      alert('Error, Try Again');
    } else if (state?.success) {
      router.push('/contact/success');
    }
  }, [state, router]);

  return (
    <form
      action={sendForm}
      className="max-w-[384px] sm:max-w-full sm:w-96 bg-white px-6 py-3 rounded-3xl"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="py-3">
        <h2 className="text-gray-900 text-3xl text-center">{t('title')}</h2>
      </div>
      <div className="py-2">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
          {t('name')}
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder={t('nameHolder')}
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
      </div>
      <div className="py-2">
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
          {t('email')}
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder={t('emailHolder')}
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
      </div>
      <div className="py-2">
        <label
          htmlFor="message"
          className="block font-medium text-gray-700 mb-2"
        >
          {t('message')}
        </label>
        <textarea
          required
          id="message"
          name="message"
          placeholder={t('messageHolder')}
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
      </div>
      <div className="py-2">
        <button
          className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500"
          type="submit"
        >
          {isPending ? 'Loading...' : t('submit')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
