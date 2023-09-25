'use client';

// global imports
import { useEffect, useState } from 'react';

// local imports
import { StoreModal } from '@/components/modals/store-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This ensures that our modal is mounted on the client only.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the modal is not mounted on the client, we don't render anything and avoid hydration errors.
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
