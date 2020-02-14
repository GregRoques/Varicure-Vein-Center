
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
            <div className={ cssReviews.reviewButtonContainer }>
                <span >
                    <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FvaricureMiami%2Freviews%2F" target="_blank" rel="noopener noreferrer">
                        <img className={ cssReviews.fbReview } src="/reviewImages/fbReview.jpg" alt="Facebook Review"/>
                    </a>
                </span>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://g.page/VaricureMiami/review?rc" >
                        <img className={ cssReviews.gglReview } src="/reviewImages/gglReview.png" alt="Google Review"/>
                    </a>
                </span>
            </div>
            <hr className={ cssReviews.reviewSeperator } align="center" width="65%"/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Reviews);
