'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactForm = async (prevState: unknown, formData: FormData) => {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'falukhouma27@gmail.com',
      subject: 'New contact from Istana Loft',
      text: `You received a new message from your Istana Loft property:\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
      replyTo: email,
    });

    return { success: true };
  } catch {
    return { error: true };
  }
};

export default sendContactForm;
