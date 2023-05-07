import { Box } from '@mui/material';
import { landingContainer, landingLayout } from './style';

import { Hero, Tarif, WhatIdOnyrix } from '.';

export const Landing = () => {
  return (
    <Box sx={landingContainer}>
      <Box sx={landingLayout}>
        <Hero />
        <WhatIdOnyrix />
        <Tarif />
      </Box>
    </Box>
  );
};
