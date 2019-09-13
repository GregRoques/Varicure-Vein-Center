import * as actionType from "../Actions/Auth";

const initialState = {
    idToken: null,
    userId: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_SUCCESS:
            return {
                ...state,
                idToken: action.idToken,
                userId: action.userId,
                error: null
            };
        case actionType.AUTH_FAIL:
            return {
                ...state,
                error: action.error
            };
        case actionType.AUTH_LOGOUT:
            return {
                ...state,
                idToken: null,
                userId: null
            };
        default:
            return state;
    };
};

export default authReducer;
