import { combineReducers } from "redux";

import propertiesReducer from './propertiesReducer'

export default combineReducers({
    propertiesState: propertiesReducer,
})