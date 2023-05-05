import { useState } from 'react';

export const useToggle = (defaultState: boolean) => {
  const [state, setState] = useState(defaultState);

  const toggle = () => setState(e => !e);
  const toFalse = () => setState(false);
  const toTrue = () => setState(true);

  return { toggle, toFalse, toTrue, state };
};
