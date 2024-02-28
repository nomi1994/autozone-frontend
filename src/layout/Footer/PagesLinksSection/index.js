import * as React from 'react';
import { Box, Typography } from '@mui/material';

const shoppageslist = ['AutoZone Locations', 'Vehicle Make', 'Vehicle Model', 'Shop All Brands', 'Vehicle VIN Lookup', 'Gift Cards', 'Discounts & Coupons', 'Local Store Ad', 'Clearance'];
const productpageslist = ['Auto Parts', 'Interior Accessories', 'Exterior Accessories', 'Truck', 'Tools', 'Chemicals', 'Performance'];
const helppageslist = ['Track My Order', 'Contact Us', 'My Account', 'FAQs', 'Return Policies', 'Product Recalls', 'Product Ingredient Disclosures', 'Web Accessibility'];
const aboutuspageslist = ['Careers', 'About AutoZone', 'Investor Relations', 'Affiliate Program', 'Vendor Information', 'ESG'];
const servicespageslist = ['Buy Online, Pick Up in Store', 'Loan-A-Tool', 'In-Store Services', 'Repair Help', 'Mobile App', 'Find a Repair Shop', 'AutoZone Rewards', 'Sign Up for Text Messages'];
const otherautozonesiteslist = ['AutoZoner Services', 'AutoZone Pro', 'ALLDATA diy', 'ALLDATA Repair', 'Mobile App', 'Duralast', 'AutoZone MX'];

function PagesLinks() {
  return (
  <Box>
    <Box sx={{display: 'flex', flexGrow : 1,  justifyContent : 'space-between', p: 2}}>
        <Box sx={{width : '20%'}}>
        <Typography sx={{py : 0.7, fontWeight: 'bold'}} color= "white" variant='h6'>
            SHOP
          </Typography>
          {shoppageslist.map((list) => (
          <Typography sx={{py : 0.7, fontSize: 15}}> {list} </Typography>
      ))}
        </Box>
        <Box sx={{width : '20%'}}>
        <Typography sx={{py : 0.7, fontWeight: 'bold'}} color= "white"  variant='h6'>
            PRODUCTS
          </Typography>
          {productpageslist.map((list) => (
          <Typography sx={{py : 0.7, fontSize: 15}}> {list} </Typography>
      ))}
        </Box>
        <Box sx={{width : '20%'}}>
        <Typography sx={{py : 0.7, fontWeight: 'bold'}} color= "white"  variant='h6'>
            HELP
          </Typography>
          {helppageslist.map((list) => (
          <Typography sx={{py : 0.7, fontSize: 15}}> {list} </Typography>
      ))}
        </Box> 
        <Box sx={{width : '20%'}}>
        <Typography sx={{py : 0.7, fontWeight: 'bold'}} color= "white"  variant='h6'>
            ABOUT US
          </Typography>
          {aboutuspageslist.map((list) => (
          <Typography sx={{py : 0.7, fontSize: 15}}> {list} </Typography>
      ))}
        </Box>   
        <Box sx={{width : '20%'}}>
        <Typography sx={{py : 0.7, fontWeight: 'bold'}} color= "white"  variant='h6'>
            SERVICES
          </Typography>
          {servicespageslist.map((list) => (
          <Typography sx={{py : 0.7, fontSize: 15}}> {list} </Typography>
      ))}
        </Box>         
    </Box>
    <Box>
      <Typography sx={{py : 0.7, fontWeight: 'bold'}} align='center' color= "white" variant='h6'>
      OTHER AUTOZONE SITES
      </Typography>
    </Box>
    <Box sx={{display : 'flex', justifyContent : 'space-around', mx : 30}}>
    {otherautozonesiteslist.map((list) => (
      <Typography sx={{p : 1}} align='center'> {list} </Typography>
      ))}
    </Box>    
    <hr style={{width : "98%"}}></hr>    
  </Box>  
  );
}
export default PagesLinks;