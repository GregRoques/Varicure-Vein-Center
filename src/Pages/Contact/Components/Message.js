import React, { Component } from "react";
import cssMessage from "./message.module.css";

class Message extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        contact: "email",
        message: ""
    };

    onChangeHandler = e => {
        const { name, value } = e.target;
        this.setState(
            { [name]: value }
        );
    };

    onSubmitHanlder = e => {
        e.preventDefault();
    };

    render () {
        return (
            <div className={ cssMessage.messageGrid }>
                <div>
                    <div className={ cssMessage.header }>Message</div>
                    <div className={ cssMessage.intro }>Send a brief message to our lead physician and we will get back to you within two business days.</div>
                    <form onChange={this.onChangeHandler}>
                        <input className={ cssMessage.shortForm } type="text" name="name" placeholder="NAME" defaultValue={ this.state.name } /> <br/>
                        <input className={ cssMessage.shortForm } type="email" name="email" placeholder="EMAIL" defaultValue={ this.state.email } /> <br/>
                        <input className={ cssMessage.shortForm } type="number" name="phone" placeholder="PHONE NUMBER" defaultValue={ this.state.phone } /> <br/>
                        <div className={ cssMessage.radioBoxes }>
                            Preferred Contact:
                            <input className={ cssMessage.radio } type="radio" name="contact" value="email" defaultChecked={this.state.contact === "email"}/> Email
                            <input className={ cssMessage.radio } type="radio" name="contact" value="phone"/> Phone
                        </div>
                    </form>
                </div>
                <div>
                    <form onChange={this.onChangeHandler}>
                        <textarea className={ cssMessage.messageForm} type="text" name="message" placeholder="MESSAGE" defaultValue={ this.state.message }/>
                        <button className={ cssMessage.submit } onClick= {e => this.onSubmitHanlder(e) }>SUBMIT</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default Message;
