import React from "react";
import Aux from "./Aux";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import { css } from "emotion";

const Layout = props => {
    const contact = window.location.pathname === "/contact";
    const home = window.location.pathname === "/";
    if (!home) {
        var backgroundColor = css`background-color: rgb(19,163,153); color:white;`;
    };

    return (
        <div>
            <Header />
            <Aux>
                { props.children }
            </Aux>
            { contact ? null : <Footer background={backgroundColor}/> }
        </div>
    );
};

export default Layout;
