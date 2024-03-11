import {
  AUTH_FETCH_EMAIL_LOGIN,
  AUTH_LOGGED,
  AUTH_LOGOUT,
  AUTH_SIGNUP,
} from "./authConstants";

import { authLogin, authSignUp } from "./authTypes";

export interface AuthLoginWithEmail {
  type: typeof AUTH_FETCH_EMAIL_LOGIN;
  payload: authLogin;
}

export interface AuthSinUpWithEmail {
  type: typeof AUTH_SIGNUP;
  payload: authSignUp;
}

export interface AuthLogged {
  type: typeof AUTH_LOGGED;
}

export interface AuthOut {
  type: typeof AUTH_LOGOUT;
}

export type authAction = AuthLoginWithEmail | AuthSinUpWithEmail;

export const authLoginWithEmail = (payload: authLogin): AuthLoginWithEmail => ({
  type: AUTH_FETCH_EMAIL_LOGIN,
  payload,
});

export const authSinUpWithEmail = (
  payload: authSignUp
): AuthSinUpWithEmail => ({
  type: AUTH_SIGNUP,
  payload,
});

export const authLogged = (): AuthLogged => ({
  type: AUTH_LOGGED,
});

export const authOut = (): AuthOut => ({
  type: AUTH_LOGOUT,
});
