import React from "react";
import cssContact from "./contact.module.css";
import Top from "./Components/ContactTop";

const Contact = () => {
    return (
        <div className={ cssContact.body }>
            <div className={ cssContact.grid }>
                <Top />
            </div>
        </div>
    );
};

export default Contact;
