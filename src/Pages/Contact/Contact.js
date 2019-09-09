import React from "react";
import cssContact from "./contact.module.css";
import Top from "./Components/ContactTop";
import Hours from "./Components/Hours";
import Map from "./Components/Map";
import Message from "./Components/Message";

const Contact = () => {
    return (
        <div className={ cssContact.body }>
            <div className={ cssContact.grid }>
                <Top />
                <div className={ cssContact.contactMagin}>
                    <Hours />
                    <hr/>
                    <Message />
                    <hr/>
                </div>
                <Map />
                <div className={ cssContact.copyright}>
                    Copyright {`${String.fromCharCode(169)}`} 2019 by <a href="https://www.gregroques.com" target="_blank" rel="noopener noreferrer">Greg Roques</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
