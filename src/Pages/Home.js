import React from "react";
import { css } from "emotion";
import cssHome from "./home.module.css";

const Home = props => {
    const UserReview = () => {
        return props.review && props.name ? (
            <div className={ cssHome.userReview }>
                "{props.review}" <br/> – {props.url ? <a href={props.url} rel="noopener noreferrer" target="_blank">{props.name}</a> : props.name }
            </div>
        ) : (
            <div className={ cssHome.userReview }>
                We Take Care of the Spiders
            </div>
        );
    };

    const backgroundImage = css`
        background-image: url("/${props.homePagePic}.jpg");
    `;
    const cssJoin = [backgroundImage, cssHome.backgroundIn, cssHome.backgroundStyle];
    return (
        <div className={ cssJoin.join(" ")}>
            <UserReview />
        </div>
    );
};

export default Home;
