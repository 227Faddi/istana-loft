'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
  name: string;
  email: string;
  message: string;
};

const sendContactForm = async (formData: FormData) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'falukhouma27@gmail.com',
      subject: 'New contact from Istana Loft',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\n`,
      replyTo: formData.email,
    });
  } catch {
    return { error: 'Error' };
  }
};

export default sendContactForm;
