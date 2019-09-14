import React, { Component } from "react";
import cssMessage from "./CSS/message.module.css";
import axios from "axios";

class Message extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        contact: "email",
        message: "",
        services: ""
    };

    onChangeHandler = e => {
        const { name, value } = e.target;
        this.setState(
            { [name]: value }
        );
    };

    onSubmitHanlder = async e => {
        e.preventDefault();
        const { name, email, phone, contact, message, services } = this.state;
        axios.post("http://localhost:2000/personalData", {
            name,
            email,
            phone,
            contact,
            message,
            services
        })
            .then(res => {
                res.data === "Yes" ? console.log("Your Email Has Been Sent!") : console.log("Something went wrong. Please try again later!"); // add module function here
            })
            .catch(() => {
                console.log("Something went wrong. Please try again later!"); // add module function here
            });
        await this.setState({
            name: "",
            email: "",
            phone: "",
            contact: "email",
            message: ""
        });
    };

    render () {
        return (
            <form className={ cssMessage.messageGrid } onChange={ this.onChangeHandler } onSubmit={e => this.onSubmitHanlder(e)} >
                <div>
                    <div className={ cssMessage.header }>Message</div>
                    <div className={ cssMessage.intro }>Send a brief message to our lead physician and we will get back to you within two business days.</div>
                    <input className={ cssMessage.shortForm } type="text" name="name" placeholder="FULL NAME" value={ this.state.name } required/> <br/>
                    <input className={ cssMessage.shortForm } type="email" name="email" placeholder="EMAIL" value={ this.state.email } required/> <br/>
                    <input className={ cssMessage.shortForm } type="tel" maxLength="14" name="phone" placeholder="PHONE (Optional)" value={ this.state.phone }/> <br/>
                    <select className={ cssMessage.shortForm } name="services" required>
                        <option value="" disabled selected >SERVICE LINE</option>
                        <option value="Kill Spider Man">Kill Spider Man</option>
                        <option value="laser hair removal">Laser Hair Removal</option>
                        <option value="cybernetic implants">Cybernetic Limbs </option>
                        <option value="laser eyes"> Laser Eyes </option>
                        <option value="General Service Questions"> General Questions/Other </option>
                    </select>
                    <div className={ cssMessage.radioBoxes }>
                        Preferred Contact:
                        <input className={ cssMessage.radio } type="radio" name="contact" value="email" checked={this.state.contact === "email"}/> Email
                        <input className={ cssMessage.radio } type="radio" name="contact" value="phone"/> Phone
                    </div>
                </div>
                <div>
                    <textarea className={ cssMessage.messageForm} type="text" name="message" placeholder="MESSAGE" value={ this.state.message } required/>
                    <button type="submit" className={ cssMessage.submit }>SUBMIT</button>
                </div>
            </form>
        );
    }
};

export default Message;
