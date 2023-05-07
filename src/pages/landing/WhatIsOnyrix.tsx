import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { landingLayoutPart } from './style';
import dreamCatcher from '../../assets/head.png';

export const WhatIsOnyrix = () => {

  return (
    <Box
      sx={{
        ...landingLayoutPart,
        mt: 4,
        alignItems: 'center',
        flexDirection: 'column',
      }}
      id="section_what_is"
    >
      <Typography
        variant='body1'
        fontSize='2rem'
        sx={{ transform: 'translate(10%, 7rem)' }}
        m={10}
      >
        Qu'est ce que Onyrix ?
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <img
          className='robot-woman'
          src={dreamCatcher}
          style={{
            width: '40vw',
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translateY(-40%)',
          }}
        />
        <Box sx={{ position: 'relative', right: 70, top: '30%' }}>
          <Card
            sx={{
              width: 500,
              transform: 'translateX(-10rem)',
              mr: 5,
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant='body1'
                sx={{ width: 450, textAlign: 'justify' }}
              >
                Institut spécialiser dans l'étude des rêves. Nous menons des
                recherches avancées sur les neurones du cerveau, comment elles
                interagissent, comment elles se forment et comment elles
                influences no rêves.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 400,
              transform: 'translateX(-10rem)',
              mt: 6,
            }}
          >
            <CardContent>
              <Typography variant='body1' m={2}>
                Onyrix est une intelligence artificiel créée par l'Institut
                internationale des rêves. Elle analyse et décode vos rêves, dans
                le but de nous prédire notre avenir.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
