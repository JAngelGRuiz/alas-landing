'use client';
import { useEffect, useMemo, useState } from 'react';
import { ReviewCard } from '@/components/ReviewsCard/ReviewCard';
import { useIsMobile } from '@/hooks/useMobile';
import { AnimatePresence } from 'framer-motion';

const REVIEWS = [
  {
    id: 1,
    author: {
      name: 'Craig Sayler',
      title: 'Cybersecurity Leadership @ Ontra',
      image: '/placeholder.svg?height=100&width=100',
    },
    content:
      'The most valued goal for cybersecurity is first frictionless visibility. That one sentence describes Wiz extremely well. Well done Wiz!',
  },
  {
    id: 2,
    author: {
      name: 'Bilal Omarjee',
      title: 'Principal Cloud Architect @ Oracle',
      image: '/placeholder.svg?height=100&width=100',
    },
    content: 'Nobody beats the wiz!',
  },
  {
    id: 3,
    author: {
      name: 'Heath Anderson',
      title: 'VP, Information Security & IT',
      image: '/placeholder.svg?height=100&width=100',
    },
    content:
      'We were able to get 100+ findings from Wiz within 2 days of deployment, compared to an individual needing 6 months to deliver that type of visibility.',
  },
  {
    id: 4,
    author: {
      name: 'Craig Sayler',
      title: 'Cybersecurity Leadership @ Ontra',
      image: '/placeholder.svg?height=100&width=100',
    },
    content:
      'The most valued goal for cybersecurity is first frictionless visibility. That one sentence describes Wiz extremely well. Well done Wiz!',
  },
  {
    id: 5,
    author: {
      name: 'Bilal Omarjee',
      title: 'Principal Cloud Architect @ Oracle',
      image: '/placeholder.svg?height=100&width=100',
    },
    content: 'Nobody beats the wiz!',
  },
  {
    id: 6,
    author: {
      name: 'Heath Anderson',
      title: 'VP, Information Security & IT',
      image: '/placeholder.svg?height=100&width=100',
    },
    content:
      'We were able to get 100+ findings from Wiz within 2 days of deployment, compared to an individual needing 6 months to deliver that type of visibility.',
  },
  {
    id: 7,
    author: {
      name: 'Craig Sayler',
      title: 'Cybersecurity Leadership @ Ontra',
      image: '/placeholder.svg?height=100&width=100',
    },
    content:
      'The most valued goal for cybersecurity is first frictionless visibility. That one sentence describes Wiz extremely well. Well done Wiz!',
  },
  {
    id: 8,
    author: {
      name: 'Bilal Omarjee',
      title: 'Principal Cloud Architect @ Oracle',
      image: '/placeholder.svg?height=100&width=100',
    },
    content: 'Nobody beats the wiz!',
  },
  {
    id: 9,
    author: {
      name: 'Heath Anderson',
      title: 'VP, Information Security & IT',
      image: '/placeholder.svg?height=100&width=100',
    },
    content:
      'We were able to get 100+ findings from Wiz within 2 days of deployment, compared to an individual needing 6 months to deliver that type of visibility.',
  },
  {
    id: 10,
    author: {
      name: 'Craig Sayler',
      title: 'Cybersecurity Leadership @ Ontra',
      image: '/placeholder.svg?height=100&width=100',
    },
    content:
      'The most valued goal for cybersecurity is first frictionless visibility. That one sentence describes Wiz extremely well. Well done Wiz!',
  },
  {
    id: 11,
    author: {
      name: 'Bilal Omarjee',
      title: 'Principal Cloud Architect @ Oracle',
      image: '/placeholder.svg?height=100&width=100',
    },
    content: 'Nobody beats the wiz!',
  },
  {
    id: 12,
    author: {
      name: 'Juanito',
      title: 'VP, Information Security & IT',
      image: '/placeholder.svg?height=100&width=100',
    },
    content:
      'We were able to get 100+ findings from Wiz within 2 days of deployment, compared to an individual needing 6 months to deliver that type of visibility.',
  },
];

export function ReviewsDashboard() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
    }, 4000); // Change review every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const gropReviews = useMemo(() => {
    const reviews = [];
    const total = REVIEWS.length;
    for (let i = 0; i < Math.floor(total / 2); i++) {
      reviews[i] = [REVIEWS[i], REVIEWS[total - 1 - i]];
    }
    return reviews;
  }, []);

  return (
    <section className="w-full overflow-hidden bg-slate-50 py-12 h-[600px]">
      <h2 className="text-center text-3xl font-bold tracking-tight mb-12">
        Mira lo que nuestros estudiantes piensan
      </h2>

      {isMobile ? (
        <div
          className="relative w-full"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="popLayout">
            <ReviewCard
              key={currentIndex}
              {...REVIEWS[currentIndex]}
              carroussel
            />
          </AnimatePresence>
        </div>
      ) : (
        <div className="relative flex gap-x-8 w-full animate-scroll">
          {gropReviews.map(([top, down], i) => (
            <div className="flex flex-col gap-y-6 min-w-[400px]" key={i}>
              {top && (
                <ReviewCard
                  key={top.id}
                  author={top.author}
                  content={top.content}
                />
              )}
              {down && (
                <ReviewCard
                  key={down.id}
                  author={down.author}
                  content={down.content}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
