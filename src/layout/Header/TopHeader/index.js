import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


import LogoSection from './LogoSection/Index';
import InfoSection from './InfoSection/Index';
import CartSection from './CartSection/index'
import { Box } from '@mui/material';

function TopHeader() {
  return (
  <Box>
    <AppBar position="static" color='transparent' style={{ padding: 12,  boxShadow : 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoSection></LogoSection>
          <InfoSection></InfoSection>
          <CartSection></CartSection>
        </Toolbar>
      </Container>
    </AppBar>
  </Box>
  );
}
export default TopHeader;