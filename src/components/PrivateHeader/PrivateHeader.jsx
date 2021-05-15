import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { AccountCircle } from '@material-ui/icons';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import { authSelectors, authOperations } from '../../redux/auth';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import routes from '../../routes';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
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

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginRight: 15,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: '15px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  button: {
    marginLeft: 15,
    fontSize: '14px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#3f51b5',
    backgroundColor: '#fff',
    maxHeight: '38px',
    '@media screen and (max-width: 767px)': {
      fontSize: '12px',
      lineHeight: 1.3,
    },
  },
  greeting: {
    '@media screen and (max-width: 767px)': {
      display: 'none',
    },
  },
}));

const PrivateHeader = ({ userName, onLogOut, value, onFilterChange }) => {
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              type="text"
              value={value}
              onChange={onFilterChange}
              placeholder="Search contact..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <Typography
            className={[classes.title, classes.greeting]}
            variant="h6"
            noWrap
          >
            Welcome, {userName}!
          </Typography>
          <AccountCircle />
          <Button
            variant="contained"
            className={classes.button}
            onClick={onLogOut}
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state),
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(authOperations.logOut()),
  onFilterChange: event =>
    dispatch(contactsActions.filterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateHeader);
