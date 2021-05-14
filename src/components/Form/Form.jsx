import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Form = ({ children, onSubmit }) => {
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
