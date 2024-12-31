import { Button } from '@/components/ui/button';

export function ButtonSystem({ children, className, ...props }) {
  return (
    <Button size="sm" className={`rounded-full ${className}`} {...props}>
      {children}
    </Button>
  );
}
