import React, { Component } from "react";
import axios from "axios";
import cssServices from "../services.module.css";

class Treatments extends Component {
    state = {
        QnA: {}
    };

    componentDidMount () {
        this.getTreatment();
        window.scrollTo(0, 0);
    };

    componentDidUpdate (prevProps) {
        if (prevProps.isEnglish !== this.props.isEnglish) {
            this.getTreatment();
        }
    }

    getTreatment = () => {
        const language = this.props.isEnglish;
        axios.get(`http://localhost:2000/treatments/${language}`)
            .then(res => {
                this.setState({
                    QnA: [...res.data]
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    QnA: [{
                        question: "Loading Error – Please try back again later.\n",
                        answer: "Error de Carga – Por favor vuelva más tarde."
                    }]
                });
            });
    };

    Treatments = props => {
        return (
            <div id={`Treatments${props.key}`}>
                <h3>{ props.question }</h3>
                <p>{props.answer}</p><br/>
            </div>
        );
    };

    render () {
        console.log(Object.keys(this.state.QnA));
        return (
            <div>
                <div>
                    { Object.keys(this.state.QnA).map((num, i) => {
                        const { question, answer } = this.state.QnA[num];
                        return (
                            <div>
                                <this.Treatments
                                    key={ i }
                                    question = { question }
                                    answer = { answer }
                                />
                                { i !== this.state.QnA.length - 1 ? <hr/> : <div className={ cssServices.qnaEnd }/>}
                                <br/>
                            </div>
                        );
                    }) }
                </div>
            </div>
        );
    }
};

export default Treatments;
