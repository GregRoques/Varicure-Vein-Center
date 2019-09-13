import axios from "axios";
const localStorage = window.localStorage;

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const authSuccess = (idToken, userId) => {
    return {
        type: AUTH_SUCCESS,
        idToken,
        userId
    };
};

export const authFail = error => {
    return {
        type: AUTH_FAIL,
        error
    };
};

export const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("logOutTime");

    return {
        type: AUTH_LOGOUT
    };
};

export const checkAuthTimeOut = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {
        axios.post("http://localhost:2000/login", {
            email,
            password
        })
            .then(response => {
                var currentDate = new Date();
                var currentHour = currentDate.getHours();
                var currentMinute = currentDate.getMinutes();

                const logOutTime = (currentHour >= 12 ? (currentHour - 12) + 1 : currentHour + 1).toString() + ":" +
                ((currentMinute).toString()).padStart(2, "0") + (currentHour > 12 ? "pm" : "am");

                const expirationDate = new Date(new Date().getTime() + 3600000);
                localStorage.setItem("token", response.data.idToken);
                localStorage.setItem("userId", response.data.localId);
                localStorage.setItem("expirationDate", expirationDate);
                localStorage.setItem("logOutTime", logOutTime);

                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeOut(response.data.expiresIn));
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error.message));
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch(logOut());
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"));
            if (expirationDate <= new Date()) {
                dispatch(logOut());
            } else {
                const userId = localStorage.getItem("userId");
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeOut((expirationDate.getTime() - (new Date().getTime())) / 1000));
            }
        }
    };
};
