import { combineReducers } from "redux";

import auth from "./Reducers/Auth";
import isEnglish from "./Reducers/Language";
import reviews from "./Reducers/Reviews";

const RootReducer = combineReducers({
    auth,
    isEnglish,
    reviews
});

export default RootReducer;
