import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Digisecure from '../../../assets/images/digisecure.png';
import Applestore from '../../../assets/images/app_store.svg'
import Playstore from '../../../assets/images/google-play.svg'


const copyrightpageslist = ['Terms & Conditions', 'Privacy Policy', 'Return Policy', 'CA Supply Chain Disclosure', 'Sitemap', 'Insurance & Risk Management', 'Return Policy', 'Your California and Other State Law Privacy Rights'];
function Copyright() {
  return (
  <Box>
    <Box sx={{display: 'flex', flexGrow : 1, alignItems : 'center', p: 2}}>
        <Box sx={{width : '5%'}}>
        <img src={Digisecure} width= '85%' alt="Logo"></img>
        </Box>  
        <Box>
        <Box sx={{width : '65%', display : 'flex',  flexWrap : "wrap"}}>
          {copyrightpageslist.map((list) => (
          <Typography sx={{px : 1,fontSize: 14}}>  {list} </Typography>
      ))}
        </Box>  
        <Box>
            <Typography sx={{p : 1,fontSize: 15}}>
            © 2001-2024 AutoZone, Inc. All Rights Reserved
            </Typography>
        </Box> 
        </Box> 
        <Box sx={{width : '30%', display : 'flex' , justifyContent : 'space-evenly' , alignItems : 'start'}}>
          <Box>
          <img src={Applestore} alt="Applestore"></img>
          </Box>
          <Box>
          <img src={Playstore} alt="Playstore"></img>
          </Box>          
        </Box>                    
    </Box>   
  </Box>  
  );
}
export default Copyright;