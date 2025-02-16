'use client';
import { Menu, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`p-4 w-full flex justify-between items-center fixed top-0 left-0 z-50 h-[--sidebar-height] bg-background transition-all duration-200  ${
        hasShadow && 'shadow-md'
      }`}
    >
      <h1>Alas Logo</h1>
      <nav className="hidden sm:flex gap-x-16">
        <Link href="/">Cursos</Link>
        <Link href="/">Precios</Link>
        <Link href="/">Nosotros</Link>
      </nav>
      <a
        className="rounded-full border border-solid border-transparent transition-colors hidden md:flex items-center justify-center bg-primary text-foreground gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="tel:+525538897507"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone />
        Llamar ahora
      </a>
      <Button variant="ghost" className="md:hidden">
        <Menu />
      </Button>
    </header>
  );
}
