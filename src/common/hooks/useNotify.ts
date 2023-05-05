import { TNotification } from './type';
import { useStore } from './useGlobalStore';

const DefaultTimeout = 2000;

export const useNotify = () => {
  const store = useStore();

  const open = (notification: TNotification) => {
    store.setNotification(notification);
    const timeoutId = setTimeout(() => {
      store.setNotification(null);
      clearTimeout(timeoutId);
    }, notification?.timeout || DefaultTimeout);
  };

  const close = () => {
    store.setNotification(null);
  };

  return { open, close };
};
