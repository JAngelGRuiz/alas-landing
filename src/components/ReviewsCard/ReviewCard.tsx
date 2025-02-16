import Image from 'next/image';
import { Star } from 'lucide-react';
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
    <Card className="w-full bg-white shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 mt-0 pt-5">
        <div className="h-12 w-12 rounded-full overflow-hidden relative">
          <Image
            src={author.image || '/placeholder.svg'}
            alt={author.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="tracking-widest text-sm font-semibold">{author.name}</p>
          <p className="tracking-widest text-sm">{author.title}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">&quot;{content}&quot;</p>
      </CardContent>
      <div className="flex w-32 p-4">
        <Star className="ml-auto h-3.5 w-3.5" color="#F3C623" fill="#F3C623" />
        <Star className="ml-auto h-3.5 w-3.5" color="#F3C623" fill="#F3C623" />
        <Star className="ml-auto h-3.5 w-3.5" color="#F3C623" fill="#F3C623" />
        <Star className="ml-auto h-3.5 w-3.5" color="#F3C623" fill="#F3C623" />
        <Star className="ml-auto h-3.5 w-3.5" color="#F3C623" fill="#F3C623" />
      </div>
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
