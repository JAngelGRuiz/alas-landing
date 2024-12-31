import { Button } from '../ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

export function CallMeBanner() {
  return (
    <div className="min-h-fit sm:h-[300px] py-10 sm:py-0 bg-primary w-full flex flex-col md:flex-row items-center justify-center sm:gap-x-6 my-5">
      <div className="space-y-2">
        <h3 className="text-4xl text-center sm:text-5xl">¡Dejános ayudarte!</h3>
        <p className="text-sm ">
          Te llamamos para resolver todas las dudas que necesitas.
        </p>
      </div>
      <form className="grid place-items-center space-y-3 sm:space-y-5 py-10 sm:py-0">
        <label htmlFor="phone-input" className="text-sm">
          Ingresa tu número
        </label>
        <InputOTP maxLength={10} id="phone-input">
          <InputOTPGroup className="gap-0">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>

          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>

          <InputOTPGroup>
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
          </InputOTPGroup>

          <InputOTPGroup>
            <InputOTPSlot index={8} />
            <InputOTPSlot index={9} />
          </InputOTPGroup>
        </InputOTP>

        <Button variant="secondary" size="lg">
          Contáctenme
        </Button>
      </form>
    </div>
  );
}
