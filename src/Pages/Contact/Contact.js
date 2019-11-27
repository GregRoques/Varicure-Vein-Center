import React from "react";
import { connect } from "react-redux";
import cssContact from "./contact.module.css";
import Top from "./Components/ContactTop";
import Hours from "./Components/Hours";
import Map from "./Components/Map";
import Message from "./Components/Message";

const Contact = props => {
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
                    { props.isEnglish === "e"
                        ? <div>Copyright {`${String.fromCharCode(169)}`} 2019 by <a href="https://www.gregroques.com" target="_blank" rel="noopener noreferrer">Greg Roques</a></div>
                        : <div>Derechos de Autor {`${String.fromCharCode(169)}`} 2019 por <a href="https://www.gregroques.com" target="_blank" rel="noopener noreferrer">Greg Roques</a></div>
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Contact);
