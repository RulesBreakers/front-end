import { Alert } from '@mui/material';
import { useStore } from '../../hooks';
import { DisplayNone } from '..';

const ALERT = {
  position: 'absolute',
  bottom: 50,
  right: 50,
  width: 320,
  paddingBlock: '12px',
  transition: 'all 1s 1s',
};

export const RootNotification = () => {
  const { notification } = useStore();

  if (!notification) return <DisplayNone />;

  const { message, type } = notification;

  return (
    <Alert color={type} sx={ALERT}>
      {message}
    </Alert>
  );
};
