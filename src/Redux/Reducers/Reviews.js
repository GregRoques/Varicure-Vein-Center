import * as actionType from "../Actions/Reviews";
import { reviewAPI } from "../../Aux/apiLink";

const number = Math.floor(Math.random() * Object.keys(reviewAPI).length);
const number2 = number + 1 < Object.keys(reviewAPI).length ? number + 1 : 0;
const number3 = number - 1 >= 0 ? number - 1 : (Object.keys(reviewAPI).length) - 1;
const threeNumbers = [number, number2, number3];

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
                    ...reviewAPI[threeNumbers[0]]
                },
                Reviews2: {
                    ...reviewAPI[threeNumbers[1]]
                },
                Reviews3: {
                    ...reviewAPI[threeNumbers[2]]
                }
            };
        default:
            return state;
    };
};

export default reviewReducer;
