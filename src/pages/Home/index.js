import React from "react";
import { Box, Typography } from "@mui/material";
import './index.css';

import homebanner from '.././../assets/images/homebanner.png';
import cimage1 from '../../assets/images/modern-sports-car-speeds-through-dark-curve-generative-ai.jpg'
import cimage2 from '../../assets/images/sports-car-races-through-dark-blurred-motion-generative-ai.jpg'
import cimage3 from '../../assets/images/volleyball-stadium-render-3d-illustration.jpg'
import cimage4 from '../../assets/images/yellow-sport-car-render-3d-illustration.jpg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const imageUrls = [cimage1, cimage2, cimage3, cimage4, cimage1, cimage2, cimage3, cimage4, cimage1, cimage2, cimage3, cimage4];
function Home() { 
    return ( 
      <Box>
        <Box sx={{ p:2 }} >
          <img src={homebanner} style={{width: '100%'}} alt="homebanner"></img>
          <Typography fontSize={13} sx={{textDecoration: 'underline'}}>
            Click for details
          </Typography>
        </Box>
        <Box sx={{ p: 2 }} >
          <Carousel 
          infinite={true} 
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          arrows= {false}>
        {imageUrls.map((imageUrl) => (
        <Box> 
          <img style={{width: '100%' ,height : '100vh'}} src={imageUrl} alt={`Image`} /> 
        </Box>
      ))}
        </Carousel>
        </Box>
      </Box>  
    ); 
} 
export default Home; 