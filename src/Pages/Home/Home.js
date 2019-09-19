import React from "react";
import { css } from "emotion";
import cssHome from "./home.module.css";
import Footer from "../../Layout/HeaderFooter/Footer";

const Home = props => {
    const UserReview = () => {
        return (
            <div className={ cssHome.userReview }>
                "{props.review}" {props.url && props.name ? <div className ={ cssHome.indent }>–<a href={props.url} rel="noopener noreferrer" target="_blank">{props.name} <img alt={props.social} src={"/icons/" + props.social + ".png"} /></a> </div> : null }
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
            <Footer/>
        </div>
    );
};

export default Home;
