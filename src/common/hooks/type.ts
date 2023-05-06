import { CSSProperties } from 'react';
import { Sx } from '../types';

export enum TMessageType {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
}

export type TNotification = {
  message: string;
  timeout?: number;
  type: TMessageType;
} | null;

export type Store = { backdrop: boolean; notification: TNotification };
export type Action = {
  setBackdrop: (value: boolean) => void;
  setNotification: (notification: TNotification) => void;
};
export type State = Store & Action;

export type UseTransitionProps = {
  [key: string]: Sx | CSSProperties;
};
