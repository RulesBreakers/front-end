import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';
import { RBPasswordField, RBTextField } from '../../common/components/fields';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountCircleOutlined } from '@mui/icons-material';
import { login_form } from '.';

export const LoginForm = () => {
  const form = useForm({
    defaultValues: { username: '', password: '' },
    mode: 'all',
  });
  return (
    <Card>
      <CardContent sx={login_form}>
        <Avatar sx={{ width: '4rem', height: '4rem', mb: 5 }}>Login</Avatar>
        <Typography color='black' variant='h6' mb={5}>
          Login to your account
        </Typography>
        <FormProvider {...form}>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <RBTextField
              icon={<AccountCircleOutlined />}
              label='Username'
              name='username'
            />
            <RBPasswordField label='Password' name='password' />
            <Button type='submit'>Login</Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};
