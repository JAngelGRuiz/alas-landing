import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Phone, Users } from 'lucide-react';

export function CallMeBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-90" />

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
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 lg:p-12">
            {/* {isSubmitted ? (
              <div className="text-center text-white">
                <CheckCircle className="mx-auto h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  ¡Gracias por contactarnos!
                </h3>
                <p>Te llamaremos pronto para resolver todas tus dudas.</p>
              </div>
            ) : ( */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Ingresa tu número
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Phone className="h-5 w-5 text-white/60" />
                  </div>
                  <Input
                    // {...register('phone', {
                    //   required: 'El número es requerido',
                    //   pattern: {
                    //     value: /^[0-9]{10}$/,
                    //     message: 'Ingresa un número válido de 10 dígitos',
                    //   },
                    // })}
                    type="tel"
                    className="pl-10 bg-white/20 border-white/20 text-white placeholder:text-white/60"
                    placeholder="Ej: 1234567890"
                  />
                </div>
                {/* {errors.phone && (
                    <p className="mt-2 text-sm text-white/90">
                      {errors.phone.message}
                    </p>
                  )} */}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-orange-600 hover:bg-white/90"
              >
                Contáctenme
              </Button>

              <p className="text-sm text-white/80 text-center">
                Te contactaremos en menos de 24 horas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
