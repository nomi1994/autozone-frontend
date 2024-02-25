import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function MenuSection() {
  return (
    <Box sx={{display : 'flex', alignItems : 'center', ml : 2, mr : 6}}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon color='action' />
      </IconButton>
      <Box sx={{display : 'flex', alignItems : 'center', ml : 6}}>
        <DirectionsCarIcon color='action'/>
      <Typography
        // variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' }, mr : 1, ml : 2, color : 'common.black' }}
      >
        Add Vehicle
      </Typography>
      <KeyboardArrowRightIcon color='action'/>
      </Box>
    </Box>
  );
}