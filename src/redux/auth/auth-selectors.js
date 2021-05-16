const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUser = state => state.auth.user;
const getToken = state => state.auth.token;
const getUserName = state => getUser(state).name;
const getIsLoading = state => state.auth.isLoading;
const getIsSignUpError = state => state.auth.errorSignUp;
const getIsLogInError = state => state.auth.errorLogIn;
// eslint-disable-next-line
export default { getIsAuthenticated, getUser, getToken, getUserName , getIsLoading, getIsSignUpError, getIsLogInError };