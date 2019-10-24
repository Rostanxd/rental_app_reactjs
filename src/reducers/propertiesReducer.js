import {
    PROPERTIES_READ,
    PROPERTIES_READ_SUCCESS,
    PROPERTIES_READ_ERR,
    SELECT_PROPERTIE,
    SET_CURRENT_PAGE,
    SET_PROPERTIES_PER_PAGE
} from '../actions/actionTypes';

const defaultState = {
    properties: [],
    currentPropertie: {},
    fetchingList: false,
    errorList: false,
    currentPage: 1,
    propertiesPerPage: 6
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
        case SELECT_PROPERTIE:
            return{
                ...state,
                currentPropertie: action.payload,
            };
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            };
        case SET_PROPERTIES_PER_PAGE:
            return{
                ...state,
                propertiesPerPage: action.payload
            };
        default:
            return state;
    }
};

export default propertiesReducer;