import { Box } from '@mui/material';
import { landingContainer, landingLayout } from './style';

import { Hero, WhatIdOnirix } from '.';
import Navbar from '../navbar/navbar';

export const Landing = () => {
  return (
    <>
    <Navbar/>
      <Box sx={landingContainer}>
        <Box sx={landingLayout}>
          <Hero />
          <div id='what-is-onirix'>
            <WhatIdOnirix />
          </div>
        </Box>
      </Box>
    </>
  );
};
