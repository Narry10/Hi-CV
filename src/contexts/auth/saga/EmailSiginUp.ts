import { call, put } from "redux-saga/effects";
import { AuthSinUpWithEmail, authLogged } from "../authActions";
import AuthService from "server/auth";
import { UserCredential } from "firebase/auth";

export function* handleAuthSignUpWithEmail(action: AuthSinUpWithEmail) {
  try {
    const { email, password } = action.payload;
    yield call(AuthService.signUpWithEmailAndPassword, {
      email: email,
      password: password,
    });
    yield put(authLogged());
  } catch (error) {
    console.error(error);
  }
}
