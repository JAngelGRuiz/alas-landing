import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alas Cursos',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  description:
    'Alas es una institución con más de 20 años de historia, especializada en ayudar los estudiantes de México a aprobar el exámen de admisión de universidades y esculeas como la UNAM, IPN, UAM, Comipems y Ceneval',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
