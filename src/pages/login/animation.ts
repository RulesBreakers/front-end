import { UseTransitionProps } from '../../common/hooks';
import { addTransition } from '../../common/utils';

export const loginBefore: UseTransitionProps = addTransition({
  underline: { width: 0, opacity: 0 },
  text: { position: 'relative', top: -25, color: '#fff' },
  text2: { position: 'relative', bottom: -25, color: '#fff' },
});

export const loginAfter: UseTransitionProps = addTransition({
  underline: { width: 30 },
  text: { position: 'relative', top: 0 },
  text2: { position: 'relative', bottom: 0 },
});
