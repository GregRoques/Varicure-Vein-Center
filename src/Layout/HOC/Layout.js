import React from "react";
import Aux from "./Aux";
import Header from "../HeaderFooter/Header";

const Layout = props => {
    const loginOmit = window.location.pathname === "/admin-login";
    return (
        <div>
            { !loginOmit ? <Header /> : null }
            <Aux>
                { props.children }
            </Aux>
        </div>
    );
};

export default Layout;
