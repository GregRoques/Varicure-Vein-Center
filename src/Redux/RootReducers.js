import { combineReducers } from "redux";

import isEnglish from "./Reducers/Language";
import reviews from "./Reducers/Reviews";

const RootReducer = combineReducers({
    isEnglish,
    reviews
});

export default RootReducer;
