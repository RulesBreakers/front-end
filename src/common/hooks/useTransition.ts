import { useEffect, useState } from 'react';
import { UseTransitionProps } from '.';
import { addTransition } from '../utils';

export const useTransition = (
  before: UseTransitionProps,
  after: UseTransitionProps,
  deps: any[]
) => {
  const [state, setState] = useState(addTransition(before));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(after);
      clearInterval(timeout);
    }, 200);
    return () => {
      setState(before);
    };
  }, deps);

  return { ...addTransition(state) };
};
