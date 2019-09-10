import React from "react";
import cssMessage from "./message.module.css";

const Message = () => {
    return (
        <div className={ cssMessage.messageGrid }>
            <div>
                <div className={ cssMessage.header }>Message</div>
                <div className={ cssMessage.intro }>Send a brief message to our lead physician and we will get back to you within two business days.</div>
                <form name="form1">
                    <input className={ cssMessage.shortForm } type="text" name="name" placeholder="NAME" required/> <br/>
                    <input className={ cssMessage.shortForm } type="text" name="email" placeholder="EMAIL" required/> <br/>
                    <input className={ cssMessage.shortForm } type="text" name="phone" placeholder="PHONE NUMBER"/> <br/>
                    <div className={ cssMessage.radioBoxes }>
                        Preferred Contact:
                        <input className={ cssMessage.radio } type="radio" name="contact" value="email"/> Email
                        <input className={ cssMessage.radio } type="radio" name="contact" value="Phone"/> Phone
                    </div>
                </form>
            </div>
            <div>
                <form name="form2">
                    <textarea className={ cssMessage.messageForm} type="text" name="message" placeholder="MESSAGE"/>
                    <button className={ cssMessage.submit } >SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default Message;
