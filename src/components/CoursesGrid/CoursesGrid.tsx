'use client';
import Image from 'next/image';
import IPN_LOGO from '@/assets/ipn_logo.png';
import UNAM_LOGO from '@/assets/unam_logo.png';
import UAM_LOGO from '@/assets/uam_logo.png';
import COMI_LOGO from '@/assets/comi.png';
import CENEVAL_LOGO from '@/assets/ceneval.png';
import Link from 'next/link';
import { Card } from '../ui/card';
import { motion } from 'framer-motion';
import { Calendar, Star, Users } from 'lucide-react';
import { Button } from '../ui/button';

const courses = [
  {
    title: 'Curso de admisión al IPN',
    description:
      'Un curso especialmente diseñado para que ingreses al politécnico, recientemente actualizado este curso es impartido con mucho cariño y dedicación por politécnicos.',
    image: IPN_LOGO,
  },
  {
    title: 'Curso de admisión a la UNAM',
    description:
      'Curso de ingreso a la UNAM. ¡No te quedes fuera de la UNAM! Este curso te prepara con todo en todas las áreas que necesitas para asegurar tu lugar en la UNAM. ',
    image: UNAM_LOGO,
  },
  {
    title: 'Curso para COMIPEMS',
    description:
      'Asegura tu lugar en alguna de tus primeras opciones. Con este curso lograrás ingresar a las escuelas de nivel medio superior de la UNAM y del IPN',
    image: COMI_LOGO,
  },
  {
    title: 'Curso CENEVAL',
    description:
      'Un curso especialmente diseñado para que ingreses al politécnico, recientemente actualizado este curso es impartido con mucho cariño y dedicación por politécnicos. ',
    image: CENEVAL_LOGO,
  },
  {
    title: 'Curso de admisión a la UAM',
    description:
      'Ingresa a la UAM preparándote en cada una de sus áreas y además recibe toda la orientación necesaria para superar con éxito este exámen de admisión de está gran universidad. ',
    image: UAM_LOGO,
  },
  {
    title: 'Asesorías',
    description:
      'Te ayudamos en tu día a día con las materias que más se te dificulten. Nosotros te daremos clases énfocadas en que pases tus ETS, extras o éxamenes curriculares. ',
  },
];

//

export function CoursesGrid() {
  return (
    <div className="w-full grid grid-cols-1 gap-x-8 space-y-9 md:grid-cols-3 overflow-hidden py-8 items-end">
      {courses.map(({ title, description, image }) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="group"
        >
          <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-b from-card/50 to-card p-1 rounded-3xl shadow-md">
            <div className="relative h-full rounded-lg bg-card p-5">
              {/* {isPopular && ( 
                <Badge
                  variant="default"
                  className="absolute -right-[3px] -top-[3px] rounded-bl-none bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-white"
                >
                  Popular
                </Badge>
                 )} */}

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <motion.div
                    className="relative h-16 w-16 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-2 shadow-2xl"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={image || '/placeholder.svg'}
                      alt={title}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                  <div className="flex gap-2">
                    <div className="rounded-full bg-[rgba(99,102,241,0.1)] p-2 text-yellow-600 transition-colors group-hover:bg-yellow-200">
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="line-clamp-2 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Inscripción abierta</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>7 lugares disponibles</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:flex-row">
                  <Button
                    asChild
                    className="group relative bg-gradient-to-r from-primary to-[var(rgba(255,182,0,0.2))] transition-all hover:from-primary"
                  >
                    <Link
                      href="/register"
                      className="relative group-hover:bg-accent"
                    >
                      <span className="relative z-10">Registrarse ahora</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-2 transition-colors hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50"
                  >
                    <Link
                      href={`/courses/${encodeURIComponent(
                        title.toLowerCase()
                      )}`}
                    >
                      Más información
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
