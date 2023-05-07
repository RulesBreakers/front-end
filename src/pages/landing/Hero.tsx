import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { landingLayoutPart, watchIcon, heroText, brainResponsive } from '.';
import brainImage from '../../assets/brain.png';
import dreamHunter from '../../assets/dreamHunter.png';
import { Watch } from '@mui/icons-material';
import { useTransition } from '../../common/hooks';
import { CSSProperties } from 'react';
import { t } from '../../common/utils';

export const Hero = () => {
  const matches = useMediaQuery('(min-width:1300px)');
  const { brain, textTop, textRight, button } = useTransition(
    {
      brain: { transform: 'rotateY(20deg) rotateX(10deg)' },
      textTop: { opacity: 0, transform: 'translateY(3rem)' },
      textRight: { opacity: 0, transform: 'translateX(-3rem)' },
      button: { opacity: 0, transform: 'translateX(3rem)' },
    },
    {},
    []
  );

  const imgStyle: any = {
    transition: 'transform 2s, scale 100ms',
    ...(brain as CSSProperties),
    ...brainResponsive(matches),
  };

  const imgStyle2: any = {
    position: 'absolute',
    top: '3rem',
    left: '3rem',
    height: '7rem',
    animation: 'bounce 4s ease 0s 1 normal forwards',
  };

  return (
    <Box sx={{ ...landingLayoutPart, justifyContent: 'flex-end' }}>
      <Box sx={heroText(!matches)}>
        <Typography
          variant='body1'
          fontSize='7rem'
          sx={{ ...textTop, ...t('4s') }}
        >
          Onyrix
        </Typography>
        <Typography
          sx={{ ...textRight, ...t('4s'), mb: 5, ml: 1 }}
          variant='body1'
          fontSize='1rem'
          width='28rem'
        >
          Et si les rêves ne se limitaient pas à être des simples illusion de
          l’esprit ? Et si ils sont capables de prédire l'avenir ?
        </Typography>
        <Button
          sx={{ ...button, ...t('4s') }}
          startIcon={<Watch sx={watchIcon} />}
          href='/login'
          variant='outlined'
        >
          Découvrir IA
        </Button>
        <Button
          sx={{ ...button, ...t('4s') }}
          color='secondary'
          href='#section_what_is'
        >
          Apropos
        </Button>
      </Box>
      <img src={dreamHunter} alt='dream' style={imgStyle2} />
      <img src={brainImage} alt='dream' style={imgStyle} />
    </Box>
  );
};
