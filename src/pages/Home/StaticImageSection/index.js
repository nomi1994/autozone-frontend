import React from "react";
import { Box } from "@mui/material";
import d1 from '../../../assets/images/d1.png'
import d2 from '../../../assets/images/d2.png'
import d3 from '../../../assets/images/d3.png'
import d4 from '../../../assets/images/d4.png'


function StaticImageSection() { 
    return ( 
    <Box>
      <Box sx={{display : 'flex', p : 2}}>
        <Box sx={{width : '50%' , p: 1}}>
        <img style={{width : '100%'}} src={d1} alt="d1"></img>
        </Box>
        <Box sx={{width : '50%' , p: 1}}>
        <img style={{width : '100%'}} src={d2} alt="d2"></img>
        </Box>
      </Box>
      <Box sx={{display : 'flex', p : 2}}>
        <Box sx={{width : '50%' , p: 1}}>
        <img style={{width : '100%'}} src={d3} alt="d3"></img>
        </Box>
        <Box sx={{width : '50%' , p: 1}}>
        <img style={{width : '100%'}} src={d4} alt="d4"></img>
        </Box>                  
      </Box>  
    </Box>
    ); 
} 
export default StaticImageSection; 