import { Box, Typography } from '@mui/material';
import { LoginForm, container, left_card, login_card } from '.';

export const Login = () => {
  return (
    <Box sx={container}>
      <Box sx={login_card}>
        <Box sx={left_card}>
          <Box>
            <Typography variant='h2' width={260} fontSize='3rem'>
              Enjoy your life & stay zen.
            </Typography>
            <Box sx={{ width: 10, height: 0, border: '3px solid black' }}></Box>
            <Typography variant='h6' width={270}>
              Create with be best initiative to get experiences & to have fun.
            </Typography>
          </Box>
        </Box>
        <Box>
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
};
