import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { landingLayoutPart } from './style';
import dreamCatcher from '../../assets/dreamCatcher.png';

export const WhatIdOnirix = () => (
  <Box
    sx={{
      ...landingLayoutPart,
      mt: 4,
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <Typography variant='body1' fontSize='2rem' m={10}>
      Qu'est ce que Onirix ?
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
        src={dreamCatcher}
        style={{
          width: '40vw',
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-40%)',
        }}
      />
      <Box>
        <Card sx={{ width: 500, transform: 'translateX(-10rem)', mr: 5 }}>
          <CardHeader title='Institut internationale des rêves.' />
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
        <Card sx={{ width: 400, transform: 'translateX(-10rem)', mt: 10 }}>
          <CardHeader title='Onirix' />
          <CardContent>
            <Typography variant='body1'>
              Une intelligence artificiel créée par l'Institut internationale
              des rêves. Elle analyse et décode vos rêves, et nous exp
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  </Box>
);
