import { combineReducers } from "redux";

import auth from "./Reducers/Auth";
import isEnglish from "./Reducers/Language";

const RootReducer = combineReducers({
    auth,
    isEnglish
});

export default RootReducer;
