import { IconButton, Toolbar, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { LINK, MENU, MENU_ICON, MENU_ICON_OPENED, MENU_OPENED } from './styles';
import { Link } from 'react-router-dom';

type TMenuProps = {
  label?: string;
  icon: ReactNode;
  to?: string;
};

export const Menu = (props: TMenuProps) => {
  const { label, icon, to } = props;

  return (
    <Link style={LINK} to={to || '#'}>
      <Toolbar sx={false ? MENU_OPENED : MENU} title={label}>
        <IconButton sx={false ? MENU_ICON_OPENED : MENU_ICON}>
          {icon}
        </IconButton>
        <Typography variant='h6'>{label}</Typography>
      </Toolbar>
    </Link>
  );
};
