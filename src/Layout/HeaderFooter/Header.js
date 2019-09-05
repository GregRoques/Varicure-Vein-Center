import React, { Component } from "react";
import { Link } from "react-router-dom";
import cssHeader from "./header.module.css";

class Header extends Component {
    state = {
        isScrolled: true,
        isResized: true
    };

    componentDidMount () {
        window.addEventListener("scroll", this.logoScroll);
        window.addEventListener("resize", this.logoResize);
    };

    logoScroll = () => {
        window.pageYOffset > 50 && window.location.pathname !== "/home" ? this.setState({ isScrolled: false }) : this.setState({ isScrolled: true });
    };

    logoResize = () => {
        window.innerWidth < 650 ? this.setState({ isResized: false }) : this.setState({ isResized: true });
    };

    render () {
        return (
            <div className={ cssHeader.headerPosition}>
                <div className={ cssHeader.headerContainer }>
                    <div className= { cssHeader.headerContainerText}>
                        { !this.state.isScrolled || !this.state.isResized ? <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VCsmall } src="/logos/smallLogo.png"/></Link> : null }
                        <Link className = { cssHeader.textSpace } to="/services"> Services </Link>
                        <Link className = { cssHeader.textSpace } to="/services"> Appointments </Link>
                        <Link className = { cssHeader.textSpace } to="/contact"> Contact </Link>
                    </div>
                </div>
                { this.state.isScrolled && this.state.isResized ? <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VClogo } src="/logos/siteLogo.png"/></Link> : null };
            </div>
        );
    }
};

export default Header;
