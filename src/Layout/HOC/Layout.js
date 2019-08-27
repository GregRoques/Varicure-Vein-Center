import React from "react";
import Aux from "./Aux";
import { css } from "emotion";
import Footer from "./Footer";
import Modal from "./Modal";
import cssLayout from "../layout.module.css";

const Layout = props => {
    const background = css`
        height:100vh;
        width: auto;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom right;
        background-image: url("/1.jpg");
        margin: 0;
        
    `;

    const cssJoin = [background, cssLayout.fadeIn];
    return (
        <div className={ cssJoin.join(" ")}>
            <Aux>
                <Modal />
                {props.children}
                <Footer />
            </Aux>
        </div>
    );
};

export default Layout;
