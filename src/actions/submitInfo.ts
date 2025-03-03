'use server';
import { rateLimit } from '@/lib/rate-limiter';
import { ClientInquiryEmail } from '@/templates/RequestInfo';
import { headers } from 'next/headers';
import { Resend } from 'resend';

export const handleSubmit = async (formData: FormData) => {
  const resend = new Resend(process.env.resend_api_key);
  const ip = (await headers()).get('x-forwarded-for') ?? 'unknown';
  const isRateLimited = rateLimit(ip);

  if (isRateLimited) {
    return;
  }

  try {
    resend.emails.send({
      from: 'landing@cursosalas.com',
      to: 'ingreso@cursosalas.com',
      subject: 'Solicitan Informacion',
      react: ClientInquiryEmail({
        clientPhone: String(formData.get('phone')),
        clientName: String(formData.get('email')),
        inquiryDate: new Date().toLocaleDateString(),
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
