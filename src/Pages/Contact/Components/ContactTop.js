import React from "react";
import { connect } from "react-redux";
import cssTop from "./CSS/contactTop.module.css";

const ContactTop = props => {
    return (
        <div className={ cssTop.topImage }>
            <div className= {cssTop.topImageText }>
                { props.isEnglish === "e" ? "Contact" : "Informacion" }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(ContactTop);
