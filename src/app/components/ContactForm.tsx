'use client';

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
      .max(100, { message: 'Email cannot exceed 100 characters.' }), // Increased limit
    message: z
      .string()
      .trim()
      .min(1, { message: 'Message is required.' })
      .max(60, { message: 'Message cannot exceed 60 characters.' }),
  })
  .strict();

type ContactForm = z.infer<typeof schema>;

const ContactForm = () => {
  const router = useRouter();
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<ContactForm> = async (formData) => {
    console.log(formData);
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
        <h2 className="text-gray-900 text-3xl text-center">
          {t('contactSubTitle')}
        </h2>
      </div>
      <div className="py-3">
        <input
          {...register('name')}
          type="text"
          placeholder="Enter a name"
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
        <p className="text-red-700 h-4 text-sm sm:text-base">
          {errors?.name?.message}
        </p>
      </div>
      <div className="py-3">
        <input
          {...register('email')}
          type="text"
          placeholder="Enter an email"
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
        <p className="text-red-700 h-4 text-sm sm:text-base">
          {errors?.email?.message}
        </p>
      </div>
      <div className="py-3">
        <textarea
          {...register('message')}
          placeholder="Enter a message"
          className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
        />
        <p className="text-red-700 h-4 text-sm sm:text-base">
          {errors?.message?.message}
        </p>
      </div>
      <div className="py-3">
        <button
          className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500"
          type="submit"
        >
          {isSubmitting ? 'Loading' : t('submit')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
