import { connect } from 'react-redux';
import { lazy } from 'react';

import { authSelectors } from '../redux/auth';

import Section from '../components/Section';
import SignUpForm from '../components/auth/SignUpForm';
const Error = lazy(() =>
  import('../components/Error' /* webpackChunkName: "error-page" */),
);

const SignUpPage = ({ isError }) => (
  <Section>
    {isError && <Error error={isError} />}
    <SignUpForm />
  </Section>
);

const mapStateToProps = state => ({
  isError: authSelectors.getIsSignUpError(state),
});

export default connect(mapStateToProps)(SignUpPage);
