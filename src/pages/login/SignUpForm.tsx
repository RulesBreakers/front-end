import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { RBPasswordField, RBTextField } from '../../common/components/fields';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountCircleOutlined } from '@mui/icons-material';
import { login_form } from '.';
import { TMessageType, useNotify } from '../../common/hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CreateUser, userProvider } from '../../providers';

export const SignUpForm = () => {
  const form = useForm({
    defaultValues: {
      userName: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    },
    mode: 'all',
  });

  const { open } = useNotify();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = form.handleSubmit(async (data: any) => {
    const { firstName, lastName, password, userName } = data;

    setLoading(true);
    try {
      const user: CreateUser = {
        firstName,
        lastName,
        password,
        userName,
      };
      await userProvider.onboarding(user);
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
      <Typography color='black' variant='h6' mb={2}>
        Créer votre compte
      </Typography>
      <FormProvider {...form}>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit}
        >
          <RBTextField
            icon={<AccountCircleOutlined />}
            label='Nom'
            name='lastName'
          />
          <RBTextField
            icon={<AccountCircleOutlined />}
            label='Prénoms'
            name='firstName'
          />
          <RBTextField
            icon={<AccountCircleOutlined />}
            label="Nom d'utilisateur"
            name='userName'
          />
          <RBPasswordField label='Mot de passe' name='password' />
          <RBPasswordField
            validator={(value: string, data: any) =>
              value !== data.password
                ? 'Les mots de passe ne correspondent pas.'
                : true
            }
            label='Confirmé votre mot de passe'
            name='confirmPassword'
          />
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
