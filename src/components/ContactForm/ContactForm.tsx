'use client';
import { handleSubmit } from '@/actions/submitInfo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FormEvent, startTransition, useActionState, useEffect } from 'react';
import { toast } from 'sonner';

interface IContactFrom {
  autoFocus?: boolean;
}

export function ContactForm({ autoFocus = true }: IContactFrom) {
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

  const onSubmit = (e: FormEvent) => {
    e?.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    startTransition(() => submitRequest(formData));
  };

  return (
    <form className={'grid items-start gap-4'} onSubmit={onSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre del estudiante</Label>
        <Input
          id="name"
          name="name"
          placeholder="Bruce Wayne"
          required
          autoFocus={autoFocus}
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
      <p className="text-red-700">{state.error && state.message}</p>
      <Button type="submit" disabled={isPending}>
        Quiero información
      </Button>
    </form>
  );
}
