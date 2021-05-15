import Container from '../Container';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  section: {
    padding: '30px 0',
    '@media screen and (max-width: 767px)': {
      padding: '15px 0',
    },
  },
});
const Section = ({ title, children }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container>
        <h2 className="title">{title}</h2>
        {children}
      </Container>
    </section>
  );
};

export default Section;
