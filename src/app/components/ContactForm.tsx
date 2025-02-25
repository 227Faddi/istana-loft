'use client';

import sendContactForm from '@/actions/sendContactForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: 'Name is required.' })
      .max(25, { message: 'Name cannot exceed 25 characters.' }),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Please enter a valid email address.' })
      .max(25, { message: 'Email cannot exceed 25 characters.' }),
    message: z
      .string()
      .trim()
      .min(1, { message: 'Message is required.' })
      .max(80, { message: 'Message cannot exceed 80 characters.' }),
  })
  .strict();

type ContactForm = z.infer<typeof schema>;

const ContactForm = () => {
  const router = useRouter();
  const t = useTranslations('ContactPage.form');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<ContactForm> = async (formData) => {
    await sendContactForm(formData);
    router.push('/contact/success');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[384px] sm:max-w-full sm:w-96 bg-white px-6 py-3 rounded-3xl"
      noValidate
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
          {...register('name')}
          type="text"
          id="name"
          placeholder={t('nameHolder')}
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
        <p className="text-red-700 h-4 text-sm sm:text-base">
          {errors?.name?.message}
        </p>
      </div>
      <div className="py-2">
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
          {t('email')}
        </label>
        <input
          {...register('email')}
          type="text"
          id="email"
          placeholder={t('emailHolder')}
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
        <p className="text-red-700 h-4 text-sm sm:text-base">
          {errors?.email?.message}
        </p>
      </div>
      <div className="py-2">
        <label
          htmlFor="message"
          className="block font-medium text-gray-700 mb-2"
        >
          {t('message')}
        </label>
        <textarea
          {...register('message')}
          id="message"
          placeholder={t('messageHolder')}
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
        <p className="text-red-700 h-4 text-sm sm:text-base">
          {errors?.message?.message}
        </p>
      </div>
      <div className="py-2">
        <button
          className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500"
          type="submit"
        >
          {isSubmitting ? '...' : t('submit')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
