import * as actionType from "../Actions/Language";

const initialState = {
    english: true
};

const translationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CHANGE_LANGUAGE:
            return {
                ...state,
                english: action.translate
            };
        default:
            return state;
    };
};

export default translationReducer;
