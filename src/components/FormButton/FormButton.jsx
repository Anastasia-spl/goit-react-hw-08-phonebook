import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: '16px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#3f51b5',
    textTransform: 'capitalize',
    width: '284px',
    marginTop: '15px',
  },
}));

export default function ContainedButtons({ children, type }) {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      color="primary"
      size="large"
      className={classes.button}
      type={type}
    >
      {children}
    </Button>
  );
}
