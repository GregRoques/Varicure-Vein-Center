import React from "react";
import Aux from "./Aux";
import Footer from "../HeaderFooter/Footer";
import Header from "../HeaderFooter/Header";

const Layout = props => {
    const currentRoute = window.location.pathname === "/contact";
    return (
        <div>
            <Header />
            <Aux>
                {props.children}
            </Aux>
            { !currentRoute ? <Footer /> : null }
        </div>
    );
};

export default Layout;
