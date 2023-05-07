import { Avatar, Button, Box, Typography } from '@mui/material';
import { RBPasswordField, RBTextField } from '../../common/components/fields';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountCircleOutlined, LockOpen, Person } from '@mui/icons-material';
import { login_form } from '.';

export const SignUpForm = () => {
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
      <Typography color='black' variant='h6' mb={5}>
        Créer votre compte
      </Typography>
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
          <Button type='submit'>Créer mon compte</Button>
        </form>
      </FormProvider>
    </Box>
  );
};
