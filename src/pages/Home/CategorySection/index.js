import React from "react";
import { Box, Typography } from "@mui/material";
import prodcut1 from '../../../assets/images/product1.jpeg'
import product2 from '../../../assets/images/46512586-swiss-watches-on-white-background-product-photography.jpg'
import product3 from '../../../assets/images/sport-shoe-white-background.jpeg'
import product4 from '../../../assets/images/white_background_bag_after.jpg'
import product5 from '../../../assets/images/sport-shoe-white-background.jpeg'


const categories = [
  {
    imageUrl: prodcut1,
    title: "BATTERIES"
  },
  {
    imageUrl: product2,
    title: "BREAK PADS"
  },
  {
    imageUrl: product3,
    title: "ENGINE OIL"
  },
  {
    imageUrl: product4,
    title: "BREAK ROTORS"
  },
  {
    imageUrl: product5,
    title: "SHOCKS AND STRUTS"
  },
  {
    imageUrl: prodcut1,
    title: "CONTROL ARMS"
  },
  {
    imageUrl: product2,
    title: "ENGINES"
  },
  {
    imageUrl: product3,
    title: "WIPERS"
  },
  {
    imageUrl: product4,
    title: "SPARK PLUGS"
  },
  {
    imageUrl: product5,
    title: "HEADLIGHTS"
  },
  {
    imageUrl: product2,
    title: "WASH AND WAX"
  },
  {
    imageUrl: prodcut1,
    title: "CLEARANCE"
  }
];

function CategorySection() { 
    return ( 
    <Box sx={{ p: 2}}>
        <Typography 
        sx={{ fontWeight: 'bold' }}
        variant="h4" >
          FEATUREDCATEGORIES
        </Typography>
        <Box sx={{width : '6rem',  height : '0.3rem', backgroundColor: 'orange', mb: 2}}></Box>
        <Box sx={{display : 'flex', flexWrap : 'wrap'}}>
          {categories.map((category) => (
            <Box className= 'box' sx={{width : '16.5%',  height: '200px', border : '0.2px solid gray', textAlign: 'center'}}> 
            <Box sx={{height : "150px"}}>
              <img style={{width : '75%'}} src={category.imageUrl} alt="Logo"></img>
            </Box>  
            <Box>
              <Typography
              variant="p"
              align="left" 
              sx={{px : 2, fontWeight: 'bold'}}>
                {category.title}
              </Typography> 
            </Box>        
          </Box>
        ))}
      </Box>
    </Box>
    ); 
} 
export default CategorySection; 