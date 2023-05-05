import { Box, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { RBPasswordField, RBTextField } from '../../common/components/fields';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';

export const Login = () => {
  const form = useForm({
    defaultValues: { username: '', password: '' },
    mode: 'all',
  });

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <FormProvider {...form}>
        <form>
          <Typography>Login</Typography>
          <RBTextField
            icon={<AccountCircleIcon />}
            label='Username'
            name='username'
            validate={true}
          />
          <RBPasswordField label='Password' name='password' validate={true} />
        </form>
      </FormProvider>
    </Box>
  );
};
