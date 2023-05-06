import { Avatar, Stack, Typography } from '@mui/material';
import { Android, Person } from '@mui/icons-material';
import { avatar, messageItem } from './style.ts';
import { PropsWithChildren } from 'react';

export type UserMessageProps = {
  content: string;
  avatarUrl?: string;
};

export const IAMessage = ({ content }: Pick<UserMessageProps, 'content'>) => {
  return (
    <UserMessage content={content}>
      <Android />
    </UserMessage>
  );
};

export const UserMessage = ({
  children,
  content,
  avatarUrl,
}: PropsWithChildren<UserMessageProps>) => {
  return (
    <Stack
      flexDirection='row'
      spacing={2}
      sx={{
        mb: 4,
        borderRadius: 'var(--border-radius)',
      }}
    >
      <Avatar src={avatarUrl} sx={avatar}>
        {children ? children : <Person />}
      </Avatar>
      <Typography sx={messageItem}>{content}</Typography>
    </Stack>
  );
};
