import Section from '../components/Section';

const ErrorPage = ({ error }) => {
  return (
    <Section>
      <p>{error}</p>
    </Section>
  );
};

export default ErrorPage;
