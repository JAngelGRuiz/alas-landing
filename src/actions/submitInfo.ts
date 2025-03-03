'use server';
import { rateLimit } from '@/lib/rate-limiter';
import { ClientInquiryEmail } from '@/templates/RequestInfo';
import { headers } from 'next/headers';
import { Resend } from 'resend';

type actionState = {
  message: string | null;
  wasSuccess: boolean;
};

export const handleSubmit = async (
  prevState: actionState,
  queryData: FormData
): Promise<actionState> => {
  const phone = queryData.get('phone');
  const name = queryData.get('name');

  if (!(name && phone)) {
    return { message: 'Fill the form values correctly', wasSuccess: false };
  }

  const ip = (await headers()).get('x-forwarded-for') ?? 'unknown';
  const isRateLimited = rateLimit(ip);

  if (isRateLimited) {
    return { message: 'Too many attemps to submit', wasSuccess: false };
  }

  try {
    const resend = new Resend(process.env.resend_api_key);

    resend.emails.send({
      from: 'landing@cursosalas.mx',
      to: 'ingreso@cursosalas.com',
      subject: 'Solicitan Informacion',
      react: ClientInquiryEmail({
        clientPhone: String(phone),
        clientName: String(name),
        inquiryDate: new Date().toLocaleString(),
      }),
    });

    return {
      message: 'Te contactaremos a la brevedad!',
      wasSuccess: true,
    };
  } catch (error) {
    console.log(error);
    return {
      message: 'Something went wrong. Try again later!',
      wasSuccess: false,
    };
  }
};
