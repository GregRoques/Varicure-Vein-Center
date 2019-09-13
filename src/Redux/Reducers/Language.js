import * as actionType from "../Actions/Language";

const initialState = {
    isEnglish: true
};

const translationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_LANGUAGE:
            return {
                ...state,
                isEnglish: action.payload
            };
        default:
            return state;
    };
};

export default translationReducer;
