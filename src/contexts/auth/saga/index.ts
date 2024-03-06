import { takeEvery } from "redux-saga/effects";

import { AUTH_FETCH_EMAIL_LOGIN, AUTH_SIGNUP } from "../authConstants";
import { handleAuthLoginWithEmail } from "./EmailLoginSaga";
import { handleAuthSignUpWithEmail } from "./EmailSiginUp";

export function* rootAuthSaga() {
    yield takeEvery(AUTH_FETCH_EMAIL_LOGIN, handleAuthLoginWithEmail);
    yield takeEvery(AUTH_SIGNUP, handleAuthSignUpWithEmail);
}
