import React from "react";
import Aux from "./Aux";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";

const Layout = props => {
    const loginOmit = window.location.pathname === "/admin-login";
    const contact = window.location.pathname === "/contact";
    return (
        <div>
            { !loginOmit ? <Header /> : null }
            <Aux>
                { props.children }
            </Aux>
            { loginOmit || contact ? null : <Footer/> }
        </div>
    );
};

export default Layout;
