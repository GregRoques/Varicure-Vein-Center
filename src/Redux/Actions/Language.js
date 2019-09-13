export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const setLanguage = translate => {
    return {
        type: "CHANGE_LANGUAGE",
        payload: translate
    };
};
