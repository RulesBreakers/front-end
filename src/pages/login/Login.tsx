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
import { Link } from 'react-router-dom';

export const Login = () => {
  const { underline, text, text2 } = useTransition(loginBefore, loginAfter, []);
  const matches = useMediaQuery('(min-width:1400px)');

  return (
    <Box sx={container}>
      <Box sx={login_card}>
        {!!matches && (
          <Box sx={left_card}>
            <Box>
              <Typography variant='h2' width={240} sx={text} fontSize='3rem'>
                Suivez vos rêves.
              </Typography>
              <Box
                sx={{
                  ...underline,
                  height: 0,
                  border: '1px solid black',
                  transition: 'all 500ms',
                }}
              ></Box>
              <Typography sx={text2} variant='h6' width={220}>
                N'hésitez pas à
                <Link to='/signup' style={{ color: 'blue', fontSize: '20px' }}>
                  {' '}
                  créer un compte{' '}
                </Link>
                et à utiliser nos services gratuits
              </Typography>
            </Box>
          </Box>
        )}
        <LoginForm />
      </Box>
    </Box>
  );
};
