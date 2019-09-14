import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import cssHeader from "./CSS/header.module.css";
import "./CSS/hamburgers.css";
import { setLanguage } from "../../Redux/Actions/Language";

class Header extends Component {
    state = {
        isScrolled: true,
        isResized: true
    };

    componentDidMount () {
        window.addEventListener("scroll", this.logoScroll);
        window.pageYOffset > 25 && window.location.pathname !== "/home" ? this.setState({ isScrolled: false }) : this.setState({ isScrolled: true });
        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620 ? this.setState({ isResized: false }) : this.setState({ isResized: true });
    };

    logoScroll = () => {
        window.pageYOffset > 25 && window.location.pathname !== "/home" ? this.setState({ isScrolled: false }) : this.setState({ isScrolled: true });
    };

    logoResize = () => {
        window.innerWidth < 620 ? this.setState({ isResized: false }) : this.setState({ isResized: true });
    };

    render () {
        return (
            <div className={ cssHeader.headerPosition}>
                <div className={ cssHeader.headerContainer }>
                    { !this.state.isScrolled || !this.state.isResized
                        ? <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VCsmall } src="/logos/smallLogo.png"/></Link>
                        : null
                    }
                    { !this.state.isResized
                        ? <div className= { cssHeader.headerContainerSmallText}>
                            <button className="hamburger hamburger--spin" type="button">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                        : <div className= { cssHeader.headerContainerText}>
                            <Link className = { cssHeader.textSpace } to="/services">
                                { this.props.isEnglish ? "Services" : "Servicios" }
                            </Link>
                            <Link className = { cssHeader.textSpace } to="/contact">
                                { this.props.isEnglish ? "Contact" : "Contacto" }
                            </Link>
                            <span onClick={() => this.props.translate(!this.props.isEnglish)}>
                                { this.props.isEnglish ? "Español" : "English" }
                            </span>
                        </div>
                    }
                </div>
                { this.state.isScrolled && this.state.isResized ? <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VClogo } src="/logos/siteLogo.png"/></Link> : null }
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
