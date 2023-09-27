// hook where we can safely access the window object in Next.js 13
// on the server, the window object does not exist
// it's only available on the browser
import { useState, useEffect } from 'react';

export const useOrigin = () => {
  const [isMounted, setIsMounted] = useState(false);
  // checking if window and window.location are available
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  // hydration trick
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return '';
  }

  return origin;
};
