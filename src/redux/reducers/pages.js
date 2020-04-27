import {
    UPLOAD_PAGES,
    FAILED_TO_UPLOAD_PAGE,
    GET_ALL_PAGES,
    FAILED_TO_GET_ALL_PAGES,
    GET_A_PAGE, FAILED_TO_GET_A_PAGE
} from "../action-types/pages";


export default (state = {}, {
    type,
    payload
}) => {
    switch (type) {
        case UPLOAD_PAGES:
            return {
                ...state,
                pages: payload,
            };
        case FAILED_TO_UPLOAD_PAGE:
            return {
                ...state,
                error: payload,
            };
        case GET_ALL_PAGES:
            return {
                ...state,
                getPages: payload,
            };
        case FAILED_TO_GET_ALL_PAGES:
            return {
                ...state,
                error: payload,
            };
        case GET_A_PAGE:
            return {
                ...state,
                getPage: payload,
            };
        case FAILED_TO_GET_A_PAGE:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};