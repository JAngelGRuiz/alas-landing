import { Button } from '@/components/ui/button';
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
import { ButtonSystem } from './Button/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { handleSubmit } from '@/actions/submitInfo';

export function SchedulerDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <ButtonSystem className="bg-primary rounded-md min-h-14 px-4 py-3 text-base font-semibold max-w-xs flex items-center justify-center gap-x-4">
          ¡Agenda una clase muestra!
        </ButtonSystem>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm space-y-2 px-4">
          <DrawerHeader>
            <DrawerTitle>Nostros te ayudamos</DrawerTitle>
            <DrawerDescription>
              Ingresa tus datos y nos pondremos en contacto a la brevedad para
              ayudarte con tus dudas, ¡Sin compromiso alguno!
            </DrawerDescription>
          </DrawerHeader>
          <form className={'grid items-start gap-4'} action={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre del estudiante</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Número de contacto</Label>
              <Input id="phone" type="tel" name="phone" required />
            </div>
            <Button type="submit">Quiero información</Button>
          </form>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
