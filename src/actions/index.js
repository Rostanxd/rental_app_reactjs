import {takeLatest} from "redux-saga/effects";
import {
    PROPERTIES_READ
} from './actionTypes';
import {readPropertiesSagas} from './propertiesSagas';


export function* watcherSaga() {
    yield takeLatest(PROPERTIES_READ, readPropertiesSagas);

}