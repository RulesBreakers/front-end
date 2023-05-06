import { UseTransitionProps } from '../hooks';

export const addTransition = (_obj: UseTransitionProps) => {
  const obj = { ..._obj };
  Object.keys(obj).forEach(key => {
    obj[key] = { ...obj[key], transition: 'all 2s' };
  });
  return obj;
};

export const t = (time: string) => ({ transition: `all ${time}` });
