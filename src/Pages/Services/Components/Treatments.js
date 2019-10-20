import React, { Component, Fragment } from "react";
import axios from "axios";

class Treatments extends Component {
    state = {
        treament: [],
        WhatItIs: [],
        usedFor: [],
        toExpect: [],
        recovery: []
    };

    componentDidMount () {
        this.getTreatments();
    };

    getTreatments = () => {
        const language = this.props.isEnglish ? "e" : "s";
        axios.get(`http://localhost:2000/treatments/?${language}`)
            .then(res => {
                this.setState({
                    treament: [...res.treament],
                    WhatItIs: [...res.WhatItIs],
                    usedFor: [...res.usedFor],
                    toExpect: [...res.toExpect],
                    recovery: [...res.recovery]
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    treatmentList = props => {
        return (
            <div id={`treatment${props.key}`}>
                <h3>What is {props.treament}?</h3>
                <p>{props.whatItIs}</p><br/>

                <h3>What is {props.treament} used for?</h3>
                <p>{props.treament} is used to treat:</p>
                <Fragment>
                    <ul>
                        {(props.usedFor).map((condition, i) => {
                            return (
                                <li id={`condition${i}`}>{condition}</li>
                            );
                        })}
                    </ul>
                </Fragment><br/>

                <h3>What to expect during a {props.treatment}</h3>
                <p>{props.toExpect}</p><br/>

                <h3>What to expect after my {props.treatment}</h3>
                <p>{props.recovery}</p><br/>
            </div>
        );
    };

    render () {
        return (
            <div>
                <h1>Treatments</h1>
                <div>
                    { (Object.values(...this.state)).map((procedure, i) => {
                        return (
                            <this.treatmentList
                                key={ i }
                                treatment={ procedure.treatment }
                                description={ procedure.description }
                                application={ procedure.application }
                                during={ procedure.during }
                                recovery={ procedure.recovery }
                            />
                        );
                    }) }
                </div>
            </div>
        );
    }
};

export default Treatments;
