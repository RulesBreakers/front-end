import { ReactNode } from 'react';

export type RBPasswordProps = {
  label: string;
  name: string;
  validate?: boolean;
  validator?: any;
  type?: string;
  onClickIcon?: () => void;
};

export interface RBTextFieldProps extends RBPasswordProps {
  icon?: ReactNode;
}
