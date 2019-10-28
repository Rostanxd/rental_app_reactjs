import {
    PROPERTIES_READ,
    PROPERTIES_READ_SUCCESS,
    PROPERTIES_READ_ERR,
    SELECT_PROPERTY,
    SET_PROPERTIES_VIEW_MODE,
    SET_CURRENT_PAGE,
    SET_PROPERTIES_PER_PAGE,
} from '../actions/actionTypes';

const defaultState = {
    properties: [],
    currentProperty: {},
    fetchingList: false,
    errorList: false,
    viewModeGrid: true,
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
        case SELECT_PROPERTY:
            return{
                ...state,
                currentProperty: action.payload,
            };
        case SET_PROPERTIES_VIEW_MODE:
            return{
                ...state,
                viewModeGrid: action.payload,
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