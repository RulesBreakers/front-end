import { CSSProperties } from 'react';
import { Sx } from '../../common/types';

export const landingContainer: Sx = {
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  overflowY: 'scroll',
};

export const landingLayout: Sx = {
  width: '100%',
  minHeight: '400vh',
  padding: 0,
  margin: 0,
  position: 'relative',
};

export const landingLayoutPart: Sx = {
  width: '100%',
  height: '100vh',
  margin: 0,
  padding: 0,
  display: 'flex',
  position: 'relative',
};

export const ladingText: Sx = {
  position: 'absolute',
  left: '50px',
};
export const ladingLogo: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
};

export const dreamCatherIcon: CSSProperties = {
  height: '600px',
  position: 'absolute',
};

export const watchIcon: Sx = {
  animation: 'rotation10 5s linear infinite',
};

export const heroText = (matche: boolean): Sx => ({
  position: 'absolute',
  paddingInline: 10,
  paddingY: 5,
  top: '50%',
  left: matche ? '50%' : '20%',
  transform: 'translate(-50%, -20%)',
  background: '#ffffff10',
  backdropFilter: 'blur(5px)',
  zIndex: 1000,
});

export const brainResponsive = (matche: boolean): Sx =>
  !matche
    ? {
        position: 'absolute',
        scale: '.4',
        left: 0,
        top: 0,
        transform: 'translate(-50%, -50%)',
      }
    : null;
