import { Box, Typography, useMediaQuery } from '@mui/material';
import {
  LoginForm,
  container,
  left_card,
  loginAfter,
  loginBefore,
  login_card,
} from '.';
import { useTransition } from '../../common/hooks';

export const Login = () => {
  const { underline, text, text2 } = useTransition(loginBefore, loginAfter, []);
  const matches = useMediaQuery('(min-width:1400px)');

  return (
    <Box sx={container}>
      <Box sx={login_card}>
        {!!matches && (
          <Box sx={left_card}>
            <Box>
              <Typography variant='h2' width={260} sx={text} fontSize='3rem'>
                Enjoy your life & stay zen.
              </Typography>
              <Box
                sx={{
                  ...underline,
                  height: 0,
                  border: '1px solid black',
                  transition: 'all 500ms',
                }}
              ></Box>
              <Typography sx={text2} variant='h6' width={270}>
                Create with be best initiative to get experiences & to have fun.
              </Typography>
            </Box>
          </Box>
        )}
        <LoginForm />
      </Box>
    </Box>
  );
};
