import { Box } from '@mui/material';
import { landingContainer, landingLayout } from './style';

import { Hero, Tarif, WhatIdOnyrix } from '.';
import { CustomMenu } from '../customMenu/customMenu';

export const Landing = () => {
  return (
    <Box sx={landingContainer}>
      <Box sx={landingLayout}>
        <CustomMenu />
        <Hero />
        <WhatIdOnyrix />
        <Tarif />
      </Box>
    </Box>
  );
};
