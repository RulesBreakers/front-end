import { Alert } from '@mui/material';
import { TMessageType, useStore } from '../../hooks';
import { DisplayNone } from '..';
import { CheckCircle, Close, Construction, Info } from '@mui/icons-material';

const ALERT = {
  position: 'absolute',
  bottom: 50,
  right: 50,
  width: 320,
  paddingBlock: '12px',
  transition: 'all 1s 1s',
};

const getIcon = (type: TMessageType) => {
  switch (type) {
    case TMessageType.success:
      return <CheckCircle />;
    case TMessageType.error:
      return <Close />;
    case TMessageType.warning:
      return <Construction />;
    case TMessageType.info:
      return <Info />;
  }
};

export const RootNotification = () => {
  const store: any = useStore();

  const notification = store.notification;

  if (!notification) return <DisplayNone />;
  const { message, type } = notification;

  return (
    <Alert color={type} sx={ALERT} icon={getIcon(type)}>
      {message}
    </Alert>
  );
};
