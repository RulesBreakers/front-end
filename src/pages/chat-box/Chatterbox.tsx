import { AccessAlarm, Send } from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material';
import {
  container,
  innerContainer,
  messageBox,
  messageContainer,
  messageField,
  sidebar,
} from './style.ts';
import { IAMessage, UserMessage } from './Message.tsx';
import { useState } from 'react';

const Chatterbox = () => {
  const [message, setMessage] = useState<string[]>();

  return (
    <Box sx={container}>
      <Drawer open variant='permanent' sx={sidebar}>
        <List>
          {['menu'].map((item, index) => {
            return (
              <ListItem key={item + index}>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: 'flex-start',
                    }}
                  >
                    <AccessAlarm />
                  </ListItemIcon>
                  <ListItemText primary={item} sx={{ opacity: 1 }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <Box sx={innerContainer}>
        <Box sx={messageContainer}>
          <UserMessage
            avatarUrl='https://www.pinterest.com/yumiisaiko/'
            content={''}
          />
          {/* <IAMessage content={message?.at(0)} /> */}
        </Box>
        <Stack sx={messageBox} justifyContent='center'>
          <TextField
            sx={messageField}
            multiline
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <IconButton sx={{ color: '#050517' }}>
                    <Send />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Chatterbox;
