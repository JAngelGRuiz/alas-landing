'use client';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export function Header() {
  const [hasShadow, setHasShadow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 100);
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
      <nav className="hidden sm:flex gap-x-16 pr-16">
        <Link href="/">Cursos</Link>
        <Link href="/">Precios</Link>
        <Link href="/">Nosotros</Link>
      </nav>

      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="md:hidden p-0"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <Menu className="!h-6 !w-8" />
          </Button>
        </DrawerTrigger>
        <DrawerContent
          className="h-full rounded-none"
          hiddeHandler
          showCloseButton
        >
          <DrawerHeader>
            <DrawerTitle>Nostros te ayudamos</DrawerTitle>
            <DrawerDescription>
              Ingresa tus datos y nos pondremos en contacto a la brevedad para
              ayudarte con tus dudas, ¡Sin compromiso alguno!
            </DrawerDescription>
          </DrawerHeader>
          <nav>
            <h1>menu</h1>
          </nav>
          <DrawerFooter>
            <Button>Enviar mensaje</Button>
            <Button>Enviar mensaje</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
