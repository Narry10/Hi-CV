import { takeEvery } from "redux-saga/effects";

import { AUTH_FETCH_EMAIL_LOGIN, AUTH_GOOGLE_SIGNIN, AUTH_SIGNUP } from "../authConstants";
import { handleAuthLoginWithEmail } from "./EmailLoginSaga";
import { handleAuthSignUpWithEmail } from "./EmailSiginUp";
import { handleAuthLoginWithGoogle } from "./SignInWithGoogleSaga";

export function* rootAuthSaga() {
    yield takeEvery(AUTH_FETCH_EMAIL_LOGIN, handleAuthLoginWithEmail);
    yield takeEvery(AUTH_SIGNUP, handleAuthSignUpWithEmail);
    yield takeEvery(AUTH_GOOGLE_SIGNIN, handleAuthLoginWithGoogle);
}
