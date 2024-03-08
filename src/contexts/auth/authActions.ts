import { AUTH_FETCH_EMAIL_LOGIN, AUTH_SIGNUP } from "./authConstants";

import { authLogin, authSignUp } from "./authTypes";

export interface AuthLoginWithEmail {
  type: typeof AUTH_FETCH_EMAIL_LOGIN;
  payload: authLogin;
}

export interface AuthSinUpWithEmail {
  type: typeof AUTH_SIGNUP;
  payload: authSignUp;
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
