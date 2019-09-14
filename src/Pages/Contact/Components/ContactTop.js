import React from "react";
import cssTop from "./CSS/contactTop.module.css";

const ContactTop = () => {
    return (
        <div className={ cssTop.topImage }>
            <div className= {cssTop.topImageText }>Contact</div>
        </div>
    );
};

export default ContactTop;
