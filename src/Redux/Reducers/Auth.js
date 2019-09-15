import * as actionType from "../Actions/Auth";

const initialState = {
    idToken: null,
    userId: null,
    email: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_SUCCESS:
            return {
                ...state,
                idToken: action.idToken,
                userId: action.userId,
                email: action.email,
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
                userId: null,
                email: null
            };
        default:
            return state;
    };
};

export default authReducer;
