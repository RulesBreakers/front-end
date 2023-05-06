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
};

export const login_card: Sx = {
  width: '60vw',
  height: '90vh',
  color: '#2E2E2E',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const left_card: Sx = {
  width: '30vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export const login_form: Sx = {
  width: 500,
  height: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
