import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Properties
            </Typography>
            <Button variant="outlined" color="inherit" className={classes.button}>
              Sign up
            </Button>
            <Button variant="outlined" color="inherit" style={{marginLeft: '10px'}} className={classes.button}>
              <MenuIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
  );
}