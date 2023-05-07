import { Box } from '@mui/material';
import { landingContainer, landingLayout } from './style';
import { Hero } from '.';
import { CustomMenu } from '../customMenu/customMenu';
import { Footer } from '../customMenu/footer';
import { WhatIsOnyrix } from '.';
import Tarifs from './Tarifs';

export const Landing = () => {
  return (
    <Box sx={landingContainer}>
      <Box sx={landingLayout}>
        <CustomMenu />
        <Hero />
        <WhatIsOnyrix />
        <Tarifs />
      </Box>
      <Footer />
    </Box>
  );
};
