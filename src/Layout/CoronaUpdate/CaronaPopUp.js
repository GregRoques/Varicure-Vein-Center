import React, { Component } from "react";
import covidCSS from "./CaronaPopUp.module.css";

class CoronaUpdate extends Component {
    state = {
        isCaronaOpen: false
    }

    componentDidMount () {
        setTimeout(() => {
            this.coronaToggle(true);
            setTimeout(() => {
                this.coronaToggle(false);
            }, 10000);
        }, 1000);
    }

    coronaToggle = isToggled => {
        this.setState({
            isCaronaOpen: isToggled
        });
    }

    render () {
        return this.state.isCaronaOpen ? (
            <div className={covidCSS.frame}>
                <div className={covidCSS.closeButton} onClick={() => this.coronaToggle(false)}>X</div>
                <img className={covidCSS.picture} src="/corona.jpg"/>
            </div>
        ) : null;
    }
}

export default CoronaUpdate;
