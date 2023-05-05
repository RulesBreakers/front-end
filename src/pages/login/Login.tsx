import { Box, Card } from '@mui/material';
import { container, login_card } from '.';

export const Login = () => {
  return (
    <Box sx={container}>
      <Card sx={login_card}></Card>
    </Box>
  );
};
