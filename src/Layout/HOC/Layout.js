import React from "react";
import Aux from "./Aux";
import Footer from "./Footer";
import Header from "./Header";

const Layout = props => {
    return (
        <div>
            <Header />
            <Aux>
                {props.children}
            </Aux>
            <Footer />
        </div>
    );
};

export default Layout;
