import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import routes from '../../routes';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginRight: 15,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '1.25rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    lineHeight: '1.6',
    letterSpacing: '0.0075em',
    color: '#fff',
  },

  link: {
    marginLeft: 15,
    fontSize: '14px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#3f51b5',
    backgroundColor: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: ' 5px 8px',
    borderRadius: '5px',
    '&:hover, &:focus': {
      boxShadow:
        '0px 2px 4px - 1px rgb(0 0 0 / 20 %), 0px 4px 5px 0px rgb(0 0 0 / 14 %), 0px 1px 10px 0px rgb(0 0 0 / 12 %)',
      backgroundColor: '#d5d5d5',
    },
  },
}));

const PublicHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link to={routes.HomePage} className={classes.logo}>
            <Typography className={classes.title} variant="h6" noWrap>
              Contacts Book
            </Typography>
            <ImportContactsIcon />
          </Link>
          <div className={classes.grow} />
          <NavLink to={routes.LogInPage} className={classes.link}>
            Log In
          </NavLink>
          <NavLink to={routes.SignUpPage} className={classes.link}>
            Sign Up
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PublicHeader;
