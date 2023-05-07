import { Box } from '@mui/material';
import { landingContainer, landingLayout } from './style';
import { Hero } from '.';
import { CustomMenu } from '../customMenu/customMenu';
import { Carousel } from 'react-responsive-carousel';
import { Footer } from '../customMenu/footer';
import { WhatIsOnyrix } from '.';
import Tarifs from './Tarifs';
import "./carousel.css"

export const Landing = () => {
  return (
    <Box sx={landingContainer}>
      <Box sx={landingLayout}>
        <CustomMenu />
        <Hero />
        <WhatIsOnyrix />
        <Tarifs />
          <div className="testimonial">
          <Carousel
            showArrows
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            autoPlay
            interval={2000}
            className="carousel"
          >
            {['1', '2'].map((elt: any, k: number) => (
              <>
                <div>
                  <div className="carousel__item">
                  <div className="carousel__item__image">
                      <p className="testimonial__text">
                      </p>
                    </div>
                    <p className="testimonial__text">
                      
                    </p>
                  </div>
                </div>
              </>
            ))}
          </Carousel>
        </div>
      </Box>
      <Footer />
    </Box>
  );
};
