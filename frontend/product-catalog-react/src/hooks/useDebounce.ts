// Debounce function

import { useEffect, useState } from "react";

export const useDebounce = (value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};
