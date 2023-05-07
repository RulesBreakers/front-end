import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export const MenuButton = () => {
  const toggle = () => {};

  return (
    <IconButton onClick={toggle}>
      <MenuIcon />
    </IconButton>
  );
};
