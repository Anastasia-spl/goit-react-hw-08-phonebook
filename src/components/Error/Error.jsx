import { createUseStyles } from 'react-jss';
import Section from '../Section';

const useStyles = createUseStyles({
  errorText: {
    textAlign: 'center',
    color: 'red',
  },
});

const Error = ({ error }) => {
  const classes = useStyles();
  return (
    <Section>
      <p className={classes.errorText}>{error}</p>
    </Section>
  );
};

export default Error;
