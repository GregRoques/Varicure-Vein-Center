import React from "react";
import Aux from "./Aux";
import { css } from "emotion";
import Footer from "./Footer";
import Modal from "./Modal";
import cssLayout from "../layout.module.css";

const Layout = props => {
    const currentPath = window.location.pathname === "/" ? "Home" : window.location.pathname.substring(1);
    const background = css`
        height:100vh;
        width: auto;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom right;
        background-image: url("/${currentPath}.jpg");
        margin: 0;
    `;
    const cssJoin = [background, cssLayout.backgroundIn];

    return (
        <div>
            <Modal />
            <div key={ currentPath } className={ cssJoin.join(" ")}>
                <Aux>
                    {props.children}
                </Aux>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
