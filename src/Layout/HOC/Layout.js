import React from "react";
import Aux from "./Aux";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import { css } from "emotion";

const Layout = props => {
    const loginOmit = window.location.pathname === "/admin-login";
    const contact = window.location.pathname === "/contact";
    const home = window.location.pathname === "/";
    let backgroundColor = css`background-color: rgb(255,255,255,0.55);`;
    if (home) {
        backgroundColor = css`background-color: rgb(255,255,255,0.55); color:black;`;
    } else {
        backgroundColor = css`background-color: rgb(19,163,153); color:white;`;
    };

    return (
        <div>
            { !loginOmit ? <Header /> : null }
            <Aux>
                { props.children }
            </Aux>
            { loginOmit || contact ? null : <Footer background={backgroundColor}/> }
        </div>
    );
};

export default Layout;
