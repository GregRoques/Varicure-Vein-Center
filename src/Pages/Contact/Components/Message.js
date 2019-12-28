import React, { Component } from "react";
import { connect } from "react-redux";
import cssMessage from "./CSS/message.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { api } from "../../../Aux/apiLink";

class Message extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        checked: "",
        message: ""
    };

    onChangeHandler = e => {
        const { name, value } = e.target;
        this.setState(
            { [name]: value }
        );
    };

    onSubmitHanlder = async e => {
        e.preventDefault();
        const { name, email, phone, checked, message } = this.state;
        axios.post(`${api}/personalData`, {
            name,
            email,
            phone,
            checked,
            message
        })
            .then(res => {
                res.data === "Yes"
                    ? Swal.fire({
                        icon: "success",
                        title: "Hurray!",
                        text: "Your Email has been sent!"
                    }) : Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong. Please try again later!"
                    });
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong. Please try again later!"
                });
            });
        await this.setState({
            name: "",
            email: "",
            phone: "",
            checked: "",
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
                    <div className={ cssMessage.radioBoxes }>
                        <input className={ cssMessage.radio } type="checkbox" name="checked" value="True"/>
                        { this.props.isEnglish === "e" ? <span>Recieve occasional e-mail updates from Varicure Vein Center.</span> : <span>Reciba actualizaciones ocasionales por correo electrónico de VariCure.</span> }
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
