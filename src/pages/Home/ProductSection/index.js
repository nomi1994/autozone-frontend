import React from "react";
import { Box, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import prodcut1 from '../../../assets/images/product1.jpeg'
import product2 from '../../../assets/images/46512586-swiss-watches-on-white-background-product-photography.jpg'
import product3 from '../../../assets/images/sport-shoe-white-background.jpeg'
import product4 from '../../../assets/images/white_background_bag_after.jpg'
import product5 from '../../../assets/images/sport-shoe-white-background.jpeg'
import './index.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 8
  }
};

const products = [
  {
    imageUrl: prodcut1,
    price: 29.99,
    title: "Product 1",
    rating: 5,
    totalRating: 100,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: product2,
    price: 39.99,
    title: "Product 2",
    rating: 3.5,
    totalRating: 20,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: product3,
    price: 49.99,
    title: "Product 3",
    rating: 4,
    totalRating: 970,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: product4,
    price: 59.99,
    title: "Product 4",
    rating: 2,
    totalRating: 65,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: product5,
    price: 69.99,
    title: "Product 5",
    rating: 1.7,
    totalRating: 120,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: prodcut1,
    price: 79.99,
    title: "Product 6",
    rating: 5.0,
    totalRating: 675,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: product2,
    price: 89.99,
    title: "Product 7",
    rating: 2,
    totalRating: 899,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: product3,
    price: 99.99,
    title: "Product 8",
    rating: 500,
    totalRating: 5000,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: product4,
    price: 109.99,
    title: "Product 9",
    rating: 1,
    totalRating: 10,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    imageUrl: product5,
    price: 119.99,
    title: "Product 10",
    rating: 2,
    totalRating: 100,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  }
];

function ProductSection(props) { 
    return ( 
      <Box sx={{ p:2 }}>
        <Typography 
        sx={{ fontWeight: 'bold' }}
        variant="h4" >
          {props.heading}
        </Typography>
        <Box sx={{width : '6rem',  height : '0.3rem', backgroundColor: 'orange', }}></Box>
        <Box>
          <Carousel
          responsive={responsive}
          className="cstmslide"
          >
        {products.map((product) => (
        <Box className={'box'} sx={{width : '100%',  height: '270px', boxShadow : 3 , textAlign : 'center', pb: 2}}> 
          <Box sx={{height : "150px"}}>
            <img style={{width : '75%'}} src={product.imageUrl} alt="Logo"></img>
          </Box>  
          <Box>
            <Typography
            variant="h6"
            align="left" 
            sx={{px : 2, fontWeight: 'bold'}}>
              $ {product.price}
            </Typography>
            <Box sx={{display : 'flex', px : 2, alignItems : 'center'}}>
              <Rating sx={{textAlign : 'left'}} name="read-only" value={3} readOnly size="small" />
              <Typography fontSize={12}>  {product.rating} ({product.totalRating}) </Typography>
            </Box>
            <Typography
            variant="body2"
            align="left" 
            sx={{px : 2}}>
              {product.details}
            </Typography>  
          </Box>        
        </Box>
      ))}
        </Carousel>
        </Box>
      </Box>  
    ); 
} 
export default ProductSection; 