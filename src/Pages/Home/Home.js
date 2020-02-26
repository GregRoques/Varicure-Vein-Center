import React, { Component } from "react";
import { css } from "emotion";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setLanguage } from "../../Redux/Actions/Language";
import { mapSelector } from "../../Functions/MapSelector";
import cssHome from "./home.module.css";
import parse from "html-react-parser";
import { homePageDescription } from "../../Aux/apiLink";

const isiPad = navigator.userAgent.match(/iPad/i) !== null;
const categories = ["About", "FAQ", "Results"];
const spanishCategories = ["Quienes somos", "Preguntas", "Fotos"];

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
        window.scrollTo(0, 0);
        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620 || (window.innerWidth > 767 && window.innerWidth < 1025 && (window.innerHeight > window.innerWidth) && isiPad)
            ? this.setState({ isResized: true }) 
            : this.setState({ isResized: false });
    };

    UserReview = ({ classType, isEnglish }) => {
        return (
            <div className={ classType }>
                "{ isEnglish === "e" ? this.props.Reviews.englishReview : this.props.Reviews.spanishReview}" {this.props.Reviews.url
                    ? <div className ={ cssHome.indent }>–<a href={this.props.Reviews.url} rel="noopener noreferrer" target="_blank">{this.props.Reviews.name} <img alt={this.props.Reviews.social} src={"/myImages/" + this.props.Reviews.social + ".png"} /></a> </div>
                    : <div className ={ cssHome.indent }>–{this.props.Reviews.name} { this.props.Reviews.social ? <img alt={this.props.Reviews.social} src={"/myImages/" + this.props.Reviews.social + ".png"} /> : null} </div> }
            </div>
        );
    };

    logoResize = () => {
        window.innerWidth < 620 || (window.innerWidth > 767 && window.innerWidth < 1025 && (window.innerHeight > window.innerWidth) && isiPad)
            ? this.setState({ isResized: true }) 
            : this.setState({ isResized: false });
    };

    displayCircles = ({ forwardAddress, titleIndex }) => {
        const nextPage = forwardAddress;
        const fadeAway = titleIndex;
        const backgroundCircle = css`
        background-image: url("/circles/${titleIndex}.jpg");`;
        const cssJoin = [backgroundCircle, cssHome.innerCircle];

        return (
            <div className={this.state.fadeOut[titleIndex] ? disappearingClass : null } >
                <div className={cssJoin.join(" ")} onClick={() => this.circleRedirect(nextPage, fadeAway) }>
                    <div className={cssHome.circleTextBackground} >{ this.props.isEnglish === "e" ? categories[titleIndex] : spanishCategories[titleIndex] }</div>
                </div>
            </div>
        );
    }

    practiceDescription = () => {
        return(
            <div> { this.props.isEnglish === "e" ? parse(homePageDescription["e"]["main"]) : parse(homePageDescription["s"]["main"]) }
                <div className={cssHome.quoteGrid}>
                    { this.props.isEnglish === "e" ? parse(homePageDescription["e"]["sub"]) : parse(homePageDescription["s"]["sub"]) }
                </div>
            </div>
        )
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
        background-image: url("/${this.props.Reviews.newPic}.jpg");`;
        const cssJoin = [backgroundImage, cssHome.backgroundIn, cssHome.backgroundStyle];
        return (
            <div>
                { this.state.isRedirect && <Redirect push to={this.state.redirectLink}/> }
                { !this.state.isResized
                    ? <div className={ cssHome.notMobile}>
                        <div className={ cssJoin.join(" ")}>
                            <div className={cssHome.userReviewDesktop}>
                                    <this.practiceDescription/>
                            </div>
                        </div>
                    </div>
                    : null}
                { this.state.isResized
                    ? <div className={ cssHome.mobile}>
                        <div className={ cssHome.blankSpace}/>
                            <img alt="VeriCure Logo" className={ cssHome.mobileMainLogo } src="/logos/siteLogo.png"/>
                            <div className={ cssHome.tinyAddress} title="Open Map" onClick ={() => mapSelector("www.google.com/maps/place/9595+N+Kendall+Dr,+Miami,+FL+33176/@25.6880755,-80.3506089,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9c73c861e9189:0xeb40d00fad0dec28!8m2!3d25.6880755!4d-80.3484202")} >
                                9595 N.Kendall Dr. • Miami
                            </div>
                            <div className={cssHome.missionStatement}>
                                <this.practiceDescription/>
                            </div>
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
                            <this.UserReview
                                classType={ cssHome.userReviewMobile}
                                isEnglish={ this.props.isEnglish }
                            />
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
        isEnglish: state.isEnglish.isEnglish,
        Reviews: state.reviews.Reviews1
    }
};

const mapDispatchToProps = dispatch => {
    return {
        translate: (inverse) => dispatch(setLanguage(inverse))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
