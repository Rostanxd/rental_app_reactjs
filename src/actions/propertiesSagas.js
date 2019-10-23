import {call, put} from "redux-saga/effects";
import axios from "axios";
import {
    PROPERTIES_READ_SUCCESS,
    PROPERTIES_READ_ERR,
} from '../actions/actionTypes';

const readProperties = () => {
    return axios.get('http://dev1-sample.azurewebsites.net/properties.json');
};

export function* readPropertiesSagas() {
    try {
        const res = yield call(readProperties);
        const properties = res.data.properties;
        if (properties) {
            yield put({
                type: PROPERTIES_READ_SUCCESS,
                payload: properties
            });
        }
    } catch (error) {
        yield put({
            type: PROPERTIES_READ_ERR,
            error: error
        });
    }
}