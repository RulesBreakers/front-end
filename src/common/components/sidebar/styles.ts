import { SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';

export const SIDE_BAR: CSSProperties = {
  height: '100%',
  background: '#fff',
  flexBasis: '5rem',
  overflow: 'hidden',
  transition: 'all 500ms',
  borderRadius: 5,
  marginLeft: 2,
  boxShadow:
    '1px 1px 10px rgba(0, 0, 0, 0.05), -1px -1px 10px rgba(0, 0, 0, 0.05)',
};

export const SIDE_BAR_OPENED: CSSProperties = {
  ...SIDE_BAR,
  flexBasis: '20rem',
};

export const MENU: SxProps<Theme> = {
  cursor: 'pointer',
  padding: '0px !important',
  marginTop: 1,
  marginLeft: '0.3rem',
  width: 70,
  transition: 'background 500ms',
};

export const MENU_ICON: SxProps<Theme> = {
  width: 70,
  height: 70,
  borderRadius: 10,
  marginRight: 4,
  ':hover': {
    borderRadius: '15px !important',
  },
};

export const MENU_ICON_OPENED: SxProps<Theme> = {
  ...MENU_ICON,
  ':hover': {
    borderRadius: '15px !important',
    background: 'transparent !important',
  },
};

export const MENU_OPENED: SxProps<Theme> = {
  ...MENU,
  width: 310,
  ':hover': {
    background: 'rgba(0, 0, 0, 0.05) !important',
    borderRadius: '15px !important',
  },
};

export const LINK: CSSProperties = {
  background: 'transparent',
  textDecoration: 'none',
  color: 'black',
};
