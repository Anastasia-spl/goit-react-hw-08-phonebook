import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import Container from '../Container';
import PublicHeader from '../PublicHeader';
import PrivateHeader from '../PrivateHeader';

const AppBar = ({ isAuthenticated }) => {
  return (
    <Container>
      {isAuthenticated ? <PrivateHeader /> : <PublicHeader />}
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
