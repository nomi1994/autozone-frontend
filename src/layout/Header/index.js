import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


import LogoSection from './TopHeader/LogoSection/Index';
import InfoSection from './TopHeader/InfoSection/Index';
import CartSection from './TopHeader/CartSection/index'
import SearchSection from './BottomHeader/SearchSection/index'
import { Box } from '@mui/material';

function Header() {
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
      <SearchSection></SearchSection>
  </Box>
  );
}
export default Header;