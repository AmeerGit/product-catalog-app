// Debounce function to limit the number of times a function is called in a given time frame

export const debounce = <T extends (...args: string[]) => void>(func: T, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};