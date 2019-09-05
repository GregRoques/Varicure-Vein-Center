import React from "react";
import cssContact from "./contact.module.css";
import Top from "./Components/ContactTop";
import Hours from "./Components/Hours";

const Contact = () => {
    return (
        <div className={ cssContact.body }>
            <div className={ cssContact.grid }>
                <Top />
                <Hours />
                <div className={ cssContact.test }></div>
            </div>
        </div>
    );
};

export default Contact;
