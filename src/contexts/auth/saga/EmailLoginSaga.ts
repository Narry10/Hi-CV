import { call } from "redux-saga/effects";

import AuthService from "server/auth";
import { AuthLoginWithEmail } from "../authActions";

export function* handleAuthLoginWithEmail(action: AuthLoginWithEmail): any {
  try {
    const { email, password } = action.payload;
    
    const user =  yield call(AuthService.signInWithEmailAndPassword, {
      email: email,
      password: password,
    });
    
    
  } catch (error) {
    console.error(error);
  }
}
