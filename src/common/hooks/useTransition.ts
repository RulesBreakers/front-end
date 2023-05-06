import { useEffect, useState } from 'react';
import { UseTransitionProps } from '.';

export const useTransition = (
  before: UseTransitionProps,
  after: UseTransitionProps,
  deps: any[]
) => {
  const [state, setState] = useState(before);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(after);
      clearInterval(timeout);
    }, 200);
    return () => {
      setState(before);
    };
  }, deps);

  return { ...state };
};
