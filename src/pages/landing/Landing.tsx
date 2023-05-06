import { Box } from '@mui/material';
import { landingContainer, landingLayout } from './style';

import { Hero, WhatIdOnirix } from '.';

export const Landing = () => {
  return (
    <Box sx={landingContainer}>
      <Box sx={landingLayout}>
        <Hero />
        <WhatIdOnirix />
      </Box>
    </Box>
  );
};
