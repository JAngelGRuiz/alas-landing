'use client';
import { handleSubmit } from '@/actions/submitInfo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

export function ContactForm() {
  const [state, submitRequest, isPending] = useActionState(handleSubmit, {
    message: null,
    wasSuccess: false,
  });

  useEffect(() => {
    if (state.wasSuccess && !isPending) {
      toast.success('En un momento nos ponemos en contacto!', {
        position: 'top-center',
      });
    }
  }, [isPending, state.wasSuccess]);

  return (
    <form className={'grid items-start gap-4'} action={submitRequest}>
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre del estudiante</Label>
        <Input
          id="name"
          name="name"
          placeholder="Bruce Wayne"
          required
          autoFocus
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Número de contacto</Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          placeholder="5512345678"
          required
        />
      </div>
      <Button type="submit" disabled={isPending}>
        Quiero información
      </Button>
    </form>
  );
}
