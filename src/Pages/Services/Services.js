import React, { Component, Fragment } from "react";
import cssServices from "./services.module.css";
import Staff from "./Components/Staff";
import Treatments from "./Components/Treatments";
import Results from "./Components/Results";

class Services extends Component {
    state = {
        selected: "Treatments"
    }

    selected = props => {
        this.setState({
            selected: props
        });
    }

    Options = ({ option }) => {
        return (
            <Fragment>
                <ul>
                    <li onClick={option => this.display(option)}>
                        {this.state.selected === option ? `<b>${option}</b>` : option }
                    </li>
                </ul>
            </Fragment>
        );
    };

    Display = ({ option, component }) => {
        return (
            <div>
                { this.state.selected === option ? component : null}
            </div>
        );
    };

    render () {
        const options = ["Treatments", "Results", "Staff"];
        const components = [<Treatments/>, <Results/>, <Staff/>];

        return (
            <div className={cssServices.body}>
                <div className={cssServices.grid}>
                    <div className={cssServices.fadeIn}>
                        { options.map((option, i) => {
                            return (
                                <this.Options
                                    option={ option }
                                    key={ i }
                                />
                            );
                        })}
                    </div>
                    <div key= {this.state.selected } className={cssServices.fadeIn}>
                        { options.map((option, i) => {
                            return (
                                <this.Display
                                    option={ option }
                                    key={ i }
                                    component = { components[i] }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };
};

export default Services;
