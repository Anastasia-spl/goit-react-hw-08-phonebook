import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import Section from '../components/Section';
import routes from '../routes';

const useStyles = createUseStyles({
  text: {
    marginBottom: '25px',
    fontSize: '18px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },

  greetingWrapper: {
    textAlign: 'center',
  },

  link: {
    '&:not(:last-of-type)': { marginRight: 15 },
    fontSize: '18px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#3f51b5',
    backgroundColor: '#fff',
    border: '1px solid #3f51b5',
    textDecoration: 'none',
    padding: ' 8px 10px',
    borderRadius: '5px',
    transition: 'boxShadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover, &:focus': {
      boxShadow:
        '0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12)',
    },
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <Section>
      <div className={classes.greetingWrapper}>
        <p className={classes.text}>Welcome to "Contacts Book" application!</p>
        <p className={classes.text}>Here you can store your phone contacts. </p>
        <NavLink to={routes.SignUpPage} className={classes.link}>
          Try it
        </NavLink>
        <NavLink to={routes.ContactsPage} className={classes.link}>
          Open my book
        </NavLink>
      </div>
    </Section>
  );
};

export default HomePage;
