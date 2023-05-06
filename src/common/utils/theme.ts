import { createTheme } from '@mui/material';
import { blue as primary } from '@mui/material/colors';
const important = (value: string) => `${value} !important`;

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          margin: '10px',
          fontSize: '16px',
          borderRadius: '10px',
          background: primary[400],
          boxShadow: `0px 0px 40px 10px ${primary[200]}10`,
          color: '#fff',
          textTransform: 'capitalize',
          outline: important('none'),
          border: important('none'),
          ':hover': {
            background: primary[600],
            color: '#FFF',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: `${primary[100]}70`,
          borderRadius: '10px',
          margin: 5,
          color: '#000000',
          backdropFilter: 'blur(5px)',
          border: important('none'),
          outline: important('none'),
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.1 )',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          color: '#000',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ':focus': {
            border: 'none',
            outline: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: 10,
          width: 300,
        },
      },
    },
  },
});
