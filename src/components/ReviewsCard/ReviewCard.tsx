import Image from 'next/image';
import { LinkedinIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  author: {
    name: string;
    title: string;
    image: string;
  };
  content: string;
  className?: string;
  carroussel?: boolean;
}

export function ReviewCard({
  author,
  content,
  className,
  carroussel,
}: ReviewCardProps) {
  const cardComponent = (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <div className="h-12 w-12 rounded-full overflow-hidden relative">
          <Image
            src={author.image || '/placeholder.svg'}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.title}</p>
        </div>
        <LinkedinIcon className="ml-auto h-5 w-5 text-[#0A66C2]" />
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );

  if (carroussel) {
    return (
      <motion.div
        className={cn('absolute top-0 mx-4', className)}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {cardComponent}
      </motion.div>
    );
  }
  return cardComponent;
}
