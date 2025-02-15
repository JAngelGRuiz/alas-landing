import { cn } from '@/lib/utils';

interface ITitle {
  children: string;
  className?: string;
}

export function Title({ children, className }: ITitle) {
  return (
    <h1
      className={cn(
        'text-4xl sm:text-[50px] font-normal w-full text-center',
        className
      )}
    >
      {children}
    </h1>
  );
}
