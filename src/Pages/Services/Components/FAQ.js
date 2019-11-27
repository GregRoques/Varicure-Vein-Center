import React, { Component } from "react";
import cssServices from "../services.module.css";
import axios from "axios";

class FAQ extends Component {
    state = {
        QnA: {}
    };

    componentDidMount () {
        this.getFAQ();
    };

    componentDidUpdate (prevProps) {
        if (prevProps.isEnglish !== this.props.isEnglish) {
            this.getFAQ();
        }
    }

    getFAQ = () => {
        const language = this.props.isEnglish;
        axios.get(`http://localhost:2000/faq/${language}`)
            .then(res => {
                this.setState({
                    QnA: [...res.data]
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    QnA: [{
                        question: "Loading Error",
                        answer: "Please try back again later."
                    }]
                });
            });
    };

    FAQs = props => {
        return (
            <div id={`FAQ${props.key}`}>
                <h3>{ props.question }</h3>
                <p>{props.answer}</p><br/>
            </div>
        );
    };

    render () {
        console.log(Object.keys(this.state.QnA));
        return (
            <div>
                <h1 className={ cssServices.compTitle }>FAQ</h1>
                <div>
                    { Object.keys(this.state.QnA).map((num, i) => {
                        const { question, answer } = this.state.QnA[num];
                        return (
                            <this.FAQs
                                key={ i }
                                question = { question }
                                answer = { answer }
                            />
                        );
                    }) }
                </div>
            </div>
        );
    }
};

export default FAQ;
