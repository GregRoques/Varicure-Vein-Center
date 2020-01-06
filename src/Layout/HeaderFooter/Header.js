import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import cssHeader from "./CSS/header.module.css";
import { setLanguage } from "../../Redux/Actions/Language";
import Modal from "./Modal";

class Header extends Component {
    state = {
        isScrolled: true,
        isResized: true,
        isOpen: false,
        isFadeOut: false,
        isServicesLogo: false
    };

    componentDidMount () {
        if (window.location.pathname.includes("/services")) {
            this.setLogo();
        };
        window.addEventListener("scroll", this.logoScroll);
        window.pageYOffset > 25 && window.location.pathname !== "/home" ? this.setState({ isScrolled: false }) : this.setState({ isScrolled: true });
        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620 ? this.setState({ isResized: false }) : this.setState({ isResized: true });
        this.props.history.listen(location => {
            this.setLogo();
        });
    };

    setLogo = () => {
        if (this.props.history.location.pathname.includes("services") && this.state.isServicesLogo === false) {
            this.setState({ isServicesLogo: true });
        }
        if (!this.props.history.location.pathname.includes("services") && this.state.isServicesLogo === true) {
            this.setState({ isServicesLogo: false });
        };
    }

    logoScroll = () => {
        window.pageYOffset > 25 && window.location.pathname !== "/home" ? this.setState({ isScrolled: false }) : this.setState({ isScrolled: true });
    };

    logoResize = () => {
        window.innerWidth < 620 ? this.setState({ isResized: false }) : this.setState({ isResized: true });
    };

    languageToggler = () => {
        this.props.isEnglish === "e" ? this.props.translate("s") : this.props.translate("e");
    }

    modalToggler = (props) => {
        if (!props) {
            const inverse = this.state.isOpen;
            this.setState({
                isOpen: !inverse,
                isFadeOut: false
            });
        } else {
            this.setState({ isFadeOut: true });
            setTimeout(() => {
                this.modalToggler();
            }, 1500);
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
                        { !this.state.isScrolled || !this.state.isResized || this.state.isOpen || this.state.isServicesLogo
                            ? <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VCsmall } src="/logos/smallLogo.png"/></Link>
                            : null
                        }
                        { !this.state.isResized || this.state.isOpen
                            ? <div className= { cssHeader.headerContainerSmallText}>
                                {!this.state.isOpen
                                    ? <img alt="hamburger" className={cssHeader.imageContain} src="/myImages/hamburger.png" onClick={() => this.modalToggler()}/>
                                    : <span className={cssHeader.imageContain} onClick={() => this.modalToggler("close")}>X</span>
                                }
                            </div>
                            : <div className= { cssHeader.headerContainerText}>
                                <Link className = { cssHeader.textSpace } to="/services/about">
                                    { this.props.isEnglish === "e" ? "Services" : "Servicios" }
                                </Link>
                                <Link className = { cssHeader.textSpace } to="/contact">
                                    { this.props.isEnglish === "e" ? "Contact" : "Contacto" }
                                </Link>
                                <span onClick={() => this.languageToggler()}>
                                    { this.props.isEnglish === "e" ? "Español" : "English" }
                                </span>
                            </div>
                        }
                    </div>
                    { this.state.isScrolled && this.state.isResized && !this.state.isOpen && !this.state.isServicesLogo ? <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VClogo } src="/logos/siteLogo.png"/></Link> : null }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
