import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchData() {
  const json = yield axios
    .get("https://64b5057cf3dbab5a95c68888.mockapi.io/formData")
    .then((response) => response.data);
  yield put({ type: "DATA_RECEIVED", json: json });
}

function* postFormData() {
  const json = yield axios
    .post("https://64b5057cf3dbab5a95c68888.mockapi.io/formData", {})
    .then((response) => response.data);
  yield put({ type: "POST_DATA", json: json });
}

function* actionWatcher() {
  yield takeLatest("GET_FORM_DATA", fetchData);
  yield takeLatest("POST_DATA", postFormData);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
