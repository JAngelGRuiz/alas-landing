import { Zap, LineChart, FileText } from 'lucide-react';
import { Postick } from '../DesignSystem/postick';
import { Title } from '../Title/Title';

export function PostickWall() {
  return (
    <div className="pt-16 px-2 w-full flex flex-col gap-y-16 space-y-16 items-center">
      <Title>No somos tradicionales</Title>
      <div className="space-y-10 sm:space-y-0 w-full flex flex-col sm:flex-row place-items-center sm:gap-x-12 sm:justify-center">
        <div className="transform -rotate-3 sm:-rotate-6">
          <Postick
            color="pink"
            icon={<Zap className="w-5 h-5 text-pink-500" />}
          >
            <b>¡Aprender no sólo es memorizar y repetir!</b> <br />
            Nos enfocamos en que nuestros alumnos desarrollen un pensamiento
            analítico
          </Postick>
        </div>
        <div className="left-40 top-0">
          <Postick
            color="yellow"
            icon={<LineChart className="w-5 h-5 text-amber-500" />}
          >
            Trabajamos con <b>grupos reducidos</b> para maximizar la cálidad de
            nuestra enseñanza.
          </Postick>
        </div>
        <div className="left-80 top-20 transform rotate-6 sm:rotate-10">
          <Postick
            color="green"
            icon={<FileText className="w-5 h-5 text-green-500" />}
          >
            Nuestros profesores no sólo están altamente capacitados... <br />
            <b>¡AMAN ENSEÑAR!</b>
          </Postick>
        </div>
      </div>
    </div>
  );
}
