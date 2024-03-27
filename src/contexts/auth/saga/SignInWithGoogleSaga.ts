import { call } from "redux-saga/effects";
import AuthService from "server/auth";
import { AuthGoogleSignIn } from "../authActions";

export function* handleAuthLoginWithGoogle(action: AuthGoogleSignIn): any {
  try {
    const user = yield call(AuthService.signInWithGoogle);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}