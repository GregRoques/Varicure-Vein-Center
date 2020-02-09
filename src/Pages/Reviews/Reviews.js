
import React from "react";
import { connect } from "react-redux";
import cssReviews from "./reviews.module.css";

const Reviews = props => {
    return (
        <div>
            <div className={cssReviews.thankYou}>
                Thank You!
            </div>
            <div className={cssReviews.thankYouParagraph}>
                We are very grateful to have you as a patient and hope your experience with us was pleasant and effective.
                Please consider writing a review using one of the links below and let future visitors know what to expect from their treatment.
            </div>
            <div className={cssReviews.shareHeader}>Write a Review</div>
            <div className={cssReviews.shareHeader}>Share with a Friend</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Reviews);

// https://g.page/VaricureMiami/review?rc

// http://www.facebook.com/varicureMiami/reviews