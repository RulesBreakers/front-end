import { Box } from '@mui/material';
import { landingContainer, landingLayout } from './style';
import { Hero, WhatIsOnyrix } from '.';
import Tarifs from './Tarifs';
import { Hero, Tarif, WhatIdOnyrix } from '.';
import { CustomMenu } from '../customMenu/customMenu';
import { Footer } from '../customMenu/footer';

export const Landing = () => {
  return (
    <Box sx={landingContainer}>
      <Box sx={landingLayout}>
        <CustomMenu />
        <Hero />
        <WhatIdOnyrix />
        <Tarif />
        <Footer />
      </Box>
    </Box>
  );
};
