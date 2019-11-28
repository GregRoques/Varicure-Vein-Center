import React, { Component } from "react";
import { connect } from "react-redux";
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
                    <div className={ cssMessage.header }>
                        { this.props.isEnglish === "e" ? "Message" : "Mensaje" }
                    </div>
                    <div className={ cssMessage.intro }>
                        { this.props.isEnglish === "e"
                            ? "Send a brief message to our lead physician and we will get back to you within two business days."
                            : "Envíe un breve mensaje a nuestro médico principal y le responderemos dentro de dos días hábiles."
                        }
                    </div>
                    <input className={ cssMessage.shortForm } type="text" name="name" placeholder={ this.props.isEnglish === "e" ? "Full Name" : "Nombre Completo" } value={ this.state.name } required/> <br/>
                    <input className={ cssMessage.shortForm } type="email" name="email" placeholder={ this.props.isEnglish === "e" ? "Email" : "Correo Electrónico" } value={ this.state.email } required/> <br/>
                    <input className={ cssMessage.shortForm } type="tel" maxLength="14" name="phone" placeholder={ this.props.isEnglish === "e" ? "Phone (Optional)" : "Telefono (Opcion)" } value={ this.state.phone }/> <br/>
                    <select className={ cssMessage.shortForm } name="services" required>
                        <option value="" disabled selected >{ this.props.isEnglish === "e" ? "SERVICES" : "SERVICIOUS" }</option>
                        <option value="Kill Spider Man">Kill Spider Man</option>
                        <option value="laser hair removal">Laser Hair Removal</option>
                        <option value="cybernetic implants">Cybernetic Limbs </option>
                        <option value="laser eyes"> Laser Eyes </option>
                        <option value="General Service Questions">{ this.props.isEnglish === "e" ? "Other" : "Otra" }</option>
                    </select>
                    <div className={ cssMessage.radioBoxes }>
                        { this.props.isEnglish === "e" ? "Preferred Contact:" : "Contacto Preferido:" }
                        <input className={ cssMessage.radio } type="radio" name="contact" value="email" checked={this.state.contact === "email"}/> { this.props.isEnglish === "e" ? "Email" : "Correo Electrónico" }
                        <input className={ cssMessage.radio } type="radio" name="contact" value="phone"/> { this.props.isEnglish === "e" ? "Phone" : "Telefono" }
                    </div>
                </div>
                <div>
                    <textarea className={ cssMessage.messageForm} type="text" name="message" placeholder={ this.props.isEnglish === "e" ? "Message" : "Mensaje" } value={ this.state.message } required/>
                    <button type="submit" className={ cssMessage.submit }>{ this.props.isEnglish === "e" ? "SUBMIT" : "ENVIAR" }</button>
                </div>
            </form>
        );
    }
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Message);
