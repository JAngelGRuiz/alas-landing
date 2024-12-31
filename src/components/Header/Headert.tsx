import { Phone } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="px-4 w-full bg-white flex justify-between items-center sticky top-0 left-0 py-4 z-20">
      <h1>Alas Logo</h1>
      <nav className="hidden sm:flex gap-x-16">
        <Link href="/">Cursos</Link>
        <Link href="/">Precios</Link>
        <Link href="/">Nosotros</Link>
      </nav>
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-foreground gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="https://wa.me/+525516917248?text=Estoy%20interesado%20en%20obtener%20más%20información%20acerca%20de%20los%20cursos%20de%20ingreso.
"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone />
        Llamar ahora
      </a>
    </header>
  );
}
