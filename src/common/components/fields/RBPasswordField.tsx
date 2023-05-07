import {
  VisibilityOff as VisibilityOffIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { RBPasswordProps, RBTextField } from '.';
import { useToggle } from '../../hooks';

export const RBPasswordField = (props: RBPasswordProps) => {
  const { state: passVisibility, toggle: handleToggle } = useToggle(true);

  return (
    <RBTextField
      type={passVisibility ? 'password' : 'text'}
      {...props}
      icon={passVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
      onClickIcon={handleToggle}
    />
  );
};
