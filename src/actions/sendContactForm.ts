'use server';

import EmailTemplate from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactForm = async (prevState: unknown, formData: FormData) => {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    await resend.emails.send({
      from: 'contact@istanaloft.com',
      to: ['falukhouma27@gmail.com', 'giulioformicola@gmail.com'],
      subject: 'Nuovo messagio da Istana Loft',
      react: EmailTemplate({ name, email, message }),
      replyTo: email,
    });

    return { success: true };
  } catch {
    return { error: true };
  }
};

export default sendContactForm;
