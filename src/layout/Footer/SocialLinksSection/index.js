import * as React from 'react';
import { Box, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocatorImage from '../../../assets/images/az_locator.svg';
import BoxImage from '../../../assets/images/az-box.svg'
import ComposeImage from '../../../assets/images/az-compose.svg'


function SocialLinks() {
  return (
  <Box>
    <Box sx={{display: 'flex', flexGrow : 1,  justifyContent : 'space-between', p: 2}}>
        <Box sx={{display : 'flex', alignItems : 'center', width : '25%'}}>
        <img src={LocatorImage}  width = "8%" alt="LocatorImage"></img>
          <Typography variant='h6'  sx={{ml : 3}}>
            Locate A Store
          </Typography>
        </Box>
        <Box sx={{display : 'flex', alignItems : 'center', width : '25%'}}>
        <img src={BoxImage}  width = "8%" alt="BoxImage"></img>
          <Typography variant='h6'  sx={{ml : 3}}>
          Track Your Order
          </Typography>
        </Box>
        <Box sx={{display : 'flex', alignItems : 'center', width : '25%'}}>
        <img src={ComposeImage}  width = "8%" alt="ComposeImage"></img>
          <Typography variant='h6'  sx={{ml : 3}}>
          We're Hiring!
          </Typography>
        </Box>   
        <Box sx={{display : 'flex', justifyContent : 'space-around', width : '25%'}}>
          <Box>
            <FacebookOutlinedIcon fontSize='large'/>
          </Box>
          <Box>
            <XIcon fontSize='large'/>
          </Box>
          <Box>
            <YouTubeIcon fontSize='large'/>
          </Box>
          <Box>
            <InstagramIcon fontSize='large'/>
          </Box>                              
        </Box>
      </Box>
        <hr style={{width : "98%"}}></hr>  
  </Box>                    
  );
}
export default SocialLinks;