import React, { Component, Fragment } from "react";
import cssServices from "./services.module.css";
import Staff from "./Components/Staff";
import FAQ from "./Components/FAQ";
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

    Options = ({ option, listNum }) => {
        return (
            <Fragment>
                <ul>
                    <li id={`options${listNum}`} onClick={() => this.info(option)}>
                        {this.state.selected === option ? <b>{option}</b> : option }
                    </li>
                </ul>
            </Fragment>
        );
    };

    Display = ({ option, component, displayNum }) => {
        return (
            <div id={`display${displayNum}`}>
                { this.state.selected === option ? component : null}
            </div>
        );
    };

    info = option => {
        this.setState({
            selected: option
        });
    };

    render () {
        const options = ["Treatments", "Results", "FAQ", "Staff"];
        const components = [<Treatments/>, <Results/>, <FAQ/>, <Staff/>];

        return (
            <div className={cssServices.body}>
                <div className={cssServices.grid}>
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
                    <div className={cssServices.quoteGrid}>
                        <div className={cssServices.quoteMark}/>
                        <div className={cssServices.quoteText}>
                        I missed the last bus
                        I'll take the next train
                        I try, but you see
                        It's hard to explain
                        I said the right things
                        But act the wrong way
                        I like it right here
                        But I cannot stay
                        I watched the TV
                        Forget what I'm told
                        Well I am too young
                        And they are too old
                        The joke is on you
                        This place is a zoo
                        You're right, it's true
                        </div>

                    </div>
                </div>
                <div className={cssServices.currentSelection}>
                    <div key= {this.state.selected } className={cssServices.fadeIn}>
                        { options.map((option, i) => {
                            return (
                                <this.Display
                                    option={ option }
                                    displayNum = { i }
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
