import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[rgb(0,3,33)] px-8 min-h-screen md:min-h-[500px] text-white -mt-32 pt-40">
      <div className="flex-1 flex flex-col justify-around">
        <h2>Logo</h2>
        <div>Social</div>
        <div className="flex flex-col gap-y-8">
          <Link
            className="flex items-center gap-x-4"
            href="https://maps.app.goo.gl/h1xcPVxfYRBFZJpx6"
            target="_blank"
          >
            <MapPin className="min-w-[24px]" />
            <span>
              Trujillo 668, Lindavista, Gustavo A. Madero, 07300 Ciudad de
              México, CDMX
            </span>
          </Link>
          <Link className="flex items-center gap-x-4" href="tel:+525538897507">
            <Phone />
            <span>+525538897507</span>
          </Link>
          <Link className="flex items-center gap-x-4" href="tel:+525538897507">
            <Mail />
            <span>info@cursoalas.com.mx</span>
          </Link>
        </div>
      </div>
      <div className="border-t-2 border-gray-600 py-5 flex flex-col sm:flex-row items-center text-center gap-y-5 justify-between text-white text-sm">
        <p>@2025. Todos los derechos reservados cursos alas.</p>
        <span>Made with love by JAGR</span>
      </div>
    </footer>
  );
}
