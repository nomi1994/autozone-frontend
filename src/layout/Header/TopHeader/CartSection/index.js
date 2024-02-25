import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const CartSection = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
  <Box sx={{display : 'flex' , alignItems : 'center'}}>
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Box>
          <PersonIcon style={{ fontSize: 26 }} color="action" ></PersonIcon>
          <Typography sx={{lineHeight : 0 , fontSize: 12}} >Sign In</Typography>
        </Box>
        <KeyboardArrowDownIcon style={{ fontSize: 26 }} color="action" ></KeyboardArrowDownIcon>
      </IconButton>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
    </Box>
    <Box sx={{ml: '2rem'}}>
    <IconButton>
    <Box>
      <ShoppingCartIcon style={{ fontSize: 26 }}  color="action" ></ShoppingCartIcon>
      <Typography sx={{lineHeight : 0 , fontSize: 12}} >Cart</Typography>
    </Box>
    </IconButton>
    </Box>
</Box>
  );
};

export default CartSection;
