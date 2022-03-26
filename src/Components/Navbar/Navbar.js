import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Link from '@mui/material/Link';
import Login from '../../pages/Login';
export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showLogin, setShowLogin] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowLogin(null);
  };
  const handleLogin = (event) => {
    setShowLogin(event.currentTarget);
  };
  const handleChangePageToLogin = () => {
    history.push('/login');
    setShowLogin(null);
  };
  const handleChangeHome = () => {
    history.push('/');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Router>
                <Link
                  component={RouterLink}
                  to='/'
                  underline='none'
                  color='white'
                  onClick={() => handleChangeHome()}
                >
                  Photo
                </Link>
              </Router>
            </Typography>

            {auth && (
              <div>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}

            {!auth && (
              <>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}
                  onClick={handleLogin}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={showLogin}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(showLogin)}
                  onClose={handleClose}
                >
                  {/* <MenuItem Link={RouterLink} to='/login'>
                  Login
                </MenuItem> */}
                  {/* <MenuItem component={Link} to='/login'>
                  Login
                </MenuItem> */}
                  <MenuItem onClose={handleClose}>
                    <Router>
                      <Link
                        onClick={handleChangePageToLogin}
                        component={RouterLink}
                        to='/login'
                        underline='none'
                      >
                        Login
                      </Link>
                    </Router>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
