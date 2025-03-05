import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users } from 'lucide-react';
import { ContactForm } from '../ContactForm/ContactForm';

export function CallMeBanner() {
  return (
    <section className="relative overflow-hidden max-w-7xl rounded-3xl mx-auto mt-40">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[#0075FF]" />

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-2">
          {/* Left column - Content */}
          <div className="max-w-xl">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white hover:bg-white/30"
              >
                <Users className="mr-1 h-3 w-3" />
                +5000 Estudiantes hemos ayudado
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white hover:bg-white/30"
              >
                <CheckCircle className="mr-1 h-3 w-3" />
                Garantía
              </Badge>
            </div>

            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              ¡Dejános ayudarte!
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Te llamamos para resolver todas las dudas que necesitas. Te
              orientamos sobre el proceso de admisión y te decimos como podemos
              apoyarte.
            </p>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-x-4">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-orange-200 to-yellow-200"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-white">
                +50 estudiantes se contactaron hoy
              </p>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-white/20 text-white/90 rounded-2xl p-8 lg:p-12">
            {/* {isSubmitted ? (
              <div className="text-center text-white">
                <CheckCircle className="mx-auto h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  ¡Gracias por contactarnos!
                </h3>
                <p>Te llamaremos pronto para resolver todas tus dudas.</p>
              </div>
            ) : ( */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
