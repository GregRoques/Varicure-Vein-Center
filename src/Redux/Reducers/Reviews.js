import * as actionType from "../Actions/Reviews";
import { reviewAPI } from "../../Aux/apiLink";

const initialState = {
    Reviews1: {
        newPic: 1,
        englishReview: "We Take Care of the Spiders",
        spanishReview: "Cuidamos de las arañas",
        url: null,
        name: null,
        social: null
    },
    Reviews2: {
        englishReview: "We Take Care of the Spiders",
        spanishReview: "Cuidamos de las arañas",
        url: null,
        name: null,
        social: null
    },
    Reviews3: {
        englishReview: "We Take Care of the Spiders",
        spanishReview: "Cuidamos de las arañas",
        url: null,
        name: null,
        social: null
    }
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.THREE_REVIEWS:
            return {
                ...state,
                Reviews1: {
                    newPic: Math.floor(Math.random() * 2),
                    ...reviewAPI[action.payload[0]]
                },
                Reviews2: {
                    ...reviewAPI[action.payload[1]]
                },
                Reviews3: {
                    ...reviewAPI[action.payload[2]]
                }
            };
        default:
            return state;
    };
};

export default reviewReducer;
