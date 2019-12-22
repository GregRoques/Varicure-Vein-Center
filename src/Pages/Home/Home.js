import React, { Component } from "react";
import { css } from "emotion";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setLanguage } from "../../Redux/Actions/Language";
import cssHome from "./home.module.css";

const categories = ["About", "FAQ", "Results"];
const spanishCategories = ["Acerca", "FAQ", "Resultados"];

const dayNum = (new Date()).getDay();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dias = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
const hoy = dias[dayNum];
const today = days[dayNum];
let time;

if (dayNum === 5) {
    time = "9a – 3p";
} else if (dayNum === 6 || dayNum === 0) {
    time = "Closed";
} else {
    time = "8a – 6p";
};

const disappearingClass = css`
    opacity: 0;
    transition: 1s ;
    transform: scale(0);
`;

class Home extends Component {
    state = {
        isResized: false,
        fadeOut: [false, false, false],
        isRedirect: false,
        redirectLink: ""
    }

    componentDidMount () {
        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620 ? this.setState({ isResized: true }) : this.setState({ isResized: false });
    };

    UserReview = ({ classType, isEnglish }) => {
        return (
            <div className={ classType }>
                "{ isEnglish === "e" ? this.props.englishReview : this.props.spanishReview}" {this.props.url
                    ? <div className ={ cssHome.indent }>–<a href={this.props.url} rel="noopener noreferrer" target="_blank">{this.props.name} <img alt={this.props.social} src={"/icons/" + this.props.social + ".png"} /></a> </div>
                    : <div className ={ cssHome.indent }>–{this.props.name} { this.props.social ? <img alt={this.props.social} src={"/icons/" + this.props.social + ".png"} /> : null} </div> }
            </div>
        );
    };

    logoResize = () => {
        window.innerWidth < 620 ? this.setState({ isResized: true }) : this.setState({ isResized: false });
    };

    displayCircles = ({ forwardAddress, titleIndex }) => {
        const nextPage = forwardAddress;
        const fadeAway = titleIndex;
        const backgroundCircle = css`
        background-image: url("/circles/${titleIndex}.jpg");`;
        const cssJoin = [backgroundCircle, cssHome.innerCircle];
        return (
            <div className={this.state.fadeOut[titleIndex] ? disappearingClass : null }>
                <div className={cssJoin.join(" ")}>
                    <div className={cssHome.circleTextBackground} onClick={() => this.circleRedirect(nextPage, fadeAway) }>{ this.props.isEnglish === "e" ? categories[titleIndex] : spanishCategories[titleIndex] }</div>
                </div>
            </div>
        );
    }

    circleRedirect = (nextPage, fadeAway) => {
        const array = this.state.fadeOut;
        array[fadeAway] = true;
        this.setState({
            fadeOut: array
        });
        setTimeout(() => {
            this.setState({
                isRedirect: true,
                redirectLink: `/services/${nextPage}`
            });
        }, 800);
    }

    languageToggler = () => {
        this.props.isEnglish === "e" ? this.props.translate("s") : this.props.translate("e");
    }

    render () {
        const backgroundImage = css`
        background-image: url("/${this.props.homePagePic}.jpg");`;
        const cssJoin = [backgroundImage, cssHome.backgroundIn, cssHome.backgroundStyle];

        return (
            <div>
                { this.state.isRedirect && <Redirect push to={this.state.redirectLink}/> }
                { !this.state.isResized
                    ? <div className={ cssHome.notMobile}>
                        <div className={ cssJoin.join(" ")}>
                            <this.UserReview
                                classType={ cssHome.userReviewDesktop}
                                isEnglish={ this.props.isEnglish }
                            />
                        </div>
                    </div>
                    : null}
                { this.state.isResized
                    ? <div className={ cssHome.mobile}>
                        <div className={ cssHome.blankSpace}/>
                        <this.UserReview
                            classType={ cssHome.userReviewMobile}
                            isEnglish={ this.props.isEnglish }
                        />
                        <div className={cssHome.mobileHomeCircleContainer}>
                            <div className={cssHome.circlesJustify}>
                                {categories.map((aCircle, i) => {
                                    return (
                                        <this.displayCircles
                                            forwardAddress= { aCircle.toLowerCase() }
                                            titleIndex={ i }
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <hr className={cssHome.seperator}/>
                        <div className={cssHome.todaysHours}>
                            { this.props.isEnglish === "e"
                                ? <span>{ today }: <span className={ time === "Closed" ? cssHome.closed : null }>{ time }</span></span>
                                : <span>{ hoy }: <span className={ time === "Closed" ? cssHome.closed : null }>{ this.props.isEnglish === "s" && time === "Closed" ? "Cerrado" : time }</span></span>
                            }
                        </div>
                        <hr className={cssHome.seperator}/>
                        <div>
                            <button className={cssHome.translateButton} onClick={() => this.languageToggler()}>{ this.props.isEnglish === "e" ? "¿Español?" : "English" }</button>
                        </div>
                    </div>
                    : null}
                <div className={cssHome.mainPageBottom}/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        translate: (inverse) => dispatch(setLanguage(inverse))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
