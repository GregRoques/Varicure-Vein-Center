import React, { Component } from "react";
import cssMessage from "./message.module.css";

class Message extends Component {
    render () {
        return (
            <div className={ cssMessage.messageGrid }>
                <div className={ cssMessage.header }>Message</div>
            </div>
        );
    };
};

export default Message;
