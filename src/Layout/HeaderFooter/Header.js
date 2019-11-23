import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import cssHeader from "./CSS/header.module.css";
import "./CSS/hamburgers.css";
import { setLanguage } from "../../Redux/Actions/Language";
import Modal from "./Modal";

class Header extends Component {
    state = {
        isScrolled: true,
        isResized: true,
        isOpen: false,
        isFadeOut: false
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

    languageToggler = () => {
        this.props.isEnglish === "e" ? this.props.translate("s") : this.props.translate("e");
    }

    modalToggler = props => {
        if (!props) {
            const inverse = this.state.isOpen;
            this.setState({ isOpen: !inverse });
        } else {
            // figure this out tomorrow
        }
    }

    render () {
        return (
            <div>
                <Modal
                    isOpen={ this.state.isOpen }
                    close={ this.modalToggler }
                    isEnglish = { this.props.isEnglish }
                    languageToggle={ this.languageToggler }
                    isFadeOut = {this.state.isFadeOut}
                />
                <div className={ cssHeader.headerPosition}>
                    <div className={ cssHeader.headerContainer }>
                        { !this.state.isScrolled || !this.state.isResized
                            ? <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VCsmall } src="/logos/smallLogo.png"/></Link>
                            : null
                        }
                        { !this.state.isResized
                            ? <div className= { cssHeader.headerContainerSmallText}>
                                <img alt="hamburger" src="/icons/hamburger.png" onClick={() => this.modalToggler}/>
                            </div>
                            : <div className= { cssHeader.headerContainerText}>
                                <Link className = { cssHeader.textSpace } to="/services">
                                    { this.props.isEnglish ? "Services" : "Servicios" }
                                </Link>
                                <Link className = { cssHeader.textSpace } to="/contact">
                                    { this.props.isEnglish ? "Contact" : "Contacto" }
                                </Link>
                                <span onClick={() => this.languageToggler()}>
                                    { this.props.isEnglish === "e" ? "English" : "Español" }
                                </span>
                            </div>
                        }
                    </div>
                    { this.state.isScrolled && this.state.isResized ? <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VClogo } src="/logos/siteLogo.png"/></Link> : null }
                </div>
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
