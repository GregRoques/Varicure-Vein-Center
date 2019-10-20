import React, { Component } from "react";
import cssServices from "./services.module.css";

import Staff from "./Components/Staff";
import FAQ from "./Components/FAQ";
import Treatments from "./Components/Treatments";
import Results from "./Components/Results";

class Services extends Component {
    state = {
        selected: "Staff"
    }

    Options = ({ option, listNum }) => {
        return (
            <span key={ listNum } onClick={() => this.info(option)}>
                { this.state.selected === option ? <b>{ option }</b> : option }
            </span>
        );
    };

    Display = ({ option }) => {
        const components = [<Treatments isEnglish={this.props[0]}/>, <Results isEnglish={this.props[0]}/>, <FAQ isEnglish={this.props[0]}/>, <Staff isEnglish={this.props[0]}/>];
        return components[option];
    };

    info = option => {
        this.setState({
            selected: option
        });
    };

    render () {
        const options = ["Treatments", "Results", "FAQ", "Staff"];
        return (
            <div className={cssServices.body}>
                <div className={cssServices.selector}>
                    { options.map((option, i) => {
                        return (
                            <this.Options
                                option={ option }
                                listNum={ i }
                            />
                        );
                    })}
                </div>
                <div className={cssServices.currentSelection}>
                    <div key= {this.state.selected } className={cssServices.fadeIn}>
                        <this.Display
                            option={ options.indexOf(this.state.selected) }
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default Services;
