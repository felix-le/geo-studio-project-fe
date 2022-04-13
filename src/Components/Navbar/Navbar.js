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
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo4 from '../assets/images/logo4.png';

import user from '../assets/images/user.png';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },

  logoWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonToggleWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  accountWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '20px',
    '& h6': {
      fontSize: '14px',
    },
  },
  avatar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: '10px',
  },
});

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(false);
  const styles = useStyles();
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
            <Typography component='div' sx={{ flexGrow: 1 }}>
              <a href='/' className={styles.logoWrapper}>
                <img src={logo1} alt='logo' />
                <img src={logo2} alt='logo' />
                <img
                  src={logo4}
                  alt='logo'
                  style={{ height: '40px', width: 'auto' }}
                />
              </a>
            </Typography>

            <div className={styles.buttonToggleWrapper}>
              {/* <div className={styles.accountWrapper}>
                <Typography variant='h6' color='inherit'>
                  Alexander Hipp
                </Typography>
                <div className={styles.avatar}>
                  <img src={user} alt='user' />
                </div>
              </div> */}
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
                    <div
                    // onClick={handleChangePageToLogin}
                    // component={RouterLink}
                    // to='/login'
                    // underline='none'
                    >
                      Something here
                    </div>
                  </Router>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
