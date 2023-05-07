import { SxProps } from '@mui/material';

export const container: SxProps = {
  height: '100vh',
  width: '100vw',

  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const drawerPaper = '& .MuiDrawer-paper';

export const sidebar: SxProps = {
  [drawerPaper]: {
    width: '5rem',
    overflowX: 'hidden',
  },
};

export const innerContainer: SxProps = {
  height: '100%',
  width: '45rem',

  display: 'grid',
  gridTemplateRows: '85% auto',
};

export const messageContainer: SxProps = {
  bgcolor: 'whitesmoke',

  pt: 1,
  px: 1,
  maxHeight: '100%',
  overflowY: 'scroll',
};

export const messageBox: SxProps = {
  width: '100%',
  borderTopLeftRadius: 'var(--border-radius)',
  borderTopRightRadius: 'var(--border-radius)',
  // bgcolor: 'rgb(var(--background-alt))',
  bgcolor: '#050517',
};

export const messageField: SxProps = {
  width: '95%',
  bgcolor: 'white',
  borderRadius: 'var(--border-radius)',
};

export const avatar: SxProps = {};

export const messageItem: SxProps = {
  bgcolor: '#221E22',
  color: 'grey',
  p: 1.5,
  borderRadius: 'var(--border-radius)',
};
