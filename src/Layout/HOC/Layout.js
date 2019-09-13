import React from "react";
import Aux from "./Aux";
import Footer from "../HeaderFooter/Footer";
import Header from "../HeaderFooter/Header";

const Layout = props => {
    const loginOmit = window.location.pathname === "/admin-login";
    const contactOmit = window.location.pathname === "/contact";
    return (
        <div>
            { !loginOmit ? <Header /> : null }
            <Aux>
                { props.children }
            </Aux>
            { !contactOmit && !loginOmit ? <Footer /> : null }
        </div>
    );
};

export default (Layout);
