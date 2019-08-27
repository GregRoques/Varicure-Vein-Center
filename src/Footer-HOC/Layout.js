import React from "react";
import Aux from "../Aux";
import Footer from "../../Footer/Footer"

const Layout = props => (
    <div>
        <Aux>
            {props.children}
        </Aux>

    </div>
);

export default Layout;
