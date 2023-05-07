import { useRef } from 'react';

export const useDelay = () => {
  const timeoutRef = useRef(null);

  const setDelay = (handler: Function, delay: number) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      handler();
    }, delay);
  }

  return {
    setDelay
  };
}