import {
    PROPERTIES_READ,
    PROPERTIES_READ_SUCCESS,
    PROPERTIES_READ_ERR,
} from '../actions/actionTypes';

const defaultState = {
    properties: [],
    fetchingList: false,
    errorList: false,
};

const propertiesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PROPERTIES_READ:
            return {
                ...state,
                fetchingList: true,
                errorList: false,
            };
        case PROPERTIES_READ_SUCCESS:
            return {
                ...state,
                fetchingList: false,
                properties: action.payload,
                errorList: false,
            };
        case PROPERTIES_READ_ERR:
            return{
              ...state,
              fetchingList: false,
              errorList: true,
            };
        default:
            return state;
    }
};

export default propertiesReducer;