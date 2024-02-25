import * as React from 'react';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function LocationInfoSection() {
  return (
    <Box sx={{display : 'flex', alignItems : 'center'}} >
      <Box sx={{ml : 4}}>
        <LocationOnIcon color='action'/>
      </Box>
      <Box sx={{ml : 2}}>
        <Typography sx={{fontSize : 12, lineHeight : 1, color : 'common.black'}}>
        4394 Summer Ave
        </Typography>
        <Typography sx={{fontSize : 13, color : 'green'}}>
        OPEN Until Midnight
        </Typography>
      </Box>
      <Box sx={{mx : 2}}>
        <KeyboardArrowRightIcon color='action'/>
      </Box>            
    </Box>
  );
}