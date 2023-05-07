import { Avatar, Button, Box, CircularProgress } from '@mui/material';
import { RBPasswordField, RBTextField } from '../../common/components/fields';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountCircleOutlined, Person } from '@mui/icons-material';
import { login_form } from '.';
import { userProvider } from '../../providers';
import { TMessageType, useNotify } from '../../common/hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const LoginForm = () => {
  const form = useForm({
    defaultValues: { username: '', password: '' },
    mode: 'all',
  });
  const { open } = useNotify();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = form.handleSubmit(async data => {
    setLoading(true);
    try {
      await userProvider.login(data);
      navigate('/dashboard');
    } catch {
      open({
        message: 'Veuillez vérifier vos identifiants',
        type: TMessageType.error,
        timeout: 3000,
      });
    } finally {
      setLoading(false);
    }
  });

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
          <Button
            disabled={isLoading}
            startIcon={isLoading && <CircularProgress size={25} />}
            type='submit'
          >
            Se connecter
          </Button>
        </form>
      </FormProvider>
    </Box>
  );
};
