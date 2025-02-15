'use client';
import { useCallback, useEffect, useState } from 'react';

export function useIsMobile(mobileScreenSize = 768) {
  const isClientComponent = typeof window !== 'undefined';
  if (isClientComponent && typeof window.matchMedia !== 'function') {
    throw Error('matchMedia not supported by browser!');
  }
  const [isMobile, setIsMobile] = useState(
    isClientComponent
      ? window.matchMedia(`(max-width: ${mobileScreenSize}px)`).matches
      : null
  );

  const checkIsMobile = useCallback((event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  }, []);

  useEffect(() => {
    if (isClientComponent) {
      const mediaListener = window.matchMedia(
        `(max-width: ${mobileScreenSize}px)`
      );
      // try catch used to fallback for browser compatibility
      try {
        mediaListener.addEventListener('change', checkIsMobile);
      } catch {
        mediaListener.addListener(checkIsMobile);
      }

      return () => {
        try {
          mediaListener.removeEventListener('change', checkIsMobile);
        } catch {
          mediaListener.removeListener(checkIsMobile);
        }
      };
    }
  }, [mobileScreenSize, checkIsMobile, isClientComponent]);

  return isMobile;
}
