import React, { Component } from "react";
import cssServices from "../services.module.css";
import axios from "axios";

class Treatments extends Component {
    state = {
        currTreatments: {}
    };

    componentDidMount () {
        this.getTreatments();
    };

    componentDidUpdate (prevProps) {
        if (prevProps.isEnglish !== this.props.isEnglish) {
            this.getTreatments();
        }
    }

    getTreatments = () => {
        const language = this.props.isEnglish;
        axios.get(`http://localhost:2000/treatments/${language}`)
            .then(res => {
                this.setState({
                    currTreatments: [...res.data]
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    treatmentList = props => {
        let usedForArray = [];
        props.usedFor.includes(",") ? usedForArray = props.usedFor.split(",") : usedForArray = [props.usedFor];
        return (
            <div id={`treatment${props.key}`}>
                <h3>What is {props.treatment}?</h3>
                <p>{props.whatItIs}</p><br/>

                <h3>What is {props.treatment} used to treat?</h3>
                <p>
                    {(usedForArray).map((condition, i) => {
                        return (
                            <span id={`condition${i}`}>• {condition}</span>
                        );
                    })}
                </p><br/>
                <h3>What to expect during a {props.treatment}?</h3>
                <p>{props.toExpect}</p><br/>

                <h3>What to expect after my {props.treatment}?</h3>
                <p>{props.recovery}</p>
                <hr/><br/>
            </div>
        );
    };

    render () {
        return (
            <div>
                <h1 className={ cssServices.compTitle }>Treatments</h1>
                <div>
                    { Object.keys(this.state.currTreatments).map((num, i) => {
                        const { treatment, whatItIs, usedFor, toExpect, recovery } = this.state.currTreatments[num];
                        return (
                            <this.treatmentList
                                key = { i }
                                treatment = { treatment }
                                whatItIs = { whatItIs }
                                usedFor = { usedFor }
                                toExpect = { toExpect }
                                recovery = { recovery }
                            />
                        );
                    }) }
                </div>
            </div>
        );
    }
};

export default Treatments;
