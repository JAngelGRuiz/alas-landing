'use server';
import { rateLimit } from '@/lib/rate-limiter';
import { ClientInquiryEmail } from '@/templates/RequestInfo';
import { headers } from 'next/headers';
import { Resend } from 'resend';
import { z } from 'zod';

type actionState = {
  message: string | null;
  wasSuccess: boolean;
  error?: boolean;
};

const formSchema = z.object({
  name: z.string().min(5, { message: 'Ingresa tu nombre completo' }),
  phone: z
    .string()
    .length(10, { message: 'Ingresa un número válido de 10 digitos.' }),
});

export const handleSubmit = async (
  prevState: actionState,
  queryData: FormData
): Promise<actionState> => {
  const phone = queryData.get('phone');
  const name = queryData.get('name');

  if (!(name && phone)) {
    return {
      message: 'Ingresa todos los datos solicitados',
      wasSuccess: false,
      error: true,
    };
  }

  try {
    await formSchema.parseAsync({ name, phone });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: `${error.issues[0].message}`,
        wasSuccess: false,
        error: true,
      };
    } else {
      console.error('Unexpected error: ', error);
    }
  }

  const ip = (await headers()).get('x-forwarded-for') ?? 'unknown';
  const isRateLimited = rateLimit(ip);

  if (isRateLimited) {
    return {
      message: 'Too many attemps to submit',
      wasSuccess: false,
      error: true,
    };
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      message: 'Hubo un error al mandar tus datos. Intentalo nuevamente',
      wasSuccess: false,
      error: true,
    };
  }
};
