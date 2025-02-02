import Image from 'next/image';
import IPN_LOGO from '@/assets/ipn_logo.png';
import UNAM_LOGO from '@/assets/unam_logo.png';
import UAM_LOGO from '@/assets/uam_logo.png';
import COMI_LOGO from '@/assets/comi.png';
import CENEVAL_LOGO from '@/assets/ceneval.png';
import Link from 'next/link';

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

export function Courses() {
  return (
    <article className="w-full p-x-4 sm:p-x-10">
      <h2 className="my-16 text-4xl sm:text-5xl font-medium text-center">
        Nuestros cursos
      </h2>
      <div className="w-full grid grid-cols-1 space-y-9 sm:grid-cols-3 overflow-hidden py-8">
        {courses.map(({ title, description, image }) => (
          <Link
            href="/curso/info"
            key={title}
            className="p-5 flex justify-center flex-col relative bg-background overflow-hidden group hover:shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:translate-y-1 hover:z-10 hover:rounded-sm"
          >
            <div className="absolute inset-0 bg-primary rounded-full opacity-35 transition-all duration-500 ease-in-out translate-y-full scale-x-0 origin-bottom group-hover:-translate-y-full group-hover:scale-x-100 group-hover:shadow-sm group-hover:rounded-b-none"></div>
            {image && (
              <Image
                src={image}
                alt="curso logo"
                width={105}
                height={105}
                className="aspect-square"
              />
            )}
            <div className="relative z-10">
              <h5 className="py-4 text-2xl font-bold tracking-tight">
                {title}
              </h5>

              <p className="mb-3 text-base text-foreground">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
