import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense, Component } from 'react';
import { connect } from 'react-redux';
import routes from './routes';
import { authOperations, authSelectors } from './redux/auth';

import AppBar from './components/AppBar';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

  
const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "main-page" */))
const SingUpPage = lazy(() => import('./pages/SignUpPage' /* webpackChunkName: "signUp-page" */))
const LogInPage = lazy(() => import('./pages/LogInPage' /* webpackChunkName: "logIn-page" */))
const ContactsPage = lazy(() => import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */));
const Page404 = lazy(() => import('./pages/Page404' /* webpackChunkName: "404-page" */))

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  
  render() {
    const { isLoading, isError} = this.props;
    return (
      <div className="App">
        <AppBar />
        
        <Suspense fallback={Loader}>
          {isLoading ? <Loader /> : 
          <Switch>
              <PublicRoute path={routes.HomePage} exact component={HomePage} />
              <PublicRoute path={routes.SignUpPage} restricted component={SingUpPage} redirectTo={routes.ContactsPage} />
              <PublicRoute path={routes.LogInPage} restricted component={LogInPage} redirectTo={routes.ContactsPage} />
              <PrivateRoute path={routes.ContactsPage} component={ContactsPage} redirectTo={routes.LogInPage} />
              <Route component={Page404} />
          </Switch>
          }
        </Suspense>
    </div>
   );
  }
}

const mapStateToProps = (state) => ({
  isLoading: authSelectors.getIsLoading(state),
})

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
