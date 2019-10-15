import React, { Component } from "react";
import axios from "axios";

class FAQ extends Component {
    state = {
        question: [],
        answer: []
    };

    componentDidMount () {
        this.getFAQ();
    };

    getFAQ = () => {
        const language = this.props.props ? "e" : "s";
        axios.get(`http://localhost:2000/faq/?${language}`)
            .then(res => {
                this.setState({
                    question: [...res.question],
                    answer: [...res.answer]
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    question: "Loading Error",
                    answer: "Please try back again later."
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
        console.log();
        return (
            <div>
                <h1>FAQ</h1>
                <div>
                    { (this.state).map((fact, i) => {
                        return (
                            <this.FAQs
                                key={ i }
                                question={ fact.question }
                                answer={ fact.answer }
                            />
                        );
                    }) }
                </div>
            </div>
        );
    }
};

export default FAQ;
