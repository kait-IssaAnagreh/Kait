import {useRef, useEffect} from 'react';

export const useInterval = (callback: any, delay: any) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    //@ts-ignore
    const tick = () => savedCallback.current();
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
