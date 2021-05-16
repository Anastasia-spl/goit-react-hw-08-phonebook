import { connect } from 'react-redux';
import { lazy } from 'react';

import { authSelectors } from '../redux/auth';

import Section from '../components/Section';
import LogInForm from '../components/auth/LogInForm';

const Error = lazy(() =>
  import('../components/Error' /* webpackChunkName: "error-page" */),
);

const LogInPage = ({ isError }) => (
  <Section>
    {isError && <Error error={isError} />}
    <LogInForm />
  </Section>
);

const mapStateToProps = state => ({
  isError: authSelectors.getIsLogInError(state),
});

export default connect(mapStateToProps)(LogInPage);
