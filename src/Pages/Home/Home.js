import React, { Component } from "react";
import { css } from "emotion";
import cssHome from "./home.module.css";

const categories = ["About", "FAQ", "Results"];

class Home extends Component {
    state = {
        isResized: false
    }

    componentDidMount () {
        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620 ? this.setState({ isResized: true }) : this.setState({ isResized: false });
    };

    UserReview = ({ classType }) => {
        return (
            <div className={ classType }>
                "{this.props.review}" {this.props.url
                    ? <div className ={ cssHome.indent }>–<a href={this.props.url} rel="noopener noreferrer" target="_blank">{this.props.name} <img alt={this.props.social} src={"/icons/" + this.props.social + ".png"} /></a> </div>
                    : <div className ={ cssHome.indent }>–{this.props.name} { this.props.social ? <img alt={this.props.social} src={"/icons/" + this.props.social + ".png"} /> : null} </div> }
            </div>
        );
    };

    logoResize = () => {
        window.innerWidth < 620 ? this.setState({ isResized: true }) : this.setState({ isResized: false });
    };

    displayCircles = ({ circles }) => {
        return (
            <div className={cssHome.innerCircle}>
                {circles}
            </div>
        );
    }

    render () {
        const backgroundImage = css`
        background-image: url("/${this.props.homePagePic}.jpg");`;
        const cssJoin = [backgroundImage, cssHome.backgroundIn, cssHome.backgroundStyle];

        return (
            <div>
                { !this.state.isResized
                    ? <div className={ cssHome.notMobile}>
                        <div className={ cssJoin.join(" ")}>
                            <this.UserReview
                                classType={ cssHome.userReviewDesktop}
                            />
                        </div>
                    </div>
                    : null}
                { this.state.isResized
                    ? <div className={ cssHome.mobile}>
                        <div className={ cssHome.blankSpace}/>
                        <this.UserReview
                            classType={ cssHome.userReviewMobile}
                        />
                        <div className={cssHome.mobileHomeCircleContainer}>
                            <div className={cssHome.circlesJustify}>
                                {categories.map(aCircle => {
                                    return (
                                        <this.displayCircles
                                            circles= { aCircle }
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    : null}
                <div className={cssHome.mainPageBottom}/>
            </div>
        );
    }
};

export default Home;
