import { Avatar, Button, Box, Typography } from '@mui/material';
import { RBPasswordField, RBTextField } from '../../common/components/fields';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountCircleOutlined, LockOpen, Person } from '@mui/icons-material';
import { login_form } from '.';

export const LoginForm = () => {
  const form = useForm({
    defaultValues: { username: '', password: '' },
    mode: 'all',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Box sx={login_form}>
      <Avatar sx={{ width: '5rem', height: '5rem', mb: 5 }}>
        <Person sx={{ fontSize: 38 }} />
      </Avatar>
      <FormProvider {...form}>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit}
        >
          <RBTextField
            icon={<AccountCircleOutlined />}
            label='Username'
            name='username'
          />
          <RBPasswordField label='Password' name='password' />
          <Button type='submit'>Se connecter</Button>
        </form>
      </FormProvider>
    </Box>
  );
};
