import * as React from 'react';
import { Box } from '@mui/material';
import BottomHeader from './BottomHeader/index'
import TopHeader from './TopHeader/index'

function Header() {
  return (
  <Box>
    <TopHeader></TopHeader>
    <BottomHeader></BottomHeader>
  </Box>
  );
}
export default Header;