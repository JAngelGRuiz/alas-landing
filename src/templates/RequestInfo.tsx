import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Preview,
  Button,
  Hr,
  Tailwind,
} from '@react-email/components';

interface ClientInquiryEmailProps {
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  inquiryDate?: string;
  inquiryMessage?: string;
}

export function ClientInquiryEmail({
  clientName = 'Sarah Johnson',
  clientPhone = '+1 (555) 123-4567',
  inquiryDate = 'Just now',
}: ClientInquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Client Inquiry from {clientName}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="max-w-[600px] mx-auto">
            {/* Header with Logo */}
            {/* <Section className="py-6 text-center">
              <Img
                src="https://via.placeholder.com/120x50?text=ALAS"
                width="120"
                height="50"
                alt="ALAS School"
                className="mx-auto"
              />
            </Section> */}

            <Section className="bg-white rounded-lg p-8 shadow-sm">
              <Text className="text-2xl font-bold text-center text-gray-800 mb-6">
                Nueva Solicitud de informacion
              </Text>

              <Text className="text-gray-600 mb-6">
                Has recibido una solicitud de un alumno potencial.
              </Text>

              <Section className="bg-blue-50 rounded-md p-5 mb-6">
                <Text className="font-semibold text-gray-800 mb-3">
                  Datos del interesado
                </Text>
                <Text className="text-gray-700 mb-2">
                  <span className="font-medium">Nombre:</span> {clientName}
                </Text>
                <Text className="text-gray-700 mb-2">
                  <span className="font-medium">Número:</span> {clientPhone}
                </Text>
                <Text className="text-gray-700 mb-2">
                  <span className="font-medium">Fecha de solicitud:</span>{' '}
                  {inquiryDate}
                </Text>
              </Section>

              <Section className="text-center my-8">
                <Button
                  href={`tel:+52${clientPhone.replace(/\s+/g, '')}`}
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md m-2 no-underline"
                >
                  Llamar ahora mismo
                </Button>
              </Section>

              <Hr className="border-gray-200 my-6" />

              <Text className="text-gray-600 italic text-center text-sm">
                Ponte en contacto con el prospecto a la brevedad. <br />
                ¡Recuerda mientras más pronto mejor!
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ClientInquiryEmail;
