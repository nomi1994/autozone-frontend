import * as React from 'react';
import { Box } from '@mui/material';

import SocialLinks from './SocialLinksSection/index'
import PagesLinks from './PagesLinksSection/index'
import Copyright from './CopyrightSection/index'

function Footer() {
  return (
  <Box sx={{backgroundColor : '#212121' , color : '#9e9e9e'}}>
    <SocialLinks/>
    <PagesLinks/>
    <Copyright/>
  </Box>
  );
}
export default Footer;