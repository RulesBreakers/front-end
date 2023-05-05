import { createTheme } from '@mui/material';
import { blue as primary, blue as secondary } from '@mui/material/colors';
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
          boxShadow: `0px 0px 40px 10px ${primary[200]}60`,
          color: '#fff',
          textTransform: 'capitalize',
          outline: important('none'),
          ':hover': {
            background: primary[600],
            fontWeight: 'bold',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: `rgba(234, 237, 237, 0.1)`,
          borderRadius: '16px',
          boxShadow: `0 4px 30px ${secondary[200]}50`,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${secondary[200]}50`,
          margin: 5,
          color: '#fff',
          minWidth: 300,
          position: 'absolute',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          color: '#fff',
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
