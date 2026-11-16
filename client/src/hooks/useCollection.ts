import { useEffect, useState } from 'react';
import { loadCollection } from '../lib/firestore';


export function useCollection<T>(name: string, fallback: T[]): T[] {
  const [items, setItems] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    loadCollection<T>(name)
      .then((result) => {
        if (!cancelled && result && result.length > 0) setItems(result);
      })
      .catch((error: unknown) => {
        console.warn(`Could not load "${name}" from Firestore, using built-in data.`, error);
      });
    return () => {
      cancelled = true;
    };
  }, [name]);

  return items;
}
