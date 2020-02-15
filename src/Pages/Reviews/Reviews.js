
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
                Please write us a review using one of the links below and let future visitors know what you thought of your treatment.
            </div>
            <div>
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
            <div className={cssReviews.withFriendsHeader}>
                Share with Friends
            </div>
            <div>
                <span>
                    <a href="mailto:info@varicureveincenter.com?subject=Check%20Out%20Varicure%20Vein%20Center%20|%20Varicure%20and%20Spider%20Vein%20Specialists&body=\n\nwww.VaricureVeinCenter.com">
                        <img className={ cssReviews.reviewSocialEmail} src="/reviewImages/emailShare.png" alt="Email Icon"/>
                    </a>
                </span>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https://www.varicureveincenter.com">
                        <img className={ cssReviews.reviewSocialFacebook } src="/reviewImages/fbShare.png" alt="Facebook Logo"/>
                    </a>
                </span>
                <span>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/home?status=https://www.varicureveincenter.com">
                        <img className={ cssReviews.reviewSocialTwitter} src="/reviewImages/twitterShare.png" alt="Twitter Logo"/>
                    </a>
                </span>
            </div>
            <div className={cssReviews.mobileSpace}><p> blank </p></div>
            <div className={cssReviews.mainPageBottom}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Reviews);
