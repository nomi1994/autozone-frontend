import { Box } from '@mui/material';
import logo from '../../../../assets/images/az-logo-full.svg';

const LogoSection = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
      <img src={logo} alt="Logo"></img>
    </Box>
  );
};

export default LogoSection;
