import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  flexBox: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});

const FlexWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.flexBox}>{children}</div>;
};

export default FlexWrapper;
