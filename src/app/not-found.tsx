import Link from 'next/link';
import { ArrowLeft, BookOpen, Pencil } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <div className="absolute -left-10 transform -rotate-12">
            <Pencil size={64} className="text-navy-blue" />
          </div>
          <div className="absolute -right-10 transform rotate-12">
            <BookOpen size={64} className="text-purple-600" />
          </div>

          <h1 className="text-9xl font-bold text-navy-blue">404</h1>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mt-4">
              ¡Ups...Página no encontrada!
            </h2>
          </div>

          <p className="text-xl text-gray-600 mt-6 max-w-lg mx-auto">
            Parece que esta página se saltó la clase. Incluso nuestros mejores
            estudiantes se pierden a veces.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-yellow-500 text-navy-blue font-medium px-8 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-400 transition-colors"
            >
              <ArrowLeft size={20} />
              Volver al inicio
            </Link>
            <Link
              href="/#courses"
              className="bg-white border-2 border-navy-blue text-navy-blue font-medium px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              Ver nuestros cursos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
