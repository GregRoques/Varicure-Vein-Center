import React from "react";
import Aux from "./Aux";
import Footer from "./Footer";
import Header from "./Header";

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
