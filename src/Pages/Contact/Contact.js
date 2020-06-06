import React, { Component } from "react";
import { connect } from "react-redux";
import cssContact from "./contact.module.css";
import Top from "./Components/ContactTop";
import Hours from "./Components/Hours";
import Map from "./Components/Map";
import Message from "./Components/Message";
import InstagramWidget from "./Components/instaGallery";

const currYear = (new Date()).getFullYear();

class Contact extends Component {
    state = {
        isResized: true
    }

    componentDidMount () {
        window.scrollTo(0, 0);

        window.addEventListener("resize", this.logoResize);
        window.innerWidth < 620
            ? this.setState({ isResized: false })
            : this.setState({ isResized: true });
    }
    
    logoResize = () => {
        window.innerWidth < 620
            ? this.setState({ isResized: false })
            : this.setState({ isResized: true });
    };

    render () {
        return (
            <div className={ cssContact.body }>
                <div className={ cssContact.grid }>
                    {this.state.isResized ? <Top /> : null }
                    <div className={ cssContact.contactMagin}>
                        <Hours />
                        <hr/>
                         <Message />
                        <hr/> 
                    </div>
                    <Map />
                    <InstagramWidget/>
                    <div className={ cssContact.copyright}>
                        { this.props.isEnglish === "e"
                            ? <div>Copyright {`${String.fromCharCode(169)}`} { currYear } by <a href="https://www.gregroques.com" target="_blank" rel="noopener noreferrer">Greg Roques</a></div>
                            : <div>Derechos de Autor {`${String.fromCharCode(169)}`} { currYear } por <a href="https://www.gregroques.com" target="_blank" rel="noopener noreferrer">Greg Roques</a></div>
                        }
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish.isEnglish
    };
};

export default connect(mapStateToProps, null)(Contact);
