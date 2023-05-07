import { Box, IconButton } from '@mui/material';
import { SIDE_BAR, SIDE_BAR_OPENED } from './styles';
import {
  ChatOutlined,
  ChevronLeft,
  ChevronRight,
  HistoryOutlined,
  Menu as MenuIcon,
  Newspaper,
} from '@mui/icons-material';
import { Menu } from './Menu';
import { useStore } from '../../hooks';

export const SideBar = () => {
  const { sidebar, setSidebar } = useStore();
  return (
    <Box sx={sidebar ? SIDE_BAR_OPENED : SIDE_BAR}>
      <IconButton onClick={() => setSidebar(!sidebar)}>
        {sidebar ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      <Menu icon={<ChatOutlined />} to='/chat' label='Overview' />
      <Menu icon={<HistoryOutlined />} to='/history' label='Laics' />
      <Menu icon={<Newspaper />} to='/actuality' label='Compts' />
    </Box>
  );
};
