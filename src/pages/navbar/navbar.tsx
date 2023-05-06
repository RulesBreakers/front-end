import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  background: alpha(theme.palette.background.default, 0.8), // Add transparency to background color
  backdropFilter: 'blur(10px)', // Add a blur effect
  boxShadow: 'none', // Remove default box shadow
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar: React.FC = () => {
  return (
    <TransparentAppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon sx={{ 
            flexGrow: 1 
            , color:"black"
            , borderBlock: "solid"
            , border:1
            , borderColor: "gris"
            , borderRadius: "30px 30px 300px 300px"
            }}/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:"black"}}>
          O N I R I X
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Navbar;