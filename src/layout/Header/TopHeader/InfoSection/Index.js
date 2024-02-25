import * as React from 'react';
import { Box, Typography } from "@mui/material";
import { common } from '@mui/material/colors';

const InfoSection = () => {
  return (
    <Box sx={{ flexGrow: 1 , ml : '3rem'}}>
      <Typography sx={{fontSize: 14, color : common.black}} >
      20% OFF ORDERS OVER $100* + FREE NEXT DAY DELIVERY^
      </Typography>
      <Typography sx={{ lineHeight : 1, fontSize: 12, color : common.black}}>
      Eligible Ship-To-Home Items Only. Use Code: AZSAVINGS
      </Typography>
    </Box>
  );
};

export default InfoSection;
