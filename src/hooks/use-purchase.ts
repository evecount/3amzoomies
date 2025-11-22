'use client';

import { useState, useEffect, useCallback } from 'react';

const PURCHASE_KEY = '3am-zoomies-purchased';

export function usePurchase() {
  const [isPurchased, setIsPurchased] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // This effect runs only on the client
    try {
      const item = window.localStorage.getItem(PURCHASE_KEY);
      setIsPurchased(item === 'true');
    } catch (error) {
      console.error('Failed to read from localStorage', error);
      setIsPurchased(false);
    }
  }, []);

  const purchase = useCallback(() => {
    try {
      window.localStorage.setItem(PURCHASE_KEY, 'true');
      setIsPurchased(true);
    } catch (error) {
      console.error('Failed to write to localStorage', error);
    }
  }, []);

  const unpurchase = useCallback(() => {
    try {
      window.localStorage.removeItem(PURCHASE_KEY);
      setIsPurchased(false);
    } catch (error) {
      console.error('Failed to remove from localStorage', error);
    }
  }, []);

  return { isPurchased, purchase, unpurchase };
}
