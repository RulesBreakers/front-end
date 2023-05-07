import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { container } from './style.ts';
import './style.css';
import { Logout, SendOutlined } from '@mui/icons-material';
import { blue, grey } from '@mui/material/colors';
import { useState } from 'react';
import { messageProvider } from '../../providers/message-provider.ts';
import { useNavigate } from 'react-router-dom';

const Message = (props: any) => {
  const { username, message, isSend, sx, title, predictions } = props;
  const direction = isSend ? 'right' : 'left';

  return (
    <Box sx={{ width: '100%' }}>
      <div
        style={{
          position: 'absolute',
          [direction]: 0,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          margin: '3px',
          ...sx,
        }}
      >
        {!isSend && <Avatar sx={{ m: 5 }}>{username[0]}</Avatar>}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 20,
          }}
        >
          <Typography
            sx={{
              maxWidth: '30rem',
              background: blue[200],
              padding: 1.5,
              margin: 2,
              borderRadius: isSend
                ? '16px 16px 0px 16px '
                : '16px 16px 16px 0px ',
            }}
          >
            {title && <p>{title}</p>}
            {message}
          </Typography>
          {predictions && (
            <Box
              sx={{
                maxWidth: '30rem',
                background: blue[200],
                padding: 1.5,
                margin: 2,
                borderRadius: '0px 16px 16px 16px ',
              }}
            >
              <p>Prédictions</p>
              {predictions.map((event: any) => (
                <p>{event}</p>
              ))}
            </Box>
          )}
        </div>
        {isSend && (
          <Avatar sx={{ transform: 'translateY(100%)' }}>{username[0]}</Avatar>
        )}
      </div>
    </Box>
  );
};

const Chatterbox = () => {
  const navigate = useNavigate();
  const [currentMessage, setMessage] = useState('');
  const [chat, setChat] = useState<any>({
    message: '',
    response: '',
    predictions: [],
  });

  const [isLoading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (currentMessage.length > 0) {
      setLoading(true);
      try {
        setChat((prev: any) => ({
          ...prev,
          response: '',
          message: currentMessage,
        }));
        const res = await messageProvider.createDreamByUserId(1, {
          description: currentMessage,
          title: 'dream',
        });

        setChat((prev: any) => ({
          ...prev,
          response: res.interpretation,
          predictions: res.events.map(e => `- ${e.info}`),
        }));
      } catch {
      } finally {
        setLoading(false);
      }
    }
  };

  const toLanding = () => {
    navigate('/');
  };

  return (
    <Box sx={container}>
      <Card>
        <CardHeader
          title='Rêvez'
          action={
            <Toolbar>
              <IconButton
                onClick={toLanding}
                title='Quitter les chat'
                color='primary'
              >
                <Logout />
              </IconButton>
            </Toolbar>
          }
        />
        <CardContent
          sx={{
            width: '90vw',
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
          }}
        >
          <Box
            sx={{
              width: '97%',
              height: '97%',
              background: grey[100],
              overflowY: 'scroll',
              borderRadius: '16px',
              padding: 1,
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
            }}
          >
            {chat.message.length > 0 && (
              <Message username='user' message={chat.message} isSend={true} />
            )}
            {chat.response.length > 0 && (
              <>
                <Message
                  username='Onyrix'
                  message={chat.response}
                  isSend={false}
                  title='Interprétation :'
                  predictions={chat.predictions}
                />
              </>
            )}
            {chat.response.length === 0 && chat.message.length === 0 && (
              <Typography width='600px' mt={30} textAlign='center'>
                " Plongez dans l'univers fascinant de vos rêves avec notre
                interpréteur de rêves intelligent. "
              </Typography>
            )}
          </Box>
        </CardContent>
        <CardActions>
          <form
            style={{ padding: 0, margin: 0, width: '100%' }}
            onSubmit={handleSubmit}
          >
            <Toolbar sx={{ width: '100%' }}>
              <TextField
                value={currentMessage}
                onChange={handleChange}
                multiline
                size='small'
                sx={{ width: '100%' }}
              />
              <IconButton
                disabled={isLoading}
                type='submit'
                size='small'
                color='primary'
              >
                {isLoading ? <CircularProgress size={25} /> : <SendOutlined />}
              </IconButton>
            </Toolbar>
          </form>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Chatterbox;
