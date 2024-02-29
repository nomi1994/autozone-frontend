import React from "react";
import { Box, Typography } from "@mui/material";
import icon1 from '../../../assets/images/icon1.svg'
import icon2 from '../../../assets/images/icon2.svg'
import icon3 from '../../../assets/images/icon3.svg'
import a2 from '../../../assets/images/a2.png'
import a1 from '../../../assets/images/a1.png'
import b2 from '../../../assets/images/b2.png'
import b1 from '../../../assets/images/b1.png'
import c1 from '../../../assets/images/c1.png'
import c2 from '../../../assets/images/c2.png'
import c3 from '../../../assets/images/c3.png'

function PartsTestingSection(props) { 
    return ( 
    <Box sx={{ p:2 }}>
      <Box sx={{display : 'flex', py : 2}}>
        <Box sx={{width : '33.33%' , display : 'flex', justifyContent : 'center'}}>
          <Box sx={{mr : 3}}>
          <img src={icon1} alt="Logo"></img>
          </Box>
          <Box>
            <Box>
              <Typography
              variant="h5"
              sx={{ fontWeight: 'bold' }}>
              FREE PARTS TESTING
              </Typography>
              <Typography>
              We'll check your alternator, starter, battery and more.
              </Typography>              
            </Box>
          </Box>
        </Box>
        <Box sx={{width : '33.33%' , display : 'flex', justifyContent : 'center'}}>
          <Box sx={{mr : 3}}>
          <img src={icon2} alt="Logo"></img>
          </Box>
          <Box>
            <Box>
              <Typography
              variant="h5"
              sx={{ fontWeight: 'bold' }}>
              LOAN-A-TOOL®
              </Typography>
              <Typography>
              Need a tool? Borrow one of ours.
              </Typography>              
            </Box>
          </Box>
        </Box>
        <Box sx={{width : '33.33%' , display : 'flex', justifyContent : 'center'}}>
          <Box sx={{mr : 3}}>
          <img src={icon3} alt="Logo"></img>
          </Box>
          <Box>
            <Box>
              <Typography
              variant="h5"
              sx={{ fontWeight: 'bold' }}>
              FIX FINDER SOLUTION
              </Typography>
              <Typography>
              Check engine light on?
              </Typography>              
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{display : 'flex'}}>
        <img style={{width : '49%',  padding : '0.5rem'}} src={a2} alt="a2"></img>
        <img style={{width : '49%',  padding : '0.5rem'}} src={a1} alt="a1"></img>
      </Box>
      <Typography fontSize={13} sx={{textDecoration: 'underline' , p: 2}}>
            Click for details
          </Typography>
      <Box sx={{display : 'flex'}}>
        <img style={{width : '49%',  padding : '0.5rem'}} src={b2} alt="b2"></img>
        <img style={{width : '49%',  padding : '0.5rem'}} src={b1} alt="b1"></img>
      </Box>      
      <Typography 
        sx={{ fontWeight: 'bold', p: 2 }}
        variant="h4" >
          TOP DEALS
      </Typography>
      <Box sx={{width : '6rem',  height : '0.3rem', backgroundColor: 'orange' , ml: 1 }}></Box>
      <Box sx={{display : 'flex', py : 2}}>
        <Box sx={{width : '33.33%',  boxShadow : 3, p : 1}}>
          <img style={{width : '100%'}} src={c1} alt="c1"></img>
        </Box>
        <Box sx={{width : '33.33%',  boxShadow : 3, p : 1}}>
          <img style={{width : '100%'}}src={c2} alt="c2"></img>
        </Box>
        <Box sx={{width : '33.33%',  boxShadow : 3, p : 1}}>
          <img style={{width : '100%'}}src={c3} alt="c3"></img>
        </Box>                
      </Box>      
    </Box>  
    ); 
} 
export default PartsTestingSection; 