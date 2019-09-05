import React from "react";
import { Link } from "react-router-dom";
import cssHeader from "./header.module.css";

const header = () => {
    return (
        <div className={ cssHeader.headerPosition}>
            <div className={ cssHeader.headerContainer }>
                <div className= { cssHeader.headerContainerText}>
                    <Link className = { cssHeader.textSpace } to="/services"> Services </Link>
                    <Link className = { cssHeader.textSpace } to="/services"> Appointments </Link>
                    <Link className = { cssHeader.textSpace } to="/contact"> Contact </Link>
                </div>
            </div>
            {/* <div className={ cssHeader.logoShadow}></div> */}
            <Link to="/"><img alt="VeriCure Logo" className={ cssHeader.VClogo } src="/logos/siteLogo.png"/></Link>
        </div>
    );
};

export default header;
