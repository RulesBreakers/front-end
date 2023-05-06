import { Box, Button, Typography } from '@mui/material';
import { landingLayoutPart, watchIcon, heroText } from '.';

import dreamCatcher from '../../assets/dreamcatcher.png';
import { Watch } from '@mui/icons-material';

export const Hero = () => {
  return (
    <Box sx={landingLayoutPart}>
      <img src={dreamCatcher} alt='dream' />
      <Box sx={heroText}>
        <Typography variant='body1' fontSize='7rem'>
          ONIRIX
        </Typography>
        <Typography
          variant='body1'
          sx={{ transform: 'translate(10px)' }}
          fontSize='1rem'
          width='28rem'
        >
          Et si les rêves ne se limitaient pas à être des simples illusion de
          l’esprit ? Et si ils sont capables de prédire l'avenir ?
        </Typography>
        <Button startIcon={<Watch sx={watchIcon} />}>Allons-y</Button>
      </Box>
    </Box>
  );
};

{
  /* <Typography variant='body1' fontSize='1.5rem' width='25rem'>
Et si les rêves ne se limitaient pas à être des simples illusion de
l’esprit ?
</Typography>
<Typography variant='body1' fontSize='1.5rem'>
Et s'ils étaient capables de prédire l'avenir?
</Typography> */
}
