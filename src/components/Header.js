import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from '../Style';

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <img src='/logo192.png' alt='logo' className={classes.logo} />
          <Typography variant='h5' component='h1'>
            Covid Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
