import axios from "axios";
const localStorage = window.localStorage;

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const authSuccess = (idToken, userId, email) => {
    return {
        type: AUTH_SUCCESS,
        idToken,
        userId,
        email
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
                const { userId, idToken, email } = response.data;

                const currentDate = new Date();
                const currentHour = currentDate.getHours();
                const currentMinute = currentDate.getMinutes();

                const logOutTime = (currentHour >= 12 ? (currentHour - 12) + 1 : currentHour + 1).toString() + ":" +
                ((currentMinute).toString()).padStart(2, "0") + (currentHour > 12 ? "pm" : "am");
                const expiresIn = 3600;
                const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

                localStorage.setItem("token", idToken);
                localStorage.setItem("email", email);
                localStorage.setItem("userId", userId);
                localStorage.setItem("expirationDate", expirationDate);
                localStorage.setItem("logOutTime", logOutTime);

                dispatch(authSuccess(idToken, userId, email));
                dispatch(checkAuthTimeOut(expiresIn));
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
                const email = localStorage.getItem("email");
                dispatch(authSuccess(token, userId, email));
                dispatch(checkAuthTimeOut((expirationDate.getTime() - (new Date().getTime())) / 1000));
            }
        }
    };
};
