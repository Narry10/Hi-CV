import { all, call } from "redux-saga/effects";
import { rootAuthSaga } from "./auth/saga";

export default function* rootSaga() {
  yield all([rootAuthSaga()]);
}
