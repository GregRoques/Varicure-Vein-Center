import React, { Component } from "react";
import { css } from "emotion";
import cssHome from "./home.module.css";

class Home extends Component {
    UserReview = () => {
        return this.props.review && this.props.name ? (
            <div className={ cssHome.userReview }>
                "{this.props.review}" <br/> – {this.props.url ? <a href={this.props.url} rel="noopener noreferrer" target="_blank">{this.props.name}</a> : this.props.name }
            </div>
        ) : (
            <div className={ cssHome.userReview }>
                We Take Care of the Spiders
            </div>
        );
    }

    render () {
        const backgroundImage = css`
            background-image: url("/home.jpg");
        `;
        const cssJoin = [backgroundImage, cssHome.backgroundIn, cssHome.backgroundStyle];
        return (
            <div className={ cssJoin.join(" ")}>
                <this.UserReview />
            </div>
        );
    }
};

export default Home;
