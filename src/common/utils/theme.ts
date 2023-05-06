import { createTheme } from '@mui/material';
import { blue as primary, yellow as secondary } from '@mui/material/colors';
const important = (value: string) => `${value} !important`;

const getColor = (os: any) => {
  if (os.color === 'primary') {
    return primary;
  }
  return secondary;
};

const isPrimary = (os: any) => os.color === 'primary';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: '10px 20px',
          margin: '10px',
          fontSize: '16px',
          borderRadius: '10px',
          background: getColor(ownerState)[400],
          boxShadow: `0px 0px 40px 10px ${primary[200]}10`,
          color: isPrimary(ownerState) ? '#fff' : '#00000099',
          textTransform: 'capitalize',
          outline: important('none'),
          border: important('none'),
          ':hover': {
            background: getColor(ownerState)[600],
          },
          minWidth: 200,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: `${primary[100]}50`,
          borderRadius: '10px',
          margin: 5,
          color: '#000000',
          backdropFilter: 'blur(10px)',
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
