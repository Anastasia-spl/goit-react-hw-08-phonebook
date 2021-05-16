import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import  authActions from './auth-actions';
const { signUpRequest, signUpSuccess, signUpError, logInRequest, logInSuccess, logInError, logOutRequest, logOutSuccess, logOutError, getCurrentUserRequest, getCurrentUserSuccess, getCurrentUserError } = authActions;

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [signUpSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [signUpSuccess]: () => true,
  [logInSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [signUpError]: () => false,
  [logInError]: () => false,
  [getCurrentUserError]: () => false,
  [logOutSuccess]: () => false,
});

const isLoading = createReducer(false, {
  [signUpRequest]: () => true,
  [logInRequest]: () => true,
  [logOutRequest]: () => true,
  [getCurrentUserRequest]: () => true,
  [signUpError]: () => false,
  [logInError]: () => false,
  [logOutError]: () => false,
  [getCurrentUserError]: () => false,
  [signUpSuccess]: () => false,
  [logInSuccess]: () => false,
  [logOutSuccess]: () => false,
  [getCurrentUserSuccess]: () => false,
});

const setError = (_, { payload }) => payload;
const cleanError = () => null;

const errorSignUp = createReducer(null, {
  [signUpError]: setError,
  [signUpSuccess]: cleanError,
  [signUpRequest]: cleanError,
});

const errorLogIn = createReducer(null, {
  [logInError]: setError,
  [logOutError]: setError,
  [logInSuccess]: cleanError,
  [logOutSuccess]: cleanError,
  [logInRequest]: cleanError,
  [logOutRequest]: cleanError,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  isLoading,
  errorSignUp,
  errorLogIn
})