import { Sx } from '../../common/types';

export const container: Sx = {
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#CCFFF420',
  overflow: 'hidden',
};

export const login_card: Sx = {
  width: '50vw',
  height: '70vh',
  color: '#2E2E2E',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderRadius: '16px',
  backdropFilter: 'blur(5px)',
  border: `1px solid #00000020`,
};

export const left_card: Sx = {
  width: '20vw',
  height: 540,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 5,
};

export const login_form: Sx = {
  width: 500,
  height: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
