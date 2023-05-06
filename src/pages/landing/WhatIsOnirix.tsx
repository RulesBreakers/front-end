import { Box, Typography } from '@mui/material';
import { landingLayoutPart } from './style';
import brainImage from '../../assets/brain.svg';

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
        justifyContent: 'center',
      }}
    >
      <img
        src={brainImage}
        style={{
          width: '40vw',
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-40%)',
        }}
      />
    </Box>
  </Box>
);
