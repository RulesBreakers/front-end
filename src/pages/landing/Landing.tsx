import { Box } from '@mui/material';
import { landingContainer, landingLayout } from './style';
import { Hero, WhatIsOnyrix } from '.';
import Tarifs from './Tarifs';

export const Landing = () => {
  return (
    <Box sx={landingContainer}>
      <Box sx={landingLayout}>
        <Hero />
        <WhatIsOnyrix />
        <Tarifs/>
      </Box>
    </Box>
  );
};
