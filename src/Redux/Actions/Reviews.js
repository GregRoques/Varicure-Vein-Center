export const THREE_REVIEWS = "THREE_REVIEWS";

export const selectReviews = three => {
    return {
        type: "THREE_REVIEWS",
        payload: three
    };
};
