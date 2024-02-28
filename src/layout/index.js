import Header from './Header'; 
import Footer from './Footer'
import { Box } from '@mui/material';

import Home from '../pages/Home/index'
const CustomLayout = () => {
  return (
    <Box>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
    </Box>
  );
};

export default CustomLayout;
